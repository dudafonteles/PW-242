const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Portfolio page');
});

module.exports = router;
