import { writable, derived } from "svelte/store";

import url from "../strapi/URL";

import getProducts from "../strapi/getProducts";

//import localProducts from "$lib/localProducts";
//const store = writable(flattenProducts([...localProducts]));

let data = [];

const store = writable([], () => {
    

    if (typeof window !== 'undefined'){
        setProducts()
    }

    return () => {};

});

async function setProducts(){
    let products = await getProducts();
    if(products) { 
        products = flattenProducts(products);
        
        console.log(products);
        
        store.set(products);
    }
}

function flattenProducts(data){
    
    return data.map(item => {

        let attributes = item.attributes;
        let image =  `${url}${attributes.image.data.attributes.url}`;//item.image.url;
        let title = attributes.title;
        let description = attributes.description;//item.image.url;
        let featured = attributes.featured;//item.image.url;
        let price = attributes.price;//item.image.url;

        return {...item, image, title, description, featured, price};

    });

}

export const featuredStore = derived(store, $featured => {
    
    return $featured.filter(item => item.featured === true);
})

export default store;