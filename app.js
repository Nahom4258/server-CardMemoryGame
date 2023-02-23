const express = require('express');
const routes = require('./routes/routes')
const body_parser = require('body-parser')


const db = require('./db')

const app = express();

app.use(body_parser.json())
app.use(body_parser.urlencoded({ extended: false }))

const port = 4000

app.use('/', routes)


app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})

module.exports = app;