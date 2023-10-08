<script>
    import globalStore from "../../stores/globalStore"
</script>
<!--Cart toggle-->
<div class="btn-cart-container">
    <button class="btn-cart-toggle" on:click={ () => {
        globalStore.toggleItem('cart', !$globalStore.cart)
    }}>
        <i class="fas fa-cart-plus"></i>
    </button>
    <span class="btn-cart-items">10</span>
</div>