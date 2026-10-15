export interface StakeWallet { amount: number; currency: string; }
export interface StakeRound { active?: boolean; state?: unknown[]; event?: string; }
export interface StakeResponse { balance?: StakeWallet; round?: StakeRound; config?: unknown; error?: unknown; }
export interface StakeTransport {
	authenticate(): Promise<StakeResponse>;
	play(amount: number, currency: string): Promise<StakeResponse>;
	endRound(): Promise<StakeResponse>;
}
/** Wallet lifecycle is independent of rendering and never falls back to demo RNG. */
export class StakeSession {
	private pending=false;
	private unresolved=false;
	private active=false;
	private ready=false;
	private response:StakeResponse|null=null;
	constructor(private readonly transport:StakeTransport) {}
	get snapshot() { return {ready:this.ready,pending:this.pending,unresolved:this.unresolved,active:this.active,response:structuredClone(this.response)}; }
	async authenticate() {
		if(this.pending) throw new Error('Request already pending');
		this.pending=true;
		try {
			const response=await this.transport.authenticate();
			this.validate(response);
			this.response=response;this.active=response.round?.active??false;
			this.ready=true;this.unresolved=false;
			return structuredClone(response);
		} finally {this.pending=false;}
	}
	async play(amount:number) {
		if(!this.ready||this.pending||this.active||this.unresolved) throw new Error('Round cannot start');
		if(!Number.isFinite(amount)||amount<=0) throw new Error('Invalid wager');
		this.pending=true;
		try {
			const response=await this.transport.play(amount,this.response!.balance!.currency);
			this.validate(response);
			if(!response.round) throw new Error('Missing round');
			this.response=response;this.active=response.round.active??true;
			return structuredClone(response);
		} catch(error) {
			// A timeout does not prove that the server did not charge the bet.
			// Require authenticate/reconciliation rather than automatically retrying play.
			this.unresolved=true;throw error;
		} finally {this.pending=false;}
	}
	async endRound() {
		if(!this.active||this.pending||this.unresolved) throw new Error('Round cannot close');
		this.pending=true;
		try {
			const response=await this.transport.endRound();this.validate(response);
			this.response=response;this.active=false;return structuredClone(response);
		} catch(error) {this.unresolved=true;throw error;}
		finally {this.pending=false;}
	}
	private validate(response:StakeResponse) {
		if(response.error||!response.balance||!Number.isFinite(response.balance.amount)||response.balance.amount<0||!response.balance.currency) throw new Error('Invalid wallet response');
	}
}
