//declared variables to use for api
var zipInput = document.querySelector("#zipcodeInput");
var countryInput = document.querySelector('#countryInput');
var submitLocation = document.querySelector('#submitLocation');
var cityName = '';
var lat = 0;
var lon = 0;
var searchHistory = document.querySelector('#searchHistory')
var cityArray = [];
const cityObj = {
    cityName: '',
    lat: '',
    lon: ''
}

function getLocation(event) {
    event.preventDefault();
    var zip = zipInput.value
    if(countryInput.value.length === 0 ) {
        var country = 'US'
    } else {
         country = countryInput.value;
    }
    console.log(zip)
    console.log(country)
    var geoQueryURL = 'https://api.openweathermap.org/geo/1.0/zip?zip=' + zip + ',' + country + '&appid=' + APIKey
    fetch(geoQueryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function(data) {
            cityName = data.name
            lat = data.lat
            lon = data.lon
            genNewCity();
            getWeather();
            getForecast();
        })
}