import express from "express";
import { getUser } from "../controller/home.js";

const router = express.Router();

router.get("/user/:id", getUser);

export default router;
