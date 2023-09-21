/*
Search a city - presented with 5 day forcast
5 day forcast needs:
- Date, 
- Icon representation of weather conditions
- Temperature
- Wind speed
- Humidity
City is added to search history
At the top need the 
- City name
- Date, 
- Icon representation of weather conditions
- Temperature
- Humidity, 
- Wind speed

*/
const searchFormEl = document.querySelector('#citySearchForm');
const cityInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#citybtn');
const apiKey = '1feffd97de3eba178bd8608881f6c445';
let lat;
let lon;

// Form gathers city
//Extrapolate lat and lon
// Assign values to variable
// Append to page

// GeoCode Lat and Lon extrapolator
// fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&appid=${apiKey}`)

searchFormEl.addEventListener('submit', function(event) {
event.preventDefault();

    var city = cityInput.value.trim();

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}limit=5&appid=${apiKey}`)
    .then(function(response) {
        if (!response.ok) {
            console.error('Something went wrong. Error: ' + response.statusText);
            return;
        }
        return response.json();
    })
    .then(function(data) {
        if (data) {
            displayCity(data, city);
            console.log(data);
        }
    })
    .catch(function(error) {
        alert('Unable to find the weather');
    });
})


/*
// Current Weather Head
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
.then(function(response) {
    if (!response.ok) {
        console.error('Something went wrong. Error: ' + response.statusText);
        return;
    }
    return response.json();
})
.then(function(data) {
    if (data) {
        displayWeather(data, city);
        console.log(data);
    }
})
.catch(function(error) {
    alert('Unable to find the weather');
});
*/

function displayCity() {
    console.log('working')
}

/*
var formSubmitHandler = function (event) {
    event.preventDefault();

    var searchInputVal = document.querySelector('#city-input').value.trim();

    if (!searchInputVal) {
        console.error('You need a search input value!');
        return;
    } else {
        getCityWeather(searchInputVal);
    }
};

var getCityWeather = function (city) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
    .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                displayWeather(data, city);
                console.log(data);
            });
        } else {
            alert('Error: ' + response.statusText);
        }
    })
    .catch(function (error) {
        alert('Unable to find the weather');
    });
};

searchFormEl.addEventListener('submit', function() {
    formSubmitHandler();
    getCityWeather();
});
*/


// // 5 Day Forcast
// fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&limit=${limit}&appid=${APIkey}`, {

// })

// .then(function (response) {
//     return response.json();
// })
// .then(function (data) {
//     console.log(data);
// });