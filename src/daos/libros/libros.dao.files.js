import fs from 'fs/promises'
import { matches } from '../utils/utils.js'

export class LibrosDaoFiles {

  constructor(path) {
    this.path = path
  }

  async #readLibros() {
    return JSON.parse(await fs.readFile(this.path, 'utf-8'))
  }

  async #writeLibros(libros) {
    await fs.writeFile(this.path, JSON.stringify(libros, null, 2))
  }

  async create(libroPojo) {
    const libros = await this.#readLibros()
    libros.push(libroPojo)
    await this.#writeLibros(libros)
    return libroPojo
  }

  async readOne(query) {
    const libros = await this.#readLibros()
    const buscado = libros.find(matches(query))
    return buscado
  }

  async readMany(query) {
    const libros = await this.#readLibros()
    const buscados = libros.filter(matches(query))
    return buscados
  }
}