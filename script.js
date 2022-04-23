//Variables to pull the data from EONET for the current tracked wildfires
let dataDisplay1 = document.getElementById('data-display1');
let dataDisplay2 = document.getElementById('data-display2');
let dataDisplay3 = document.getElementById('data-display3');
let dataDisplay4 = document.getElementById('data-display4');
let dataDisplay5 = document.getElementById('data-display5');
//Variables to join the AQI data to the document under the EONET data.
let aqiDisplay1 = document.getElementById('aqi-display1');
let aqiDisplay2 = document.getElementById('aqi-display2');
let aqiDisplay3 = document.getElementById('aqi-display3');
let aqiDisplay4 = document.getElementById('aqi-display4');
let aqiDisplay5 = document.getElementById('aqi-display5');
//capture the divs to be hidden
const fireBox = document.getElementById('fire-box');
const fireButton = document.getElementById('fire-button')
//Hide the event data with a button
fireButton.onclick = function () {
    if (fireBox.style.display !== 'none') {
        fireBox.style.display = 'none';
    } else {
        fireBox.style.display = 'block';
    }
}
//url call for EONET
var eosUrl = 'https://eonet.gsfc.nasa.gov/api/v3/categories/wildfires'
//function to pull the response from EONet and combine it with the addAqi function to display the event and the nearby aqi then append it to the document.
async function getEos1() {
    var response = await fetch(eosUrl)
    var data = await response.json();
    var lat = data.events[0].geometry[0].coordinates[0]
    var lon = data.events[0].geometry[0].coordinates[1]
    for (i = 0; i < 1; i++) {
        console.log(data.events[i].geometry[0].coordinates)
        console.log(data.events[i].title)
        dataDisplay1.append(data.events[i].title);
        aqiDisplay1.append(" AQI: " + await addAqi(lon, lat));
    }
    addAqi(lon, lat);
    localStorage.setItem("wildfire1", JSON.stringify(data.events[0].geometry[0].coordinates));
}
//this is a repeat of the getEos function but built to run and display to a new <p> tag,
async function getEos2() {
    var response = await fetch(eosUrl)
    var data = await response.json();
    var lat = data.events[1].geometry[0].coordinates[0]
    var lon = data.events[1].geometry[0].coordinates[1]
    for (i = 1; i < 2; i++) {
        console.log(data.events[i].geometry[0].coordinates)
        console.log(data.events[i].title)
        dataDisplay2.append(data.events[i].title);
        aqiDisplay2.append(" AQI: " + await addAqi(lon, lat));
    }
    addAqi(lon, lat);
    localStorage.setItem("wildfire2", JSON.stringify(data.events[1].geometry[0].coordinates));
}
async function getEos3() {
    var response = await fetch(eosUrl)
    var data = await response.json();
    var lat = data.events[2].geometry[0].coordinates[0]
    var lon = data.events[2].geometry[0].coordinates[1]
    for (i = 2; i < 3; i++) {
        console.log(data.events[i].geometry[0].coordinates)
        console.log(data.events[i].title)
        dataDisplay3.append(data.events[i].title);
        aqiDisplay3.append(" AQI: " + await addAqi(lon, lat));
    }
    addAqi(lon, lat);
    localStorage.setItem("wildfire3", JSON.stringify(data.events[2].geometry[0].coordinates));
}
async function getEos4() {
    var response = await fetch(eosUrl)
    var data = await response.json();
    var lat = data.events[3].geometry[0].coordinates[0]
    var lon = data.events[3].geometry[0].coordinates[1]
    for (i = 3; i < 4; i++) {
        console.log(data.events[i].geometry[0].coordinates)
        console.log(data.events[i].title)
        dataDisplay4.append(data.events[i].title);
        aqiDisplay4.append(" AQI: " + await addAqi(lon, lat));
    }
    addAqi(lon, lat);
    localStorage.setItem("wildfire4", JSON.stringify(data.events[3].geometry[0].coordinates));
}
async function getEos5() {
    var response = await fetch(eosUrl)
    var data = await response.json();
    var lat = data.events[4].geometry[0].coordinates[0]
    var lon = data.events[4].geometry[0].coordinates[1]
    for (i = 4; i < 5; i++) {
        console.log(data.events[i].geometry[0].coordinates)
        console.log(data.events[i].title)
        dataDisplay5.append(data.events[i].title);
        aqiDisplay5.append(" AQI: " + await addAqi(lon, lat));
    }
    addAqi(lon, lat);
    localStorage.setItem("wildfire5", JSON.stringify(data.events[4].geometry[0].coordinates));
}
//this is a function to grab the data from air quality api from open weather and attache the coordinates given by the EONET api
async function addAqi(lat, lon) {
    let aqiUrl = 'http://api.openweathermap.org/data/2.5/air_pollution?lat=' + lat + '&lon=' + lon + '&appid=461b72ac82582b3246592edff52f2471';
    let response = await fetch(aqiUrl)
    let dataAqi = await response.json();
    console.log(dataAqi.list)
    return dataAqi.list[0].main.aqi
}
//calls the functions to display the data on the document.
getEos1();
getEos2();
getEos3();
getEos4();
getEos5();





