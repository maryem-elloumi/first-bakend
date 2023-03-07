//server fichier principal

//express heya ili bch t9asem projet w tasna3 server dima te5dem

//1 nsob express
const express = require('express');

//5importation mongoose bch nchouf code men connect
require('./config/connect');


const articleRoute = require('./routes/article');
const productRoute = require('./routes/product');
const userRoute = require('./routes/user');


//2bch testaml express post /get /rowting les function ili bch nesta3mlohom
const app =express();


//6 application bch tefhem json
app.use( express.json() );

//lien des routes bch nesta3mlhom

app.use('/article',articleRoute);
app.use('/product',productRoute);

app.use('/user',userRoute);

app.use('/getimage', express.static('./upload'));
//3port 3000 wa9et ili yesta8r9ou 
//3finction server work
app.listen(3000,()=>{
    console.log('server work :p ');
});

