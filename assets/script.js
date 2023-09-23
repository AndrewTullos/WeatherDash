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
            getFiveDay(data, city);
        }
    })
    .catch(function(error) {
        alert('Unable to find the weather');
    });
})



var getCityWeather = function (city) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

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
    weatherNow.innerHTML = '';

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
    secondChildDiv.innerHTML = `Temperature (F): ${temp}<br><br>Wind (mph): ${wind}<br><br>Humidity: ${humidity}`;
    mainCityCard.append(secondChildDiv);
}



// // 5 Day Forcast
var getFiveDay = function (city) {
    var apiUrlFive = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`

    fetch(apiUrlFive)
    .then(function(response) {
        if (!response.ok) {
            console.error('Something went wrong. Error: ' + response.statusText);
            return;
        }
        return response.json();
    })
    .then(function(data) {
        if (data) {
            console.log('THIS IS 5 DAY', data);

            // Day 1
            var temp1 = data.list[2].main.temp;
            var wind1 = data.list[2].main.temp;
            var humidity1 = data.list[2].wind.speed;
            var icon1 = data.list[2].weather[0].icon
            var time1 = data.list[2].dt_txt;


            var day1 = document.querySelector('#day-1')
            const dayOneDiv = document.createElement('div');
            dayOneDiv.classList.add('card');
            day1.append(dayOneDiv);
            var dayOneImage = document.createElement('div');
            dayOneImage.classList.add('card-image-top');
            dayOneImage.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon1}@2x.png" alt="Weather Icon">`;
            var dayOneDivChild = document.createElement('div');
            dayOneDivChild.classList.add('card-text');
            dayOneDivChild.innerHTML = `${time1}<br><br>Temperature (F): ${temp1}<br><br>Wind (mph): ${wind1}<br><br>Humidity: ${humidity1}`;
            dayOneDiv.append(dayOneImage);
            dayOneDiv.append(dayOneDivChild);

            // Day 2
            var temp2 = data.list[10].main.temp;
            var wind2 = data.list[10].main.temp;
            var humidity2 = data.list[10].wind.speed;
            var icon2 = data.list[10].weather[0].icon
            var time2 = data.list[10].dt_txt;


            var day2 = document.querySelector('#day-2')
            const dayTwoDiv = document.createElement('div');
            dayTwoDiv.classList.add('card');
            day2.append(dayTwoDiv);
            var dayTwoImage = document.createElement('div');
            dayTwoImage.classList.add('card-image-top');
            dayTwoImage.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon2}@2x.png" alt="Weather Icon">`;
            var dayTwoDivChild = document.createElement('div');
            dayTwoDivChild.classList.add('card-text');
            dayTwoDivChild.innerHTML = `${time2}<br><br>Temperature (F): ${temp2}<br><br>Wind (mph): ${wind2}<br><br>Humidity: ${humidity2}`;
            dayTwoDiv.append(dayTwoImage);
            dayTwoDiv.append(dayTwoDivChild);


            // Day 3
            var temp3 = data.list[18].main.temp;
            var wind3 = data.list[18].main.temp;
            var humidity3 = data.list[18].wind.speed;
            var icon3 = data.list[18].weather[0].icon
            var time3 = data.list[18].dt_txt;


            var day3 = document.querySelector('#day-3')
            const dayThreeDiv = document.createElement('div');
            dayThreeDiv.classList.add('card');
            day3.append(dayThreeDiv);
            var dayThreeImage = document.createElement('div');
            dayThreeImage.classList.add('card-image-top');
            dayThreeImage.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon3}@2x.png" alt="Weather Icon">`;
            var dayThreeDivChild = document.createElement('div');
            dayThreeDivChild.classList.add('card-text');
            dayThreeDivChild.innerHTML = `${time3}<br><br>Temperature (F): ${temp3}<br><br>Wind (mph): ${wind3}<br><br>Humidity: ${humidity3}`;
            dayThreeDiv.append(dayThreeImage);
            dayThreeDiv.append(dayThreeDivChild);
            


            // Day 4
            var temp4 = data.list[26].main.temp;
            var wind4 = data.list[26].main.temp;
            var humidity4 = data.list[26].wind.speed;
            var icon4 = data.list[26].weather[0].icon
            var time4 = data.list[26].dt_txt;


            var day4 = document.querySelector('#day-4')
            const dayFourDiv = document.createElement('div');
            dayFourDiv.classList.add('card');
            day4.append(dayFourDiv);
            var dayFourImage = document.createElement('div');
            dayFourImage.classList.add('card-image-top');
            dayFourImage.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon4}@2x.png" alt="Weather Icon">`;
            var dayFourDivChild = document.createElement('div');
            dayFourDivChild.classList.add('card-text');
            dayFourDivChild.innerHTML = `${time4}<br><br>Temperature (F): ${temp4}<br><br>Wind (mph): ${wind4}<br><br>Humidity: ${humidity4}`;
            dayFourDiv.append(dayFourImage);
            dayFourDiv.append(dayFourDivChild);
            
            



            // Day 5
            var temp5 = data.list[34].main.temp;
            var wind5 = data.list[34].main.temp;
            var humidity5 = data.list[34].wind.speed;
            var icon5 = data.list[34].weather[0].icon;
            var time5 = data.list[34].dt_txt;


            var day5 = document.querySelector('#day-5')
            const dayFiveDiv = document.createElement('div');
            dayFiveDiv.classList.add('card');
            day5.append(dayFiveDiv);
            var dayFiveImage = document.createElement('div');
            dayFiveImage.classList.add('card-image-top');
            dayFiveImage.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon5}@2x.png" alt="Weather Icon">`;
            var dayFiveDivChild = document.createElement('div');
            dayFiveDivChild.classList.add('card-text');
            dayFiveDivChild.innerHTML = `${time5}<br><br>Temperature (F): ${temp5}<br><br>Wind (mph): ${wind5}<br><br>Humidity: ${humidity5}`;
            dayFiveDiv.append(dayFiveImage);
            dayFiveDiv.append(dayFiveDivChild);


        }
    })
    .catch(function(error) {
        alert('Unable to find the weather');
    });
}
