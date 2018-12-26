const jwt = require('jsonwebtoken');
const {ObjectID} = require('mongodb');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const registeredUserID = new ObjectID();
const unregisteredUserID = new ObjectID();

const users = [{
    _id: registeredUserID,
    email: 'registereduser@example.com',
    password: 'userOnePass',
    tokens: [{
        token: jwt.sign({_id: registeredUserID, access: 'auth'}, 'ch@nce').toString(),
        access: 'auth'  
    }]
}, {
    _id: unregisteredUserID,
    email: 'unregistereduser@example.net',
    password: 'userTwoPass'
}];

const populateUsers = (done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo])
    }).then(() => done());
};

const todos = [{
	_id: new ObjectID(),
	text: "First test todo"
}, {
	_id: new ObjectID(),
	text: "Second test todo",
	completed: true
}, {
	_id: new ObjectID(),
	text: "Third test todo"
}];

const populateTodos = (done) => {
	Todo.remove({}).then(() => {
		return Todo.insertMany(todos);
	}).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};