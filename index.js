var userInputEl = document.getElementById("user-input");
var searchButtonEl = document.getElementById("search-button");

var searchedCityButtonEl = document.getElementById("city1-btn");
var searchedCityButtonEl2 = document.getElementById("city2-btn");
var searchedCityButtonEl3 = document.getElementById("city3-btn");
var searchedCityButtonEl4 = document.getElementById("city4-btn");
var searchedCityButtonEl5 = document.getElementById("city5-btn");


var searchedCityTextEl = document.getElementById("city1-txt");
var searchedCityTextEl2 = document.getElementById("city2-txt");
var searchedCityTextEl3 = document.getElementById("city3-txt");
var searchedCityTextEl4 = document.getElementById("city4-txt");
var searchedCityTextEl5 = document.getElementById("city5-txt");

var currentCityEl = document.getElementById("current-city")
var currentDateEl = document.getElementById("date");
var currentTempEl = document.getElementById("current-temp");
var currentWindEl = document.getElementById("current-wind");
var currentHumidityEl = document.getElementById("current-humidity");
var currentUvEl = document.getElementById("current-uv");

var day1CardEl = document.getElementById("d1-card");
var day2CardEl = document.getElementById("d2-card");
var day3CardEl = document.getElementById("d3-card");
var day4CardEl = document.getElementById("d4-card");
var day5CardEl = document.getElementById("d5-card");

var day1ImgEl = document.getElementById("day-1-img");
var day2ImgEl = document.getElementById("day-2-img");
var day3ImgEl = document.getElementById("day-3-img");
var day4ImgEl = document.getElementById("day-4-img");
var day5ImgEl = document.getElementById("day-5-img");

var day1DayEl = document.getElementById("d1-day");
var day2DayEl = document.getElementById("d2-day");
var day3DayEl = document.getElementById("d3-day");
var day4DayEl = document.getElementById("d4-day");
var day5DayEl = document.getElementById("d5-day");

var day1DateEl = document.getElementById("d1-date");
var day2DateEl = document.getElementById("d2-date");
var day3DateEl = document.getElementById("d3-date");
var day4DateEl = document.getElementById("d4-date");
var day5DateEl = document.getElementById("d5-date");

var day1TextEl = document.getElementById("d1-text");
var day2TextEl = document.getElementById("d2-text");
var day3TextEl = document.getElementById("d3-text");
var day4TextEl = document.getElementById("d4-text");
var day5TextEl = document.getElementById("d5-text");

var day1TempEl = document.getElementById("d1-temp");
var day2TempEl = document.getElementById("d2-temp");
var day3TempEl = document.getElementById("d3-temp");
var day4TempEl = document.getElementById("d4-temp");
var day5TempEl = document.getElementById("d5-temp");

var day1WindEl = document.getElementById("d1-wind");
var day2WindEl = document.getElementById("d2-wind");
var day3WindEl = document.getElementById("d3-wind");
var day4WindEl = document.getElementById("d4-wind");
var day5WindEl = document.getElementById("d5-wind");

var day1HumidityEl = document.getElementById("d1-hum");
var day2HumidityEl = document.getElementById("d2-hum");
var day3HumidityEl = document.getElementById("d3-hum");
var day4HumidityEl = document.getElementById("d4-hum");
var day5HumidityEl = document.getElementById("d5-hum");

var day1Desc = '';
var day2Desc = '';
var day3Desc = '';
var day4Desc = '';
var day5Desc = '';

const apiKey = "52828bd95a263fd4260316440728f92b";
var userInput = '';
var city;
var state;
var countryCode = "us";
var cityState = city + "," + state + "," + countryCode;
var zipCode;

var urlFromZIP;
var urlFromCityState = "https://api.openweathermap.org/data/2.5/weather?q=" + cityState + "&appid=" + apiKey;
var currentURL;
var forecastURL;

var dataFromCityState;
var dataFromZIP;
var latitude;
var longitude;

var cityStateArr = [];
var currentData;
var cityName;
var currentDate = moment().format('llll');
var currentMain;
var currentTemp;
var currentWind;
var currentHumidity;
var currentUVindex;

var forecastData;

var forecastedHighTemps = [];

var forecastDay1Date = new Date()
var forecastDay2Date = new Date()
var forecastDay3Date = new Date()
var forecastDay4Date = new Date()
var forecastDay5Date = new Date()

var day1Temps = [];
var day2Temps = [];
var day3Temps = [];
var day4Temps = [];
var day5Temps = [];
var day1HighTemp;
var day2HighTemp;
var day3HighTemp;
var day4HighTemp;
var day5HighTemp;

