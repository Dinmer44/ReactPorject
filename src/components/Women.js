import React,{useContext, useEffect, useState} from 'react'
import {gContext} from './DataContext'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    Link
  } from "react-router-dom";
import Details from './Details';

const Women = () => {
    let data = useContext(gContext)
    let { path, url } = useRouteMatch();
    

    const [innerWomen, setInnerWomen] = useState([]);

    useEffect (() =>{
        if(data.length!=0){
           setInnerWomen(data.women)
          
           
        }
       
    }, [data])
    
    
    return <div>
        
            <Route path={`${path}`} exact >
        <ul>
              { innerWomen.map((m, index) => (<li key={m.price/m.sizes[index]*4/3.2}>
                <Link to={`${url}/${index}`}>{m.title}
                <img src={`./Pictures/${m.imgName}`}></img></Link>
              </li>)) }     
            </ul>
            </Route>
            <Route path={`${path}/:id`}>
                    <Details category={"women"}/>
                </Route>
                
    </div>
}

export default Women;