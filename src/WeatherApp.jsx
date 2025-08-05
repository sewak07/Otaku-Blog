import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";


export default function WeatherApp() {

    let [apiData, setApiData] = useState({
    city:"Kathmandu",
    temperature: "24.75°C",
    tempMin: "24.75°C",
    tempMax: "24.75°C",
    humidity: "83",
    weather: "overcast cloud",
});

    return (
        <div>
            <SearchBox onWeatherData={setApiData} />
            <InfoBox info={apiData} />
        </div>
    );
};