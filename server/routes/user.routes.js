import { Router } from "express";
import { getUsers, getUsersClerk, checkRelation, getUserAppointment } from "../controllers/user.controller.js";
import { checkOrCreateUser } from "../middlewares/checkOrCreateUser.js";

const router = Router();

router.get("/", getUsers);

router.get("/clerk", getUsersClerk);
router.post("/relation", checkOrCreateUser, checkRelation);

router.get("/my-appointments", getUserAppointment)
export default router;