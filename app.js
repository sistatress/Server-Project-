const express = require('express')
const app = express()

const bodyParser = require('body-parser')

//app.use(bodyParser.json()) // for parsing application/json
// app.set('x-powered-by', false)

//MIDDLEWARES
// app.use('/todos', () => {
//     console.log(`Middleware: /todos`)
// })

//ROUTES

    // Route HOME (App Component): '/'
    // Afficher la page qui correspond à la route http://localhost:3000/ ou http://localhost:3000
app.get('/', (req, res) => {
    console.log(`Route: HOME `)
    res.status(200).send('HOME')
})

    // Route TODOS (List Compoent) : '/todos'
app.get('/todos', (req, res) => {
    console.log(`Route: TODOS `)
    res.status(200).send('TODOS')
})

// Start listening to the server
app.listen(3001)