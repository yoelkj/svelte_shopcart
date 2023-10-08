<script>
  import CartButton from "../Cart/CartButton.svelte";
  import links from "../../constants/links";
  console.log(links);
</script>
<nav class="navbar">
    <div class="nav-container">
        
        <div class="nav-center">
            <ul class="nav-links">
              {#each links as navLink}
                <li>
                  <a href="{navLink.url}">{navLink.text}</a>
                </li>  
              
              {/each}
            </ul>
            
            <a href="/" class="nav-logo big-logo">
                <img src="/assets/images/logo.svg" alt="Razor logo" class="logo">
            </a>
            
            <div class="nav-aside">
                <CartButton></CartButton>
            </div>
        </div>

    </div>
</nav>