<script lang="ts">
	import HelloPixi from '../../components/HelloPixi.svelte';
	import { BookRoundProvider } from '../../game-standalone/roundProvider';
	import { adaptBookRound } from '../../game-standalone/bookAdapter';
	const board=[['a','emptyslot','emptyslot'],['a','emptyslot','emptyslot'],['h'],['emptyslot','emptyslot','emptyslot'],['emptyslot','emptyslot','emptyslot']].map(column=>column.map(name=>({name})));
	const outcome=adaptBookRound({type:'reveal',board},[{symbol:'a',kind:3,win:450,positions:[{reel:0,row:0},{reel:1,row:0},{reel:2,row:0}]}],amount=>amount/100);
	const provider=new BookRoundProvider([outcome]);
</script>

{#if import.meta.env.DEV}
	<HelloPixi roundProvider={provider} payoutMode="legacy" />
{:else}
	<p>Esimerkkipeli on käytettävissä vain paikallisesti.</p>
{/if}
