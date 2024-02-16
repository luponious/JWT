import { Router, json, urlencoded } from 'express';
import { librosRouter } from './libros.router.js';
import { usuariosRouter } from './usuarios.router.js';
import { sesionesRouter } from './sesiones.router.js';
import { tiendasRouter } from './tiendas.router.js';
import { cartsRouter } from './carts.router.js';
import { ordersRouter } from './orders.router.js';
// Add newslettersRouter import a futuro

import { manejoDeErrores } from '../middlewares/manejoDeErrores.js';
import { respuestasMejoradas } from '../middlewares/respuestasMejoradas.js';

export const apiRouter = Router();

apiRouter.use(respuestasMejoradas);
apiRouter.use(json());
// Parse URL-encoded bodies
apiRouter.use(urlencoded({ extended: true }));

// Register routers for different endpoints
apiRouter.use('/usuarios', usuariosRouter);
apiRouter.use('/sesiones', sesionesRouter);
apiRouter.use('/libros', librosRouter);
apiRouter.use('/tiendas', tiendasRouter);
apiRouter.use("/carts", cartsRouter);
apiRouter.use("/orders", ordersRouter);
// Handle newslettersRouter if available

// TO-DO: Implement or remove the newslettersRouter
// apiRouter.use('/newsletters', newslettersRouter);

// Use error handling middleware
apiRouter.use(manejoDeErrores);
