import express from "express"
import { createUser, getUserById, getUsers } from "../controllers/UsersController"
const router = express.Router()
router.get("/:id", getUserById)
router.get("/", getUsers)
router.post("/", createUser)
export default router
