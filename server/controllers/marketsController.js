module.exports = {

  allMarkets: (req, res) => { // no body, params, or queries
    const dbInstance = req.app.get('db');

    dbInstance.get_markets()
    .then((response) => {
      const marketList = response.map(function(element, index, array) {
        return element.market
      })
      res.status(200).send({ markets: marketList })
    })
    .catch(err => {
      res.status(500).send({ errorMessage: "Error. Unable to load markets." });
      console.log(err)
    });
  },

  market: (req, res) => { //req.param (market)
    const dbInstance = req.app.get('db');
    const { market } = req.params;

    dbInstance.get_market(market)
    .then((market) => res.status(200).send({futures: market}))
    .catch(err => {
      res.status(500).send({ errorMessage: "Error. Unable to load market detail."});
      console.log(err)
    });
  },

  getSpecsTable: (req, res) => { // no body, params, or queries
    const dbInstance = req.app.get('db');

    dbInstance.get_table()
    .then((response) => res.status(200).send({ specsTable: response }))
    .catch(err => {
      res.status(500).send({ errorMessage: "Error. Unable to load our Futures Table." });
      console.log(err)
    });
  }

}