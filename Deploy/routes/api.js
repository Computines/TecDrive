const express = require('express');
const router = express.Router();
const User = require('../prototype/UserClass');
const File = require('../prototype/FileClass');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage })

/* GET users listing. */

router.post('/upload', upload.single('file'), File.createFile);

router.post('/create', User.createUser);

router.post('/userlogin', User.verifyLogInWithUsername);

router.post('/emaillogin', User.verifyLogInWithEmail);

router.get('/list/:username', File.listUsersFile);

router.put('/addtag', File.addTagToFile);

router.get('/file/:id', File.findFileById);

module.exports = router;
