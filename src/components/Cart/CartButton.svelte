<script>
    import globalStore from "../../stores/globalStore"
    import cart from "../../stores/cartStore";

    $: total = $cart.reduce((acc, curr) => {
        return (acc+= curr.amount);
    }, 0);
</script>
<!--Cart toggle-->
<div class="btn-cart-container">
    <button class="btn-cart-toggle" on:click={ () => {
        globalStore.toggleItem('cart', !$globalStore.cart)
    }}>
        <i class="fas fa-cart-plus"></i>
    </button>
    <span class="btn-cart-items">{total}</span>
</div>