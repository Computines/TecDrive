const User = require('./prototype/UserClass');
const File = require("./prototype/FileClass");
const DataBase = require("./dataBase")



fileClass = new File()
userClass = new User()


console.log("findByName")
// fileClass.findFileByName("ProyectoFinal", "./Documents","Ramsensei")
// console.log("findByTag")
// fileClass.findFileByTag("Urgente", "Diani08")
// fileClass.addTagToFile("ProyectoFinal", " ", "Ramsensei" , "./Documents/TEC")


// userClass.createUser("Diana", "Mejias", "Diani08", "blabla", "dia@email.com")
// userClass.createUser("Dario", "Guitierrez", "Ramsensei", "blabla", "ram@email.com")
// userClass.createUser("Valesska", "Blanco", "Valesska.blanco", "blabla", "vale22@email.com")
// userClass.createUser("Rashell", "Aguilar", "Rei1007", "blabla", "rei1007@email.com")
// userClass.createUser("Juan", "Navarro", "JuanNava", "blabla", "juanignava@email.com")
// userClass.createUser("Geovanny", "Garcia", "Geo", "blabla", "geogardow@email.com")

// fileClass.createFile("DiagramaClases", ["Urgente","No urge"], "./Documents", "Diani08", 512)

// fileClass.createFile("ProyectoFinal", "TEC", "./Documents", "Ramsensei", 256)

// fileClass.createFile("ProyectoLabActivos", "Listo", "./Documents/TEC/SemestreI2022", "Diani08", 2048)

// fileClass.createFile("ProyectoLabActivos", "", "./Documents/TEC/SemestreI2022", "Rei1007", 2048)

// fileClass.findFileByTag("Urgente", "Diani08")

// fileClass.addTagToFile("ProyectoLabActivos", "LISTO", "./Documents/TEC/SemestreI2022", "Rei1007" )

// fileClass.listFile()
async function main() {
    const user_finded = await userClass.findUser("Rei1007")
    console.log(user_finded)
}

main()
// fileClass.changeFileName("ProyectoLabActivos", "nuevoProyectoActivos","./Documents/TEC/SemestreI2022", "Diani08")

// userClass.changePassword("JuanNava", "blabla", "newBlabla")

// fileClass.listUsersFile("Diani08")

// userClass.verifyLogInWithUsername("Diani08", "blabla")

// userClass.verifyLogInWithEmail()
