const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

app.engine('handlebars', exphbs.engine())
app.set('views engine', '.handlebars')

app.set('views', './views')

app.get('/', (req, res)=> {
    res.render('index', {})
})

const PORT = 8080
const server = app.listen(PORT, ()=> console.log('Server running on PORT 8000'))
server.on('erro', error => console.log(error))