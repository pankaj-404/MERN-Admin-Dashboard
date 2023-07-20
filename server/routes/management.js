import express from "express";
import { grtAdmins } from "../controller/management.js";

const router = express.Router();

router.get("/admins", grtAdmins);

export default router;
