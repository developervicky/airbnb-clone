const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookingSchema = new Schema({
  place: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Place" },
  checkinDate: { type: Date, required: true },
  checkoutDate: { type: Date, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  noGuests: { type: Number, required: true },
  phone: { type: String, required: true },
  price: Number,
});

const bookingModel = mongoose.model("booking", bookingSchema);

module.exports = bookingModel;
