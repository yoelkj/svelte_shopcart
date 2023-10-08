<script>

    //Styles
    import '$lib/global.css';
    import '$lib/fontawesome-free-5.11.2-web/css/all.min.css';
    
    //Components
    import Navbar from '../components/Navbar/Navbar.svelte';
    import Sidebar from '../components/Navbar/Sidebar.svelte';
    
    import globalStore from '../stores/globalStore';
  import Cart from '../components/Cart/Cart.svelte';

    //let openSidebar = globalStore.toggleItem
    console.log($globalStore, $globalStore.sidebar);

</script>


<Navbar></Navbar>

{#if $globalStore.sidebar}
<Sidebar></Sidebar>
{/if}

{#if $globalStore.cart}
<Cart></Cart>
{/if}
<!--<Navbar></Navbar>-->

<slot></slot>