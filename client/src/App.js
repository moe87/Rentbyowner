import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import AddHouse from "./components/pages/AddHouse";
import ViewHomes from "./components/pages/ViewHomes";
import EditHouse from "./components/pages/EditHouse";
import AddAppt from "./components/pages/AddAppt";
import RentHouse from "./components/pages/RentHouse";
import Footer from "./components/pages/Footer";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faHome, faSignInAlt, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch, faHome, faSignInAlt, faSignOutAlt, faUserPlus);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/addHouse" component={AddHouse}/>
          <Route exact path="/viewHomes" component={ViewHomes}/>
          <Route exact path="/editHouse/:id" component={EditHouse}/>
          <Route exact path="/addAppt/:id" component={AddAppt}/>
          <Route exact path="/rentHouse/:id" component={RentHouse}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
