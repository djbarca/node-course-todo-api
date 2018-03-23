const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    // db.collection('Todos')
    //     .findOneAndUpdate({_id: new ObjectID("5ab4433048277205973ab169")}, {$set: {completed: true}}, {returnOriginal: false})
    //     .then((result) => {console.log(result)})
    //     .catch((err) => {console.log('Unable to fetch users', err)
    //     });

    db.collection('Users')
    .findOneAndUpdate({_id: new ObjectID("5ab30325e36b348bef2cc461")}, {$set: {name: 'David'}, $inc: {age: 1}}, {returnOriginal: false})
    .then((result) => {console.log(result)})
    .catch((err) => {console.log('Unable to fetch users', err)
    });
    //db.close()
});