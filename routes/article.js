//njib express
const express = require('express');

//na3ml router weld server
const router = express.Router();

//8 import Article
const Article = require('../models/article');

//upload fils multer

const multer = require('multer');


let filename=' ';


//configuration lil multer bch image matjich martin

const diskStorage = multer.diskStorage({
   destination:'./upload',
   filename:(req,file,redirect)=>{
      
      //meme type traj3li image/jpg
      //splite { 'image' ,'jpg' } ylasa9hom
      filename = Date.now() + '.' +file.mimetype.split('/')[1];
      redirect(null,filename);

   }  
})

const upload = multer({storage : diskStorage});
//article

//post
router.post('/create',upload.single('image'),(req,res)=>{
    let data =req.body;

    let art = new Article(data);
      art.image =filename;
    art.save()
    .then(
      (savedArticle)=>{
        res.send(savedArticle);
      }
    )
    .catch(
      (err)=>{
        res.send(err);
      }
    )
});

//get
router.get('/allarticle',(req,res)=>{

  Article.find()
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


router.get('/getbyidarticle/:id',(req,res)=>{
   let myid = req.params.id;
   
   Article.findById({_id:myid})
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


router.get('/getbylikes/:likes',(req,res)=>{
         let mylikes =req.params.likes;

         Article.find({likes:mylikes})
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

//delete

router.delete('/suppart/:id',(req,res)=>{
      let myid = req.params.id;

      Article.findByIdAndDelete({_id:myid})
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

//update likes auto incremente
router.put('/uplikes/:id',(req,res)=>{
   let myid = req.params.id;

   let newData = req.body;

   Article.findByIdAndUpdate({_id:myid} ,{ $inc:{likes:2}})
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


module.exports = router;