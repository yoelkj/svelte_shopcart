<script>
  import CartButton from "../Cart/CartButton.svelte";
  import links from "../../constants/links";
  import LoginLink from "../LoginLink.svelte";
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
                <LoginLink></LoginLink>
                <CartButton></CartButton>
            </div>
        </div>

    </div>
</nav>