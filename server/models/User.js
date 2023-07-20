import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      min: 3,
      max: 50,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      require: true,
      min: 3,
      max: 50,
    },
    city: String,
    state: String,
    country: String,
    occupation: String,
    phoneNumber: {
      type: String,
      min: 10,
      max: 10,
    },
    transactions: Array,
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "admin",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
