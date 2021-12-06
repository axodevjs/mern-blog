import Router from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/User.js';
import UserController from "../controllers/UserController.js";
import authMiddleware from '../middleware/auth.middleware.js';

dotenv.config();

const authRoutes = new Router()

authRoutes.post('/registration', UserController.registration)
authRoutes.get('/haveAdmin', UserController.haveAdmin)
authRoutes.post('/login', UserController.login)
authRoutes.get('/auth', authMiddleware, UserController.auth)

export default authRoutes