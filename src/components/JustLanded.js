import React,{useContext, useEffect, useState} from 'react'
import {gContext} from './DataContext'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    Link
  } from "react-router-dom";
import Women from './Women';
import Men from './Men';
import Girls from './Girls';
import Boys from './Boys';
import BabyBoys from './BabyBoys';
import BabyGilrs from './BabyGilrs';
import HomeDesign from './HomeDesign';


const JustLanded = () => {
    let data = useContext(gContext)
    let { path, url } = useRouteMatch();
    

    const [innerLanded, setInnerLanded] = useState([]);

    useEffect (() =>{
        if(data.length!=0){
           setInnerLanded(data.justLanded)
          
           
        }
       
    }, [data])
    
    console.log(innerLanded)
    return <div className="aa">
    
        
            <Route path={`${path}`} exact >
        <ul>
              { innerLanded.map((m, index) => (<li key={index}>
                <Link to={`${m.category}`}>
                <img src={`./Pictures/${m.imgName}`}></img></Link>
              </li>)) }     
            </ul>
            </Route>
            <Switch>
            <Route path="/women">
          <Women/>
            </Route> 
        <Route path="/men">
            <Men/>
        </Route> 
        <Route path="/girls">
            <Girls/>
        </Route> 
        <Route path="/boys" >
          <Boys/>
           </Route> 
           <Route path="/babyBoys" >
          <BabyBoys/>
           </Route> 
           <Route path="/babyGirls" >
          <BabyGilrs/>
           </Route> 
           <Route path="/homeDesign" >
          <HomeDesign/>
           </Route> 
           </Switch>
                
    </div>
}

export default JustLanded;