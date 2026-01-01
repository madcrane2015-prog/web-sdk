var Sl=Object.defineProperty;var El=(I,k,F)=>k in I?Sl(I,k,{enumerable:!0,configurable:!0,writable:!0,value:F}):I[k]=F;var ve=(I,k,F)=>El(I,typeof k!="symbol"?k+"":k,F);import{c as Ot,d as Rs,b as W,l as Bt,a as B,t as G,n as Ts,s as L,f as Ll,g as w,i as Rl}from"../chunks/CSS5pK2S.js";import{i as Tl}from"../chunks/Bi09C86I.js";import{m as It,a as jt,p as Dt,f as Ze,A as e,M as b,b as Nt,G as n,aa as f,s,c as d,t as X,F as A,r as c,C as Ae,O as ne,K as Ms,ab as xe,ac as Io,ad as Ml,ae as Al}from"../chunks/D6oFS7mH.js";import{p as Qe,i as ee,b as Ss}from"../chunks/TD_48ma8.js";import{e as Ct,s as i,i as Wt,a as jo,A as Fl,b as Es,T as zt,l as x,C as Pl,G as Ls,S as Bo,c as zl,r as Cl}from"../chunks/BE2Ulkfc.js";import{b as be}from"../chunks/BQuxc1zX.js";function Wl(I){return function(...k){var F=k[0];return F.preventDefault(),I==null?void 0:I.apply(this,k)}}It();Fe[A]="src/components/VinylWinAnimation.svelte";var Ol=B(G('<div class="win-label svelte-1vsph43">BIG WIN!</div> <div class="win-amount-display svelte-1vsph43"> </div>',1),Fe[A],[[234,3],[235,3]]),Bl=B(Ts('<use href="#sparkle" class="sparkle svelte-1vsph43"></use>'),Fe[A],[[308,4]]),Il=B(Ts('<use href="#vinyl"></use>'),Fe[A],[[323,4]]),jl=B(G('<div><!> <svg class="vinyl-canvas svelte-1vsph43" viewBox="0 0 1024 800" xmlns="http://www.w3.org/2000/svg"><defs class="svelte-1vsph43"><symbol id="vinyl" viewBox="-200 -200 400 400" class="svelte-1vsph43"><circle cx="0" cy="0" r="180" fill="#0b0b0b" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="150" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.3" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="120" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.25" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="90" fill="none" stroke="#1a1a1a" stroke-width="1.5" opacity="0.2" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="55" fill="var(--label-color)" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="6" fill="#ffffff" class="svelte-1vsph43"></circle><ellipse cx="-15" cy="-15" rx="20" ry="15" fill="#ffffff" opacity="0.3" transform="rotate(-30)" class="svelte-1vsph43"></ellipse></symbol><symbol id="sparkle" viewBox="-12 -12 24 24" class="svelte-1vsph43"><polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" fill="#ffd966" class="svelte-1vsph43"></polygon><circle cx="0" cy="0" r="2" fill="#ffffff" class="svelte-1vsph43"></circle></symbol><symbol id="confetti" viewBox="-3 -3 6 6" class="svelte-1vsph43"><circle cx="0" cy="0" r="2" fill="var(--confetti-color)" class="svelte-1vsph43"></circle></symbol></defs><!><!></svg></div>'),Fe[A],[[231,1,[[240,2,[[242,3,[[243,4,[[245,5],[248,5],[257,5],[266,5],[277,5],[280,5],[283,5]]],[295,4,[[296,5],[297,5]]],[301,4,[[302,5]]]]]]]]]]);function Fe(I,k){Ot(new.target),Dt(k,!0,Fe);let F=Qe(k,"winLevel",3,"small"),q=Qe(k,"winAmount",3,0),K=Qe(k,"vinylStartScale",3,.01),te=Qe(k,"vinylEndScale",3,.15),Pe=Qe(k,"sparkleScale",3,.6),N=b(!1),ie=b(!1);const et={small:{vinyls:5,sparkles:8,maxRadius:70},medium:{vinyls:12,sparkles:16,maxRadius:100},jackpot:{vinyls:24,sparkles:30,maxRadius:130}},he=Ae(()=>et[F()]),ye=["#f04e37","#ffd966","#ff8533","#4ecdc4","#ff6b9d"];function U(j){const re=[],We=e(he).maxRadius;for(let S=0;S<j;S++){const P=Math.PI*2*S/j+Math.random()*.4,$e=Math.random()*We*.7+We*.2;re.push({x:512+Math.cos(P)*$e,y:400+Math.sin(P)*$e,rotation:Math.random()*30-15,scale:te()*(.8+Math.random()*.4),delay:S*.05,color:ye[S%ye.length]})}return re}function ke(j){const re=[];for(let _e=0;_e<j;_e++)re.push({x:100+Math.random()*824,y:50+Math.random()*700,delay:Math.random()*.8,duration:.6+Math.random()*.4,rotation:Math.random()*360});return re}const je=Ae(()=>U(e(he).vinyls)),tt=Ae(()=>ke(e(he).sparkles));function ot(){n(N,!0),n(ie,!0),setTimeout(()=>{n(ie,!1),setTimeout(()=>{var j;n(N,!1),(j=k.onComplete)==null||j.call(k)},500)},f(F(),"jackpot")?4e3:f(F(),"medium")?3e3:2500)}function me(){n(ie,!1),setTimeout(()=>{n(N,!1)},500)}var De=Rs(),Do=Ze(De);{var ze=j=>{var re=jl();let _e;var Ce=d(re);{var We=de=>{var D=Ol(),oe=s(Ze(D),2),Ne=d(oe,!0);c(oe),X(ce=>L(Ne,ce),[()=>q().toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),W(de,D)};ee(Ce,de=>{q()>0&&de(We)})}var S=s(Ce,2),P=s(d(S));Ct(P,17,()=>e(tt),Wt,(de,D)=>{var oe=Bl();X(()=>i(oe,"style",`
            --sx: ${e(D).x??""}px;
            --sy: ${e(D).y??""}px;
            --duration: ${e(D).duration??""}s;
            --sparkle-delay: ${e(D).delay??""}s;
            --sparkle-scale: ${Pe()??""};
          `)),W(de,oe)});var $e=s(P);Ct($e,17,()=>e(je),Wt,(de,D)=>{var oe=Il();let Ne;X(()=>{Ne=jo(oe,0,"vinyl-group svelte-1vsph43",null,Ne,{floating:e(ie)}),i(oe,"style",`
            --tx: ${e(D).x??""}px;
            --ty: ${e(D).y??""}px;
            --scale: ${e(D).scale??""};
            --rotation: ${e(D).rotation??""}deg;
            --delay: ${e(D).delay??""}s;
            --label-color: ${e(D).color??""};
            --start-scale: ${K()??""};
          `)}),W(de,oe)}),c(S),c(re),X(()=>_e=jo(re,1,"vinyl-win-container svelte-1vsph43",null,_e,{visible:e(ie),hiding:!e(ie)})),W(j,re)};ee(Do,j=>{e(N)&&j(ze)})}return W(I,De),Nt({get show(){return ot},get hide(){return me},...Bt()})}jt(Fe);It();H[A]="src/components/HelloPixi.svelte";var Dl=B(Rl('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-o2kwxd"><\/script><!---->',1),H[A],[[2,2]]),Nl=B(G('<p style="color: red;" class="svelte-o2kwxd"><strong class="svelte-o2kwxd">Error:</strong> </p>'),H[A],[[2260,6,[[2260,29]]]]),Gl=B(G('<div class="svelte-o2kwxd"> </div>'),H[A],[[2269,10]]),Hl=B(G('<details class="svelte-o2kwxd"><summary class="svelte-o2kwxd"> </summary> <!></details>'),H[A],[[2266,6,[[2267,8]]]]),Ul=B(G(`<div style="
    position: fixed;
    top: 10px;
    left: 10px;
    background: rgba(0,0,0,0.8);
    color: white;
    padding: 10px;
    border-radius: 5px;
    font-family: monospace;
    font-size: 12px;
    z-index: 2000;
    max-width: 400px;
    max-height: 300px;
    overflow-y: auto;
  " class="svelte-o2kwxd"><h3 class="svelte-o2kwxd">🎰 Oma-peli Debug</h3> <p class="svelte-o2kwxd"><strong class="svelte-o2kwxd">Status:</strong> </p> <!> <p class="svelte-o2kwxd"><strong class="svelte-o2kwxd">Base:</strong> </p> <p class="svelte-o2kwxd"><strong class="svelte-o2kwxd">BG URL:</strong> </p> <p class="svelte-o2kwxd"><strong class="svelte-o2kwxd">Sample:</strong> </p> <!></div>`),H[A],[[2242,2,[[2257,4],[2258,4,[[2258,7]]],[2262,4,[[2262,7]]],[2263,4,[[2263,7]]],[2264,4,[[2264,7]]]]]]),Yl=B(G('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-o2kwxd"> </div>'),H[A],[[2304,6]]),Vl=B(G('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-o2kwxd"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-o2kwxd"> </span></div>'),H[A],[[2310,6,[[2311,8]]]]),Xl=B(G(`<div style="
    position: fixed;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    background: linear-gradient(45deg, #ffd700, #ffed4a);
    color: #333;
    padding: 20px;
    border-radius: 15px;
    font-family: Arial, sans-serif;
    text-align: center;
    z-index: 3000;
    border: 3px solid #ffb700;
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.8);
    animation: winPulse 2s infinite;
    max-width: 350px;
  " class="svelte-o2kwxd"><h2 style="margin: 0 0 10px 0; font-size: 2em;" class="svelte-o2kwxd">🎉 VOITTO! 🎉</h2> <div style="font-size: 1.5em; font-weight: bold; margin: 10px 0;" class="svelte-o2kwxd"> </div> <!> <!> <button style="
        margin-top: 15px;
        padding: 8px 16px;
        background: #333;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
      " class="svelte-o2kwxd">Jatka pelaamista</button></div>`),H[A],[[2281,2,[[2298,4],[2299,4],[2317,4]]]]),ql=B(G(`<div class="svelte-o2kwxd"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-o2kwxd">💰 PAYTABLE (81 WAYS)</h2> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-o2kwxd">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-o2kwxd"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-o2kwxd"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-o2kwxd"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-o2kwxd">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-o2kwxd"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-o2kwxd">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-o2kwxd"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-o2kwxd">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-o2kwxd"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-o2kwxd">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-o2kwxd">Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br class="svelte-o2kwxd"> <span style="color: #ffd700;" class="svelte-o2kwxd">Ways = Symbolien määrä per kela kerrottuna</span></div> <button style="
        margin-top: 20px;
        width: 100%;
        padding: 10px;
        background: #ffd700;
        color: #333;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1em;
        font-weight: bold;
      " class="svelte-o2kwxd">Sulje</button></div>`),H[A],[[2344,2,[[2361,4],[2363,4,[[2364,70]]],[2368,4,[[2370,6,[[2371,8],[2372,8],[2373,8],[2374,8]]],[2378,6,[[2379,8],[2380,8],[2381,8],[2382,8],[2383,8]]],[2387,6,[[2388,8],[2389,8],[2390,8],[2391,8]]],[2395,6,[[2396,8],[2397,8],[2398,8]]]]],[2402,4,[[2403,66],[2404,6]]],[2407,4]]]]),Kl=B(G(`<div style="
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5000;
  " class="svelte-o2kwxd"><div style="
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      color: white;
      padding: 40px;
      border-radius: 20px;
      text-align: center;
      border: 3px solid #ffd700;
      box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
      max-width: 500px;
      font-family: Arial, sans-serif;
    " class="svelte-o2kwxd"><h1 style="
        margin: 0 0 20px 0;
        font-size: 2.5em;
        color: #ffd700;
        text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
      " class="svelte-o2kwxd">🎰 VAPAAPELIT PÄÄTTYIVÄT! 🎰</h1> <div style="
        font-size: 1.2em;
        margin: 20px 0;
        color: #aaa;
      " class="svelte-o2kwxd">Voitit yhteensä:</div> <div style="
        font-size: 3em;
        font-weight: bold;
        color: #00ff00;
        text-shadow: 0 0 15px rgba(0, 255, 0, 0.8);
        margin: 20px 0;
      " class="svelte-o2kwxd"> </div> <button style="
          margin-top: 30px;
          padding: 15px 40px;
          background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
          color: #000;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-size: 1.3em;
          font-weight: bold;
          box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
          transition: transform 0.2s, box-shadow 0.2s;
        " class="svelte-o2kwxd">JATKA PERUSPELIIN</button></div></div>`),H[A],[[2432,2,[[2444,4,[[2455,6],[2464,6],[2472,6],[2482,6]]]]]]),Jl=B(G('<div class="svelte-o2kwxd"><div class="svelte-o2kwxd">🔄 Select Rounds</div> <button class="svelte-o2kwxd">10 Rounds</button> <button class="svelte-o2kwxd">25 Rounds</button> <button class="svelte-o2kwxd">50 Rounds</button> <button class="svelte-o2kwxd">100 Rounds</button> <button class="svelte-o2kwxd">200 Rounds</button> <button class="svelte-o2kwxd">500 Rounds</button> <button class="svelte-o2kwxd">1,000 Rounds</button> <button class="svelte-o2kwxd">5,000 Rounds</button> <button class="svelte-o2kwxd">Cancel</button></div>'),H[A],[[2587,2,[[2600,4],[2603,4],[2621,4],[2639,4],[2657,4],[2675,4],[2693,4],[2711,4],[2729,4],[2747,4]]]]),Ql=B(G(`<!>   <!>   <!>   <!>  <div style="
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: transparent;
" class="svelte-o2kwxd"><div class="svelte-o2kwxd"><div class="svelte-o2kwxd"><button class="svelte-o2kwxd">💰 PAYTABLE</button>  <div class="control-panel-mobile svelte-o2kwxd"><!>  <img alt="Left End" class="svelte-o2kwxd"> <div class="svelte-o2kwxd"><div class="svelte-o2kwxd"><div class="svelte-o2kwxd">BET</div> <div class="svelte-o2kwxd"><button title="Decrease Bet" class="svelte-o2kwxd"></button> <div class="svelte-o2kwxd"> </div> <button title="Increase Bet" class="svelte-o2kwxd"></button></div></div> <img alt="Divider" class="svelte-o2kwxd"> <div class="svelte-o2kwxd"><div class="svelte-o2kwxd">BALANCE</div> <div class="svelte-o2kwxd"> </div></div> <img alt="Divider" class="svelte-o2kwxd"> <div style="position: relative; display: flex; align-items: center; justify-content: center; flex-grow: 0.5;" class="svelte-o2kwxd"><div><button title="SPIN" class="svelte-o2kwxd"></button></div></div> <img alt="Divider" class="svelte-o2kwxd"> <div class="svelte-o2kwxd"><button class="svelte-o2kwxd"></button> <img alt="Status bar" class="svelte-o2kwxd"></div> <img alt="Divider" class="svelte-o2kwxd"> <div class="svelte-o2kwxd"><button class="svelte-o2kwxd"></button> <img alt="Speed bar" class="svelte-o2kwxd"></div> <div class="svelte-o2kwxd"><div class="svelte-o2kwxd">WIN</div> <div class="win3d winShine svelte-o2kwxd" id="winLabel"><span class="depth svelte-o2kwxd" aria-hidden="true"> </span> <span class="face svelte-o2kwxd"> </span></div></div> <img alt="Divider" class="svelte-o2kwxd"> <button title="Menu" class="svelte-o2kwxd"></button></div> <img alt="Right End" class="svelte-o2kwxd"></div></div>  <button class="svelte-o2kwxd"></button> <!>   <div class="debug-panel svelte-o2kwxd"><div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;" class="svelte-o2kwxd">📊 RTP MONITOR</div> <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px; color: #ffd700; text-align: center;" class="svelte-o2kwxd"></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Rounds:</span> <span style="color: #fff;" class="svelte-o2kwxd"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Wagered:</span> <span style="color: #ff6666;" class="svelte-o2kwxd"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Won:</span> <span style="color: #66ff66;" class="svelte-o2kwxd"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 10px; 
    padding-top: 10px; 
    border-top: 1px solid #555;
    font-weight: bold;
    font-size: 18px;
  " class="svelte-o2kwxd"><span style="color: #ffd700;" class="svelte-o2kwxd">RTP:</span> <span class="svelte-o2kwxd"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-weight: bold;
    font-size: 16px;
  " class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Hit Freq:</span> <span class="svelte-o2kwxd"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-size: 14px;
  " class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Free Spins Triggered:</span> <span style="color: #66ccff;" class="svelte-o2kwxd"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 4px;
    font-size: 14px;
  " class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Free Spins Played:</span> <span style="color: #66ccff;" class="svelte-o2kwxd"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #555;
    font-size: 14px;
  " class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Empty Slots:</span> <span style="color: #ff9900;" class="svelte-o2kwxd"> </span></div> <button style="
      margin-top: 10px;
      width: 100%;
      padding: 5px;
      background: rgba(255, 100, 100, 0.3);
      color: #fff;
      border: 1px solid #ff6666;
      border-radius: 5px;
      cursor: pointer;
      font-size: 11px;
    " class="svelte-o2kwxd">Reset Stats</button> <div style="
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  " class="svelte-o2kwxd"><button class="svelte-o2kwxd"> </button> <button class="svelte-o2kwxd">Clear Win Log</button> <button class="svelte-o2kwxd"> </button> <button class="svelte-o2kwxd">🎰 Test Free Spins</button></div></div> <button class="debug-panel svelte-o2kwxd"> </button></div></div>`,1),H[A],[[2523,0,[[2532,2,[[2538,4,[[2549,6],[2574,6,[[2777,2],[2784,2,[[2796,4,[[2797,6],[2798,6,[[2799,8],[2813,8],[2823,8]]]]],[2841,4],[2848,4,[[2849,6],[2850,6]]],[2861,4],[2868,4,[[2869,6,[[2870,8]]]]],[2898,4],[2905,4,[[2906,6],[2926,6]]],[2934,4],[2941,4,[[2942,6],[2966,6]]],[2972,4,[[2973,6],[2974,6,[[2975,8],[2976,8]]]]],[2981,4],[2988,4]]],[3005,2]]]]],[3014,0],[3052,0,[[3068,2],[3071,2],[3074,2,[[3075,4],[3076,4]]],[3078,2,[[3079,4],[3080,4]]],[3082,2,[[3083,4],[3084,4]]],[3086,2,[[3095,4],[3096,4]]],[3100,2,[[3107,4],[3108,4]]],[3112,2,[[3118,4],[3119,4]]],[3121,2,[[3127,4],[3128,4]]],[3130,2,[[3138,4],[3139,4]]],[3141,2],[3159,2,[[3165,4],[3183,4],[3202,4],[3219,4]]]]],[3240,0]]]]]]);function H(I,k){Ot(new.target),Dt(k,!0,H);const F="1.3.4",q=13,K=1445,te=1e3,Pe=1.75,N=-30,ie=-10,et=160,he=0,ye=750,U=80,ke=250,je=0,tt=50,ot=.5,me=40,De=0,ze=Math.round(100*Pe),j=Math.round(ze*(700/760)),_e=j+10,Ce=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],We=f(typeof window,"undefined",!1)&&window.location.hostname.includes("github.io"),S=We?"/web-sdk/oma-peli/symbols":`${be}/symbols`,P=We?"/web-sdk/oma-peli/controls":`${be}/controls`,$e={a:`${S}/Blue_hotrod.jpg`,b:`${S}/Blue_jacket.jpg`,c:`${S}/Blue_rollers.jpg`,d:`${S}/Blue_speakers.jpg`,e:`${S}/Premium_blonde.jpg`,f:`${S}/Premium_brunette.jpg`,g:`${S}/Premium_rocker.jpg`,h:`${S}/New_Wild.jpg`,i:`${S}/Red_burger.jpg`,j:`${S}/Red_fries.jpg`,k:`${S}/Red_milkshake.jpg`,l:`${S}/Scatter.jpg`,emptyslot:`${S}/Emptyslot.jpg`},de=`${S}/bg_base.jpg`,D=`${S}/ReelFrames.png`,oe=`${S}/RockABillyReels_logo.png`,Ne={spin:`${be}/sounds/spin.mp3`,stop:`${be}/sounds/stop.mp3`,win:`${be}/sounds/win.mp3`};let ce=b(!0),Ht={},C=null,se=null,Ut=null,Yt=null,pe=b(!0),As=b(!1),gt=b(945),Vt=null;const Fs={fast:3,medium:7,slow:18};let le=b("medium"),No=b(Math.floor(Math.random()*20)+1);const vt={background:()=>`${be}/music/rockabilly reels loop ${e(No)}.mp3`,freeSpins:`${be}/music/rockabilly-loop_long.mp3`,drumHit:`${be}/music/drum-hit.mp3`,winTheme:`${be}/music/win-stinger.mp3`};function Go(){if(f(typeof window,"undefined")||!window.Howl){console.warn(...x("warn","Howler.js not loaded yet, retrying in 500ms...")),setTimeout(Go,500);return}const o=window.Howl;try{C=new o({src:[vt.background()],loop:!0,volume:.3,onload:()=>{console.log(...x("log","✅ Background music loaded (loop #"+e(No)+")")),n(As,!0)},onloaderror:(l,p)=>{console.warn(...x("warn","⚠️ Background music not found:",p))}}),se=new o({src:[vt.freeSpins],loop:!0,volume:.3,onload:()=>console.log(...x("log","✅ Free spins music loaded")),onloaderror:(l,p)=>console.warn(...x("warn","⚠️ Free spins music not found:",p))}),Ut=new o({src:[vt.drumHit],volume:.5,onload:()=>console.log(...x("log","✅ Drum hit sound loaded")),onloaderror:()=>console.warn(...x("warn","⚠️ Drum hit sound not found"))}),Yt=new o({src:[vt.winTheme],volume:.6,onload:()=>console.log(...x("log","✅ Win theme loaded")),onloaderror:()=>console.warn(...x("warn","⚠️ Win theme not found"))}),console.log(...x("log","🎵 Music system initialized (generate music with Suno AI)"))}catch(l){console.error(...x("error","Failed to initialize music system:",l))}}function Ho(){const o=e(O)?se:C;o&&e(pe)&&!o.playing()&&(o.play(),console.log(...x("log","🎵 "+(e(O)?"Free spins":"Background")+" music started")))}function Ps(){C&&C.playing()&&(C.fade(C.volume(),0,500),setTimeout(()=>C.stop(),500)),se&&se.playing()&&(se.fade(se.volume(),0,500),setTimeout(()=>se.stop(),500))}function Xt(){C&&C.playing()&&(C.fade(C.volume(),0,500),setTimeout(()=>C.stop(),500)),se&&se.playing()&&(se.fade(se.volume(),0,500),setTimeout(()=>se.stop(),500)),setTimeout(()=>{e(pe)&&Ho()},600)}function zs(){if(C&&C.playing()){const o=C.volume();C.fade(o,0,1e3),setTimeout(()=>{C.stop(),C.volume(.3)},1e3)}}let qt=b(!1);function Cs(){n(qt,!1),setTimeout(()=>{n(qt,!0)},10)}let Ge=null;const Kt={vinylStartScale:.01,vinylEndScale:.15,sparkleScale:.6};function Ws(){n(pe,!e(pe)),e(pe)?Ho():Ps()}function Os(){Ut&&e(pe)&&e(ce)&&Ut.play()}function Bs(){Yt&&e(pe)&&e(ce)&&Yt.play()}let xt=null,Jt=null,st=null,lt=null,at=b("Initializing..."),He=b(""),ue=[],Se=b(1e3);const Uo=[.4,.8,1,1.6,2,3,5,8,10,15,20,25,30,40,50,60,80,100];let nt=b(5),fe=Ae(()=>Uo[e(nt)]),bt=b(0),ge=b(!1),Ue=b(0),J=b(!1),Qt=b(!1),Yo=b(0),Oe=!1,we=null,Zt=!1,Ye=b(0),Ve=b(0),it=b(0),eo=b(0),to=Ae(()=>e(Ve)>0?(e(it)/e(Ve)*100).toFixed(2):"0.00"),oo=Ae(()=>e(Ye)>0?(e(eo)/e(Ye)*100).toFixed(2):"0.00"),O=b(!1),Ee=b(0),Be=b(0),ht=b(0),so=b(0),mt=b(0),lo=b(0),Is=Ae(()=>e(mt)>0?(e(lo)/e(mt)*100).toFixed(2):"0.00"),Q=b(ne([]));function js(o,l,p){const a=new Date().toLocaleString("fi-FI");let r=`
${"=".repeat(60)}
`;r+=`ROUND #${o} - ${a}
`,r+=`Mode: ${e(O)?"FREE SPINS":"BASE GAME"}
`,r+=`${"=".repeat(60)}
`,l.forEach((u,g)=>{r+=`
Win ${g+1}:
`,r+=`  Symbol: ${u.symbol} (${Ko[u.symbol]})
`,r+=`  Count: ${u.count} symbols
`,r+=`  Multiplier: ${u.multiplier}x
`,r+=`  Payout: ${u.payout.toFixed(2)}
`,r+=`  Positions: [${u.positions.join(", ")}]
`}),r+=`
${"─".repeat(60)}
`,r+=`TOTAL WIN: ${p.toFixed(2)}
`,r+=`${"=".repeat(60)}
`,e(Q).push(r)}function Ds(){const o=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${e(Q).join(`
`)}`,l=new Blob([o],{type:"text/plain"}),p=URL.createObjectURL(l),a=document.createElement("a");a.href=p,a.download=`win-log-${Date.now()}.txt`,a.click(),URL.revokeObjectURL(p)}function Ns(){n(Q,ne([],null,Q))}function Gs(){e(O)||(n(O,!0),n(Ee,10),n(Be,0),xe(ht),console.log(...x("log","🎰 TEST MODE: Free spins activated! 10 spins granted.")),Xt())}const Hs={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},Us={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function Vo(o){if(f(o,6))return Math.random()<.55?"h":"emptyslot";const l=e(O)?Us:Hs,p=Math.random();let a=0;const r=Ce.filter(g=>f(g,"h",!1)),u=r.reduce((g,m)=>g+l[m],0);for(const g of r)if(a+=l[g]/u,p<a)return g;return"f"}function Xo(){const o=[];for(let l=0;l<q;l++){const p=Vo(l);o.push(p),xe(mt),f(p,"emptyslot")&&xe(lo)}return o}function qo(o){return o<3?{col:0,row:o}:o<6?{col:1,row:o-3}:f(o,6)?{col:2,row:0}:o<10?{col:3,row:o-7}:{col:4,row:o-10}}function rt(o,l){return f(o,0)?l:f(o,1)?3+l:f(o,2)?6:f(o,3)?7+l:f(o,4)?10+l:-1}function Ys(){if(e(O)){const o=Math.random();return o<.7?3:o<.92?5:10}else{const o=Math.random();return o<.7?1:o<.92?2:3}}const Vs={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function Xs(){var z;const o=[],l=[];for(let v=0;v<q;v++)f(dt[v],"l")&&l.push(v);if(l.length>=5){const v=l.length;n(Ee,e(Ee)+v),e(O)?console.log(...x("log",`🎰 FREE SPINS RETRIGGERED! +${v} FREE SPINS! Total: ${e(Ee)}`)):(n(O,!0),n(Be,0),xe(ht),console.log(...x("log",`🎰 FREE SPINS TRIGGERED! ${l.length} scatters = ${v} FREE SPINS!`)),Xt()),o.push({symbol:"l",count:l.length,payout:0,positions:l,multiplier:1})}const p=[];for(let v=0;v<3;v++)for(let h=0;h<3;h++)for(let y=0;y<1;y++)for(let _=0;_<3;_++)for(let E=0;E<3;E++){const $=[rt(0,v),rt(1,h),rt(2,y),rt(3,_),rt(4,E)];p.push($)}console.log(...x("log",`Generated ${p.length} possible paths (should be 81)`));const a=[];for(const v of p){const h=v.map($=>dt[$]);if(f(h[0],"emptyslot")||f(h[0],"l"))continue;let y=null;for(let $=0;$<h.length;$++)if(f(h[$],"h",!1)&&f(h[$],"emptyslot",!1)&&f(h[$],"l",!1)){y=h[$];break}if(!y)continue;let _=0;const E=new Set;for(let $=0;$<v.length;$++){const Me=v[$],{col:Je}=qo(Me),Z=h[$];(f(Z,y)||f(Z,"h"))&&E.add(Je)}for(let $=0;$<5&&E.has($);$++)_++;if(_>=3){const Me=v[0]%3;a.push({symbol:y,length:_,path:v.slice(0,_),startRow:Me})}}const r=[],u=new Map;for(const v of a){const h=`${v.symbol}-${v.path.join(",")}`;u.has(h)||u.set(h,[]),u.get(h).push(v)}for(const[v,h]of u.entries()){const y=Math.max(...h.map(E=>E.length)),_=h.find(E=>f(E.length,y));_&&r.push(_)}const g=[],m=new Map;for(const v of r)m.has(v.symbol)||m.set(v.symbol,[]),m.get(v.symbol).push(v);const R=[];for(const[v,h]of m.entries()){const y=Math.max(...h.map(E=>E.length)),_=h.filter(E=>f(E.length,y));R.push(..._)}const M=new Map;for(const v of R){const h=`${v.symbol}-${v.length}`;M.has(h)||M.set(h,[]),M.get(h).push(v)}const T=R.length>0?Ys():1;for(const[v,h]of M.entries()){const y=h[0],_=(z=Vs[y.symbol])==null?void 0:z[y.length];if(f(_,void 0,!1)&&_>0){const E=new Map;for(const Z of h)for(let V=0;V<Z.length;V++)E.has(V)||E.set(V,new Set),E.get(V).add(Z.path[V]);let $=1;for(let Z=0;Z<y.length;Z++){const V=E.get(Z);$*=V?V.size:1}const Me=_*e(fe)*$*T;console.log(...x("log",`  ${y.length}x${y.symbol}: ${$} ways × ${_}x × ${e(fe)} bet × ${T} mult = ${Me}`));const Je=new Set;for(const Z of h)Z.path.forEach(V=>Je.add(V));g.push({symbol:y.symbol,count:y.length,payout:Me,positions:Array.from(Je),multiplier:T})}}return o.push(...g),o}let ae=b(0),Le=b(ne([])),Re=b(!1),Xe=b(!1),ao=b(!1),wt=b(0);const Ko={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function no(o){if(!e(ce)||!Ht[o])return;const l=Ht[o];l.currentTime=0,l.play().catch(p=>{console.warn(...x("warn","Äänen toisto epäonnistui:",o,p))})}function qs(o){ct.forEach(l=>Y.stage.removeChild(l)),ct=[],o.forEach(l=>{l.positions.forEach(p=>{const a=qe[p],r=new Ls().rect(0,0,ze,j).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});r.x=a.container.x,r.y=a.container.y,Y.stage.addChild(r),ct.push(r);let u=0,g=1;const m=.05;Y.ticker.add(()=>{u+=g*m,u>=.4&&(g=-1),u<=0&&(g=1),r.alpha=.5+u})})})}function io(){ct.forEach(o=>Y.stage.removeChild(o)),ct=[]}let dt=Xo(),ro,Y,qe=[],ct=[];class Ks{constructor(l,p){ve(this,"index");ve(this,"container");ve(this,"offset",0);ve(this,"speed",0);ve(this,"targetSpeed",30);ve(this,"state","idle");ve(this,"stopDelay",0);ve(this,"bounceOffset",0);ve(this,"bounceSpeed",0);ve(this,"bounceFrames",0);this.index=l,this.container=p}start(l){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=l}startSynchronized(l){const p=Fs[e(le)],a=60+l*p;this.start(a)}update(){if(!f(this.state,"idle")){if(f(this.state,"spinning")&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),f(this.state,"slowing")){const l=f(e(le),"slow")?.88:f(e(le),"medium")?.92:.95;this.speed*=l,this.speed<2.5&&(this.state="bouncing",this.speed=0,this.offset=0,this.bounceOffset=0,this.bounceSpeed=8,no("stop"),Os())}f(this.state,"bouncing")&&(this.bounceSpeed*=.85,this.bounceOffset+=this.bounceSpeed,Math.abs(this.bounceSpeed)<.3&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=_e&&(this.offset=0,dt[this.index]=Vo(this.index)))}}draw(){const l=this.container;l.removeChildren();const p=dt[this.index];if(!p||!xt||!xt[p])return;const a=xt[p];if(!a)return;const r=this.offset+this.bounceOffset,u=new Bo(a);u.width=ze,u.height=j,u.x=0,u.y=r,l.addChild(u)}}let t=b(1);Ms(async()=>{Y=new Fl,await Y.init({width:K,height:te,backgroundAlpha:0}),ro.appendChild(Y.canvas);const o=()=>{const a=window.innerWidth,r=window.innerHeight,u=a/K,g=r/te,m=Math.min(u,g,1);n(t,ne(m,null,t)),Y.stage.scale.set(m),Y.renderer.resize(K,te)};o(),window.addEventListener("resize",o);const l={};try{n(at,"Loading background and UI images..."),ue.push(`Loading background: ${de}`),ue.push(`Loading reel frames: ${D}`),ue.push(`Loading logo: ${oe}`),await Es.load([{alias:"background",src:de},{alias:"reelframes",src:D},{alias:"logo",src:oe}]),Jt=zt.from("background"),st=zt.from("reelframes"),lt=zt.from("logo"),console.log(...x("log","✅ Background texture created:",Jt.width,"x",Jt.height)),console.log(...x("log","✅ Reel frames texture created:",st.width,"x",st.height)),console.log(...x("log","✅ Logo texture created:",lt.width,"x",lt.height)),ue.push("✅ All UI images loaded"),n(at,"Loading symbols...");const a=[];for(const r of Ce)a.push({alias:r,src:$e[r]});await Es.load(a);for(const r of Ce){const u=$e[r];ue.push(`Loading symbol ${r}: ${u}`);try{const g=zt.from(r);l[r]=g,console.log(...x("log",`✅ Symbol ${r} loaded:`,g.width,"x",g.height)),ue.push(`✅ Symbol ${r} loaded`)}catch(g){const m=`❌ Failed to load symbol ${r} from ${u}: ${g}`;throw ue.push(m),console.error(...x("error",m)),new Error(m)}}xt=l,n(at,"Assets loaded successfully!")}catch(a){n(He,`Asset loading failed: ${a}`),ue.push(e(He)),console.error(...x("error",e(He)));return}console.log(...x("log","Ladataan ääniefektit..."));for(const[a,r]of Object.entries(Ne)){const u=new Audio;u.src=r,u.preload="auto",u.volume=.7,u.load(),u.addEventListener("error",()=>{console.log(...x("log",`Äänitiedostoa ei löydy: ${r} (käytetään hiljaista placeholderia)`))}),Ht[a]=u}[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(a=>({x:a.x+N,y:a.y+ie})),qe=[];for(let a=0;a<q;a++){const r=qo(a),u=r.col,g=r.row,m=300+u*(ze+20),R=250+g*(j+15),M=f(a,6)?m+he:m,T=f(a,6)?R+et:R,z=new Pl;z.x=M+N,z.y=T+ie;const v=new Ls().rect(0,0,ze,j).fill(16777215);v.x=z.x,v.y=z.y,z.mask=v,Y.stage.addChild(v),Y.stage.addChild(z),qe.push(new Ks(a,z))}if(st){const a=new Bo(st);a.scale.set(1),a.x=250,a.y=200,Y.stage.addChild(a),Vt=a,n(gt,ne(a.width,null,gt)),console.log(...x("log","Reel frames lisätty:",a.width.toFixed(0),"x",a.height.toFixed(0))),console.log(...x("log","Control panel leveys päivitetty:",e(gt).toFixed(0)))}if(lt){const a=new Bo(lt);a.scale.set(ot),a.x=(Y.renderer.width-a.width)/2+me,a.y=De,Y.stage.addChild(a),console.log(...x("log","Logo lisätty päällimmäiseen layeriin:",a.width.toFixed(0),"x",a.height.toFixed(0)))}Go(),Y.ticker.add(Js)});function Js(){for(const o of qe)o.update(),o.draw();if(!e(Re)&&!Zt&&qe.every(o=>f(o.state,"stopped"))){Zt=!0,zs();const o=Xs();console.log(...x("log",`Checking wins, found ${o.length} wins`)),o.length>0?(n(Le,ne(o,null,Le)),n(ae,ne(o.reduce((l,p)=>l+p.payout,0),null,ae)),js(e(Ye),o,e(ae)),Zs(e(ae)),n(Re,!0),n(Yo,ne(Date.now(),null,Yo)),console.log(...x("log",`🎉 VOITTO! ${e(ae)} pistettä! Uusi saldo: ${e(Se)}`)),console.log(...x("log",`isShowingWin set to: ${e(Re)}, totalWin: ${e(ae)}`)),o.forEach(l=>{const p=l.multiplier?` (${l.multiplier}x multiplier)`:"";console.log(...x("log",`${l.count}x ${l.symbol} = ${l.payout} pistettä${p}`))}),qs(o),no("win"),e(ge)&&!Oe&&(Oe=!0,we=window.setTimeout(()=>{e(Re)&&e(ge)&&(console.log(...x("log","Autoplay: Auto-closing win popup after 1.5s")),n(Re,!1),io()),we=window.setTimeout(()=>{Oe=!1,co()},200)},1500))):(console.log(...x("log","No wins found this spin")),e(ge)&&!Oe&&(Oe=!0,we=window.setTimeout(()=>{Oe=!1,co()},500))),e(O)&&f(e(Ee),0)&&(console.log(...x("log",`🎰 FREE SPINS ENDED! Total won: ${e(Be)}`)),setTimeout(()=>{n(wt,ne(e(Be),null,wt)),n(ao,!0)},2e3))}}function Jo(){if(!e(O)&&C&&e(pe)&&!C.playing()&&(C.play(),console.log(...x("log","🎵 Background music started on first spin"))),Cs(),e(O)&&e(Ee)>0)xe(Ee,-1),xe(so),console.log(...x("log",`🎰 FREE SPIN! Remaining: ${e(Ee)}`));else if(!e(O)){if(e(Se)<e(fe)){alert(`Not enough credits! Balance: ${e(Se)}, Bet: ${e(fe)}`),yt();return}n(Se,e(Se)-e(fe)),xe(Ye),n(Ve,e(Ve)+e(fe))}f(we,null,!1)&&(clearTimeout(we),we=null),n(Le,ne([],null,Le)),n(ae,0),n(Re,!1),Zt=!1,io(),dt=Xo(),qe.forEach((o,l)=>{o.startSynchronized(l)}),no("spin")}function Qs(o,l,p=1400){if(f(typeof window,"undefined"))return;const a=document.getElementById("winLabel");if(!a)return;const r=a.querySelector(".face"),u=a.querySelector(".depth");if(!r||!u)return;a.classList.add("rolling");const g=performance.now(),m=l-o,R=T=>1-Math.pow(1-T,3);function M(T){const z=Math.min(1,(T-g)/p),h="WIN "+Math.round(o+m*R(z)).toLocaleString("en-US");r.textContent=h,u.textContent=h,z<1?requestAnimationFrame(M):(a.classList.remove("rolling"),a.classList.add("winHit"),setTimeout(()=>a.classList.remove("winHit"),450))}requestAnimationFrame(M)}function Zs(o){n(Se,e(Se)+o),n(it,e(it)+o);const l=e(bt);n(bt,ne(o,null,bt));const p=o>e(fe)*50?2e3:1400;if(Qs(l,o,p),e(O)&&n(Be,e(Be)+o),o>0){xe(eo);const a=o/e(fe);a>=10&&Bs(),Ge&&(a>=50?Ge.show():a>=20?setTimeout(()=>Ge.show(),200):a>=10&&setTimeout(()=>Ge.show(),400))}}function el(){e(nt)<Uo.length-1&&xe(nt)}function tl(){e(nt)>0&&xe(nt,-1)}function Te(o){n(ge,!0),n(Ue,ne(o,null,Ue)),n(J,!1),co()}function yt(){n(ge,!1),n(Ue,0),Oe=!1,f(we,null,!1)&&(clearTimeout(we),we=null)}function co(){if(!e(ge)||e(Ue)<=0){yt();return}console.log(...x("log",`Autoplay: Starting spin ${e(Ue)} rounds left`)),Jo(),xe(Ue,-1)}function ol(){confirm("Reset all statistics?")&&(n(Ye,0),n(Ve,0),n(it,0),n(eo,0),n(ht,0),n(so,0),n(mt,0),n(lo,0))}var Qo=Ql();Ll(o=>{var l=Dl();s(Ze(l)),W(o,l)});var Zo=Ze(Qo);{var sl=o=>{var l=Ul(),p=s(d(l),2),a=s(d(p));c(p);var r=s(p,2);{var u=y=>{var _=Nl(),E=s(d(_));c(_),X(()=>L(E,` ${e(He)??""}`)),W(y,_)};ee(r,y=>{e(He)&&y(u)})}var g=s(r,2),m=s(d(g));m.nodeValue=` ${be??""}`,c(g);var R=s(g,2),M=s(d(R));M.nodeValue=` ${de??""}`,c(R);var T=s(R,2),z=s(d(T));c(T);var v=s(T,2);{var h=y=>{var _=Hl(),E=d(_),$=d(E);c(E);var Me=s(E,2);Ct(Me,17,()=>ue,Wt,(Je,Z)=>{var V=Gl(),$l=d(V,!0);c(V),X(()=>L($l,e(Z))),W(Je,V)}),c(_),X(()=>L($,`Log (${ue.length??""})`)),W(y,_)};ee(v,y=>{ue.length>0&&y(h)})}c(l),X(()=>{L(a,` ${e(at)??""}`),L(z,` ${$e.a??""}`)}),W(o,l)};ee(Zo,o=>{(f(e(at),"Assets loaded successfully!",!1)||e(He))&&o(sl)})}var es=s(Zo,2);{var ll=o=>{var l=Xl(),p=s(d(l),2),a=d(p);c(p);var r=s(p,2);Ct(r,17,()=>e(Le),Wt,(R,M)=>{var T=Yl(),z=d(T);c(T),X(v=>L(z,`${e(M).count??""} × ${Ko[e(M).symbol]??""} = ${v??""} pistettä`),[()=>e(M).payout.toFixed(2)]),W(R,T)});var u=s(r,2);{var g=R=>{var M=Vl(),T=d(M),z=d(T);c(T),c(M),X(()=>L(z,`✨ ${e(Le)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),W(R,M)};ee(u,R=>{e(Le).length>0&&e(Le)[0].multiplier>1&&R(g)})}var m=s(u,2);c(l),X(R=>L(a,`${R??""} pistettä`),[()=>e(ae).toFixed(2)]),w("click",m,()=>{n(Re,!1),io(),console.log(...x("log","Win popup closed, ready for next spin"))}),W(o,l)};ee(es,o=>{e(ae)>0&&e(Re)&&o(ll)})}var ts=s(es,2);{var al=o=>{var l=ql(),p=s(d(l),8);c(l),X(a=>i(l,"style",`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.95);
    color: white;
    padding: ${30*e(t)}px;
    border-radius: ${15*e(t)}px;
    font-family: Arial, sans-serif;
    z-index: 3000;
    border: ${3*e(t)}px solid #ffd700;
    max-width: ${600*e(t)}px;
    max-height: ${a??""}px;
    overflow-y: auto;
    font-size: ${e(t)??""}em;
  `),[()=>Math.min(te*e(t)*.8,80*window.innerHeight/100)]),w("click",p,()=>{n(Xe,!1)}),W(o,l)};ee(ts,o=>{e(Xe)&&o(al)})}var os=s(ts,2);{var nl=o=>{var l=Kl(),p=d(l),a=s(d(p),4),r=d(a,!0);c(a);var u=s(a,2);c(p),c(l),X(g=>L(r,g),[()=>e(wt).toFixed(2)]),w("click",u,()=>{n(ao,!1),n(O,!1),n(Be,0),n(wt,0),Xt()}),w("mouseenter",u,g=>{g.currentTarget.style.transform="scale(1.05)",g.currentTarget.style.boxShadow="0 6px 20px rgba(255, 215, 0, 0.6)"}),w("mouseleave",u,g=>{g.currentTarget.style.transform="scale(1)",g.currentTarget.style.boxShadow="0 4px 15px rgba(255, 215, 0, 0.4)"}),W(o,l)};ee(os,o=>{e(ao)&&o(nl)})}var ss=s(os,2),po=d(ss),pt=d(po);i(pt,"style",`
        position: absolute;
        top: 0;
        left: 0;
        width: ${K}px;
        height: ${te}px;
      `);var uo=d(pt),fo=s(uo,2),ls=d(fo);{var il=o=>{var l=Jl(),p=d(l),a=s(p,2),r=s(a,2),u=s(r,2),g=s(u,2),m=s(g,2),R=s(m,2),M=s(R,2),T=s(M,2),z=s(T,2);c(l),X(()=>{i(l,"style",`
    position: absolute;
    bottom: ${(U+20)*e(t)}px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.95);
    padding: ${20*e(t)}px;
    border-radius: ${15*e(t)}px;
    border: ${3*e(t)}px solid #0088ff;
    box-shadow: 0 ${8*e(t)}px ${30*e(t)}px rgba(0, 136, 255, 0.6);
    z-index: 2000;
    min-width: ${250*e(t)}px;
  `),i(p,"style",`color: white; font-weight: bold; margin-bottom: ${15*e(t)}px; text-align: center; font-size: ${18*e(t)}px;`),i(a,"style",`
        width: 100%;
        padding: ${12*e(t)}px;
        margin-bottom: ${8*e(t)}px;
        background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
        color: white;
        border: none;
        border-radius: ${8*e(t)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*e(t)}px;
        box-shadow: 0 ${4*e(t)}px ${10*e(t)}px rgba(68, 170, 68, 0.4);
      `),i(r,"style",`
        width: 100%;
        padding: ${12*e(t)}px;
        margin-bottom: ${8*e(t)}px;
        background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
        color: white;
        border: none;
        border-radius: ${8*e(t)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*e(t)}px;
        box-shadow: 0 ${4*e(t)}px ${10*e(t)}px rgba(68, 170, 68, 0.4);
      `),i(u,"style",`
        width: 100%;
        padding: ${12*e(t)}px;
        margin-bottom: ${8*e(t)}px;
        background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
        color: white;
        border: none;
        border-radius: ${8*e(t)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*e(t)}px;
        box-shadow: 0 ${4*e(t)}px ${10*e(t)}px rgba(68, 170, 68, 0.4);
      `),i(g,"style",`
        width: 100%;
        padding: ${12*e(t)}px;
        margin-bottom: ${8*e(t)}px;
        background: linear-gradient(135deg, #4488ff 0%, #66aaff 100%);
        color: white;
        border: none;
        border-radius: ${8*e(t)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*e(t)}px;
        box-shadow: 0 ${4*e(t)}px ${10*e(t)}px rgba(68, 136, 255, 0.4);
      `),i(m,"style",`
        width: 100%;
        padding: ${12*e(t)}px;
        margin-bottom: ${8*e(t)}px;
        background: linear-gradient(135deg, #4488ff 0%, #66aaff 100%);
        color: white;
        border: none;
        border-radius: ${8*e(t)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*e(t)}px;
        box-shadow: 0 ${4*e(t)}px ${10*e(t)}px rgba(68, 136, 255, 0.4);
      `),i(R,"style",`
        width: 100%;
        padding: ${12*e(t)}px;
        margin-bottom: ${8*e(t)}px;
        background: linear-gradient(135deg, #ff8844 0%, #ffaa66 100%);
        color: white;
        border: none;
        border-radius: ${8*e(t)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*e(t)}px;
        box-shadow: 0 ${4*e(t)}px ${10*e(t)}px rgba(255, 136, 68, 0.4);
      `),i(M,"style",`
        width: 100%;
        padding: ${12*e(t)}px;
        margin-bottom: ${8*e(t)}px;
        background: linear-gradient(135deg, #ff8844 0%, #ffaa66 100%);
        color: white;
        border: none;
        border-radius: ${8*e(t)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*e(t)}px;
        box-shadow: 0 ${4*e(t)}px ${10*e(t)}px rgba(255, 136, 68, 0.4);
      `),i(T,"style",`
        width: 100%;
        padding: ${12*e(t)}px;
        margin-bottom: ${15*e(t)}px;
        background: linear-gradient(135deg, #ff4444 0%, #ff6666 100%);
        color: white;
        border: none;
        border-radius: ${8*e(t)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*e(t)}px;
        box-shadow: 0 ${4*e(t)}px ${10*e(t)}px rgba(255, 68, 68, 0.4);
      `),i(z,"style",`
        width: 100%;
        padding: ${10*e(t)}px;
        background: rgba(255, 255, 255, 0.1);
        color: #aaa;
        border: ${1*e(t)}px solid #555;
        border-radius: ${8*e(t)}px;
        cursor: pointer;
        font-size: ${14*e(t)}px;
      `)}),w("click",a,()=>{Te(10),n(J,!1)}),w("click",r,()=>{Te(25),n(J,!1)}),w("click",u,()=>{Te(50),n(J,!1)}),w("click",g,()=>{Te(100),n(J,!1)}),w("click",m,()=>{Te(200),n(J,!1)}),w("click",R,()=>{Te(500),n(J,!1)}),w("click",M,()=>{Te(1e3),n(J,!1)}),w("click",T,()=>{Te(5e3),n(J,!1)}),w("click",z,()=>{n(J,!1)}),W(o,l)};ee(ls,o=>{e(J)&&o(il)})}var go=s(ls,2);i(go,"src",`${P??""}/Control_leftend.png`);var kt=s(go,2),_t=d(kt),as=d(_t),vo=s(as,2),xo=d(vo),$t=s(xo,2),rl=d($t,!0);c($t);var ns=s($t,2);c(vo),c(_t);var bo=s(_t,2);i(bo,"src",`${P??""}/Control_divider.png`);var St=s(bo,2),is=d(St),ho=s(is,2),dl=d(ho,!0);c(ho),c(St);var mo=s(St,2);i(mo,"src",`${P??""}/Control_divider.png`);var wo=s(mo,2),yo=d(wo),rs=d(yo);c(yo),c(wo);var ko=s(wo,2);i(ko,"src",`${P??""}/Control_divider.png`);var Et=s(ko,2),Lt=d(Et),ds=s(Lt,2);c(Et);var _o=s(Et,2);i(_o,"src",`${P??""}/Control_divider.png`);var Rt=s(_o,2),Tt=d(Rt),cs=s(Tt,2);c(Rt);var Mt=s(Rt,2),ps=d(Mt),$o=s(ps,2),So=d($o),cl=d(So);c(So);var us=s(So,2),pl=d(us);c(us),c($o),c(Mt);var Eo=s(Mt,2);i(Eo,"src",`${P??""}/Control_divider.png`);var fs=s(Eo,2);c(kt);var gs=s(kt,2);i(gs,"src",`${P??""}/Control_rightend.png`),c(fo),c(pt),Ss(pt,o=>ro=o,()=>ro);var At=s(pt,2);At.textContent=`🛠️ DEBUG v${F}`;var vs=s(At,2);const ul=Ae(()=>e(ae)/e(fe)>=50?"jackpot":e(ae)/e(fe)>=20?"medium":"small");Ss(Fe(vs,{get winLevel(){return e(ul)},get winAmount(){return e(ae)},get vinylStartScale(){return Kt.vinylStartScale},get vinylEndScale(){return Kt.vinylEndScale},get sparkleScale(){return Kt.sparkleScale}}),o=>Ge=o,()=>Ge);var Ft=s(vs,2),xs=s(d(Ft),2);xs.textContent=`v${F}`;var Lo=s(xs,2),bs=s(d(Lo),2),fl=d(bs,!0);c(bs),c(Lo);var Ro=s(Lo,2),hs=s(d(Ro),2),gl=d(hs,!0);c(hs),c(Ro);var To=s(Ro,2),ms=s(d(To),2),vl=d(ms,!0);c(ms),c(To);var Mo=s(To,2),Ao=s(d(Mo),2),xl=d(Ao);c(Ao),c(Mo);var Fo=s(Mo,2),Po=s(d(Fo),2),bl=d(Po);c(Po),c(Fo);var zo=s(Fo,2),ws=s(d(zo),2),hl=d(ws,!0);c(ws),c(zo);var Co=s(zo,2),ys=s(d(Co),2),ml=d(ys,!0);c(ys),c(Co);var Wo=s(Co,2),ks=s(d(Wo),2),wl=d(ks);c(ks),c(Wo);var _s=s(Wo,2),$s=s(_s,2),Ke=d($s),yl=d(Ke);c(Ke);var Pt=s(Ke,2),ut=s(Pt,2),kl=d(ut);c(ut);var Oo=s(ut,2);c($s),c(Ft);var ft=s(Ft,2),_l=d(ft,!0);return c(ft),c(po),c(ss),X((o,l,p,a,r,u,g,m)=>{i(po,"style",`
    position: relative;
    width: ${K*e(t)}px;
    height: ${te*e(t)}px;
  `),i(uo,"style",`
          position: absolute;
          top: ${130*e(t)}px;
          right: ${20*e(t)}px;
          padding: ${10*e(t)}px ${15*e(t)}px;
          background-color: rgba(255, 215, 0, 0.3);
          border: ${2*e(t)}px solid rgba(255, 215, 0, 0.7);
          border-radius: ${8*e(t)}px;
          cursor: pointer;
          font-weight: bold;
          font-size: ${16*e(t)}px;
          color: white;
          text-shadow: 0 0 ${5*e(t)}px rgba(0,0,0,0.8);
          z-index: 1000;
          min-width: ${180*e(t)}px;
        `),i(fo,"style",`
        position: absolute;
        left: ${((Vt?Vt.x:ke)+je)*e(t)}px;
        top: ${(ye+tt)*e(t)}px;
        width: ${e(gt)*e(t)}px;
        height: ${U*e(t)}px;
        display: flex;
        align-items: center;
        z-index: 1000;
      `),i(go,"style",`height: ${U*e(t)}px; flex-shrink: 0;`),i(kt,"style",`
    flex-grow: 1;
    height: ${U*e(t)}px;
    background-image: url('${P??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 ${20*e(t)}px;
  `),i(_t,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*e(t)}px;`),i(as,"style",`color: #00ff00; font-size: ${12*e(t)}px; font-weight: bold;`),i(vo,"style",`display: flex; gap: ${5*e(t)}px; align-items: center;`),i(xo,"style",`
            width: ${40*e(t)}px;
            height: ${40*e(t)}px;
            background-image: url('${P??""}/Control_lowerbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),i($t,"style",`
          color: #fff;
          font-size: ${18*e(t)}px;
          font-weight: bold;
          min-width: ${80*e(t)}px;
          text-align: center;
          font-family: 'Courier New', monospace;
        `),L(rl,o),i(ns,"style",`
            width: ${40*e(t)}px;
            height: ${40*e(t)}px;
            background-image: url('${P??""}/Control_upperbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),i(bo,"style",`height: ${U*.8*e(t)}px; flex-shrink: 0;`),i(St,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*e(t)}px;`),i(is,"style",`color: #00ff00; font-size: ${12*e(t)}px; font-weight: bold;`),i(ho,"style",`
        color: #fff;
        font-size: ${20*e(t)}px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      `),L(dl,l),i(mo,"style",`height: ${U*.8*e(t)}px; flex-shrink: 0;`),jo(yo,1,`play-button-wrapper ${(e(qt)?"glare-animate":"")??""}`,"svelte-o2kwxd"),i(rs,"style",`
            width: ${130*e(t)}px;
            height: ${130*e(t)}px;
            background-image: url('${P??""}/Control_playbutton.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
            opacity: 1;
            position: relative;
            z-index: 10;
            border-radius: 50%;
          `),i(ko,"style",`height: ${U*.8*e(t)}px; flex-shrink: 0;`),i(Et,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*e(t)}px;`),i(Lt,"style",`
          width: ${50*e(t)}px;
          height: ${50*e(t)}px;
          background-image: url('${P??""}/${(e(ge)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),i(Lt,"title",e(ge)?"Stop Autoplay":"Autoplay"),i(ds,"src",`${P??""}/${(e(ge)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),i(ds,"style",`width: ${50*e(t)}px; height: auto;`),i(_o,"style",`height: ${U*.8*e(t)}px; flex-shrink: 0;`),i(Rt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*e(t)}px;`),i(Tt,"style",`
          width: ${50*e(t)}px;
          height: ${50*e(t)}px;
          background-image: url('${P??""}/Control_fastplay_select.png');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),i(Tt,"title",`Spin Speed: ${(f(e(le),"slow")?"Slow":f(e(le),"medium")?"Medium":"Fast")??""}`),i(cs,"src",`${P??""}/${(f(e(le),"slow")?"Control_bar_deselect.png":f(e(le),"medium")?"Control_half_bar_select.png":"Control_bar_select.png")??""}`),i(cs,"style",`width: ${50*e(t)}px; height: auto;`),i(Mt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*e(t)}px;`),i(ps,"style",`color: #00ff00; font-size: ${12*e(t)}px; font-weight: bold;`),i($o,"style",`font-size: ${20*e(t)}px;`),L(cl,`WIN ${p??""}`),L(pl,`WIN ${p??""}`),i(Eo,"style",`height: ${U*.8*e(t)}px; flex-shrink: 0;`),i(fs,"style",`
        width: ${50*e(t)}px;
        height: ${50*e(t)}px;
        background-image: url('${P??""}/Control_menubar.png');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        background-color: transparent;
      `),i(gs,"style",`height: ${U*e(t)}px; flex-shrink: 0;`),i(At,"style",`
    position: absolute;
    top: ${190*e(t)}px;
    right: ${20*e(t)}px;
    padding: ${10*e(t)}px ${15*e(t)}px;
    background-color: rgba(0, 255, 0, 0.3);
    border: ${2*e(t)}px solid rgba(0, 255, 0, 0.7);
    border-radius: ${8*e(t)}px;
    cursor: pointer;
    font-weight: bold;
    font-size: ${16*e(t)}px;
    color: white;
    text-shadow: 0 0 ${5*e(t)}px rgba(0,0,0,0.8);
    z-index: 10000;
    min-width: ${180*e(t)}px;
    pointer-events: auto;
  `),i(Ft,"style",`
  position: absolute;
  top: 20px;
  left: 20px;
  display: ${(e(Qt)?"block":"none")??""};
  background: rgba(0, 0, 0, 0.9);
  color: #00ff00;
  padding: 15px 20px;
  border-radius: 10px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  border: 2px solid #00ff00;
  box-shadow: 0 4px 15px rgba(0, 255, 0, 0.3);
  z-index: 1500;
  min-width: 200px;
`),L(fl,a),L(gl,r),L(vl,u),i(Ao,"style",`color: ${g??""};`),L(xl,`${e(to)??""}%`),i(Po,"style",`color: ${m??""};`),L(bl,`${e(oo)??""}%`),L(hl,e(ht)),L(ml,e(so)),L(wl,`${e(Is)??""}%`),Ke.disabled=f(e(Q).length,0),i(Ke,"style",`
        width: 100%;
        padding: 5px;
        background: ${(e(Q).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(e(Q).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(e(Q).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(e(Q).length>0?"1":"0.5")??""};
      `),L(yl,`Download Win Log (${e(Q).length??""})`),Pt.disabled=f(e(Q).length,0),i(Pt,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(e(Q).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(e(Q).length>0?"1":"0.5")??""};
      `),i(ut,"style",`
        width: 100%;
        padding: 5px;
        background: ${(e(pe)?"rgba(255, 215, 0, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(e(pe)?"#ffd700":"#666")??""};
        border-radius: 5px;
        cursor: pointer;
        font-size: 11px;
        margin-bottom: 5px;
      `),L(kl,`🎵 Music: ${(e(pe)?"ON":"OFF")??""}`),Oo.disabled=e(O),i(Oo,"style",`
        width: 100%;
        padding: 5px;
        background: ${(e(O)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(e(O)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(e(O)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(e(O)?"0.5":"1")??""};
      `),i(ft,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    display: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(e(ce)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(e(ce)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),i(ft,"title",e(ce)?"Mykistä äänet":"Laita äänet päälle"),L(_l,e(ce)?"🔊":"🔇")},[()=>e(fe).toFixed(2),()=>e(Se).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>e(bt).toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0}),()=>e(Ye).toLocaleString(),()=>e(Ve).toLocaleString(),()=>e(it).toLocaleString(),()=>parseFloat(e(to))>=95?"#00ff00":parseFloat(e(to))>=85?"#ffff00":"#ff6666",()=>parseFloat(e(oo))>=30?"#00ff00":parseFloat(e(oo))>=20?"#ffff00":"#ff6666"]),w("click",uo,()=>{n(Xe,!e(Xe))}),w("click",xo,tl),w("click",ns,el),w("click",rs,()=>{e(ge)&&yt(),Jo()}),w("click",Lt,()=>{e(ge)?yt():n(J,!e(J))}),w("click",Tt,()=>{f(e(le),"slow")?n(le,"medium"):f(e(le),"medium")?n(le,"fast"):n(le,"slow")}),w("click",fs,()=>{n(Xe,!e(Xe))}),w("click",At,()=>{n(Qt,!e(Qt))}),w("click",_s,ol),w("click",Ke,Ds),w("click",Pt,Ns),w("click",ut,Ws),w("click",Oo,Gs),w("click",ft,()=>{n(ce,!e(ce))}),W(I,Qo),Nt({...Bt()})}jt(H);It();Ie[A]="src/components/PasswordProtection.svelte";var Zl=B(G('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),Ie[A],[[50,8]]),ea=B(G('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>'),Ie[A],[[31,2,[[32,4,[[33,6],[34,6],[36,6,[[37,8],[44,8]]]]]]]]);function Ie(I,k){Ot(new.target),Dt(k,!1,Ie);let F=Qe(k,"isAuthenticated",12,!1),q=Io(""),K=Io(!1);const te="slot2024";function Pe(){f(e(q),te)?(F(!0),sessionStorage.setItem("gameAuthenticated","true")):(n(K,!0),n(q,""),setTimeout(()=>n(K,!1),3e3))}Ms(()=>{F(f(sessionStorage.getItem("gameAuthenticated"),"true"))}),Tl();var N=Rs(),ie=Ze(N);{var et=he=>{var ye=ea(),U=d(ye),ke=s(d(U),4),je=d(ke);Cl(je),Ml(2),c(ke);var tt=s(ke,2);{var ot=me=>{var De=Zl();W(me,De)};ee(tt,me=>{e(K)&&me(ot)})}c(U),c(ye),zl(je,()=>e(q),me=>n(q,me)),w("submit",ke,Wl(Pe)),W(he,ye)};ee(ie,he=>{F()||he(et)})}return W(I,N),Nt({...Bt()})}jt(Ie);It();Gt[A]="src/routes/+page.svelte";var ta=B(G("<!> <!>",1),Gt[A],[]);function Gt(I,k){Ot(new.target),Dt(k,!1,Gt);let F=Io(!1);var q=ta(),K=Ze(q);Al(()=>e(F),Ie),Ie(K,{get isAuthenticated(){return e(F)},set isAuthenticated(N){n(F,N)},$$legacy:!0});var te=s(K,2);{var Pe=N=>{H(N,{})};ee(te,N=>{e(F)&&N(Pe)})}return W(I,q),Nt({...Bt()})}jt(Gt);export{Gt as component};
