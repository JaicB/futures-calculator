import React, { Component } from 'react'
import Axios from 'axios'
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
      <div className='specs'>
        <h2>Specs Placeholder</h2>
          <table>
            <tr>
              <th>Futures name</th>
              <th>Column 2</th>
              <th>Column 3</th>
            </tr>
            {this.state.specs.map((element) => {
              return (
                <tr>
                  <td>{element.futures}</td>
                  <td>row - detail</td>
                  <td>row - detail</td>
                </tr>
              )
            })}
        </table>
      </div>
    )
  }  
}

export default Specs