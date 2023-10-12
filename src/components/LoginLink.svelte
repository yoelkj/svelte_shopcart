<script>
    import user from "../stores/userStore";
    import globalStore from "../stores/globalStore";
    
    
</script>

{#if $user.jwt} 
    <a href="/"     
        class="logout-btn"
        on:click={() => {
            globalStore.toggleItem('sidebar', false)
        }}>
    Logout</a>
{:else} 
    
    <a href="/login"     
            class="logout-btn"
            on:click={() => {
                globalStore.toggleItem('sidebar', false)
            }}>
        Login</a>

{/if}