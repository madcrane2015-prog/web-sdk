<script lang="ts">
  import HelloPixi from "../components/HelloPixi.svelte";
  import PasswordProtection from "../components/PasswordProtection.svelte";
  
  let isAuthenticated = false;
</script>

<PasswordProtection bind:isAuthenticated />

{#if isAuthenticated}
  <HelloPixi />
{/if}
