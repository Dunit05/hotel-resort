const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const randomstring = require('randomstring');
const sgMail = require('@sendgrid/mail');

// Routes
router.post('/save', (req, res) => {
  const { fname, lname, email, checkIn, checkOut, creditCard } = req.body;
  const key = randomstring.generate({
    length: 6,
    uppercase: true,
    charset: 'alphanumeric',
  });

  const booking = new Booking({
    fname: fname,
    lname: lname,
    email: email,
    checkIn: checkIn,
    checkOut: checkOut,
    creditCard: creditCard,
    key: key,
  });
  booking.save();

  sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
  const msg = {
    to: email,
    from: 'Resort Hotel Booking <tommy.05.tdm@gmail.com>', // Use the email address or domain you verified above
    subject: 'New Booking #' + key,
    text:
      'Hello ' +
      fname +
      ', thank you for booking with us, all you need is your booking ID: ' +
      key +
      '. We will see you on ' +
      checkIn +
      '.',
  };
  //ES6
  sgMail.send(msg).then(
    () => {},
    (error) => {
      console.error(error);
    }
  );
});

module.exports = router;
