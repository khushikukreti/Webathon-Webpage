import React, { useState, useEffect } from 'react'
import './App.css';
import Loadingpage from './component/Loadingpage';
import { BrowserRouter,Switch, Route, useLocation, useHistory } from "react-router-dom";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import HomePage from './component/HomePage';
import CulturalEvent1 from './component/CulturalEvent1';
import CulturalEvent2 from './component/CulturalEvent2';
import CulturalEvent3 from './component/CulturalEvent3';
import CulturalEvent4 from './component/CulturalEvent4';
import TechEvent1 from './component/TechEvent1';
import TechEvent2 from './component/TechEvent2';
import Headers from './component/Headers'
import HomePage2 from './component/HomePage2';

function App() {
  const [loading,setLoading]=useState(true);
  // const location = useLocation();
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [loading]);
  return (
      <AnimateSharedLayout type='crossfade'>
        <AnimatePresence exitBeforeEnter>
          {loading ? (
            <motion.div key='main-container'>
              <Loadingpage setLoading={setLoading} />
            </motion.div>
          ) : ( 
            <>
           
    <BrowserRouter>
    {/* <Headers></Headers> */}
    <Switch >
      <Route path="/CulturalEvent1" component={CulturalEvent1}></Route>
      <Route path="/CulturalEvent2" component={CulturalEvent2}></Route>
      <Route path="/CulturalEvent3" component={CulturalEvent3}></Route>
      <Route path="/CulturalEvent4" component={CulturalEvent4}></Route>
      <Route path="/TechEvent1" component={TechEvent1}> </Route>
      <Route path="/TechEvent2" component={TechEvent2}></Route>
      {/* <Route path="/" component={HomePage}></Route>
       */}
       <Route path="/" component={HomePage2}></Route>
    </Switch>
    </BrowserRouter>
    </>
          )}
    </AnimatePresence>
    </AnimateSharedLayout>
  );

}

export default App;