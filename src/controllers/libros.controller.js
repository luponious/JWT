import { librosService } from '../services/libros.service.js'

export async function getController(req, res, next) {
  try {
    const libros = await librosService.readMany({})
    res.result(libros)
  } catch (error) {
    next(error)
  }
}

export async function postController(req, res, next) {
  try {
    const libro = await librosService.agregarLibro(req.body)
    res.created(libro)
  } catch (error) {
    next(error)
  }
}