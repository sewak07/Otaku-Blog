import "./SearchBox.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";


export default function SearchBox({ onWeatherData }) {

    const [city, setCity] = useState("");

    const APIKey = "9a47cc7621ff4b3b3176826887ae0646";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`;

    let getWeatherInfo = async () => {
        let response = await fetch(URL);
        let data = await response.json();
        let result = {
            temperature: data.main.temp,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            humidity: data.main.humidity,
            weather: data.weather[0].description
        };
        onWeatherData(result);
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        if (city.trim() !== "") {
            getWeatherInfo();
            setCity("");
        }

    };

    return (
        <div className="SearchBox">
            <h1>Weather App!</h1>

            <form onSubmit={handleSubmit}>
                <TextField id="city"
                    label="City Name"
                    variant="standard"
                    required value={city}
                    onChange={handleChange}
                />

                <br /><br />

                <Button variant="contained" type="submit">search</Button>
            </form>

        </div>
    );
};

