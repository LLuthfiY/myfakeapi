import { getAll, getOne, remove, create, update } from "../controllers/user.js";
import { Router } from "express";

const router = Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;
