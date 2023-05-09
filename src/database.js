const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://marianocasidy11m:cassMV_01@mycluster0.yeslocp.mongodb.net/nailsart?retryWrites=true&w=majority")
.then(db=>console.log('Mongodb connected'))
.catch(err=>console.error(err));