import { Router } from "express";
import { getCalEndPoint, webHookCal } from "../controllers/cal.controller.js"; 

const router = Router();

router.get("/", getCalEndPoint)


router.post("/appointments", webHookCal)

export default router;