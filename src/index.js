const express = require('express')
const engine = require('ejs-mate')
const morgan = require('morgan')
const path = require('path')

const app = express()

//settings
app.set('port', process.env.PORT || 4444)
app.set('views', path.join(__dirname, 'views'))
app.engine('ejs', engine)
app.set('view engine', 'ejs')

//Middlewares
app.use(morgan('dev'))

//Routes
app.use('', require('./routes/index.routes'))

//starting the server
app.listen(app.get('port'), () => {
	console.log(`server on port ${app.get('port')}`)
})
