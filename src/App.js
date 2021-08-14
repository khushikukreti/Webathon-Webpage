import React, { useState } from 'react'

import './App.css';
import Loadingpage from './component/Loadingpage';
import { BrowserRouter,Switch, Route, useLocation, useHistory } from "react-router-dom";
import HomePage from './component/HomePage';
import CulturalEvent1 from './component/CulturalEvent1';
import CulturalEvent2 from './component/CulturalEvent2';
import CulturalEvent3 from './component/CulturalEvent3';
import CulturalEvent4 from './component/CulturalEvent4';
import TechEvent1 from './component/TechEvent1';
import TechEvent2 from './component/TechEvent2';

function App() {
  const [loading,setLoading]=useState(true);
  // const location = useLocation();
  return (
    loading?<Loadingpage/>
    : 
    <BrowserRouter>
    <Switch >
      
      <Route path="/CulturalEvent1" component={CulturalEvent1}></Route>
      <Route path="/CulturalEvent2" component={CulturalEvent2}></Route>
      <Route path="/CulturalEvent3" component={CulturalEvent3}></Route>
      <Route path="/CulturalEvent4" component={CulturalEvent4}></Route>
      <Route path="/TechEvent1" component={TechEvent1}> </Route>
      <Route path="/TechEvent2" component={TechEvent2}></Route>
      <Route path="/" component={HomePage}></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
