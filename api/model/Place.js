const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  title: String,
  address: String,
  maxGuests: Number,
  bedrooms: Number,
  beds: Number,
  bathrooms: Number,
  description: String,
  photos: [String],
  amenities: [String],
  extraInfo: String,
  checkIn: Number,
  checkOut: Number,
});

const placeModel = mongoose.model("place", placeSchema);

module.exports = placeModel;
