import assert from 'node:assert/strict';
import fs from 'node:fs';
import { calculateWins, randomSymbol } from '../src/game-standalone/math';
import { SYMBOL_WEIGHTS_BASE, SYMBOL_WEIGHTS_FS, SYMBOL_PAYTABLE, MULTIPLIER_DISTRIBUTIONS, CENTER_WILD_PROBABILITY, MIN_SCATTERS } from '../src/game-standalone/mathConfig';
import { SYMBOL_KEYS, type SymbolKey } from '../src/game-standalone/types';

// The runtime calculator logs every path; suppress only logs in this offline audit.
console.log = () => {};
function rng(seed: number) {
  return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}
function multiplierMean(entries: readonly {threshold:number;multiplier:number}[]) {
  let previous = 0;
  return entries.reduce((sum, e) => { const result = sum + (e.threshold - previous) * e.multiplier; previous = e.threshold; return result; }, 0);
}
function exact(weights: Record<SymbolKey,number>, multiplier: number) {
  const total = SYMBOL_KEYS.filter(s => s !== 'h').reduce((sum,s) => sum + weights[s],0);
  let payout = 0;
  const contributions: Record<string,number> = {};
  for (const s of SYMBOL_KEYS) {
    const p = weights[s] / total, n = 3*p, zero = (1-p)**3, pay = SYMBOL_PAYTABLE[s];
    const value = CENTER_WILD_PROBABILITY * n*n * (zero*(pay[3]??0) + n*zero*(pay[4]??0) + n*n*(pay[5]??0)) * multiplier;
    payout += value; contributions[s] = value;
  }
  const scatterProbability = weights.l / total;
  let grant = 0, trigger = 0;
  for (let k=MIN_SCATTERS;k<=12;k++) {
    let choose=1; for(let j=1;j<=k;j++) choose=choose*(13-j)/j;
    const probability=choose*scatterProbability**k*(1-scatterProbability)**(12-k);
    grant += k*probability; trigger += probability;
  }
  return {payout,grant,trigger,contributions};
}
// Counter formulation matches the runtime's longest-only ways per symbol.
function fast(board:SymbolKey[], free:boolean, multiplierRng:()=>number) {
  let scatters=0, payout=0;
  for(const s of board) if(s==='l') scatters++;
  if(board[6]==='h') {
    for(const s of SYMBOL_KEYS) {
      if(s==='h'||s==='l'||s==='emptyslot') continue;
      const c0=board.slice(0,3).filter(x=>x===s).length;
      const c1=board.slice(3,6).filter(x=>x===s).length;
      if(!c0||!c1) continue;
      const c3=board.slice(7,10).filter(x=>x===s).length;
      const c4=board.slice(10,13).filter(x=>x===s).length;
      const length=c3 ? c4 ? 5 : 4 : 3;
      payout+=(SYMBOL_PAYTABLE[s][length]??0)*c0*c1*(c3||1)*(c3 ? c4||1 : 1);
    }
  }
  if(payout>0) {
    const r=multiplierRng();
    payout*=(free?MULTIPLIER_DISTRIBUTIONS.freeSpins:MULTIPLIER_DISTRIBUTIONS.base).find(e=>r<e.threshold)!.multiplier;
  }
  return {payout,grant:scatters>=MIN_SCATTERS?scatters:0};
}
function board(free:boolean, r:()=>number) { return Array.from({length:13},(_,i)=>randomSymbol(i,free,r)); }
const fixtureRng=rng(741354);
for(let i=0;i<20000;i++) {
  const free=i%2===0, b=board(free,fixtureRng), u=fixtureRng();
  const runtime=calculateWins(b,1,free,()=>u);
  const actual=runtime.wins.reduce((sum,w)=>sum+w.payout,0), accelerated=fast(b,free,()=>u);
  assert.ok(Math.abs(actual-accelerated.payout)<1e-9, `Fixture ${i}`);
  assert.equal(runtime.scatterTrigger?.freeSpinsTriggered??0,accelerated.grant);
}
const base=exact(SYMBOL_WEIGHTS_BASE,multiplierMean(MULTIPLIER_DISTRIBUTIONS.base));
const free=exact(SYMBOL_WEIGHTS_FS,multiplierMean(MULTIPLIER_DISTRIBUTIONS.freeSpins));
assert.ok(free.grant<1);
const bonus=base.grant*free.payout/(1-free.grant), theoretical=base.payout+bonus;
const runs=[];
const paidRounds=Number(process.argv[2]??1000000);
assert.ok(Number.isSafeInteger(paidRounds) && paidRounds >= 2, 'Paid-round count must be a safe integer of at least 2');
for(const seed of [12345,741354,987654321]) {
  const r=rng(seed); let sum=0,sumSquares=0,freeSpins=0,basePaid=0,bonusPaid=0,triggers=0,max=0;
  for(let i=0;i<paidRounds;i++) {
    const first=fast(board(false,r),false,r); let total=first.payout, remaining=first.grant;
    basePaid+=first.payout; if(remaining) triggers++;
    while(remaining>0) {
      remaining--; freeSpins++; const result=fast(board(true,r),true,r);
      remaining+=result.grant; total+=result.payout; bonusPaid+=result.payout;
      assert.ok(remaining<10000,'Unexpected nonterminating bonus chain');
    }
    sum+=total; sumSquares+=total*total; max=Math.max(max,total);
  }
  const mean=sum/paidRounds, variance=(sumSquares-paidRounds*mean*mean)/(paidRounds-1), halfWidth=1.96*Math.sqrt(variance/paidRounds);
  runs.push({seed,paidRounds,rtp:mean,confidence95:[mean-halfWidth,mean+halfWidth],baseRtp:basePaid/paidRounds,bonusRtp:bonusPaid/paidRounds,freeSpins,triggers,maxPaidRoundReturn:max});
}
const report={date:new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Helsinki',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date()),targetRtp:.95,scope:'Current standalone math; fixed unit bet; complete bonus chains including retriggers; no debug awards',weightsAndPaysUnchanged:true,verifiedRuntimeFixtures:20000,base,free,bonusRtp:bonus,theoreticalRtp:theoretical,uniformPaytableScaleFor95:.95/theoretical,runs};
fs.mkdirSync('apps/oma-peli/reports',{recursive:true});
fs.writeFileSync('apps/oma-peli/reports/active-rtp-audit.json',JSON.stringify(report,null,2)+'\n');
process.stdout.write(JSON.stringify(report,null,2)+'\n');
