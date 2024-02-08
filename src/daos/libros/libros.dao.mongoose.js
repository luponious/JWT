import { Schema, model, connect } from 'mongoose'
import { randomUUID } from 'node:crypto'
import { MONGODB_CNX_STR } from '../../config/config.js'

const librosSchema = new Schema({
  _id: { type: String, default: randomUUID },
  nombre: { type: String, required: true },
  precio: { type: Number, min: 0, required: true },
}, {
  strict: 'throw',
  versionKey: false
})

const librosModel = model('libros', librosSchema)

class LibrosDaoMongoose {
  async create(data) {
    const libro = await librosModel.create(data)
    return libro.toObject()
  }

  async readOne(query) {
    return await librosModel.findOne(query).lean()
  }

  async readMany(query) {
    return await librosModel.find(query).lean()
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

let librosDaoMongoose
console.log('usando persistencia en mongodb')

export async function getDaoMongoose() {
  if (!librosDaoMongoose) {
    await connect(MONGODB_CNX_STR)
    console.log('conectado a mongodb')
    librosDaoMongoose = new LibrosDaoMongoose()
  }
  return librosDaoMongoose
}