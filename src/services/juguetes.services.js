import { getDaoLibros } from '../daos/libros/libros.dao.js'

const librosDao = await getDaoLibros()

class LibrosService {
  async obtenerLibros() {
    return await librosDao.readMany({})
  }

  async agregarLibro(datosLibro) {
    const libro = await librosDao.create(datosLibro)
    return libro
  }
}

export const librosService = new LibrosService()