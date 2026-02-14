import { getWeatherEmoji } from "../Utlis.js/weatherUtlis";

export const WeatherCard = ({ weather }) => {
    return (
    <div className="weather_card">
        <h3 className="city">{weather.cityName}</h3>
            <p className="country">{weather.country}</p>

            <div className="container_icon">
                <span className="icon">{getWeatherEmoji(weather.condition)}</span>
            </div>

            <h1 className="temperature">{weather.temp}°C</h1>
    </div>
    )
}