import {observable} from 'mobx';


export const products= observable([
  
    
]);
export let sum = observable(0);
export let item = observable(0);

export const addProduct = (product) =>{
    
    products.push(product);
    
    
    sum+=product.price
    item+=1;
   

    
}