import React, {Component} from 'react';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faIgloo} from '@fortawesome/free-solid-svg-icons';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

library.add(faIgloo);

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ni hao</h1>
        <div>
          Favorite Food: <FontAwesomeIcon icon="igloo"/>
        </div>
      </div>
    );
  }
}

export default App;
