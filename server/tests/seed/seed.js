const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
    _id: userOneId,
    email: 'david@david.com',
    password: 'userOnepassword',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
    }]
}, {
    _id: userTwoId,
    email: 'eula@example.com',
    password: 'userTwopassword'
}];

const todos = [
    { _id: ObjectID(), text: 'First test todo'}, 
    { _id: ObjectID(), text: 'Second test todo', completed: true, completedAt: 333 },
    { _id: ObjectID(), text: 'Third test todo'},
    { _id: ObjectID(), text: 'Fourth test todo'}
];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = (done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo])
    }).then(() => done());
};

module.exports = {todos, users, populateTodos, populateUsers};