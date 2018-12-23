const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log("Could not connect to MongoDB server");
	}
	console.log("connected to MongoDB server");
	const db = client.db('TodoApp');

	// db.collection('Todos').deleteMany({text: 'Lift'}).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('Todos').deleteOne({text: 'lift'}).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').deleteMany({name: 'Jane'}).then((result) => {
		console.log(result);
	});

	db.collection('Users').findOneAndDelete({_id: new ObjectID("5c1f27b99baa88b255216770")}).then((result) => {
		console.log(result);
	});

	client.close();
});
