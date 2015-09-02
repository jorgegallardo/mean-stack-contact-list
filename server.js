var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/contactList', function (req, res) {
  console.log("I received a GET request");
  var person1 = {
    name: 'Tim',
    email: 'tim@email.com',
    number: '(111) 111-1111'
  };
  var person2 = {
    name: 'Emily',
    email: 'emily@email.com',
    number: '(222) 222-2222'
  };
  var contactList = [person1, person2];
  res.json(contactList);
});

app.listen(3000);
console.log("Server running on port 3000.");