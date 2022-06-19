const User = require("../models/user")


const UserClass = {

    createUser: (req, res) => {
        const { username, email, password } = req.body;
        let name = "name";
        let lastName = "name";

        const user = new User({
            name,
            lastName,
            username,
            password,
            email,
        });

        user.save((err, result) => {
            if (err) {
                return res.send({success: false, message: "Error al crear usuario"});
            }
            return res.send({success: true, message: "Usuario creado correctamente"});
        })
    },

    verifyLogInWithUsername: (req, res) => {
        const params = req.body;
        User.find({ "username": params.username }, (err, user) => {
            if (err || user.length == 0) {
                return res.send({success: false, message: "Usuario no existente"});
            }
            return res.send({success: user[0].password === params.password ? true : false , message: "Contraseña incorrecta"});
        })
    },

    verifyLogInWithEmail: (req, res) => {
        const params = req.body;
        User.find({ "email": params.username }, (err, user) => {
            if (err || user.length == 0) {
                return res.send({success: false, message: "Usuario no existente"});
            }
            return res.send({success: user[0].password === params.password ? true : false , message: "Contraseña incorrecta"});
        })
    },


    listUsers: (req, res) => {
        User.find((err, users) => {
            if (err) {
                res.send(err)
            }
            res.send(users)
        })
    },

    findUser : (req, res)=>{
        const params = req.body
        User.find({'usename' : params.usename}, (err, user) =>{
            if(err){
                res.send("No pudo encontrar usuario")
            }
            res.send(user)
        })
    },

    deleUser : (req, res) =>{
        const params = req.body
        User.deleteOne({ "owner": params.owner},(err) =>{
            if (err) res.send(handleError(err));
            res.send("Delete succesfully")
        });
    },

}
module.exports = UserClass