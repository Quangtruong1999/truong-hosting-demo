const path = require('path')
const express = require('express');
const morgan = require('morgan')
const app = express();
const {engine} = require('express-handlebars');
const {readFileSync} = require('fs')

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'src/resources/views'));

app.use(morgan('combined'));

app.listen(process.env.PORT || 5000, () => console.log("Server running..."))

// app.get('/', (request, response) => {
//     response.send("Hello World!");
// })



app.get('/', (request, response) => {
    response.render("home");
})

app.get('/users', (request, response) => {
    let users = JSON.parse(readFileSync('users.json'));

    response.send(users)
})

//heroku
