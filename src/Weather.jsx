import { useState } from "react"
import SearchBox from "./SearchBox.jsx"
import WeatherInfo from "./WeatherInfo.jsx"

export default function Weather() {
    let [info, setInfo] = useState({});
    let [isInfo, setIsInfo] = useState(false);

    let setWeatherInfo = (newInfo) => {
        setInfo(newInfo);
        setIsInfo(true);
    }

    return (
        <>
            <SearchBox setWeatherInfo={setWeatherInfo} />
            {isInfo ? <WeatherInfo info={info} /> : null}
        </>
    )
}   