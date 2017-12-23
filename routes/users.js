var models  = require('../models');
var express = require('express');
var router = express.Router();

// allow CORS
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* GET users listing. */
router.get('/', (req, res, next) => {
  models.User.findAll().then((users) => {
    res.json({ users: users });
  });
});

router.post('/create', (req, res) => {
  models.User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  })
  .then((m) => {
    console.log('NEW USER ADDED TO DB');
    res.json({ user_id: m.id });
  });
});

// User.findOrCreate({where: {username: 'fnord'}, defaults: {job: 'something else'}}))


router.get('/:user_id/destroy', (req, res) => {
  models.User.destroy({
    where: {
      id: req.params.user_id
    }
  }).then(() => {
    res.redirect('/');
  });
});

router.post('/:user_id/rdt_user/create',  (req, res) => {
  models.RdtUser.create({
    title: req.body.title,
    UserId: req.params.user_id
  }).then(() => {
    res.redirect('/');
  });
});

router.get('/:user_id/rdt_user/:rdt_user_id/destroy',  (req, res) => {
  models.RdtUser.destroy({
    where: {
      id: req.params.rdt_user_id
    }
  }).then(() => {
    res.redirect('/');
  });
});


module.exports = router;
