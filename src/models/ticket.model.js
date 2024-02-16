import { randomUUID } from 'node:crypto'

export class Ticket {
    #_id
    #purchaseDatetime
    #amount
    #usuario
    #libros
    
    constructor({ _id = randomUUID(), purchaseDatetime, amount, usuario, libros }) {
        this.#_id = _id
        this.#purchaseDatetime
        this.#amount
        this.#usuario
        this.#libros = []
    }    

    get code() { return this.#_id }
    get purchaseDatetime() { return this.#purchaseDatetime }
    get amount() { return this.#amount }
    get usuario() { return this.#usuario }
    get libros() { return this.#libros }

    toPOJO() {
        return {
            code: this.#_id,
            purchaseDatetime: this.purchaseDatetime,
            usuario: this.#usuario,
            amount: this.#amount,
            libros: this.#libros
        }    
    }    
}    
