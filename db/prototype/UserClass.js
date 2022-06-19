const User = require("../models/user")

const UserClass = {

    createUser: (req, res) => {
        const params = req.body;
        names = params.name;
        lastName = params.lastName;
        username = params.username;
        password = params.password;
        email = params.email;

        const user = new User({
            names,
            lastName,
            username,
            password,
            email,
        });

        user.save((err, result) => {
            if (err) {
                res.send("Ya existe el usuario y/o correo electronico")
            }
            res.send(result)
        })
    },

    verifyLogInWithUsername: (req, res) => {
        const params = req.body;
        const user = User.find({ "username": params.username })
        console.log(user[0])
        res.send(this.verifyLogIn(user, params.password))

    },

    verifyLogInWithUsername: (req, res) => {
        const params = req.body;
        const user = User.find({ "email": params.email })
        console.log(user[0])
        res.send(this.verifyLogIn(user, params.password))
    },

    verifyLogIn: (req, res) => {
        const params = req.body;
        const user = params.user
        const userPassword = user[0].password
        if (userPassword == password) {
            console.log("Verificado")
            res.send(true)
        }
        console.log("No verificado")
        res.send(false)
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