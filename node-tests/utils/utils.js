// Functions available to test with Mocha

// Add
module.exports.add = (a, b) => a + b;

// Add after 1 second
module.exports.asyncAdd = (a, b, callback) => {
	setTimeout(() => {
		callback(a + b);
	}, 1000);
};

// Square
module.exports.square = (x) => x * x;

// Square after 1 second
module.exports.asyncSquare = (x, callback) => {
	setTimeout(() => {
		callback(x * x);
	}, 1000)
};

// split "firstname lastname" and add to user object
module.exports.setName = (user, fullName) => {
	var names = fullName.split(' ');
	user.firstName = names[0];
	user.lastName = names[1];
	return user
}
