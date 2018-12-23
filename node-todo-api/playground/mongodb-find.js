//const MongoClient = require('mongodb').MongoClient;

// destructuring: {<attribute>} = <obj that contains attribute> to get attribute from obj
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log("Could not connect to MongoDB server");
	}
	console.log("connected to MongoDB server");
	const db = client.db('TodoApp');

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos ${count}`);
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	// client.close();

	db.collection('Users').find({name: 'Jacob'}).toArray().then((doc) => {
		console.log(JSON.stringify(doc, undefined, 4));
	}, (err) => {
		console.log("Could not get user with name Jane");
	});

	client.close();

});
