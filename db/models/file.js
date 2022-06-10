const mongoose = require("mongoose")

const filesSchema = mongoose.Schema({
	fileName: {type: String, required: true, unique:false},
    tag: [String],
    route: {type: String, required: true},
    owner: {type: String, required: true}
})  
filesSchema.index({fileName:1, route:1, owner:1}, {unique: true})

module.exports = mongoose.model("file", filesSchema)