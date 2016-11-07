var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var cookieSession = require('cookie-session');
var bcrypt = require('bcrypt');

router.post('/', (req, res, next) => {
  console.log('req.body in route', req.body);
    knex('users')
        .where('name', req.body.name)
        .first()
        .then((user) => {
            var passwordMatch = bcrypt.compareSync(req.body.password, user.hash)
            if (passwordMatch == false) {
                console.log('bad email or password in route!');
            } else {
                req.session.userInfo = user
                res.send('User logged in!')
            }
        })
});

module.exports = router;