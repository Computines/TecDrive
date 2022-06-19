const User = require("../models/user")
const File = require("../models/file")


const FileClass = {

    createFile: (req, res) => {
        const params = req.file
        const { username, tag } = req.body
        console.log(req.body)
        fileName = params.originalname
        route = params.path
        owner = username
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
                    return res.send({success: false, message: "Error al crear el archivo"})
                    // return res.send(err)
                }
                return res.send({success: true, message: "Archivo creado correctamente"})
            })
        }
        )
    },

    findFileByNameAndTag: (req, res) => {
        const { name: fileName, usename:owner, tag} = req.params;

        File.find({ "fileName": fileName, "tag": tag, "owner": owner }, (err, file) => {
            if (err) {
                return res.send([])
            }
            return res.send(file)
        })
    },

    findFileById: (req, res) => {
        const { id } = req.params
        File.find({ "_id": id}, (err, file) => {
            if (err) {
                return res.send("No se encontro archivo")
            }
            // return res.sendFile("/home/ramsensei/Desktop/Ramsensei/Pruebas/Deploy/" + file[0].route)
            return res.sendFile("/home/site/wwwroot/" + file[0].route)
        })
    },

    listUsersFile: (req, res) => {
        const params = req.params
        owner = params.username
        File.find({ "owner": owner }).select("fileName tag size").exec((err, result) => {
            if (err) {
                res.send("No se encontro archivo")
            }
            res.send(result)
        })
    },

    addTagToFile: (req, res) => {
        const { _id:id, tag } = req.body
        File.findOneAndUpdate({ "_id": id }, { $addToSet: { "tag": tag } },
        (err, result) => {
            if (err) {
                return res.send("Ha ocurrido un error en la busqueda del archivo")
            }
            return res.send(result)
        })
    }
}



module.exports = FileClass