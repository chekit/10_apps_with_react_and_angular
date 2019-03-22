import './App.css';

import React, { Component, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import About from './pages/About';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Jumbotron />
          <div className="container">
            <Route exact path="/" component={Home as any} />
            <Route path="/about/" component={About as any} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
