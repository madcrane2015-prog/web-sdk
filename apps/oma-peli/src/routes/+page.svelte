<script lang="ts">
  import HelloPixi from "../components/HelloPixi.svelte";
  import PasswordProtection from "../components/PasswordProtection.svelte";
  
  let isAuthenticated = false;
</script>

<PasswordProtection bind:isAuthenticated />

{#if isAuthenticated}
  <div
    style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;"
  >
    HELLO MAD CRANE 👋 (oma peli käynnissä)
  </div>

  <HelloPixi />
{/if}
