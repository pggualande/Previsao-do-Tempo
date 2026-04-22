function WeatherInfo({weather}){
    console.log(weather)
    return(
        <div>
            <h2>{weather.name}</h2>
            <div>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}/>
                <p>{Math.round(weather.main.temp)}ºC</p>
        </div>
        <p>{}</p>
            </div>
        </div>
    )

}

export default WeatherInfo