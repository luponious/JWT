import { getDaoTiendas } from '../daos/tiendas/tiendas.dao.js'
import { librosService } from './libros.service.js'
import { TiendasService } from './tiendas.service.js'
import { usersService } from './users.service.js'
import { getDaousers } from '../daos/user/users.dao.js'
import { getDaoLibros } from '../daos/libros/libros.dao.js'
//import { getDaoSuscriptores } from '../daos/suscriptores/suscriptores.dao.js'
//import { getEmailService } from './email/email.service.js'
//import { NewslettersService } from './newsletters.service.js'
//import { getSmsService } from './sms/sms.service.js'

const tiendasDao = getDaoTiendas()
//const emailService = getEmailService()
export const tiendasService = new TiendasService({ tiendasDao, librosService })

//const suscriptoresDao = getDaoSuscriptores()
//export const newslettersService = new NewslettersService({ suscriptoresDao, emailService })

//const smsService = getSmsService()
const usersDao = getDaousers()
const librosDao = getDaoLibros()
export const usersService = new usersService({ smsService, usersDao, librosDao })