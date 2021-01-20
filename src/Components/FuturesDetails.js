import React, { Component } from 'react'
import Calculator from './Calculator'
import Favorites from './Favorites'
import axios from 'axios'

class FuturesDetails extends Component {
  constructor() {
    super();

    this.state = {
      futures: [],
      selectedFuture: {},
      favorites: [],
    }
  }

  componentDidMount() {
    axios.get(`/api/market-data/${this.props.match.params.market}`)
      .then((results) => {
        this.setState({
          futures: results.data.futures
        })
      }).catch(e => console.log(e))
    this.getFavorites()
  }

  getFavorites = () => {
    axios.get('/api/favorites')
      .then((results) => {
        this.setState({
          favorites: results.data.favorites
        })
      }).catch(e => console.log(e))
  }

  addToFavorites = (e) => {
    axios.post('/api/favorites', this.state.selectedFuture)
      .then((results) => {
        this.getFavorites()
      }).catch(e => console.log(e))
  }

  render() {
    console.log(this.state.favorites)
    return (
      <div className='futuresDetails'>
        
        {/* select */}
        <div className="select-view">
          <p>Select Futures from the dropdown to set up the calculator</p>
          <select onChange={(e) => {
            const future = this.state.futures.filter(element => element.id == e.target.value)
            return this.setState({ selectedFuture: future[0] })
          }}
          >
            <option value=""></option>
            {this.state.futures.map((element) => {
              return <option value={element.id}>{element.future}</option>
            })}
          </select>
        </div>

        {/* symbol box and favorite button */}
        <div className="symbol-container">
          {/* symbol details box */}
          <div className="symbol-view">
            <div className="section-header"><h3>Symbol Details</h3></div>
            <div className="symbol-details">
              <h4>{this.state.selectedFuture.future}</h4>
              <h4>{this.state.selectedFuture.glbx_symbol}</h4>
              <h4>{this.state.selectedFuture.contract_months}</h4>
              <h4>{this.state.selectedFuture.tick}</h4>
              <h4>{this.state.selectedFuture.tick_value}</h4>
              <h4>{this.state.selectedFuture.point_value}</h4>
            </div>
          </div>
          <button className="button" onClick={(e) => {
            this.addToFavorites()
          }}>Favorite</button>
        </div>

        <Calculator details={this.state.selectedFuture} />

        <div className="symbol-container">
          {/* symbol details box */}
          <div className="symbol-view">
            <div className="section-header"><h3>Months Key</h3></div>
            <div className="month-details">
              <h4>Jan: F</h4>
              <h4>Feb: G</h4>
              <h4>Mar: H</h4>
              <h4>Apr: J</h4>
              <h4>May: K</h4>
              <h4>Jun: M</h4>
              <h4>Jul: N</h4>
              <h4>Aug: Q</h4>
              <h4>Sept: U</h4>
              <h4>Oct: V</h4>
              <h4>Nov: X</h4>
              <h4>Dec: Z</h4>
            </div>
          </div>
        </div>
        <Favorites favs={this.state.favorites} fetchFavorites={() => this.getFavorites()} />

      </div>
    )
  }
}

export default FuturesDetails