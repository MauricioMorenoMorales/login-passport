require('dotenv').config()
const express = require('express')
const engine = require('ejs-mate')
const morgan = require('morgan')
const passport = require('passport')
const chalk = require('chalk')
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')

//Initializations
const app = express()
require('./database')
require('./passport/local-auth')

//settings
app.set('port', process.env.PORT || 4444)
app.set('views', path.join(__dirname, 'views'))
app.engine('ejs', engine)
app.set('view engine', 'ejs')

//Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(
	session({
		secret: process.env.PASSPORTSECRET,
		resave: false,
		saveUninitialized: false,
	}),
)
app.use(flash()) //!Always before passport and after session
app.use(passport.initialize())
app.use(passport.session())

app.use((req, res, next) => {
	app.locals.signupMessage = req.flash('signupMessage')
	next()
})

//Routes
app.use('', require('./routes/index.routes'))

//starting the server
app.listen(app.get('port'), () => {
	console.log(`Server on port ${chalk.inverse.blue(app.get('port'))}`)
})
