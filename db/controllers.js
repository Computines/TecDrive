const User = require('./prototype/UserClass');
const File = require("./prototype/FileClass");
const DataBase = require("./dataBase")



fileClass = new File()
userClass = new User()


// console.log("findByName")
// fileClass.findFileByName("ProyectoFinal","Ramsensei", "./Documents/TEC")
// console.log("findByTag")
// fileClass.findFileByTag("Urgente", "Diani08")
// fileClass.addTagToFile("ProyectoFinal", " ", "Ramsensei" , "./Documents/TEC")


// userClass.createUser("Diana", "Mejias", "Diani08", "blabla", "dia@email.com")
// userClass.createUser("Dario", "Guitierrez", "Ramsensei", "blabla", "ram@email.com")
// userClass.createUser("Valesska", "Blanco", "Valesska.blanco", "blabla", "vale22@email.com")
// userClass.createUser("Rashell", "Aguilar", "Rei1007", "blabla", "rei1007@email.com")
// userClass.createUser("Juan", "Navarro", "JuanNava", "blabla", "juanignava@email.com")

// fileClass.createFile("DiagramaClases", ["Urgente","No urge"], "./Documents", "Diani08")

// fileClass.createFile("ProyectoFinal", "TEC", "./Documents", "Ramsensei")

// fileClass.createFile("ProyectoLabActivos", "Listo", "./Documents/TEC/SemestreI2022", "Diani08")

// fileClass.createFile("ProyectoLabActivos", "", "./Documents/TEC/SemestreI2022", "Rei1007")

// fileClass.findFileByTag("Urgente", "Diani08")

// fileClass.addTagToFile("InformeLab", "LISTO", "Rei1007" )

// fileClass.listFile()

// userClass.findUser("Rei1007")

// fileClass.deleteFile("ProyectoLabActivos", "./Documents/TEC/SemestreI2022", "Ram1")

userClass.changePassword("JuanNava", "blabla", "newBlabla")

// fileClass.listUsersFile("Diani08")

// userClass.verifyLogInWithUsername("Diani08", "blabla")

// userClass.verifyLogInWithEmail()
