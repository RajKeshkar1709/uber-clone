const mongoose = require("mongoose");

const captainSchema = new mongoose.Schema({
  fullName: {
    firstName: {
      type: String,
      required: true,
      minLength: [2, "give the min length"],
    },
    lastName: {
      type: String,
      minLength: [2, "give the min length"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    isLowerCase: true,
  },
  password: {
    type: String,
    required: true,
  },
  socketId: {
    type: String,
  },
  vehicle: {
    color: {
      type: String,
      required: true,
    },
    plate: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, "Capacity atleast must be 1"],
    },
    model:{
        type:String
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ["car", "motorcycle", 'auto'],
    },
    status: {
      type: String,
      required: true,
      enum: ["active", 'inactive'],
      default: "inactive",
    },
    loaction: {
      lat: {
        type: Number,
      },
      lng: {
        type: Number,
      },
    },
  },
});

const captainModel = mongoose.model("Captain", captainSchema);

module.exports = captainModel;
