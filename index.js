const express = require('express')
const router = require('./routes')
const bodyParser = require('body-parser')


let app = express()
const port = 9001
app.use(bodyParser.json())
app.use(router)
app.listen(port, ()=>[
    console.log(`Started on port ${port} !`)
])