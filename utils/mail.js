const nodemailer = require("nodemailer");
const {getWeatherData } = require("./getWeather.js")


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    user: process.env.USER,
    pass: process.env.APP_PASS,
  },
});


const sendMail = async function main(userEmailS) {
  const { weather, error } = await getWeatherData();
  const temp = ((weather.main.temp-32)*5)/9;
  if(weather){
      const mailOptions =   {
      from: '"Smart Umberella " <mishraraunak117@gmail.com>', 
      to: "ashwinirm05@gmail.com", 
      subject: "Today'weather condition", 
      text: `Todays weather update : \n\nLocation : ${weather.name} \n Temprature : ${weather.main.temp}°F\nHumidity : ${weather.main.humidity}\ndescription : ${weather.weather[0].description}`, 
      html:         
        `<b>Hello,</b><br><br>
         <b>Here is the weather update for today:</b><br><br>
         <b>Location:</b> ${weather.name}<br>
         <b>Temperature:</b> ${temp}°C<br>
         <b>Humidity:</b> ${weather.main.humidity}%<br>
         <b>Weather:</b> ${weather.weather[0].description}<br>`
    }
    try{
      const info = await transporter.sendMail(mailOptions);
      console.log("Message sent: %s", info.messageId);
    }catch(error){
      console.log(error);
    }
  
  }else{
    console.log("Weather data not available, email not sent.");
  }
}


module.exports = sendMail;