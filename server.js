const express = require('express');
const app=express();
const http = require('http')
const port=8080;
const apikey = 'apikey';



app.listen(port,()=>{
    console.log('live on port '+port);
});



app.get('/',function(req,res){
    res.send({
        "firstname": "Fatih Mehmet",
        "lastname": "Tuncer"
        });
   
});


app.get('/temperature',(req,res)=>{
    
    var query = require('url').parse(req.url,true).query;
    var city = query.city;
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&appid=" + apikey + "&units=metric";
    	
    http.get(url, (response) => {
        if (response.statusCode === 200) {
          response.on("data", (data) => {
            const weatherData = JSON.parse(data);
            console.log('index', {data: weatherData});
          })
        } else {
          res.send('index', {data: "0"})
        }
      })
    
    
	res.send(response);


    console.log(city);
    var response=req.query;
    

    console.log(query);
    console.log(query);
    res.send(response);
});


