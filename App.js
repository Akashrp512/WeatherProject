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
       const weatherDescription = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        const imageURL = ""
        res.write("<p>The Weather currently" + weatherDescription +"<p>");
        res.write("<h1>The temparature in Bengaluru is "+ temp + " degree Celsius.</h1>");
        res.send()
   })
    })
   
});


app.listen(3000, ()=>{
    console.log("Server is running on port ${port}");
});