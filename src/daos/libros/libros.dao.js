import { connect, model } from 'mongoose'
import { MODO_EJECUCION } from '../../config/config.js'
import { MONGODB_CNX_STR } from '../../config/config.js'

import { LibrosDaoMongoose } from './mongoose/libros.dao.mongoose.js'
import { LibrosDaoFiles } from './libros.dao.files.js'
import { librosSchema } from './mongoose/libros.model.mongoose.js'


const RUTA_USUARIOS_JSON = './db/libros.json'

let daoLibros

if (MODO_EJECUCION === 'online') {
  if (!daoLibros) {
    const librosModel = model('libros', librosSchema)
    daoLibros = new LibrosDaoMongoose(librosModel)
    console.log('Libros de: mongodb')
  }
} else {
  daoLibros = new LibrosDaoFiles(RUTA_USUARIOS_JSON)
  console.log('Libros existiendo en: sistema de archivos')
}

export function getDaoLibros() {
  return daoLibros
} 