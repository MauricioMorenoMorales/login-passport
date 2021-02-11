const { Schema, model } = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
	name: String,
	password: String,
})

userSchema.methods.encryptPassword = async password => {
	const salt = await bcrypt.genSalt(10)
	return await bcrypt.hash(password, salt)
}

userSchema.methods.validatePassword = async function (password) {
	return bcrypt.compare(password, this.password)
}

module.exports = model('User', userSchema) //!Module exports se usa para javascript node
