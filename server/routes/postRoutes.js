import Router from 'express'
import PostController from "../controllers/PostController.js";
import authMiddleware from "../middleware/auth.middleware.js";

const postRoutes = new Router()

postRoutes.post('/posts', authMiddleware, PostController.create)

postRoutes.get('/posts', PostController.getAll)
postRoutes.get('/posts/:id', PostController.getOne)
postRoutes.get('/posts/categories/:category_name', PostController.getByCategoryName)
postRoutes.put('/posts', authMiddleware, PostController.update)
postRoutes.delete('/posts/:id', authMiddleware, PostController.delete)

export default postRoutes