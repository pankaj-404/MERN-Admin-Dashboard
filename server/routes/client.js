import express from "express";
import {
  getCustomers,
  getProduct,
  getTransactions,
  getGeography,
} from "../controller/client.js";

const router = express.Router();

router.get("/products", getProduct);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);
router.get("/geography", getGeography);

export default router;
