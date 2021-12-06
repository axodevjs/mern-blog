import Router from 'express'
import dotenv from 'dotenv';
import User from '../models/User.js';
import CategoryController from "../controllers/CategoryController.js";
import authMiddleware from '../middleware/auth.middleware.js';

dotenv.config();

const categoryRoutes = new Router()

categoryRoutes.post('/categories', authMiddleware, CategoryController.create)

categoryRoutes.get('/categories', CategoryController.getAll)
categoryRoutes.get('/categories/:id', CategoryController.getOne)
categoryRoutes.put('/categories', authMiddleware, CategoryController.update)
categoryRoutes.delete('/categories/:id', authMiddleware, CategoryController.delete)

export default categoryRoutes