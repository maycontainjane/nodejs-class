const yargs = require("yargs");
const axios = require("axios");

const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address you want the weather of',
			string: true
		}
	})
	.help() 
	.alias('help', 'h')
	.argv;

//ddd8a873e0e3669effcdcdee007e9ff4

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAtOda6_d3N49ZLcjS6hAhzqF7lVng795o`;

axios.get(geocodeUrl).then((response) => {
	if (response.data.status === 'ZERO_RESULTS') {
		throw new Error("Unable to find that address");
	}
	var lat = response.data.results[0].geometry.location.lat;
	var lng = response.data.results[0].geometry.location.lat;
	var weatherUrl = `https://api.forecast.io/forecast/ddd8a873e0e3669effcdcdee007e9ff4/${lat},${lng}`;
	console.log(response.data.results[0].formatted_address);
	return axios.get(weatherUrl);
}).then((response) => {
	var temperature = response.data.currently.temperature;
	var feelsLike = response.data.currently.apparentTemperature;
	console.log(`It's currently ${temperature} degrees but it feels like ${feelsLike}`);
}).catch((e) => {
	if (e.code === 'ENOTFOUND') {
		console.log("Unable to connect to API servers.");
	}
	else {
		console.log(e);
	}
});java