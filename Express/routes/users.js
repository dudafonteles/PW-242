const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Users page');
});

router.get('/signup', (req, res) => {
  res.send('Signup page');
});

router.get('/signin', (req, res) => {
  res.send('Signin page');
});

module.exports = router;
