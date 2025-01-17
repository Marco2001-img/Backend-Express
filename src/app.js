const express = require('express')
const morgan = require('morgan')

const app = express()

app.set('port', process.env.PORT || 4000)
app.use(morgan('dev'))
app.use(require('./routes/miTienda.routes'))

module.exports = app