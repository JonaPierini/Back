const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const PORT = 8080

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.set('views', './views')

app.get('/', (req, res)=>{
    res.render('index', {})
})


const server = app.listen(PORT, () => console.log('Server running on port 8080'))
server.on('error', error => console.log(error))