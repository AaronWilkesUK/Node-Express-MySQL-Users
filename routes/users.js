import express from "express";
import { createUsersTable, createUser, getUsers, getUser, deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router();

router.get('/createtable', createUsersTable)

router.get('/', getUsers)

router.post('/', createUser)

router.get('/:id', getUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

export default router;