///stripe.js
require("dotenv").config();
const router = require("express").Router();
const KEY = process.env.STRIPE_SECRET_KEY_MY
const stripe = require('stripe')(KEY);

router.post("/payment", (req, res) => {

  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;