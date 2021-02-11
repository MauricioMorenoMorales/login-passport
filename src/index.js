require('dotenv').config()
const express = require('express')
const engine = require('ejs-mate')
const morgan = require('morgan')
const chalk = require('chalk')
const path = require('path')

//Initializations
const app = express()
require('./database')

//settings
app.set('port', process.env.PORT || 4444)
app.set('views', path.join(__dirname, 'views'))
app.engine('ejs', engine)
app.set('view engine', 'ejs')

//Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))

//Routes
app.use('', require('./routes/index.routes'))

//starting the server
app.listen(app.get('port'), () => {
	console.log(`Server on port ${chalk.inverse.blue(app.get('port'))}`)
})
