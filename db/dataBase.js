const mongoose = require('mongoose');



// mongoose.connect('mongodb://localhost:27017/TECdrive2')
// .then(() => console.log('Now connected to MongoDB!'))
// .catch(err => console.error('Something went wrong', err));

mongoose.connect('mongodb+srv://dmejias08:Computines@cluster0.k5cccz5.mongodb.net/TecDriveDB2')
.then(() => console.log('Now connected to MongoDB!'))
.catch(err => console.error('Something went wrong', err));
