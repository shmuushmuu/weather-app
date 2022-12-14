// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

//my Api key
//3e1945513cc5bde07da51feba3091383;

//today's weather
//apiUrl = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";

// geocoding
//geocodingApiUrl = "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}";

// 5 day weather
//apiWeekUrl = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";

var searchedCity = document.getElementById('#search');

function fetchWeather(currentCity) {
    var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + q + "&limit=5&appid=3e1945513cc5bde07da51feba3091383";

    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
        .catch(function (error) {
            console.log(error);
        })
}
var handleSearch = function (event) {
        event.preventDefault();
        var currentCity = searchedCity.value.trim();
        fetchWeather(currentCity);
}
