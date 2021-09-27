const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  carName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  carCount: {
    type: Number,
    required: true,
  },
});

UserSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

UserSchema.set("toJSON", {
  virtuals: true,
});

module.exports = Car = mongoose.model("car", UserSchema);
