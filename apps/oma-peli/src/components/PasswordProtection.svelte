<script lang="ts">
  import { onMount } from 'svelte';
  
  export let isAuthenticated = false;
  
  let password = '';
  let showError = false;
  
  // Salasana (tuotannossa tämä pitäisi olla monimutkaisempi)
  const CORRECT_PASSWORD = 'slot2024';
  
  function handleSubmit() {
    if (password === CORRECT_PASSWORD) {
      isAuthenticated = true;
      // Tallennetaan sessionStorageen
      sessionStorage.setItem('gameAuthenticated', 'true');
    } else {
      showError = true;
      password = '';
      setTimeout(() => showError = false, 3000);
    }
  }
  
  onMount(() => {
    // Tarkistetaan onko jo kirjautunut
    isAuthenticated = sessionStorage.getItem('gameAuthenticated') === 'true';
  });
</script>

{#if !isAuthenticated}
  <div class="auth-container">
    <div class="auth-box">
      <h2>🎰 Peli Access</h2>
      <p>Anna salasana päästäksesi peliin:</p>
      
      <form on:submit|preventDefault={handleSubmit}>
        <input 
          type="password" 
          bind:value={password}
          placeholder="Salasana..."
          class="password-input"
          autocomplete="off"
        />
        <button type="submit" class="submit-btn">
          Kirjaudu sisään
        </button>
      </form>
      
      {#if showError}
        <p class="error">❌ Väärä salasana!</p>
      {/if}
    </div>
  </div>
{/if}

<style>
  .auth-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }
  
  .auth-box {
    background: rgba(255, 255, 255, 0.95);
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    text-align: center;
    max-width: 400px;
    width: 90%;
  }
  
  h2 {
    margin: 0 0 1rem 0;
    color: #333;
    font-size: 1.5rem;
  }
  
  p {
    margin: 0 0 1.5rem 0;
    color: #666;
  }
  
  .password-input {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #ddd;
    border-radius: 0.5rem;
    font-size: 1rem;
    margin-bottom: 1rem;
    box-sizing: border-box;
  }
  
  .password-input:focus {
    outline: none;
    border-color: #2a5298;
  }
  
  .submit-btn {
    width: 100%;
    padding: 0.75rem;
    background: #2a5298;
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s;
  }
  
  .submit-btn:hover {
    background: #1e3c72;
  }
  
  .error {
    color: #e74c3c;
    font-weight: bold;
    margin-top: 1rem;
  }
</style>