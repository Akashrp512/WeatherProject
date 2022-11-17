const express = require('express');
const https = require("https");

const app = express();

const port = 3000;

app.get("/", (req, res)=>{
     const url = "https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=f3698b699832a3ffb2b52c8fef2293e2&units=metric";

    https.get(url, (response)=>{
   console.log(response.statusCode);
   response.on("data", (data)=>{
    const weatherData = JSON.parse(data);
 const temp = weatherData.main.temp;
 console.log(temp)
   })
    })
    res.send("Weather App")
});


app.listen(3000, ()=>{
    console.log("Server is running on port ${port}");
});