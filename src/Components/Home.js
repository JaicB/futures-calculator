import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component {
  constructor() {
    super();

    this.state = {
      markets: []
    }
  }

  componentDidMount() {
    axios.get('/api/markets')
      .then((results) => {
        this.setState({
          markets: results.data.markets
        })
      }).catch(e => console.log(e))
  }

  render() {
    console.log(this.state.markets)
    return (
    <div className="Home">
      <div className="markets">
        <h2>Markets Placeholder</h2>
          <ol>Market Type</ol>
           {this.state.markets.map((element) => {
             return <li onClick={() => {this.props.history.push(`/futuresDetails/${element}`)}}>{element}</li>
           })}
      </div>
      <div className="mini_calc">
        <h2>Calculator Placeholder</h2>
        <form id="my-form">
          <h3>"Futures Dropdown"</h3>
          <input type="text" placeholder="# of contracts" />
          <input type="text" placeholder="Entry" />
          <input type="password" placeholder="Stop" />
          <input type="password" placeholder="Target" />
        </form>
      </div>
      <div className="mini_table">
        <h2>SpecsTable Placeholder</h2>
        <img className="table" src={"http://placeimg.com/800/500/tech"} />
      </div>
    </div>
  )}
}

export default Home;