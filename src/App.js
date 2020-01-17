import React, { Component } from 'react';
import {BrowserRouter , Switch , Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Register from './components/Register';
import Home from './components/Home'
import Courses from './components/modals'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/'>
              <Home/>
              <Courses/>
          </Route>
          <Route path='/register' component={Register} />
          {/* <Route path='/Contact' component={ContactUs} /> */}
        </Switch>
        <Footer/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;