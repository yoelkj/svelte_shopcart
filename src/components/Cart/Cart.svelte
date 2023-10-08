<script>
  import { blur, fade, fly } from 'svelte/transition';
    import globalStore from '../../stores/globalStore'

    let user = false;

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

        </div>
    </div>
</div>