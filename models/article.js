const mongoose = require('mongoose');


const Article = mongoose.model('Article',{
   title:String,
   description:String,
   Image:String,
   likes:Number

});


module.exports =Article;