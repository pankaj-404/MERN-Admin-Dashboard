import mongoose from "mongoose";
import User from "../models/User.js";

export const grtAdmins = async (req, res) => {
  try {
    const customers = await User.find({ role: "admin" }).select(
      "-password -createdAt -updatedAt -transactions"
    );
    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
