import { getDaoLibros } from '../daos/libros/libros.dao.js'

const librosDao = await getDaoLibros()

class LibrosService {
  async agregarLibro(datosLibro) {
    const libro = new libro(datosLibro)
    const libroGuardado = await librosDao.create(libro.toPOJO())
    return libroGuardado
  }
  async readOne(criterio) {
    return await librosDao.readOne(criterio)
  }

  async readMany(criterio) {
    return await librosDao.readOne(criterio)
  }
}

export const librosService = new LibrosService()