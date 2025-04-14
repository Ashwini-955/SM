const city = 'Shivajinagar';
const key = process.env.API_KEY;
const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`
const axious = require("axios");

module.exports.getWeatherData = async()=>{
  let weather;
  let error = null;
  try{
    const response = await axious.get(url);
    weather = response.data;
    error = null;
  }catch(error){
    console.log(error);
    error = "some error occured";
    weather = null;
  }
  return {weather,error};
}


