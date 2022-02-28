const mongoose = require("mongoose");

const cryptoDetails = new mongoose.Schema({
    base_unit: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    last: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    volume: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    sell: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    buy: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    slno: {
      type: Number,
      required: true,
      trim: true,
    }
  });
  
  const crypto = mongoose.model("cryptoDetails", cryptoDetails);

 module.exports = crypto