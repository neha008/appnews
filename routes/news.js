var express = require('express');
var router = express.Router();
var newsLive = require('../models/schema');

/* Endpoint is:- http://localhost:8095/news/adddatatodb*/
router.post("/adddatatodb",function(req ,res ,next) {
  console.log("express save");
  if(req.body){
    var newssave = new newsLive();
    newssave.Author = req.body.author;
    newssave.Title = req.body.title;
    //console.log("Value of title in routes "+req.body.title);
    newssave.Description = req.body.description;
    //console.log("Value of description in routes "+req.body.description);
    newssave.url = req.body.url;
    //console.log("Value of url in routes "+req.body.url);
    newssave.urlToImage = req.body.urlToImage;
    //console.log("Value of author in routes "+newssave.urlToImage);
    newssave.PublishedAt = req.body.publishedAt;

  //  console.log("Value of author in routes "+req.body.author);

  newssave.save(function(err){
    if(err) {
      res.send("Error in saving the news headlines");
  }
  else{
     res.send("Saved the news headlines in the mongo" );
 }
});
}
 else{
   res.send("No headline found for saving the headline");
}
});

/* Endpoint is:- http://localhost:8095/news/delete*/
router.delete("/delete",function(req,res) {
  if(req.body){
    request=req.body.title;
    //console.log("request"+request);
    newsLive.remove({title:request},function(err){
      if(err){
        res.send("Error in deleting the data");
      }
      else{
        res.send("Data is deleted successfully");
      }
    });
  }
    else{
      res.send("no data found to delete");
    }
});

/* Endpoint is:- http://localhost:8095/news/update*/
router.put('/update', function(req, res){
  if(req.body)
  {
   request1=req.body.title;
    request2=req.body.description;
  newsLive.update({title:request1},{$set:{description:request2}},function(err){

      if(err) {
        res.send(err);
      }
      else  {
      res.send("News updated");
      console.log("updated");
      }
    });
  }
});

/* Endpoint is:- http://localhost:8095/news/view*/
router.get('/view', function(req, res) {
  newsLive.find({},function(err,allnews){
       if(err) throw err;
              res.send(allnews);

          });


});







module.exports = router;
