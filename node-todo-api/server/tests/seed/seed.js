const jwt = require('jsonwebtoken');
const {ObjectID} = require('mongodb');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
    _id: userOneId,
    email: 'userone@example.com',
    password: 'userOnePass',
    tokens: [{
        token: jwt.sign({_id: userOneId, access: 'auth'}, process.env.JWT_SECRET).toString(),
        access: 'auth'  
    }]
}, {
    _id: userTwoId,
    email: 'usertwo@example.net',
    password: 'userTwoPass',
    tokens: [{
        token: jwt.sign({_id: userTwoId, access: 'auth'}, process.env.JWT_SECRET).toString(),
        access: 'auth'
    }]
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
    text: "First test todo",
    _creator: userOneId
}, {
	_id: new ObjectID(),
	text: "Second test todo",
    completed: true,
    _creator: userTwoId
}];

const populateTodos = (done) => {
	Todo.remove({}).then(() => {
		return Todo.insertMany(todos);
	}).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};