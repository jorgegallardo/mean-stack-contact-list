var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/contactlist', function (req, res) {
  console.log("I received a GET request");
  db.contactlist.find(function (error, docs) {
    console.log(docs);
    res.json(docs); //sends data back to controller
  });
  // var person1 = {
  //   name: 'Tim',
  //   email: 'tim@email.com',
  //   number: '(111) 111-1111'
  // };
  // var person2 = {
  //   name: 'Emily',
  //   email: 'emily@email.com',
  //   number: '(222) 222-2222'
  // };
  // var contactlist = [person1, person2];
  // res.json(contactlist);
});

app.post('/contactlist', function (req, res) {
  console.log(req.body);
  db.contactlist.insert(req.body, function (err, doc) {
    res.json(doc);
  });
});

app.delete('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.contactlist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.listen(3000);
console.log("Server running on port 3000.");