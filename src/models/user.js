const { Schema, model } = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
	name: String,
	password: String,
})

userSchema.methods.encryptPassword = (password) => {
	
}

module.exports = model('User', userSchema) //!Module exports se usa para javascript node
