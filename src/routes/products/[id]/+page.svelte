<script>

    //Data
    import products from "../../../stores/defaultProducts";
    import { page } from '$app/stores';
    
    //Components
    import Loading from "../../../components/Loading.svelte";

    //Global store
    import globalStore from "../../../stores/globalStore"

    const productId = $page.params.id;

    $: product = $products.find(item => item.id === parseInt(productId));


</script> 

<svelte:head>
    <title>{(product) ? product.title : 'Single product'}</title>
</svelte:head>

{#if !product}
    <Loading />
{:else}
    
    
    
    <section class="single-product">

        <a href="/products" class="btn btn-primary">Back to products</a>

        <div class="single-product-container">
            <article class="single-product-image">
                <img src="{product.image}" alt="{product.title}">
            </article>

            <article>
                <h1>{product.title}</h1>
                <h1>{product.price}</h1>
                <p>{product.description}</p>
                <button class="btn btn-primary" on:click={() => {
                    globalStore.toggleItem('cart', true)

                }} >
                    Add to cart test
                </button>
            </article>
        </div>

    </section>
{/if}