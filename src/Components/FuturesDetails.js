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
        <h2>Futures Details Placeholder</h2>
        <h3>Market Dropdown Placeholder</h3>
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
        <h3>Symbol Details Placeholder</h3>
        <button onClick={(e) => {
          this.addToFavorites()
        }}>Favorite</button>
        <div>
          <h4>{this.state.selectedFuture.future}</h4>
          <h4>{this.state.selectedFuture.glbx_symbol}</h4>
        </div>
        <h3>Months Key Placeholder</h3>
        <Calculator details={this.state.selectedFuture}/>
        <Favorites favs={this.state.favorites} fetchFavorites={() => this.getFavorites()}/>
      </div>
    )
  }
}

export default FuturesDetails