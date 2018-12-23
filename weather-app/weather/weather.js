const request = require("request");

var getWeather = (lat, lng, key, callback) => {
	request({
		url: `https://api.forecast.io/forecast/${key}/${lat},${lng}`,
		json: true
	}, (error, response, body) => {
		if (error) {
			callback("Unable to connect to forecast.io service.");
			//console.log("Unable to connect to forecast.io service.");
		}
		else if (response.statusCode === 400) {
			callback("Unable to get weather for location");
			//console.log("Unable to get weather for location")
			//console.log(`Unable to get weather for location ${argv.address}`)
		}
		else if (body.currently) {
			callback(undefined, {
				temperature: body.currently.temperature,
				feels_like: body.currently.apparentTemperature
			});
		}
	});
};

module.exports = {
	getWeather
}
