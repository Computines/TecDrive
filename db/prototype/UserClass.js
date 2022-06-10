const User = require("../models/user")

class UserClass {

    createUser = async function (name, lastName, username, password, email) {
        try {
            const user = new User({
                name,
                lastName,
                username,
                password,
                email,
            });
            const result = await user.save();
            console.log("SE AGREGA LO SIGUIENTE:")
            console.log(result);
        }
        catch (err) {

            console.log('Usuario y/o email ya han sido registrados en el sistema')
        }
    }

    verifyLogInWithUsername = async function (username, password) {
        const user = await User.find({ "username": username })
        console.log(user[0])
        this.verifyLogIn(user, password)
    }

    verifyLogInWithEmail = async function (email, password) {
        const user = await User.find({ "email": email })
        console.log(user[0])
        this.verifyLogIn(user, password)
    }

    verifyLogIn = async function (user, password) {
        const userPassword = user[0].password
        if (userPassword == password) {
            console.log("Verificado")
            return true
        }
        console.log("No verificado")
        return false
    }

    //obsoleto
    listUser = async function () {
        const user = await User
            .find()
        console.log(user);
    }

    findUser = async function (username) {
        try {
            const user = await User
                .find({ 'username': username })
            console.log(user[0]);
            return user
        }
        catch {
            console.log("No pudo encontrar usuario")
        }
    }

    changePassword = async function (username, currentPassword, newPassword) {
        try {
            const user = await User.find({ "username": username })
            if (user[0].password == currentPassword) {
                const user2 = await User.findOneAndUpdate({"username": username}, {$set: {"password": newPassword}});
                user2.save();
                console.log("Contraseña modificada con exito")
            } else {
                console.log("Contraseña ingresada es incorrecta")
            }
        } catch {
            console.log("No se encuentra el usuario")
        }
    }



    //eliminar usuario 
    deleteUser = async function (owner) {
        User.deleteOne({ "owner": owner }, function (err) {
            if (err) return handleError(err);
        });
    }

}
module.exports = UserClass