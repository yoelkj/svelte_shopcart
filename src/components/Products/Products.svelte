<script>
    //Data
    import products from "../../stores/defaultProducts";
    //Components    
    import Product from "./Product.svelte";
    import Loading from "../Loading.svelte";
    
    //Props
    export let title = "";

</script>

<section class="section">
    <h2 class="section-title">{title}</h2>
    <div class="products-center">

        {#each $products as product (product.id)}
            <Product {product} />
        {:else}
            <Loading/>
        {/each}
    </div>
</section>