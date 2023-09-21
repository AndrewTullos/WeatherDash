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
const citySelected = document.querySelector('#city-selected');
const searchBtn = document.querySelector('#citybtn');
const weatherNow = document.querySelector('#weather-now')

const apiKey = '1feffd97de3eba178bd8608881f6c445';
let cityTitle;
let lat;
let lon;
let temp;
let wind;
let humidity;

// Form gathers city
//Extrapolate lat and lon
// Assign values to variable
// Append to page

// GeoCode Lat and Lon extrapolator
searchFormEl.addEventListener('submit', function(event) {
event.preventDefault();
// Clear form here

    var city = cityInput.value.trim();
    console.log("City being searched:", city);  

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`)

    .then(function(response) {
        if (!response.ok) {
            console.error('Something went wrong. Error: ' + response.statusText);
            return;
        }
        return response.json();
    })
    .then(function(data) {
        if (data) {
            console.log(data);
            lat = data[0].lat;
            lon = data[0].lon;
            cityTitle = data[0].name;
            displayCity(data, city);
            getCityWeather(data);
        }
    })
    .catch(function(error) {
        alert('Unable to find the weather');
    });
})



var getCityWeather = function (city) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(apiUrl)
    .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                temp = data.main.temp;
                wind = data.wind.speed;
                humidity = data.main.humidity;
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

//Creating the card to display current weather at top of document
function displayCity() {
    console.log('working')
    weatherNow.classList.add('card');
    const childDiv = document.createElement('div');
    citySelected.classList.add('card-title');
    citySelected.textContent = cityTitle;  


    childDiv.className = 'card-body';
    childDiv.id = 'mainCityCard';

    weatherNow.appendChild(childDiv);
}

function displayWeather() {
    console.log('Working');
    const secondChildDiv = document.createElement('div');
    secondChildDiv.classList.add('card-text');
    let mainCityCard = document.getElementById('mainCityCard');
    secondChildDiv.innerHTML = `Temperature: ${temp}<br><br>Wind: ${wind}<br><br>Humidity: ${humidity}`;
    mainCityCard.append(secondChildDiv);
}
// searchFormEl.addEventListener('submit', function() {
//     formSubmitHandler();
//     getCityWeather();
// });



// // 5 Day Forcast
// fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&limit=${limit}&appid=${APIkey}`, {

// })

// .then(function (response) {
//     return response.json();
// })
// .then(function (data) {
//     console.log(data);
// });