import { Howl } from 'howler';
import { chooseBackgroundMusicLoop, type BackgroundMusicLoop, type StandaloneAssetManifest } from './assets';

export class MusicRuntime {
	private background:Howl|null=null;
	private free:Howl|null=null;
	private drum:Howl|null=null;
	private win:Howl|null=null;
	private loop:BackgroundMusicLoop|undefined;
	private timers=new Set<ReturnType<typeof setTimeout>>();
	private tracks=new Set<Howl>();
	private disposed=false;
	constructor(private readonly assets:StandaloneAssetManifest['musicUrls'],private readonly enabled:()=>boolean,private readonly freeMode:()=>boolean,private readonly soundEnabled:()=>boolean) {}
	private later(callback:()=>void,ms:number) {
		const timer=setTimeout(()=>{this.timers.delete(timer);if(!this.disposed) callback();},ms);
		this.timers.add(timer);
	}
	private track(url:string,volume:number,loop=false,onload?:()=>void) {
		const track=new Howl({src:[url],volume,loop,onload,onloaderror:()=>console.warn(`Audio load failed: ${url}`)});
		this.tracks.add(track);return track;
	}
	initialize() {
		if(this.background||this.disposed) return;
		this.loop=chooseBackgroundMusicLoop(this.assets.backgroundLoops);
		this.background=this.track(this.loop.url,.3,true);
		this.free=this.track(this.assets.freeSpins,.3,true);
		this.drum=this.track(this.assets.drumHit,.5);
		this.win=this.track(this.assets.winTheme,.6);
	}
	start() {
		const track=this.freeMode()?this.free:this.background;
		if(track&&this.enabled()&&!track.playing()) {track.volume(.3);track.play();}
	}
	changeLoop() {
		if(this.freeMode()||this.disposed) return;
		this.loop=chooseBackgroundMusicLoop(this.assets.backgroundLoops,this.loop);
		const old=this.background;
		if(old) {
			if(old.playing()) {old.fade(old.volume(),0,200);this.later(()=>{old.stop();old.unload();this.tracks.delete(old);},200);}
			else {old.unload();this.tracks.delete(old);}
		}
		let replacement:Howl;
		replacement=this.track(this.loop.url,.3,true,()=>this.later(()=>{
			if(this.background===replacement&&this.enabled()&&!this.freeMode()&&!replacement.playing()) replacement.play();
		},300));
		this.background=replacement;
	}
	stop() {
		for(const track of [this.background,this.free]) if(track?.playing()) {
			track.fade(track.volume(),0,500);this.later(()=>track.stop(),500);
		}
	}
	switchMode() {this.stop();this.later(()=>this.start(),600);}
	finishRound() {
		const track=this.background;
		if(track?.playing()) {track.fade(track.volume(),0,1000);this.later(()=>{track.stop();track.volume(.3);},1000);}
	}
	playDrum() {if(this.enabled()&&this.soundEnabled()) this.drum?.play();}
	playWin() {if(this.enabled()&&this.soundEnabled()) this.win?.play();}
	dispose() {
		this.disposed=true;for(const timer of this.timers) clearTimeout(timer);this.timers.clear();
		for(const track of this.tracks) {track.stop();track.unload();}this.tracks.clear();
	}
}
