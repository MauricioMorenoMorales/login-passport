const express = require('express')
const engine = require('ejs-mate')

const app = express()

//settings
app.set('port', process.env.PORT || 4444)
app.engine('ejs', engine)
app.set('view engine', 'ejs')

//starting the server
app.listen(app.get('port'), () => {
	console.log(`server on port ${app.get('port')}`)
})
