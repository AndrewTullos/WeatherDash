// 1feffd97de3eba178bd8608881f6c445

/*
Need form inputs
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

const cityForm = document.getElementById('cityForm');

cityForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    console.log('Working');
});

