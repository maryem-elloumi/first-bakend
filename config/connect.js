//1 importation mongoose
const mongoose = require('mongoose');


//2 connection + url
mongoose.connect('mongodb://127.0.0.1:27017/mydb')
   .then(
     ()=>{
        console.log('connected to db');
     }
   )
   .catch(
    (err)=>{
        console.log(err);
    }
   )

