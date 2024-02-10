import { Router } from 'express'
import { getController, postController } from '../controllers/libros.controller.js'

export const librosRouter = Router()

librosRouter.get('/', getController)
librosRouter.post('/', postController)