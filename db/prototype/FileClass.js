
const User = require("../models/user")
const File = require("../models/file")


const FileClass = {

    createFile: (req, res) => {
        const params = req.body
        fileName = params.fileName
        tag = params.tag
        route = params.route
        owner = params.owner
        size = params.size
        User.find({ "username": owner }, (err) => {
            if (err) {
                res.send("No existe el usuario")
            }
            const file = new File({
                fileName,
                tag,
                route,
                owner,
                size
            })
            file.save((err, result) => {
                if (err) {
                    res.send("Archivo ya existe")
                }
                res.send(result)
            })
        }
        )
    },

    findFileByName: (req, res) => {
        const params = req.body;
        fileName = params.fileName
        route = params.route
        owner = params.owner
        File.find({ "fileName": fileName, "route": route, "owner": owner }, (err, file) => {
            if (err) {
                res.send("No se encontro archivo")
            }
            res.send(file)
        })
    },

    findFileByTag: (req, res) => {
        const params = req.body
        tag = params.tag
        owner = params.owner
        File.find({ "tag": tag, "owner": owner }, (err, file) => {
            if (err) {
                res.send("No se encontro archivo")
            }
            res.send(file)
        })
    },

    listUsersFile: (req, res) => {
        const params = req.body
        owner = params.body
        File.find({ "owner": owner }).select("owner fileName tag route").exec((err, result) => {
            if (err) {
                res.send("No se encontro archivo")
            }
            res.send(result)
        })
    },

    addTagToFile: (req, res) => {
        const params = req.body
        fileName = params.fileName
        tag = params.tag
        route = params.route
        owner = params.owner
        const file = File.findOneAndUpdate({ 'fileName': fileName, "route": route, 'owner': owner }, { $set: { "tag": tag } })
        file.save((err, result) => {
            if (err) {
                res.send("Ha ocurrido un error en la busqueda del archivo")
            }
            res.send(result)
        })
    }
}



module.exports = FileClass
