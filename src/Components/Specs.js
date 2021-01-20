import React, { Component } from 'react'
import axios from 'axios';

class Specs extends Component {
  constructor() {
    super();

    this.state = {
      specs: [],
    }
  }

  componentDidMount() {
    axios.get('/api/all-data')
    .then((results) => {
      this.setState({
        specs: results.data.specsTable
      })
    }).catch(e => console.log(e))
  }

  render() {
    return (
      <div className='Specs'>
        <h2 style={{ padding: "5px", margin: "15px 0px 15px"}}>Futures Specs Table</h2>
          <table className="specs_table">
            <tr>
              <th>Futures Name</th>
              <th>Globex Symbol</th>
              <th>Market</th>
              <th>Contract Months</th>
              <th>Trading Hours</th>
              <th>Tick</th>
              <th>Tick Values</th>
              <th>Ticks Per Point</th>
              <th>Point Value</th>
              <th>Exchange</th>
            </tr>
            {this.state.specs.map((element) => {
              return (
                <tr>
                  <td>{element.future}</td>
                  <td>{element.glbx_symbol}</td>
                  <td>{element.market}</td>
                  <td>{element.contract_months}</td>
                  <td>{element.trade_hours}</td>
                  <td>{element.tick}</td>
                  <td>{element.tick_value}</td>
                  <td>{element.tick_per_point}</td>
                  <td>{element.point_value}</td>
                  <td>{element.exchange}</td>
                </tr>
              )
            })}
        </table>
      </div>
    )
  }  
}

export default Specs