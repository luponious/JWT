import { toPOJO } from '../../utils/utils.js'

export class UsuariosDaoMongoose {
  constructor(usuariosModel) {
    this.usuariosModel = usuariosModel
  }

  async create(data) {
    const libro = await this.usuariosModel.create(data)
    return toPOJO(libro)
  }

  async readOne(query) {
    return toPOJO(await this.usuariosModel.findOne(query).lean())
  }

  async readMany(query) {
    return toPOJO(await this.usuariosModel.find(query).lean())
  }
}
