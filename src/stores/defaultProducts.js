import localProducts from "$lib/localProducts";
import { writable } from "svelte/store";

const store = writable(flattenProducts([...localProducts]));

function flattenProducts(data){
    return data.map(item => {
       let image = item.image.url;  
        return {...item, image};
    }); 
}

export default store;