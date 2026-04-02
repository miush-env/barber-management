import mongoose from "mongoose";

const User = new mongoose.Schema({
  photo: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  point: {
    type: Number
  }

});

export default mongoose.model("User", User);