import localProducts from "$lib/localProducts";
import { writable, derived } from "svelte/store";

const store = writable(flattenProducts([...localProducts]));

function flattenProducts(data){
    return data.map(item => {
       let image = item.image.url;  
        return {...item, image};
    }); 
}

export const featuredStore = derived(store, $featured => {
    
    return $featured.filter(item => item.featured === true);
})

export default store;