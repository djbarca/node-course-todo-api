const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({ _id: new ObjectID("5ab727bcbfbb5ee981f32cdd") }).then((result) => {
    console.log(result);
});

// gives you the object that was removed
//Todo.findOneAndRemove({_id: '5ab727bcbfbb5ee981f32cdd'})

// gives you the object that was removed
// Todo.findByIdAndRemove().then((todo) => {
//     console.log(todo);
// });