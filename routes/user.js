const express = require('express');


const router = express.Router();

const User = require('../models/user');

const bycrypt = require('bcrypt');


const jsonwebtoken = require('jsonwebtoken');

//creation de compte

router.post('/register',(req,res)=>{

 let data = req.body;

 let user = new User (data);

 let salt = bycrypt.genSaltSync(10);

 //instance paswword
   let cryptedPass = bycrypt.hashSync(data.password, salt);


   user.password = cryptedPass;
  user.save()
 .then(
    (saveduser)=>{
   res.send(saveduser);
  }
   )
  
   .catch(
    (err)=>{
       res.send(err);
     }
  
   )
  

});


router.post('/login',(req,res)=>{

    //1read data
    let dataFromPostMan = req.body;

    //2 test by email
     User.findOne({email:dataFromPostMan.email})
     .then(
       (result)=>{
        //test email
            if(!result){
                res.send('invalid email or password !')
            }else{
                //comparaision bin deux password crypte et non 
                //test pass
              let validPass = bycrypt.compareSync(dataFromPostMan.password,result.password)

              if(!validPass ){
                   res.send('invalid email and password !')
              }else{

                let payload = {
                    firstname: result.firstname,
                    lastname: result.lastname,
                    email : result.email,
                    _id : result._id
                }
                   //generate token ({hamel data},ay password)
                   let token = jwt.sign({},'123456789');
                  //kkfgnnfggggggg;nmlxfffffffffffffhlfmnhfmlncmgnghnghngh
                   res.send({myToken: token} );
              }
            }
       }
     )
     .catch(
        (err)=>{
             res.send(err);
        }

     )
    

});



module.exports = router;