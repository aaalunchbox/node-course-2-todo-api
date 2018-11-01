const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5bda4543a554b310ec506d1c111';

// if (!ObjectID.isValid(id)) {
//     console.log('Id not valid')
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

var id = '5bd8e840a81fe01018b4afeb'

User.findById(id).then((user) => {
        if (!user){
            return console.log('Id not found');
        }
        console.log(JSON.stringify(user, undefined, 2));
    }, (e) => {
        console.log(e);
    });