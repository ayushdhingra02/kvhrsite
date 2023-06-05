import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import './components/Searchbar.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Signin from './components/pages/Signin';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Signin from './components/pages/Signin';
import About from './components/pages/About';
import Head from './components/pages/Head';
import Management from './components/pages/Management';
import Candidate from './components/pages/Candidate';
import Recruiter from './components/pages/Recruiter';
import Client from './components/pages/Client';
import Sidebar from './components/Sidebar';
// import { Searchbar } from './components/Searchbar';
function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signin/:userType' component={Signin} />
        <Route path='/about' component={About} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/head' component={Head} />
        <Route path='/management' component={Management} />
        <Route path='/client' component={Client} />
        <Route path='/recruiter' component={Recruiter} />
        <Route path='/candidate' component={Candidate} />
  </Switch>
    </Router> 
  );
}

export default App;
