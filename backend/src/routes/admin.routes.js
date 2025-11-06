import express from "express";
import { getDashboard, addUser, addStore } from "../controllers/admin.controller.js";
import { authMiddleware } from "../middleware/auth.js";
import { requireRole } from "../middleware/requireRole.js";
import { ROLES } from "../utils/constants.js";

const router = express.Router();

router.use(authMiddleware, requireRole(ROLES.ADMIN));

router.get("/dashboard", getDashboard);
router.post("/users", addUser);
router.post("/stores", addStore);

export default router;
