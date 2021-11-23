const { MongoClient } = require('mongodb');

var http = require('http');
var fs = require('fs');

//connect to mongoDB
const dbUrl =
  'mongodb+srv://ulas:test1234@cluster0.yqjjk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const mongoose = require('mongoose');

main().catch((err) => console.log(err));

async function main() {
  await mongoose
    .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((c) => console.log('MongoDB Connected'))
    .catch((err) => console.error('Failed to connect to MongoDB'));
}

//Create a server
var server = http.createServer((req, res) => {
  console.log(req.url);

  //Routes
  if (req.url == '/') {
    fs.readFile('index.html', (err, data) => {
      res.write(data);

      res.end('mesaj bitti');
    });
  } else if (req.url == '/login') {
    fs.readFile('login.html', (err, data) => {
      res.write(data);

      res.end('mesaj bitti');
    });
  } else if (req.url == '/math') {
    fs.readFile('math.html', (err, data) => {
      res.write(data);

      res.end('mesaj bitti');
    });
  }
});

server.listen(8000);
