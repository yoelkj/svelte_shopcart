import url from "./URL";

export default async() =>{
    const response =  await fetch(`${url}/api/products?populate=image`).catch(error => console.log(error));
    
    if(response){
        const products = await response.json();
        return products.error ? null : products.data;
    }else{
        return null
    }

    
}