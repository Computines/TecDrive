
const User = require("../models/user")
const File = require("../models/file")


class FileClass {

    findFileByName = async function findFileByName(fileName, route, owner) {
        const file = await File.find({ "fileName": fileName, "route": route, "owner": owner })
        console.log(file)
        return file
    }

    findFileByTag = async function (tag, owner) {
        const file = await File.find({ "tag": tag, "owner": owner })
        console.log(file)
        return file
    }

    createFile = async function (fileName, tag, route, owner) {
        try {
            const user = await User.find({ "username": owner })
            console.log(user)
            if (user.length != 0) {
                const file = new File({
                    fileName,
                    tag,
                    route,
                    owner
                })
                const result = await file.save();
                console.log("Se agregar lo siguiente:")
                console.log(result);
            } else {
                console.log("No existe ese usuario")
            }
        } catch {
            console.log("Ya existe archivo")
        }
    }

    listFile = async function () {
        const files = await File
            .find()
        console.log(files);
    }

    listUsersFile = async function (owner) {
        const files = await File
            .find({ "owner": owner })
            .select("owner fileName tag route")
        console.log(files);
        return files
    }

    changeFileName = async function (fileName, newFileName, route, owner) {
        try {
            const file = await File.findOneAndUpdate({ 'fileName': fileName, "route": route, 'owner': owner }, {$set:{"fileName": newFileName}})
            await file.save();
        } catch (err) {
            console.log("Ha ocurrido un error en la busqueda del archivo")
        }

    }

    addTagToFile = async function (fileName, tag, route, owner) {
        try {
            const file = await File.findOneAndUpdate({ 'fileName': fileName, "route": route, 'owner': owner }, {$set:{"tag":tag}})
            file.save();
        } catch (err) {
            console.log("Ha ocurrido un error en la busqueda del archivo")
        }

    }
    

    deleteFile = async function (fileName, route, owner) {
        File.deleteOne({ "fileName": fileName, "route": route, "owner": owner }, function (err) {
            if (err) return handleError(err);
        });
    }

    deleteUserFiles = async function (owner) {
        File.deleteMany({ "owner": owner }, function (err) {
            if (err) return handleError(err);
        });
    }


}



module.exports = FileClass
