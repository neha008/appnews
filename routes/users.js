var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/', function(req, res) {
var userName=req.body.uName;
var password=req.body.password;
console.log(userName);
console.log(password);
//var user=req.body.status;
//var data=req.body.sources[0].id;
//console.log(data);
res.send(userName+" "+password)

});
router.post('/usertest', function(req, res) {

    //console.log("Inside Post");
    if(req.body)
    {
        //console.log("Inside Body");
        var userdetails = new userauthentication();
        userdetails.username = req.body.username;
        userdetails.password = req.body.password;
        //console.log("UserName"+userdetails.username);
        userdetails.save(function(err) {
            if(err)
            {
                res.send(err);
            }
            else
            {
                res.send("inserted to database")
            }

        });
    }


});

module.exports = router;
