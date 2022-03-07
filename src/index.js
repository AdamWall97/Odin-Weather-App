function getWeatherData()  {
    
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.9778&lon=93.2650&appid=b465203765cd4985338bab877bf8fbb5',{mode: 'cors'})
        .then(function(response){
            return response.json();
        })
        .then(function(response){
            console.log(response);
        });

}

getWeatherData();