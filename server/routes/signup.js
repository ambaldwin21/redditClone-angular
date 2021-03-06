var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var cookieSession = require('cookie-session');
var bcrypt = require('bcrypt');

router.post('/', (req, res, next) => {
    knex('users')
        .where('email', req.body.email)
        .then((user) => {
            if (user.length === 0) {
                const hashed_password = bcrypt.hashSync(req.body.password, 12)
                const newUser = {
                    name: req.body.name,
                    email: req.body.email,
                    hash: hashed_password
                }

                knex('users')
                    .insert(newUser, '*')
                    .then((user) => {
                        const id = user[0].id
                        knex('users')
                            .where('id', id)
                            .first()
                            .then((returnUserObject) => {
                                req.session.userInfo = returnUserObject;
                                res.send('User signed up!')
                            })
                    })
            } else {
              const error = {
                message: 'Already a user, please log in!'
              }
              res.status(403)
              res.json(error)
            }
        })
})

module.exports = router;
