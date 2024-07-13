import e from 'express';
import express from 'express';

import { login, logout, register } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
// post is used to create a user information in the database

export default router;