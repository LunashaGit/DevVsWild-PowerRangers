const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const signalSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  lon: {
    type: Number,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  // expire
  expireAt: {
    type: Date,
    default: Date.now,
    index: { expires: 1 / 1000 },
  },
});

signalSchema.index({ expireAt: "1s" }, { expireAfterSeconds: 0 });

const Signal = mongoose.model("Signal", signalSchema);

module.exports = Signal;
