//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //Identical to the code up above



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result)=>{
  //   if (err) {
  //     return console.log('Unbale to insert todo', err)
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  // db.collection('Users').insertOne({
  //   name: 'Tom',
  //   age: 30,
  //   location: 'Tel-Aviv'
  // }, (err, result)=>{
  //   if (err) {
  //     return console.log('Unbale to insert user', err)
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
