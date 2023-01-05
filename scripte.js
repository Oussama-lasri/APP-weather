let result = document.getElementById('result');
let searchBtn = document.getElementById('search-btn');
let cityRef = document.getElementById('city');

// function to fetch weather details from api and display them
let getWeather = () =>{
    let cityValue = cityRef.value;
    let key = 'ef27c73ee10a908d441107dd70f43cf7';
    // if input field is EMPTY
    if(cityValue.length == 0){
        // alert('test lenght');
        result.innerHTML = `<h3 class="msg">please enter a city name</h3>`;
    }else{
        // alert("test else");
    // if input field is NOT EMPTY
    
   let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
   fetch(url).then(
    (resp) => resp.json())
    .then(data => {
        // console.log(data);
        // console.log(data.name);
        // console.log(data.main.temp);
        // console.log(data.main.temp_max);
        // console.log(data.main.temp_min);
        // console.log(data.weather[0].icon);
        // console.log(data.weather[0].main);
        // console.log(data.weather[0].description);
        result.innerHTML = `
        <h2>${data.name}</h2>
        <h4 class="weather">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png"/>
        <h1>${data.main.temp}&#176;</h1>
        <div class="temp-container">
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data.main.temp_max}</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data.main.temp_min}</h4>
            </div>
        </div>
        `;

    }
        //if city name is valid
    ).catch(()=>{
        result.innerHTML = `<h3 class="msg">city not found</h3>`
    });
}};

searchBtn.addEventListener("click",getWeather);
// window.addEventListener("load",getWeather);