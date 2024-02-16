import { usuariosService } from './../services/usuario.services'

// Registrar
export async function postController(req, res, next) {
  try {
    const usuario = await usuariosService.registrar(req.body)
    res.result(usuario)
  } catch (error) {
    next(error)
  }
}

// Dar de baja
export async function deleteController(req, res, next) {
  try {
    await usuariosService.darDeBaja(req.params.id)
    res.deleted()
  } catch (error) {
    next(error)
  }
}