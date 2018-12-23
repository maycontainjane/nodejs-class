const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//var id = '5c1f69b4bf58a1d6bedc8a0911';

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// if (!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// }

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('id not found');
// 	}
// 	console.log('todo', todo);
// }).catch((e) => console.log(e));


var userid = "5c1f5f0e63614c3cbc3edb3d";

User.findById(userid).then((user) => {
	if (!user) {
		return console.log('user not found by id');
	}
	console.log('email for user', user.email);
}).catch((e) => console.log(e));