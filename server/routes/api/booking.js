const express = require("express");
const router = express.Router();

// Load Booking model
const Booking = require("../../models/Booking");

/**
 * @route GET api/booking/user
 * @description Get user bookings
 * @access Public
 */
router.get("/:user_id", (req, res) => {
  Booking.find({ user_id: req.params.user_id })
    .exec()
    .then((tours) => res.json(tours))
    .catch((err) => res.status(404).json({ message: "No bookings found" }));
});

/**
 * @route POST api/booking/user
 * @description Get user bookings
 * @access Public
 */
router.post("/:user_id", (req, res) => {
  Booking.create({ user_id: req.params.user_id, tour_id: req.body.tour_id })
    .then((booking) => res.json({ msg: "Booking added successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to book this tour" })
    );
});

module.exports = router;
