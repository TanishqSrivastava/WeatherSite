async function getWeather(location){
    const resp = await fetch("http://api.weatherapi.com/v1/current.json?key=ff295ee4102144df842110102241502&q=" + location);
    const data = await resp.json();
    return data;

}
let a = getWeather("Vellore");
//i want to console log the data inside the promise
let data = 0;
getWeather("Vellore").then(function(data){
    console.log(data);

});

async function getWeatherForecast(location){
    const resp = await fetch("http://api.weatherapi.com/v1/forecast.json?key=ff295ee4102144df842110102241502&q=" + location + "&days=3");
    const data = await resp.json();
    return data;

}

getWeather("Vellore").then(function(data){
    const headingMain = document.createElement("h1");
    headingMain.textContent = "Weather Report of Current Time";
    headingMain.style = " background-color:lightgray;border-radius:20px;padding:15px;text-align: center; font-size: 50px;";

    const headingOne = document.createElement("h1");
    const p = document.createElement("p");
    const headingTwo = document.createElement("h1");
    const p2 = document.createElement("p");
    headingOne.textContent = "Location: " + data.location.name;
    p.textContent = "Temperature: " + data.current.temp_c;
    headingTwo.textContent = "Condition: " + data.current.condition.text;
    p2.textContent = "Humidity: " + data.current.humidity;
    const div = document.createElement("div");
    div.appendChild(headingMain);
    div.appendChild(headingOne);
    div.appendChild(p);
    div.appendChild(headingTwo);
    div.appendChild(p2);
    div.id = "container";
    document.body.appendChild(div);
});

getWeatherForecast("Vellore").then((data) => {
    console.log(data);
})

getWeatherForecast("Vellore").then((data) => {
    data.forecast.forecastday.forEach((day)=>{
        const headingMain = document.createElement("h1");
        headingMain.textContent = "Weather Report "+ day.date;
        headingMain.style = " background-color:lightgray;border-radius:20px;padding:15px;text-align: center; font-size: 50px;";

        const headingOne = document.createElement("h1");
        const p = document.createElement("p");
        const headingTwo = document.createElement("h1");
        const p3 = document.createElement("p");
        const p2 = document.createElement("p");
        p.textContent = "Average Temperature: " + day.day.avgtemp_c;
        p3.textContent = "Condition: " + day.day.condition.text;
        p2.textContent = "Humidity: " + day.day.avghumidity;
        const div = document.createElement("div");
        div.appendChild(headingMain);
        div.appendChild(p);
        div.appendChild(p3);
        div.appendChild(p2);
        div.id = "container";
        document.body.appendChild(div);
    })
})