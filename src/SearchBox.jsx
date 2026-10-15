import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import "./SearchBox.css"
import { useState } from 'react';
export default function SerarchBox({ setWeatherInfo }) {

    let [city, setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "567b87c293985308ce73560dfc4d91e3"

    let getWeather = () => {
        fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            .then(res => res.json())
            .then(weather => {
                let result = {
                    city: city,
                    humidity: weather.main.humidity,
                    temp: weather.main.temp,
                    tempMax: weather.main.temp_max,
                    tempMin: weather.main.temp_min,
                    feelsLike: weather.main.feels_like,
                    description: weather.weather[0].description,
                    main: weather.weather[0].main
                }
                console.log(result)
                console.log(weather)
                setWeatherInfo(result)
            })
            .catch(err => console.log(err));
    }

    let handleCity = (e) => {
        setCity(e.target.value);
    }

    let handeForm = async (e) => {
        e.preventDefault();
        setCity("");
        getWeather();
    }

    return (
        <form className='weather-search' onSubmit={handeForm}>
            <h1>Weather Search</h1>
            <TextField
                id="outlined-basic"
                label="Enter city"
                variant="outlined"
                value={city}
                onChange={handleCity}
                required
            />
            <br />
            <Button
                type="submit"
                variant="contained"
                endIcon={<SearchIcon />}
            >
                Search
            </Button>
        </form>
    )
}