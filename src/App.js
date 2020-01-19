import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Register from './components/Register';
import Home from './components/Home';
import Courses from './components/modals';
import Alert_Success from './components/Alert_Success';
import Alert_Fail from './components/Alert_Fail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      success: 'Registration will start soon'
    };

    this.onSubmit = fields => {
      this.setState({
        success: fields
      });
    };
  }

  render() {
    var showAlert;
    const message = this.state.success;
    if (this.state.success == true) {
      showAlert = <Alert_Success />;
    } else {
      showAlert = <Alert_Fail message={message} />;
    }

    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/'>
              <Home />
              <Courses />
            </Route>
            <Route path='/register'>
              <br />
              {showAlert}
              <Register onSubmit={fields => this.onSubmit(fields)} />
            </Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
