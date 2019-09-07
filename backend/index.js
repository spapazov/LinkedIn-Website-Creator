//Set up Server
const express = require('express')


const app = express()
const port = 3000
let ip = 'localhost';

// mongodb+srv://<username>:<password>@websitecreator-wchox.mongodb.net/test?retryWrites=true&w=majority

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb+srv://spapazov:PennApps@websitecreator-wchox.mongodb.net/test?retryWrites=true&w=majority';

// Database Name
const dbName = 'WebsiteCreator';

// Create a new MongoClient
const client = new MongoClient(url);


//Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  find({name: 'Bob'}, dbName);
});


function createTbl(dataBaseName) {
  let db = client.db(dataBaseName);
  db.createCollection("websites",
	   {
	      'validator': { '$or':
	         [
	            { 'name': { '$type': "string" } },
	            { 'email': { '$type': "string"} },
	            { 'html': { '$type': "string"} },
              {'port' : {'$type': "int"}}
	         ]
	      }
	   },
    function(err, results) {
      if (err) console.log("failure");
      console.log("Collection created.");
    }
  );
};

function insert(data, dataBaseName) {
  client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    let db = client.db(dataBaseName);
    db.collection("websites").insertOne(data, function(err, res) {
      assert.equal(null, err);
      console.log("created entry");
    })

    client.close();
  });
}

function find(query, dataBaseName) {
  client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    let db = client.db(dataBaseName);
    db.collection("websites").find(query).toArray(function (err, res){
      assert.equal(null, err);
      console.log(res);
    });
    client.close();
  });
}

function generatePort() {
  let port = Math.random() * (65000 - 2000) + 2000;

}


app.post('/create', (req, res) => {
  let port = generatePort();
  insert({name: req.name, email: req.email, html: req.html, port: port}, dbName);
  res.send({url: "" + ip + ":" + port});
})

app.get('/', (req, res) => {
  let user = find({url: req.url}, dbName);
  res.send(user.html);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));



/*
console.log("Fake" + port);
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  db.collection("website").find({port: port}).toArray(function (err, res){
    if (res.length) return port;
    else return generateUrl();
  });

  client.close();
});
*/
