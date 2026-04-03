import { Router } from "express";
import { createUser, getUsers, getUsersClerk, checkRelation } from "../controllers/user.controller.js";

const router = Router();

router.post("/", createUser);
router.get("/", getUsers);

router.get("/clerk", getUsersClerk);
router.get("/relation", checkRelation);

export default router;