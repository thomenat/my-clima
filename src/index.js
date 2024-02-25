function refreshWeather(response) {
    console.log(response.data);
}


function searchCity(city) {
    let apiKey = "deabbt600bd7ofd44dbd308802faa2f2";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
    
}




function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
}


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

