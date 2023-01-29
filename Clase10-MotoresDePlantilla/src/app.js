import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', '../views');


app.get('/', (req, res) => {
    res.render('home');
});

let usuarios = [
    {
      id: 1,
      nombre: 'Nombre 1',
      apellido: 'Apellido 1',
      edad: 30,
    },
    {
      id: 2,
      nombre: 'Nombre 2',
      apellido: 'Apellido 2',
      edad: 40,
    },
    {
      id: 3,
      nombre: 'Nombre 3',
      apellido: 'Apellido 3',
      edad: 50,
    },
  ];

app.get('/usuarios', (req, res) => {
    res.render('index', {usuarios});
});

app.get('/user/:id', (req, res)=>{
    let id = req.params.id
    let userFind = usuarios.find((elem) => elem.id == id)
    if(userFind) {
       res.render('user', userFind)
    } else{
       res.render('userNoexist')
    }
  })  

let food = [
  {
    name: 'Pizza', price: 3000
  },
  {
    name: 'Mortadela', price: 4000
  },
  {
    name: 'Naranja', price: 5000
  }
]

app.get('/food', (req, res)=>{
  let testUser = {
    name: 'User1',
    role: 'admin'
  }
  res.render('food', {
    food,
    testUser,
    admin: testUser.role == 'admin', 
    style: 'index.css'
  })
})

app.post('/register', (req, res)=>{
  let user = req.body
  console.log(user)
  res.render('registerUser', user)
})

app.get('/register', (req, res)=>{
  res.render('register')
})

const PORT = 8080;
const server = app.listen(PORT, () =>
  console.log('Server running on PORT 8080')
);

server.on('erro', (error) => console.log(error))