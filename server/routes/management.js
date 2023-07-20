import express from "express";
import { grtAdmins, grtUserPerformance } from "../controller/management.js";

const router = express.Router();

router.get("/admins", grtAdmins);
router.get("/performance/:id", grtUserPerformance);

export default router;
