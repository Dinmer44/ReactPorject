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

const HomeDesign = () => { 
    let data = useContext(gContext)
    let { path, url } = useRouteMatch();
    

    const [innerHome, setInnerHome] = useState([]);

    useEffect (() =>{
        if(data.length!=0){
           setInnerHome(data.homeDesign)
          
           
        }
       
    }, [data])
    
    
    return <div>
        
            <Route path={`${path}`} exact >
        <ul>
              { innerHome.map((m, index) => (<li key={index}>
                <Link to={`${url}/${index}`}>
                <img src={`./Pictures/${m.imgName}`}></img></Link>
              </li>)) }     
            </ul>
            </Route>
            <Route path={`${path}/:id`}>
                    <Details category={"homeDesign"}/>
                </Route>
                
    </div>
}


export default HomeDesign;