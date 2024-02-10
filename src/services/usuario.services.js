import { Usuario } from '../models/usuario.model.js'
// import { ADMIN_SMS_NUMBER } from '../config/config.js'

export class UsuariosService {

  constructor({ smsService, usuariosDao, librosDao }) {
    this.smsService = smsService
    this.usuariosDao = usuariosDao
    this.librosDao = librosDao
  }

  async registrar(datos) {
    const usuario = new Usuario(datos)
    await this.usuariosDao.create(usuario.toPOJO())
    // await this.smsService.enviar({
    //   to: ADMIN_SMS_NUMBER,
    //   message: `nuevo usuario: ${usuario.nombre} (${usuario.email})`
    //   message: `nueva compra: ${compra.id} (${usuario.cart})`
    // })
    return usuario.toPOJO()
  }

  async comprarLibro(idUsuario, idLibro) {
    const usuario = await this.usuariosDao.readOne({ _id: idUsuario })
    if (!usuario) throw new Error()

    const libro = await this.librosDao.readOne({ _id: idLibro })
    if (!usuario) throw new Error()

  }

  async darDeBaja(idUsuario) {
    const libro = await this.usuariosDao.deleteOne({ _id: idUsuario })
    return libro
  }
}
