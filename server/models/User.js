import mongoose from "mongoose";

const User = new mongoose.Schema({
  imageUrl: {
    type: String,
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
  birthday: {
    type: Date,
  },
  points: {
    type: Number,
    default: 0
  },
  clerkId: {
    type: String,
    required: true,
    unique: true
  },
  appointments: {
    type: Array,
    default: []
  },
});


export default mongoose.model("User", User);