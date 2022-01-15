import React,{useContext, useState, useEffect} from 'react'
import {gContext} from './DataContext'


function CreateProduct() {
    let allData = useContext(gContext)
    const [data, setData]= useState([])
    let categ = "boys";

    useEffect (() =>{
        if(allData.length!=0){
           setData(allData[categ])
          
          
           
        }
       
    }, [allData])
    
    
    console.log(data)
    const addProduct = (event) => {
        const form = event.target;
        categ = form.category.value;
        const product= {
            title: form.title.value,
        }
        
        form.reset();
        data.push(product)
        event.preventDefault();
        
    }

    return (<form onSubmit={addProduct} name="newProduct">
        <input type="text" name="title" placeholder="new product title" /> <br/>
        <select name="category" placeholder='Choose Category'>
        <option>boys</option>
        <option>girls</option>
        <option>babyBoys</option>
        <option>babyGirls</option>
        <option>women</option>
        </select>
       
        <button type="submit" >הוספה</button>
    </form>)
}

export default CreateProduct;

