<script>
    
    //Data
    import products, {featuredStore} from "../../stores/products";
    //Components    
    import Product from "./Product.svelte";
    import Loading from "../Loading.svelte";
    
    //Props
    export let title = "";
    
</script>

<section class="section">
    <h2 class="section-title">{title}</h2>
    <div class="products-center">

        {#if $featuredStore.length}

            {#each $featuredStore as product (product.id)}
                <Product {product} />
            {/each}

        {:else}
            <Loading/>
        {/if}
        
        
    </div>
</section>