import express from "express";
import {
  getCustomers,
  getProduct,
  getTransactions,
} from "../controller/client.js";

const router = express.Router();

router.get("/products", getProduct);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);

export default router;