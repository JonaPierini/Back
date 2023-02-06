//parte del cliente
const socket = io()

const input = document.querySelector('input')

document.querySelector('button').addEventListener('click', ()=> {
     socket.emit('message', input.value)
     console.log(input.value)
})


socket.on('messages', data => {
    document.querySelector('p').innerText = data
    
})

//input Eliminar
const inputEliminar = document.getElementById('iEliminar')

document.getElementById('bEliminar').addEventListener('click', () =>{
    console.log(inputEliminar.value)
    socket.emit('eliminar', inputEliminar.value)
})

socket.on('eliminacion', data => {
    document.getElementById('pEliminar').innerText = ''
    
})