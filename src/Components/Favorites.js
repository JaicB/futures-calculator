import axios from 'axios';
// import express from 'express';
import React, { Component } from 'react'

class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: "",
      input: ""
    }
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

  render() {
    console.log(this.props.favs)
    return (
        <div className="favorite-container">
            <div className="section-header"><h3>Favorite Futures</h3></div>
          <div className="favorite-details">
            {this.props.favs.map((element) => {
              return (
                  <div className="favorite-entry">
                    <div className="favorite-entry-details">
                      <span onClick={() => this.deleteFromFavorites(element.id)}>X</span>
                      <span>{element.future}</span>
                      <span>{element.glbx_symbol}</span>
                      <h4>Notes: {element.notes}</h4>
                    </div>
                    <div className="new-notes">
                      <textarea className='favs_input' placeholder="Add notes here:" onChange={(e) => this.setState({notes: e.target.value})}/>
                      <button className="save-notes" onClick={(e) => {this.updateFavorites(element.id)}}>Add</button>
                    </div>
                  </div>
                )
              }
            )}
          </div>

        </div>
    )
  }
}

export default Favorites