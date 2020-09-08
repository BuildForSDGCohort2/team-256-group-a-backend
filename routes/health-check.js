const express = require('express');
const router = express.Router();

router.get('/health-check', function(req, res) {
  res.status(200).json();
});

module.exports = router;
