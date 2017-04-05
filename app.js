let express = require('express');
let app = express();
let path = require('path');
let fs = require('fs');
let bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use('/static', express.static('public'));

app.get('/', function(req, res){
  res.send('Hello World');
});

app.get('/quizzes', function(req, res){
  res.sendFile(path.join(__dirname, 'public', 'all.json'), function(err){
    if (err) {
      console.log('/quizzes ', err);
    }else{
      console.log('/quizzes no err');
    }}
  );
  fs.writeFile(path.join(__dirname, 'public', 'all.txt'), 'hello', 'utf8', function(err){
    console.log("fs writfle [err]", err);
  });
});

app.get('/quizzes/:quizFile', function(req, res){
  res.sendFile(path.join(__dirname, 'public', req.params.quizFile), function(err){
  if (err) {
    console.log('/quizzes [err], [params.quizfile]', err, req.params.quizFile);
  }else{
    console.log('/quizzes no err');
}

});
});

app.post('/quizzes/:quizFile', function(req, res){
  let quizData = req.body.data;
  fs.writeFile(path.join(__dirname, 'public', req.params.quizFile), quizData, 'utf8', function(err){
    console.log("fs writfle [err]", err);
  });
    res.sendFile(path.join(__dirname, 'public', req.params.quizFile));
});

app.listen(7777, function () {
  console.log('Example app listening on port 7777!');
});
