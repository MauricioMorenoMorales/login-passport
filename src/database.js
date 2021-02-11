const mongoose = require('mongoose')
const chalk = require('chalk')

mongoose
	.connect(
		`mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@nodejsplatzi.cg57m.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`,
		{ useUnifiedTopology: true },
	)
	.then(() => console.log(`${chalk.inverse.green('Database')} connected`))
	.catch(err => console.log(`Database Error: ${err}`))
