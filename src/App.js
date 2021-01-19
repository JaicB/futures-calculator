import logo from './logo.svg';
import React from 'react'
import Header from './Components/Header'
import Login from './Components/Login'
import Home from './Components/Home'
import FuturesDetails from './Components/FuturesDetails'
import Specs from './Components/Specs'
import Footer from './Components/Footer'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import { connect } from 'react-redux'
import { loginUser } from './ducks/userReducer'

function App() {
  return (
    <div className="App">
      <Header className="header"/>
      <Switch> 
        <Route exact path='/' component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/futuresDetails/:market' component={FuturesDetails} />
        <Route path='/specs' component={Specs} />
      </Switch>
      <Footer />  
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { loginUser })(App);
