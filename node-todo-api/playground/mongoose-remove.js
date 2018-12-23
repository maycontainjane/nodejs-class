const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

Todo.findOneAndRemove({_id: '5c1fe417fcd1cfbda6f7d0fc'}).then((result) => {
	console.log(todo);
});

// Todo.findByIdAndRemove('5c1fe417fcd1cfbda6f7d0fc').then((todo) => {
// 	console.log(todo);
// });