const apiKey = '1feffd97de3eba178bd8608881f6c445';

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
const searchBtn = document.querySelector('#citybtn')

var formSubmitHandler = function (event) {
    event.preventDefault();

    var searchInputVal = document.querySelector('#city-input').value.trim();

    if (!searchInputVal) {
        console.error('You need a search input value!');
        return;
    } else if (searchInputVal) {
        getCityWeather(searchInputVal);

    } 
}
    

var getCityWeather = function (user) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInputVal}&appid=${apiKey}`;

    fetch(apiUrl)
    .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
            displayRepos(data, user);
        });
        } else {
        alert('Error: ' + response.statusText);
        }
    })
    .catch(function (error) {
        alert('Unable to connect to GitHub');
    });
};

// THIS NEEDS FORMATTING!!
var displayRepos = function (repos, searchTerm) {
    if (repos.length === 0) {
    repoContainerEl.textContent = 'No repositories found.';
    return;
}

    repoSearchTerm.textContent = searchTerm;

    for (var i = 0; i < repos.length; i++) {
    var repoName = repos[i].owner.login + '/' + repos[i].name;

    var repoEl = document.createElement('div');
    repoEl.classList = 'list-item flex-row justify-space-between align-center';

    var titleEl = document.createElement('span');
    titleEl.textContent = repoName;

    repoEl.appendChild(titleEl);

    var statusEl = document.createElement('span');
    statusEl.classList = 'flex-row align-center';

    if (repos[i].open_issues_count > 0) {
        statusEl.innerHTML =
        "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + ' issue(s)';
    } else {
        statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
    }

    repoEl.appendChild(statusEl);

    repoContainerEl.appendChild(repoEl);
    }
};

// searchFormEl.addEventListener('submit', function(event) {
//     event.preventDefault(); 
    
//     var searchInputVal = document.querySelector('#city-input').value;

//     if (!searchInputVal) {
//         console.error('You need a search input value!');
//         return;
//     }

//     var queryString = './search-results.html?q=' + searchInputVal + '&format=';

//     location.assign(queryString);

//     console.log('Working');
//     console.log('Search input value:', searchInputVal);

// });
    
// searchFormEl.addEventListener('submit', handleSearchFormSubmit);



// // 5 Day Forcast
// fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&limit=${limit}&appid=${APIkey}`, {

// })

// .then(function (response) {
//     return response.json();
// })
// .then(function (data) {
//     console.log(data);
// });