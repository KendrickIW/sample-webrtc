var express = require("express");
var app     = express();
var path    = require("path");

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/assets'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(port, function() {
  console.log('Our app is running on port:', port);
});
