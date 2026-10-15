/** UI callbacks cannot survive unmount or access a destroyed Pixi stage. */
export class Lifetime {
	private timers=new Set<number>();
	private frames=new Set<number>();
	private disposed=false;
	timeout(callback:()=>void,delay:number):number {
		if(this.disposed) return 0;
		const id=window.setTimeout(()=>{this.timers.delete(id);if(!this.disposed) callback();},delay);
		this.timers.add(id);return id;
	}
	cancel(id:number) {window.clearTimeout(id);this.timers.delete(id);}
	frame(callback:FrameRequestCallback):number {
		if(this.disposed) return 0;
		const id=window.requestAnimationFrame(time=>{this.frames.delete(id);if(!this.disposed) callback(time);});
		this.frames.add(id);return id;
	}
	dispose() {
		this.disposed=true;
		for(const id of this.timers) window.clearTimeout(id);
		for(const id of this.frames) window.cancelAnimationFrame(id);
		this.timers.clear();this.frames.clear();
	}
}
