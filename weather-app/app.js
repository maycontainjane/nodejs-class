const yargs = require("yargs");

const geocode = require("./geocode/geocode");
const weather = require("./weather/weather")

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address you want the weather of',
			string: true
		},
        g: {
            demand: true,
            alias: 'gmapskey',
            describe: 'Google Maps API Key',
            string: true
        },
        d: {
            demand: true,
            alias: 'darkskykey',
            describe: 'Dark Sky API Key',
            string: true
        }
	})
	.help() 
	.alias('help', 'h')
	.argv;

geocode.geocodeAddress(argv.address, argv.gmapskey, (errorMessage, results) => {
	if (errorMessage) {
		console.log(errorMessage);
	}
	else {
		//latitude, longitude, callback
		weather.getWeather(results.latitude, results.longitude, argv.darkskykey, (errorMessage, weatherResults) => {
		if (errorMessage) {
			console.log(errorMessage);
		}
		else {
			//console.log(JSON.stringify(results, undefined, 4));
			console.log(`It's currently ${weatherResults.temperature} degrees in ${results.address}, but it feels like ${weatherResults.feels_like}`);
		}
	});
	}
});

//ddd8a873e0e3669effcdcdee007e9ff4

