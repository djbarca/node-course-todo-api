const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    // deleteMany
    // db.collection('Todos')
    //     .deleteMany({text: 'Eat lunch'})
    //     .then((result) => {console.log(result)
    //     })
    //     .catch((err) => {console.log('Unable to fetch users', err)
    //     });
    
    // deleteOne
    // db.collection('Todos')
    //     .deleteOne({text: 'Eat lunch'})
    //     .then((result) => {console.log(result)
    //     })
    //     .catch((err) => {console.log('Unable to fetch users', err)
    //     });

    // findOneAndDelete
    // db.collection('Todos')
    //     .findOneAndDelete({completed: false})
    //     .then((result) => {console.log(result)
    //     })
    //     .catch((err) => {console.log('Unable to fetch users', err)
    //     });

    db.collection('Users')
        .deleteMany({location: 'Aldie'})
        .then(
            (result) => {console.log(result);
            return db.collection('Users').findOneAndDelete({name: 'David'})
        })
        .then((result) => {console.log(result)})
        .catch((err) => {console.log('Unable to fetch users', err)
        });
    //db.close()
});