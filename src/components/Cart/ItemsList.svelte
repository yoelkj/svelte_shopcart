<script>

  import Item from "./Item.svelte";
  import cart, {cartTotal, setStorageCart} from "../../stores/cartStore";
  import { fly } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { afterUpdate } from "svelte";

  afterUpdate(() => {
    setStorageCart($cart);
  })

</script>

<section class="cart-items">
    <article>
        {#each $cart as cartItem, index (cartItem.id)}
        <div 
          out:fly={{x:-100}}  
          in:fly={{delay:(index+1)*500, x:100}}
          animate:flip
          >  
          <Item {...cartItem}></Item>
        </div>
        {:else}
        <h2 class="empty-cart">Is currently empty...</h2>
        {/each}
    </article>

    <h3 class="cart-total">Total: ${$cartTotal}</h3>

</section>