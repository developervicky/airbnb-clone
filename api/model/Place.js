const mongoose = require("mongoose");
const { Schema } = mongoose;

const placeSchema = new Schema({
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  ownerName: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  title: String,
  address: String,
  country: String,
  state: String,
  city: String,
  description: String,
  photos: [String],
  amenities: [String],
  maxGuests: Number,
  bedrooms: Number,
  beds: Number,
  bathrooms: Number,
  checkIn: String,
  checkOut: String,
  extraInfo: String,
});

const placeModel = mongoose.model("place", placeSchema);

module.exports = placeModel;
