import axios from 'axios';
import React, { Component } from 'react'

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entry: '',
      target: '',
      stop: '',
      contracts: '',
      potentialReward: '',
      potentialRisk: '',
      rewardRisk: ''
    }
  }

  calculate() {
    const potentialReward = ((this.state.target - this.state.entry) * this.state.contracts * this.props.details.point_value)
    const potentialRisk = ((this.state.entry - this.state.stop) * this.state.contracts * this.props.details.point_value)
    const rewardRisk = ((this.state.target - this.state.entry)/(this.state.entry - this.state.stop))
    this.setState({
      potentialReward,
      potentialRisk,
      rewardRisk
    })
  }

  render() {
    return (
      <div className='calculator'>
        <h4>Calculator Placeholder</h4>
        <div>
          <div>
            <span>Entry</span>
            <input onChange={(e) => this.setState({ entry: e.target.value })} placeholder="Entry" />
          </div>
          <input onChange={(e) => this.setState({ target: e.target.value })} placeholder="Target" />
          <input onChange={(e) => this.setState({ stop: e.target.value })} placeholder="Stop" />
          <select onChange={(e) => this.setState({ contracts: e.target.value })}>
            <option value={""}># of Contracts</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <button onClick={(e) => this.calculate()}>Calculate</button>
        <div>
          <h4>${this.state.potentialReward}</h4>
          <h4>${this.state.potentialRisk}</h4>
          <h4>{this.state.rewardRisk} : 1</h4>
          <h4>{this.props.details.tick_value}</h4>
        </div>
      </div >
    )
  }
}

export default Calculator