import { useState } from 'react'
import { currentWeather } from './services/WeatherApi'
import SearchBar from './SearchBox/SearchBox'
import Welcome from './LandingPage/LandingPage'
import { WeatherCard } from './WeatherCard/WeatherCard'
import Loading from '../../quote_project/src/Loding/Loading'
import './App.css'

function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = async (searchCity = city) => {
    if (!searchCity) return

    setLoading(true)
    setError(null)
    setWeather(null)

    try {
      const weatherData = await currentWeather(searchCity)
      setWeather(weatherData)

    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

   const handleCity = (cityName) => {
    setCity(cityName)
    handleSearch(cityName)
  }

  return (
    <>
      <div className='app'>
        <main>

            {!loading && !error && !weather && (
          <Welcome onCitySelect={handleCity} />
        )}
        <SearchBar
          city={city}
          setCity={setCity}
          onSearch={(searchCity) => handleSearch(searchCity)}
        />
        {error && <p>{error}</p>}

        {loading && <Loading/>}

      

        {weather && !loading && (
          <>
            <WeatherCard weather={weather} />

          </>
        )}
      </main>

      </div>
    </>
  )
}
export default App
