import { randomUUID } from 'node:crypto'

export class Libro {
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
        if (!value) throw new Error('Nombre es obligatorio')
        this.#nombre = value
    }

    set precio(value) {
        if (!value) throw new Error('El precio es obligatorio')
        if (value <= 0) throw new Error('El precio debe ser positivo')
        this.#precio = value
    }

    toPOJO() {
        return {
            _id: this.#_id,
            nombre: this.#nombre,
            precio: this.#precio,
        }
    }
}