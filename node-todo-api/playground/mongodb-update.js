const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log("Could not connect to MongoDB server");
	}
	console.log("connected to MongoDB server");
	const db = client.db('TodoApp');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5c1f2703f9cdcdb24befc42c')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('Users').findOneAndUpdate({
	// 	_id: new ObjectID('5c1f437dce2a850a49ee9066')
	// }, {
	// 	$set: {
	// 		name: "Lauren"
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5c1f437dce2a850a49ee9066')
	}, {
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	client.close();
});
