<script>
  import CartButton from "../Cart/CartButton.svelte";
  import globalStore from "../../stores/globalStore"
  let openSidebar = globalStore.toggleItem

</script>

<nav class="navbar">
    <div class="nav-center">
        <!---Sidebar Toggle-->
        <button class="btn-sidebar-toggle" on:click={() => {
            openSidebar('sidebar', !$globalStore.sidebar)
        }}>
            <i class="fas fa-bars"></i>
        </button>
        <!--Logo-->
        <a href="/" class="nav-logo">
            <img src="/assets/images/logo.svg" class="logo" alt="Razors Logo">
        </a>
        <!--Cart button-->
        <CartButton></CartButton>
    </div>
</nav>