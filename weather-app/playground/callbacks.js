var getUser = (id, callback) => {
	var user = {
		id: id,
		name: 'Chance'
	};

	setTimeout(() => {
		callback(user);
	}, 3000);
};

getUser(50, (userObj) => {
    console.log(userObj);
});