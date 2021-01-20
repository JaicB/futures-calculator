import React, { Component } from 'react'
import axios from 'axios'
import img from '../mini_specs_table.jpg'

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
          <h2>Market Type</h2>
          <ol style={{ padding: "10px" }}>Select a Market below to utilize Futures calculator.</ol>
          {this.state.markets.map((element) => {
            return <li style={{ padding: "5px" }}
            onClick={() => { this.props.history.push(`/futuresDetails/${element}`) }}>{element}</li>
          })}
        </div>
        {/* <div className="mini_calc">
        <h2>Calculator Placeholder</h2>
        <form id="my-form">
          <h3>"Futures Dropdown"</h3>
          <input type="text" placeholder="# of contracts" />
          <input type="text" placeholder="Entry" />
          <input type="password" placeholder="Stop" />
          <input type="password" placeholder="Target" />
        </form>
      </div> */}
        <div className="mini_table">
          <h2>SpecsTable Placeholder</h2>
          <p style={{ padding: "10px" }}>Click below to view our Specs Table. This is a breakdown of select Futures contracts and their components.</p>
          <img className="image" src={img} onClick={() => { this.props.history.push(`/specs`) }}/>
        </div>
      </div>
    )
  }
}

export default Home;