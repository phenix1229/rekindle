import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './components/pages/Home';
import Alerts from './components/layout/Alerts';
import setAuthToken from './utils/setAuthToken';
import './App.css'
import store from './store'

if(localStorage.token){
  setAuthToken(localStorage.token);
}

class App extends Component {

  render () {
    return (
      <Provider store={ store }>
      <Router>
      <>
        <Navbar />
        <div className="container">
          <Alerts />
          <Switch>
            <Route exact path = '/' component={Home} />
            <Route exact path = '/register' component={Register} />
            <Route exact path = '/login' component={Login} />
          </Switch>
        </div>
        <Footer />
      </>
      </Router>
      </Provider>
    )
  }
}

export default App