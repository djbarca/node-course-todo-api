//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID("5ab2fef91db8f08b78ca952e")})
    //     .toArray()
    //     .then((docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err);
    //     });

    // db.collection('Todos').find()
    //     .count()
    //     .then((count) => {
    //         console.log(`Todos count: ${count}`);
    //     })
    //     .catch((err) => {
    //         console.log('Unable to fetch todos', err);
    //     })
    // db.close();

    db.collection('Users').find({
            location: 'Aldie'
        })
        .toArray()
        .then((docs) => {
            console.log('Users');
            console.log(JSON.stringify(docs, undefined, 2));
        })
        .catch((err) => {
            console.log('Unable to fetch users', err);
        })
    db.close()
});