//importation mongoose
const mongoose = require('mongoose');


//nasna3 modele deux types whda 3adi w lo5ra b skima
const Product = mongoose.model('Product',{
    title:String,
    price:Number,
    description:String
});

//export model bch najem nesta3mlou fi fichier e5er
module.exports = Product;