function displayForecastedHighs() {
  day1TempEl.textContent = "Temp: " + day1HighTemp + "℉";
  day2TempEl.textContent = "Temp: " + day2HighTemp + "℉";
  day3TempEl.textContent = "Temp: " + day3HighTemp + "℉";
  day4TempEl.textContent = "Temp: " + day4HighTemp + "℉";
  day5TempEl.textContent = "Temp: " + day5HighTemp + "℉";
  
  day1WindEl.textContent = "Wind: " + day1HighWind + "mph";
  day2WindEl.textContent = "Wind: " + day2HighWind + "mph";
  day3WindEl.textContent = "Wind: " + day3HighWind + "mph";
  day4WindEl.textContent = "Wind: " + day4HighWind + "mph";
  day5WindEl.textContent = "Wind: " + day5HighWind + "mph";
  
  day1HumidityEl.textContent = "Humidity: " + day1HighHum + "%rh";
  day2HumidityEl.textContent = "Humidity: " + day2HighHum + "%rh";
  day3HumidityEl.textContent = "Humidity: " + day3HighHum + "%rh";
  day4HumidityEl.textContent = "Humidity: " + day4HighHum + "%rh";
  day5HumidityEl.textContent = "Humidity: " + day5HighHum + "%rh";
}

function getForecastedHighs() {
  day1DayEl.textContent = (moment().add(1, 'days').format("dddd"));
  day2DayEl.textContent = (moment().add(2, 'days').format("dddd"));
  day3DayEl.textContent = (moment().add(3, 'days').format("dddd"));
  day4DayEl.textContent = (moment().add(4, 'days').format("dddd"));
  day5DayEl.textContent = (moment().add(5, 'days').format("dddd"));
  day1DateEl.textContent = (moment().add(1, 'days').format("MMM Do YY"));
  day2DateEl.textContent = (moment().add(2, 'days').format("MMM Do YY"));
  day3DateEl.textContent = (moment().add(3, 'days').format("MMM Do YY"));
  day4DateEl.textContent = (moment().add(4, 'days').format("MMM Do YY"));
  day5DateEl.textContent = (moment().add(5, 'days').format("MMM Do YY"));
  
  day1Temps = [
    forecastData.list[0].main.temp,
    forecastData.list[1].main.temp,
    forecastData.list[2].main.temp,
    forecastData.list[3].main.temp,
    forecastData.list[4].main.temp,
    forecastData.list[5].main.temp,
    forecastData.list[6].main.temp,
    forecastData.list[7].main.temp
  ];
  day1HighTemp = Math.max.apply(null, day1Temps);
  
  day2Temps = [
    forecastData.list[8].main.temp,
    forecastData.list[9].main.temp,
    forecastData.list[10].main.temp,
    forecastData.list[11].main.temp,
    forecastData.list[12].main.temp,
    forecastData.list[13].main.temp,
    forecastData.list[14].main.temp,
    forecastData.list[15].main.temp
  ];
  day2HighTemp = Math.max.apply(null, day2Temps);
  
  day3Temps = [
    forecastData.list[16].main.temp,
    forecastData.list[17].main.temp,
    forecastData.list[18].main.temp,
    forecastData.list[19].main.temp,
    forecastData.list[20].main.temp,
    forecastData.list[21].main.temp,
    forecastData.list[22].main.temp,
    forecastData.list[23].main.temp
  ];
  day3HighTemp = Math.max.apply(null, day3Temps);
  
  day4Temps = [
    forecastData.list[24].main.temp,
    forecastData.list[25].main.temp,
    forecastData.list[26].main.temp,
    forecastData.list[27].main.temp,
    forecastData.list[28].main.temp,
    forecastData.list[29].main.temp,
    forecastData.list[30].main.temp,
    forecastData.list[31].main.temp
  ];
  day4HighTemp = Math.max.apply(null, day4Temps);
  
  day5Temps = [
    forecastData.list[32].main.temp,
    forecastData.list[33].main.temp,
    forecastData.list[34].main.temp,
    forecastData.list[35].main.temp,
    forecastData.list[36].main.temp,
    forecastData.list[37].main.temp,
    forecastData.list[38].main.temp,
    forecastData.list[39].main.temp
  ];
  day5HighTemp = Math.max.apply(null, day5Temps);
  
  day1Winds = [
    forecastData.list[0].wind.speed,
    forecastData.list[1].wind.speed,
    forecastData.list[2].wind.speed,
    forecastData.list[3].wind.speed,
    forecastData.list[4].wind.speed,
    forecastData.list[5].wind.speed,
    forecastData.list[6].wind.speed,
    forecastData.list[7].wind.speed
  ];
  day1HighWind = Math.max.apply(null, day1Winds);
  
  day2Winds = [
    forecastData.list[8].wind.speed,
    forecastData.list[9].wind.speed,
    forecastData.list[10].wind.speed,
    forecastData.list[11].wind.speed,
    forecastData.list[12].wind.speed,
    forecastData.list[13].wind.speed,
    forecastData.list[14].wind.speed,
    forecastData.list[15].wind.speed
  ];
  day2HighWind = Math.max.apply(null, day2Winds);
  
  day3Winds = [
    forecastData.list[16].wind.speed,
    forecastData.list[17].wind.speed,
    forecastData.list[18].wind.speed,
    forecastData.list[19].wind.speed,
    forecastData.list[20].wind.speed,
    forecastData.list[21].wind.speed,
    forecastData.list[22].wind.speed,
    forecastData.list[23].wind.speed
  ];
  day3HighWind = Math.max.apply(null, day3Winds);
  
  day4Winds = [
    forecastData.list[24].wind.speed,
    forecastData.list[25].wind.speed,
    forecastData.list[26].wind.speed,
    forecastData.list[27].wind.speed,
    forecastData.list[28].wind.speed,
    forecastData.list[29].wind.speed,
    forecastData.list[30].wind.speed,
    forecastData.list[31].wind.speed
  ];
  day4HighWind = Math.max.apply(null, day4Winds);
  
  day5Winds = [
    forecastData.list[32].wind.speed,
    forecastData.list[33].wind.speed,
    forecastData.list[34].wind.speed,
    forecastData.list[35].wind.speed,
    forecastData.list[36].wind.speed,
    forecastData.list[37].wind.speed,
    forecastData.list[38].wind.speed,
    forecastData.list[39].wind.speed
  ];
  day5HighWind = Math.max.apply(null, day5Winds);
  
  day1Hums = [
    forecastData.list[0].main.humidity,
    forecastData.list[1].main.humidity,
    forecastData.list[2].main.humidity,
    forecastData.list[3].main.humidity,
    forecastData.list[4].main.humidity,
    forecastData.list[5].main.humidity,
    forecastData.list[6].main.humidity,
    forecastData.list[7].main.humidity
  ];
  day1HighHum = Math.max.apply(null, day1Hums);
  
  day2Hums = [
    forecastData.list[8].main.humidity,
    forecastData.list[9].main.humidity,
    forecastData.list[10].main.humidity,
    forecastData.list[11].main.humidity,
    forecastData.list[12].main.humidity,
    forecastData.list[13].main.humidity,
    forecastData.list[14].main.humidity,
    forecastData.list[15].main.humidity
  ];
  day2HighHum = Math.max.apply(null, day2Hums);
  
  day3Hums = [
    forecastData.list[16].main.humidity,
    forecastData.list[17].main.humidity,
    forecastData.list[18].main.humidity,
    forecastData.list[19].main.humidity,
    forecastData.list[20].main.humidity,
    forecastData.list[21].main.humidity,
    forecastData.list[22].main.humidity,
    forecastData.list[23].main.humidity
  ];
  day3HighHum = Math.max.apply(null, day3Hums);
  
  day4Hums = [
    forecastData.list[24].main.humidity,
    forecastData.list[25].main.humidity,
    forecastData.list[26].main.humidity,
    forecastData.list[27].main.humidity,
    forecastData.list[28].main.humidity,
    forecastData.list[29].main.humidity,
    forecastData.list[30].main.humidity,
    forecastData.list[31].main.humidity
  ];
  day4HighHum = Math.max.apply(null, day4Hums);
  
  day5Hums = [
    forecastData.list[32].main.humidity,
    forecastData.list[33].main.humidity,
    forecastData.list[34].main.humidity,
    forecastData.list[35].main.humidity,
    forecastData.list[36].main.humidity,
    forecastData.list[37].main.humidity,
    forecastData.list[38].main.humidity,
    forecastData.list[39].main.humidity
  ];
  day5HighHum = Math.max.apply(null, day5Hums);

  day1Desc = forecastData.list[0].weather[0].description
  day2Desc = forecastData.list[1].weather[0].description
  day3Desc = forecastData.list[2].weather[0].description
  day4Desc = forecastData.list[3].weather[0].description
  day5Desc = forecastData.list[4].weather[0].description

  console.log("day 1 desciption is: " + day1Desc);
  console.log("day 2 desciption is: " + day2Desc);
  console.log("day 3 desciption is: " + day3Desc);
  console.log("day 4 desciption is: " + day4Desc);
  console.log("day 5 desciption is: " + day5Desc);

  displayForecastedHighs();
  updateForecastImages();
}


