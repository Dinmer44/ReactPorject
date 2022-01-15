import { observer } from 'mobx-react';
import { products,item, sum} from './Payment'




const CashBox = () => {
  
    
    
    return (products?<div>
        <h3>תיק קניות</h3>
        <h5>הסל שלך מכיל {item} פריטים ומגיע לסך של {sum}.00 ש"ח </h5>
       
        {products.map(prod =><ul key={prod.name} >
              <li >{prod.name}</li>
             <li> מידה: {prod.size}</li>
              <li>מחיר: {prod.price}</li><br></br>
                <img src={prod.imgName}></img><br></br>
                
                </ul>
               ) }
               <span>סכום הזמנה: {sum}.00 ש"ח</span><br></br>
        
       <button>לקופה</button> 
    </div>:'')
}

export default observer(CashBox);