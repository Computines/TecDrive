const mongoose = require('mongoose');



// mongoose.connect('mongodb://localhost:27017/TECdrive')
// .then(() => console.log('Now connected to MongoDB!'))
// .catch(err => console.error('Something went wrong', err));

mongoose.connect('mongodb+srv://dmejias08:dianap0808@cluster0.k5cccz5.mongodb.net/TecDriveDB')
.then(() => console.log('Now connected to MongoDB!'))
.catch(err => console.error('Something went wrong', err));
