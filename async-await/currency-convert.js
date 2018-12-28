const axios = require("axios");
// converting, convertTo, amount
// x USD is worth y CAD. You can spend CAD in the following countries:

// http://data.fixer.io/api/latest?access_key=30d6a5ca861ab6f528436dc99985040c&format=1
// http://restcountries.eu/rest/v2/currency/USD

const getExchangeRate = async (from, to) => {
    try {
        const response = await axios.get('http://data.fixer.io/api/latest?access_key=30d6a5ca861ab6f528436dc99985040c&format=1');
        const euro = 1 / response.data.rates[from];
        const rate = euro * response.data.rates[to];
        if (isNaN(rate)) {
            throw new Error();
        }
        return rate;
    }
    catch(e) {
        throw new Error(`Unable to get exchange rate for ${from} and ${to}`)
    }
};

const getCountries = async (currencyCode) => {
    try {
        const response = await axios.get(`http://restcountries.eu/rest/v2/currency/${currencyCode}`);
        return response.data.map((country) => country.name);
    } catch(e) {
        throw new Error(`unable to get countries that use ${currencyCode}`);
    }
};

const convertCurrency = async (from, to, amount) => {
    const rate = await getExchangeRate(from, to);
    const convertedAmount = (amount * rate);
    const countries = await getCountries(to);
    return `${amount} ${from} is worth ${convertedAmount} ${to}. You can spend it in the following countries: ${countries.join(', ')}`;
};

convertCurrency('USD', 'CAD', 20).then((message) => {
    console.log(message);
}).catch((e) => {
    console.log(e.message);
});
