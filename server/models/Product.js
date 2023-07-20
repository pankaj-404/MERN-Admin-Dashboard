import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      min: 3,
      max: 50,
    },
    price: {
      type: Number,
      require: true,
    },
    description: {
      type: String,
      require: true,
      min: 5,
      max: 200,
    },
    category: {
      type: String,
      require: true,
      max: 20,
    },
    rating: {
      type: Number,
      require: true,
      max: 5,
      default: 0,
    },
    supply: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
