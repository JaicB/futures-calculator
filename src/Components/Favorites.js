import axios from 'axios';
import e from 'express';
import React, { Component } from 'react'

class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: "",
      input: ""
    }
    this.input = this.input.bind(this)
  }

  updateFavorites = (id) => {
    axios.put(`/api/favorites/${id}`, { notes: this.state.notes })
    .then((results) => {
      this.setState({
        notes: ""
      })
      this.props.fetchFavorites()
    })
  }

  deleteFromFavorites = (id) => {
    axios.delete(`/api/favorites/${id}`)
    .then((results) => {
      this.props.fetchFavorites()
    })
  }

  addNote = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    console.log(this.props.favs)
    return (
      <div className='favorites'>
        <h4>Favorite Futures</h4>
        {this.props.favs.map((element) => {
          return <div>
            <span onClick={() => this.deleteFromFavorites(element.id)}>X</span>
            <span>{element.future}</span>
            <span>{element.glbx_symbol}</span>
            <input className='favs_input' placeholder="Add notes here:" onChange={this.addNote()}/>
            <button onClick={(e) => this.addNote()}>Add</button>
          </div>
          }
        )}
      </div>
    )
  }
}

export default Favorites