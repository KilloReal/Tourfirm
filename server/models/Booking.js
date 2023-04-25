const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  tour_id: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
});

module.exports = Booking = mongoose.model("booking", BookingSchema);
