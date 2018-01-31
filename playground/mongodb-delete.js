//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //Identical to the code up above


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // })

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // })

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
  // console.log(result);
  // });

  db.collection('Users').deleteMany({name: 'Tom'}).then((result)=>{
    console.log(result);
  });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5a71b0d8f9878a23d451fda2')}).then((result)=>{
  console.log(result);
  });


  db.close();
});
