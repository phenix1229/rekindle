import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Alerts from './components/layout/Alerts';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './components/pages/Home'
import ContactState from './context/contact/ContactState'
import AuthState from './context/auth/AuthState'
import AlertState from './context/alert/AlertState'
import setAuthToken from './utils/setAuthToken';
import './App.css';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <Provider store={store}>
    <AuthState>
    <ContactState>
    <AlertState>
    <Router>
    <>
      <Navbar />
      <div className="container">
        <Alerts></Alerts>
        <Switch>
          <Route exact path = '/' component={Home} />
          <Route exact path = '/register' component={Register} />
          <Route exact path = '/login' component={Login} />
        </Switch>
      </div>
      <Footer />
    </>
    </Router>
    </AlertState>
    </ContactState>
    </AuthState>
    </Provider>
  );
}

export default App;
