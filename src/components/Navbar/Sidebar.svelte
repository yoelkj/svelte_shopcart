<script>
  import { fade, fly } from "svelte/transition";
    import links from "../../constants/links";
    import globalStore from "../../stores/globalStore"


    import LoginLink from "../LoginLink.svelte";

    let openSidebar = globalStore.toggleItem
</script>

<div class="sidebar-container" transition:fly={{x:-1000}}>
    
    <div class="sidebar" transition:fade={{delay:400}}>
        <div class="sidebar-header">
            <button class="btn-close" on:click={()=>{
                openSidebar('sidebar', !$globalStore.sidebar)
            }}>
                <i class="fas fa-window-close"></i>
            </button>    
        </div>

        <img class="logo sidebar-logo" src="/assets/images/logo.svg" alt="Razors logo">

        <ul class="sidebar-links">
            {#each links as navLink}
                <li><a on:click={() =>{
                    openSidebar('sidebar', !$globalStore.sidebar);
                }} href="{navLink.link}">{navLink.text}</a></li>
            {/each}
            <li>
                <LoginLink></LoginLink>
            </li>
        </ul>

    </div>
    
    


</div>
