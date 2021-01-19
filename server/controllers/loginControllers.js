const bcrypt =  require('bcrypt');

module.exports = {

  login: (req, res) => {
    const dbInstance = req.app.get('db');
    const { email_address, password } = req.body

    dbInstance.user_login(email_address)
      .then((response) => {
        if (response.length) {
          bcrypt.compare(password, response[0].password).then(passwordsMatch => {
            if (passwordsMatch) {
              req.session.user = response[0];
              res.status(200).send({ user: req.session.user });
            } else {
              res.status(403).send({ errorMessage: 'Wrong password' })
            }
          })
        } else {
          res.status(403).send({ errorMessage: "That user is not registered" })
        }
      })
      .catch(err => {
        res.status(500).send({ errorMessage: "Failed to login." });
        console.log(err)
      });
  },

  createUser: (req, res) => {
    const dbInstance = req.app.get('db');
    const { full_name, email_address, password } = req.body;

    const saltRounds = 12;

    bcrypt.hash(password, saltRounds).then((hashedPassword) => {
        dbInstance.create_user(full_name, email_address, hashedPassword)
          .then((response) => {
            res.status(200).send({user_email: response[0].email_address})
          })
          .catch(err => {
            res.status(500).send({ errorMessage: "Failed to create user." });
            console.log(err)
          });
      }).catch(err => {
        console.log({err})
        res.status(500).json({ errorMessage: 'Failed to hash password'})
      })
  },

  updateUser: (req, res) => { //req.body (full_name, email_address)
    const dbInstance = req.app.get('db');
    const { full_name, email_address } = req.body;

    dbInstance.update_user(full_name, email_address)
    .then(() => res.sendStatus(200))
    .catch(err => {
      res.status(500).send({ errorMessage: "Failed to update user." });
      console.log(err)
    });
  }

}