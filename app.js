require('dotenv').config()
const express  = require('express')
const morgan = require("morgan")
const helmet = require("helmet")
const compression = require("compression")
const app = express()


console.log(`Process: `, process.env)

//middleware
app.use(morgan("combined"))
app.use(helmet())
app.use(compression())

//db
require("./src/dbs/init.mongodb")
const {checkOverLoad} =  require("./src/utils/check.connect")
checkOverLoad()
//route
app.use('/', (req, res, next)=>{
    const strCompress = 'Hello Every One'
    return res.status(200).json({
        message: 'Hello',
        data: strCompress.repeat(100000)
    })
})


//handle error

module.exports = app