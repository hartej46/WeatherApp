const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

export const currentWeather = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    if (!response.ok) {
        throw new Error('City not found, Please check spelling or try another city.')
    }
console.log('')
    const data = await response.json()

    return {
        cityName: data.name,
        country: data.sys.country,
        temp : Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        condition: data.weather[0].id,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed ,
        visibility:data.visibility ,
        icon: data.weather[0].icon
    }
}
 