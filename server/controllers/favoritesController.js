module.exports = {

  favorites: (req, res) => { 
    const dbInstance = req.app.get('db');

    dbInstance.get_favorites(req.session.user.id)
    .then((response) => res.status(200).send({ favorites: response }))
    .catch(err => {
      res.status(500).send({ errorMessage: "Woopsa Daisy! Something's wrong." });
      console.log(err)
    });
  },

  addToFavorites: (req, res) => { // req.body (future, glbx_symbol, contract_months, tick, tick_value, tick_per_point, point_value, req.session.user.id)
    const dbInstance = req.app.get('db');
    const { future, glbx_symbol, contract_months, tick, tick_value, tick_per_point, point_value } = req.body;

    dbInstance.add_favorite(future, glbx_symbol, contract_months, tick, tick_value, tick_per_point, point_value, req.session.user.id)
    .then(() => res.sendStatus(200))
    .catch(err => {
      res.status(500).send({ errorMessage: "Error. Failed to add to table" });
      console.log(err)
    });
  },

  updateFavorites: (req, res) => { //req.params(id), req.body(notes)
    const dbInstance = req.app.get('db');
    const { id } = req.params;
    const { notes } = req.body;
    
    dbInstance.update_favorites(id, notes)
    .then(() => res.sendStatus(200))
    .catch(err => {
      res.status(500).send({ errorMessage: "Woopsa Daisy! Something's wrong." });
      console.log(err)
    });
  },

  removeFromFavorites: (req, res) => { //req.params(id)
    const dbInstance = req.app.get('db');
    const { id } = req.params;

    dbInstance.remove_favorite(id)
    .then(() => res.status(200).send({message: "success"}))
    .catch(err => {
      res.status(500).send({ errorMessage: "Error. Failed to add to delete Future." });
      console.log(err)
    });
  }

}