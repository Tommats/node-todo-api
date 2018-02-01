//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //Identical to the code up above


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a71dae001dacff4a2f91186')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then( (result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a71ae34c4d7572af833d247')
  }, {
    $set: {
      name: 'Tom'
    },
    $inc: {
      age: 3
    }
  }, {
    returnOriginal: false
  }).then( (result) => {
    console.log(result);
  });

  //db.close();
});
