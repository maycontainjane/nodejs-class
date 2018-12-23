//const MongoClient = require('mongodb').MongoClient;
// destructuring: {<attribute>} = <obj that contains attribute> to get attribute from obj
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log("Could not connect to MongoDB server");
	}
	console.log("connected to MongoDB server");
	const db = client.db('TodoApp');

	// db.collection('Todos').insertOne({
	// 	text: 'Thing to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console('Unable to insert todo', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 4));
	// });

	db.collection('Users').insertOne({
		name: "Jane",
		age: 25,
		location: "Minnesota"
	}, (err, result) => {
		if (err) {
			return console.log("Unable to add user", err);
		}

		console.log(result.ops[0]._id.getTimestamp())
	})

	client.close();
});
