const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Routes
router.post('/save', (req, res) => {
  const data = req.body;

  const booking = new Booking(data);
  booking.save();
});

module.exports = router;
