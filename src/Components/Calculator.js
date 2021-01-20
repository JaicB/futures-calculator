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
      rewardRisk: '',
      showDetails: false
    }
  }

  calculate() {
    const potentialReward = ((this.state.target - this.state.entry) * this.state.contracts * this.props.details.point_value)
    const potentialRisk = ((this.state.entry - this.state.stop) * this.state.contracts * this.props.details.point_value)
    const rewardRisk = ((this.state.target - this.state.entry) / (this.state.entry - this.state.stop))

    this.setState({
      potentialReward,
      potentialRisk,
      rewardRisk,
      showDetails: true
    })
  }

  render() {
    return (
      <div className='calculator'>
        <div className="calc-container">
          <div className="section-header"><h3>Calculator</h3></div>
          <div className="calc-details">
            <input onChange={(e) => this.setState({ entry: e.target.value })} placeholder="Entry" />
            <input onChange={(e) => this.setState({ target: e.target.value })} placeholder="Target" />
            <input onChange={(e) => this.setState({ stop: e.target.value })} placeholder="Stop" />
            <select className="calc-select" onChange={(e) => this.setState({ contracts: e.target.value })}>
              <option value={""}># of Contracts</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
        {
          this.state.showDetails ? (
            <div>
              <h4>Reward: ${this.state.potentialReward}</h4>
              <h4>Risk: ${this.state.potentialRisk}</h4>
              <h4>Reward/Risk: {this.state.rewardRisk} : 1</h4>
              <h4>Tick Value: {this.props.details.tick_value}</h4>
            </div>
          ) : null
        }
          </div>
          <button className="button"onClick={(e) => this.calculate()}>Calculate</button>
        </div>
      </div >
    )
  }
}

export default Calculator