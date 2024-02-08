import { getDaoUsuarios } from '../daos/usuarios/usuarios.dao.js'
import { getDaoLibros } from '../daos/libros/libros.dao.js'

const usuariosDao = await getDaoUsuarios()
const librosDao = await getDaoLibros()

class UsuariosService {
  async registrar(datos) {
    return await usuariosDao.create(datos)
  }

  async comprarLibro(idUsuario, idLibro) {
    const usuario = await usuariosDao.readOne({ _id: idUsuario })
    if (!usuario) throw new Error()

    const libro = await librosDao.readOne({ _id: idLibro })
    if (!usuario) throw new Error()

    // logica para crear una venta, agregar una coleccion de ventas y/o guardarla
  }

  async darDeBaja(idUsuario) {
    const libro = await usuariosDao.deleteOne({ _id: idUsuario })
    return libro
  }
}

export const usuariosService = new UsuariosService()