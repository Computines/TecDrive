const mongoose = require("mongoose")

const usersSchema = mongoose.Schema({
	name: {type: String, required: true},
    lastName: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true}
})  

module.exports = mongoose.model("user", usersSchema)