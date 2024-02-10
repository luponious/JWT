import { Router, json, urlencoded } from 'express'
import { librosRouter } from './libros.router.js'
import { manejoDeErrores } from '../middlewares/manejoDeErrores.js'
import { respuestasMejoradas } from '../middlewares/respuestasMejoradas.js'
import { usuariosRouter } from './usuarios.router.js'
import { sesionesRouter } from './sesiones.router.js'
import { tiendasRouter } from './tiendas.router.js'

apiRouter.use(respuestasMejoradas)

apiRouter.use(json())
apiRouter.use(urlencoded({ extended: true }))

apiRouter.use('/usuarios', usuariosRouter)
apiRouter.use('/sesiones', sesionesRouter)

apiRouter.use('/libros', librosRouter)
apiRouter.use('/tiendas', tiendasRouter)



// [TO-DO]
// apiRouter.use('/newsletters', newslettersRouter)
// import { newslettersRouter } from './newsletters.router.js'

export const apiRouter = Router()

apiRouter.use(manejoDeErrores)