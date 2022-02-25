import React from 'react';
import './App.css';
import Contact from "./Components/Contact";
import Crypto from "./Components/Crypto";
import Blockchain from "./Components/Blockchain";
import Learn from "./Components/Learn";
import NavBar from "./Components/Navbar"
import Home from "./Components/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Mint from './Components/Mint';


function App() {
  return (
    <div className="App">
        <Router>
        <NavBar />
 

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Home" component={Home}>
              <Home />
          </Route>
          <Route path="/Crypto" component={Crypto}>
              <Crypto />
          </Route>
          <Route path="/Blockchain" component={Blockchain}>
            <Blockchain />
          </Route>
          <Route path="/Learn" component={Learn}>
            <Learn />
          </Route>
          <Route path="/Mint" component={Mint}>
            <Mint />
          </Route>
          <Route path="/Contact" component={Contact}>
            <Contact />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
