// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // Delete Meatwad
    // db.collection('Users').deleteMany({
    //     name: 'Meatwad'
    // }).then((result) => {
    //     console.log(result);
    // });

    // Delete Frylock
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5bd8c82d91cca40824dbf718')
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});