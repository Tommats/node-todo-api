const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });


Todo.findByIdAndRemove('5a783271b55d65a2da09af86').then((todo)=>{
  console.log(todo);
})
