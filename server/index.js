require('dotenv'). config();
const express = require('express');
const massive = require('massive');
const loginCtrl = require('./controllers/loginControllers');
const marketsCtrl = require('./controllers/marketsController');
const favoritesCtrl = require('./controllers/favoritesController');
const session = require('express-session');
const bcrypt = require('bcryptjs');

const app = express();
app.use(express.json());

app.use(session({
  secret: "mega hyper ultra secret",
  saveUninitialized: false,
  resave: false,
}));

const { SERVER_PORT, CONNECTION_STRING } = process.env

//Login endpoints
app.post('/api/login', loginCtrl.login); //done
app.post('/api/user', loginCtrl.createUser); //done
app.put('/api/user', loginCtrl.updateUser); 

//Markets endpoints
app.get('/api/markets', marketsCtrl.allMarkets);
app.get('/api/market-data/:market', marketsCtrl.market);
app.get('/api/all-data', marketsCtrl.getSpecsTable);

//Favorites endpoints
app.get('/api/favorites', favoritesCtrl.favorites);
app.post('/api/favorites', favoritesCtrl.addToFavorites);
app.put('/api/favorites/:id', favoritesCtrl.updateFavorites);
app.delete('/api/favorites/:id', favoritesCtrl.removeFromFavorites);


massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false}
}).then((dbInstance) => {
  console.log('DB Ready')
  app.set('db', dbInstance);
}).catch(err => console.log(err));

app.listen(SERVER_PORT, () => {
  console.log(`Server is up and running on ${SERVER_PORT}.`);
});