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

const Girls = () => {
    let data = useContext(gContext)
    let { path, url } = useRouteMatch();
    

    const [innerGirls, setInnerGirls] = useState([]);

    useEffect (() =>{
        if(data.length!=0){
           setInnerGirls(data.girls)
          
           
        }
       
    }, [data])
    
    
    return <div>
        
            <Route path={`${path}`} exact >
        <ul>
              { innerGirls.map((m, index) => (<li key={index}>
                <Link to={`${url}/${index}`}>{m.title}
                <img src={`./Pictures/${m.imgName}`}></img></Link>
              </li>)) }     
            </ul>
            </Route>
            <Route path={`${path}/:id`}>
                    <Details category={"girls"}/>
                </Route>
                
    </div>
}

export default Girls;