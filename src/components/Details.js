import React,{useContext} from 'react'
import {gContext} from './DataContext'
import { useParams } from 'react-router-dom';
import {addProduct as addProductToState} from './Payment'


const Details = (props) => {

   
    
    let data = useContext(gContext)
    const {id}= useParams();
    const product = data[props.category]
    
   
    const addProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const prod = {
            name: product[id].title,
            price: product[id].price,
            size: form.selectSize.value,
            imgName: `/Pictures/${product[id].imgName}`
        }

        
       
        addProductToState(prod);
        
        
    }
    return  ( product ? <div> 
        <form onSubmit={addProduct} name="addProd">
    <span> { product[id].title } </span>  <br />
    <span> { product[id].price } ש"ח </span><br />
    מידה:<select placeholder="בחר מידה" name="selectSize">
     {product[id].sizes.map((p, index)=>
     p==0 ? <option className="red" key={index} >{" אזל מהמלאי "}{index}</option>: 
    
     <option key={index}>{index}{" "}</option>
       )}
        </select><br></br>
    <img src={`/Pictures/${product[id].imgName}`}/><br></br>
    <button type="submit" >הוספה לסל</button>
    </form>
   </div> : ''  )
}
export default Details;

