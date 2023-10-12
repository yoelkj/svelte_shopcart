<script>
    
    import { blur, fade, fly } from 'svelte/transition';
    import globalStore from '../../stores/globalStore'
    import ItemsList from './ItemsList.svelte';

    import user from '../../stores/userStore';

</script>

<div class="cart-overlay" transition:blur>
    <div class="cart-container" transition:fly={{x:100}}>
        <div class="cart" transition:fade={{delay:400}}>
            
            <!--Cart header-->
            <div class="cart-header">
                <button class="btn-close" on:click={()=>{
                    globalStore.toggleItem('cart', false)
                }}>
                    <i class="fas fa-window-close"></i>
                </button>

                <h2 class="cart-title">Your Bag</h2>
                <span />
            </div>
            <!--END cart header-->
            <ItemsList></ItemsList>

            <!--Cart items-->
            <!--END cart items-->


            <!--Cart footer-->
            <div class="cart-login">
                
                {#if $user.jwt }
                    <a href="/checkout" 
                       class="btn btn-primary btn-block"
                       on:click={() => {
                        globalStore.toggleItem('cart', false)
                       }}   
                       >Checkout</a>
                {:else}
                    <p>
                        In order to checkout please 
                        <a href="/login" 
                        class=""
                        on:click={() => {
                            globalStore.toggleItem('cart', false)
                        }}   
                        >Login</a>
                    </p>
                
                {/if}

            </div>
            <!--END cart footer-->

        </div>
    </div>
</div>