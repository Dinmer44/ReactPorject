import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Women from './components/Women';
import Men from './components/Men';
import Girls from './components/Girls';
import Boys from './components/Boys';
import BabyBoys from './components/BabyBoys';
import BabyGilrs from './components/BabyGilrs';
import HomeDesign from './components/HomeDesign';
import JustLanded from './components/JustLanded';
import DataContext from './components/DataContext';
import CreateProduct from './components/CreateProduct';
import CashBox from './components/CashBox'


function App() {
  return (
    <Router>
    <div className="app">
    <nav>
        <ul>
            <li><Link to="/sports">SPORTS</Link></li>
            <li><Link to="/beauty">BEAUTY</Link></li>
            <li><Link to="/living">LIVING</Link></li>
            <li><Link to="/outlet">OUTLET</Link></li>
            <li><Link to="/women">נשים</Link></li>
            <li><Link to="/men">גברים</Link></li>
            <li><Link to="/girls">בנות</Link></li>
            <li><Link to="/boys">בנים</Link></li>
            <li><Link to="/babyBoys">בייבי בנים</Link></li>
            <li><Link to="/babyGirls">בייבי בנות</Link></li>
            <li><Link to="/homeDesign">עיצוב הבית</Link></li>
            <li><Link to="/cashBox">לקופה</Link></li>
            <li><Link to="/">JUST LANDED</Link></li>
            
           
          </ul>
    </nav>
    <Switch>
      <DataContext>
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
           <Route path="/admin"><CreateProduct/></Route>
           <Route path="/cashBox"><CashBox/></Route>
           <Route path="/" exact>
          <JustLanded/>
           </Route> 
           </DataContext>
    </Switch>

</div>
</Router>
  );
}

export default App;