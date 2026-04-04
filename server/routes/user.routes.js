import { Router } from "express";
import { createUser, getUsers, getUsersClerk, checkRelation } from "../controllers/user.controller.js";
import { checkOrCreateUser } from "../middlewares/checkOrCreateUser.js";

const router = Router();

router.post("/", createUser);
router.get("/", getUsers);

router.get("/clerk", getUsersClerk);
router.post("/relation", checkOrCreateUser, checkRelation);

export default router;