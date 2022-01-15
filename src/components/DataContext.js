import React, {createContext, useEffect,useState} from 'react'
import axios from 'axios'



export const gContext = createContext([]);

export default function DataContext(props){
    const [gData, setGData] = useState([]);
    useEffect(()=>{
        axios.get('data.json')
        .then((data)=>
        setGData(data.data))
        
    },[]);
   

    
    return (
        <gContext.Provider value={gData}>
         { props.children }
        </gContext.Provider>
        );
        
}



