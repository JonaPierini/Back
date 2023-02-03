//conexion a nuestro socket
const socket = io()

//sweet alert
let user;
Swal.fire({
    title: 'Identificate',
    input:'text',
    text: 'ingrese nombre',
    inputValidator: (value) =>{
        return !value && 'SE necesita un nombre!' 
    },
    allowOutsideClick: false
}).then((result)=>{
    user = result.value
    return user
}).then((user) => socket.emit(`newUserLog`, {user}))

//obter datos del html
let chatBox = document.getElementById('chatBox')
chatBox.addEventListener('keyup', evt =>{
    if(evt.key == 'Enter'){
        if(chatBox.value.trim().length > 0){
            socket.emit('message', {user: user, message: chatBox.value}),
            chatBox.value = ''
        }
    }
})

socket.on('messages', data =>{
    console.log(data)
    let log = document.getElementById('messageLogs')
    let messages = ''
    data.forEach(msg => {
        messages = messages + `${msg.user} dice: ${msg.message} <br>`
    });
    log.innerHTML = messages
})

socket.on('newUserLog', user=> {
    Swal.fire({
        text: `Nuevo Usuario ${user.user} conectado`,
        toast: true,
        position: 'top-right'
    })
})