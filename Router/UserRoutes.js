import { Router } from "express";
import { handleUserData, handleUserUpdate, handleGetUser, handleShowUser, handleDeleteUser } from "../Controller/UserController.js";

const router = Router();

router.post('/data', handleUserData)
router.put("/data/:id", handleUserUpdate)
router.get('/data', handleGetUser)
router.get('/data/:id', handleShowUser)
router.delete('/data/:id', handleDeleteUser)

export default router