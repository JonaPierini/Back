const fs = require ('fs')

class UserManger {
    file;
    constructor (file) {
        this.file = file
    }

    async crearUsuario (usuario) {
        try {
            let resultado = await fs.promises.readFile(this.file, 'utf-8')
            let usuarios = JSON.parse(resultado)
            usuarios.push(usuario)
            await fs.promises.writeFile(this.file, JSON.stringify(usuarios))
        } catch (error) {
            console.log(error)
        }
    }
}

let user = {
    nombre: 'nombre1',
    apellido: 'apellido1'
}

const manager = new UserManger('usuarios.json')
manager.crearUsuario(user)
