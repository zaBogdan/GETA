const express = require('express')
var bodyParser = require('body-parser')
const HttpStatus = require('http-status-codes')

require('dotenv').config({path:'./config/enviornment.env'})

const router = require('./routes')

const app = express()
app.use(bodyParser.json())

app.use(router)
app.use((req,res,next)=>{
    return res.status(HttpStatus.StatusCodes.NOT_FOUND).json({success:false,message:'not found'})
})

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`app listening on port ${PORT}`)
})