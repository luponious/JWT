import { randomUUID } from 'node:crypto'
import fs from 'fs/promises'
import { matches } from '../utils.js'

class Libros {
  #_id
  #nombre
  #precio
  constructor({ _id = randomUUID(), nombre, precio }) {
    this.#_id = _id
    this.nombre = nombre
    this.precio = precio
  }

  get _id() { return this.#_id }
  get nombre() { return this.#nombre }
  get precio() { return this.#precio }

  set nombre(value) {
    if (!value) throw new Error('El nombre es obligatorio')
    this.#nombre = value
  }

  set precio(value) {
    if (!value) throw new Error('El precio es obligatorio')
    if (value <= 0) throw new Error('El precio debe ser positivo')
    this.#precio = value
  }

  toObject() {
    return {
      _id: this.#_id,
      nombre: this.#nombre,
      precio: this.#precio,
    }
  }
}

class LibrosDaoFiles {

  constructor(path) {
    this.path = path
  }

  async #readLibros() {
    return JSON.parse(await fs.readFile(this.path, 'utf-8'))
  }

  async #writeLibros(libros) {
    await fs.writeFile(this.path, JSON.stringify(libros, null, 2))
  }

  async create(data) {
    const libro = new Libro(data)
    const libros = await this.#readLibros()
    libros.push(libro.toObject())
    await this.#writeLibros(libros)
    return libro.toObject()
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

  async updateOne(query, data) {
    throw new Error('NOT IMPLEMENTED')
  }

  async updateMany(query, data) {
    throw new Error('NOT IMPLEMENTED')
  }

  async deleteOne(query) {
    throw new Error('NOT IMPLEMENTED')
  }

  async deleteMany(query) {
    throw new Error('NOT IMPLEMENTED')
  }
}

const librosDaoFiles = new libroDaoFiles('./db/libro.json')
console.log('usando persistencia en sistema de archivos')

export async function getDaoFiles() {
  return librosDaoFiles
}