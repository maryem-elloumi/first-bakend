
const express = require('express');

const router = express.Router();

//7 import module
const Product = require('../models/product');


//4requet
//post
router.post('/ajout',( req , res )=>{
    let data = req.body;

    //lezem nsajelou fi anehi collection 
   let prod = new Product(data);
   //nsajalha fi db

   prod.save()//l'objet ili tsajel fi base
   .then(
       (savedProd)=>{
           res.send(savedProd);
       }
   )
   .catch(
       (err)=>{
           res.send(err);
        }
   )

});


//get 

router.get('/all',(req,res)=>{
   //find njibhom kol =>[{},{}]
   //finOne
   //findById()
   Product.find()
   .then(
       (Products)=>{
              res.send(Products);
       }
   )
       .catch(
           (err)=>{
               console.log(err);
           }
       )
   
});


router.get('/getbyprice/:p',(req,res)=>{
   let myPrice = req.params.p;

   Product.find({price:myPrice})
   .then(
       (productlist)=>{
         res.send(productlist);
       }
   )
   .catch(
       (err)=>{
             res.send(err);
       }
   )

});


router.get('/getbyid/:id',(req,res)=>{
  let myid = req.params.id;

  Product.findById({_id:myid})
  .then(
   (resultat)=>{
     res.send(resultat);
   }
  )
  .catch(
   (err)=>{
      res.send(err);
   }
  )

});

//put
router.put('/update/:id',(req,res)=>{
  let myid = req.params.id;

  let newData = req.body;

  Product.findOneAndUpdate({_id:myid},newData)
  .then(
   (updated)=>{
          res.send(updated)
   }

  )
  .catch(
    (err)=>{
      res.send(err)
    }

  )

});

//delete


router.delete('/supp/:id', (req,res)=>{
 
   let myid = req.params.id;

   Product.findByIdAndDelete({_id : myid})
   .then(
       (result)=>{
        res.send(result);
       }
   )
   .catch(
       (err)=>{
          res.send(err);
       }
   )
});


module.exports =router;