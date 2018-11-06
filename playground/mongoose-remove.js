const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({_id: '5be0d4be4b8886462ba29a56'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5be0d4be4b8886462ba29a56').then((todo) => {
    console.log(todo);
});
