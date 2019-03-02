import React, {Component} from 'react';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faIgloo} from '@fortawesome/free-solid-svg-icons';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
library.add(faIgloo);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <main>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
          </main>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
