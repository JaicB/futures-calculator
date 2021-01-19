import React, { Component } from 'react'
import Login from './Login'
import Home from './Home'
import Specs from './Specs'
import FuturesDetails from './FuturesDetails'
import axios from 'axios'

class Display extends Component {
  constructor () {
    super();
    this.state = {
      user: [],
      markets: [],
    }
  }

// Login Controllers/Endpoints
  // login = (email_address, password) => {
  //   axios.get('/api/user', {email_address, password })
  //   .then((results) => {
  //     console.log(results.data)
  //     this.setState({
  //       user: results.data
  //     })
  //   })
  // }

  // createNewUser = (full_name, email_address, password) => {
  //   axios.post('/api/user', { full_name, email_address, password })
  //   .then((results) => {
  //     this.setState({
  //       user: results.data
  //     })
  //   })
  // }

  // updateUser = (full_name, email_address) => {
  //   axios.put('/api/user', { full_name, email_address })
  //   .then((results) => {
  //     this.setState({
  //       user: results.data
  //     })
  //   })
  // }

//Markets Controllers/Endpoints
  // getAllMarkets = () => {
  //   axios.get('/api/markets').then((results) => {
  //     this.setState({
  //       markets: results.data,
  //     })
  //   })
  // }

  // getSingleMarket = (market) => {
  //   axios.get(`/api/market-data/${market}`)
  //   .then((results) => {
  //     this.setState({
  //       markets: results.data,
  //     })
  //   })
  // }

  // getSpecsTable = () => {
  //   axios.get('/api/markets').then((results) => {
  //     this.setState({
  //       markets: results.data
  //     })
  //   })
  // }

//Favorites Controllers/Endpoints
  getFavorites = () => {

  }

  addToFavorites = () => {

  }

  updateFavorites = () => {

  }

  deleteFromFavorites = () => {

  }
  render() {
    return (
    <div className="display">
      <Login />
      <Home />
      <Specs /> 
      <FuturesDetails />
    </div>
    )
  }
}

export default Display