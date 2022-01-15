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

const Boys = () => {
    let data = useContext(gContext)
    let { path, url } = useRouteMatch();
    

    const [innerBoys, setInnerBoyes] = useState([]);

    useEffect (() =>{
        if(data.length!=0){
           setInnerBoyes(data.boys)
          
           
        }
       
    }, [data])
    
    
    return <div>
        
            <Route path={`${path}`} exact >
        <ul>
              { innerBoys.map((m, index) => (<li key={index}>
                <Link to={`${url}/${index}`}>{m.title}
                <img src={`./Pictures/${m.imgName}`}></img></Link>
              </li>)) }     
            </ul>
            </Route>
            <Route path={`${path}/:id`}>
                    <Details category={"boys"}/>
                </Route>
                
    </div>
}

export default Boys;