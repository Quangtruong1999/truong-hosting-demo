const express = require('express')
const app = express()

app.listen(process.env.PORT || 5000, () => console.log("Server running..."))

app.get('/', (request, response) => {
    response.send("Hello World!");
})

//heroku
