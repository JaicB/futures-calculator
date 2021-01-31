import React, { Component } from 'react'
import axios from 'axios'
import img from '../mini_specs_table.jpg'
import img2 from '../currency.png'
import img3 from '../bond.png'
import img5 from '../metals.png'
import img4 from '../equity.png'
import img6 from '../energy.png'

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
          <p>Select a Market below to utilize our Futures calculator.</p>
          <ol></ol>
          <div className="market-images">
            <li>
              <img className="icon-image" src={img2} onClick={() => { this.props.history.push(`/futuresDetails/Currencies`) }} />
              <p className='market-types'>Currency</p>
            </li>
            <li>
              <img className="icon-image" src={img3} alt="" onClick={() => { this.props.history.push(`/futuresDetails/Bonds`) }} />
              <p className='market-types'>Bonds</p>
            </li>
            <li>
              <img className="icon-image" src={img5} alt="" onClick={() => { this.props.history.push(`/futuresDetails/Metals`) }} />
              <p className='market-types'>Metals</p>
            </li>
            <li>
              <img className="icon-image" src={img4} alt="" onClick={() => { this.props.history.push(`/futuresDetails/Equity`) }} />
              <p className='market-types'>Equity</p>
            </li>
            <li>
              <img className="icon-image" src={img6} alt="" onClick={() => { this.props.history.push(`/futuresDetails/Energy`) }} />
              <p className='market-types'>Energy</p>
            </li>
          </div>

          {/* {this.state.markets.map((element) => {
            return <li style={{ padding: "5px" }}
              onClick={() => { this.props.history.push(`/futuresDetails/${element}`) }}>{element}</li>
          })} */}
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
          <h2>Specs Table</h2>
          <p style={{ padding: "10px" }}>Click below to view our Specs Table. This is a breakdown of select Futures contracts and their elements.</p>
          <img className="image-specs" src={img} onClick={() => { this.props.history.push(`/specs`) }} />
        </div>
      </div>
    )
  }
}

export default Home;