import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
    let [city, setCity] = useState("");
    let [temperature, setTemperature] = useState("");
    let [description, setDesccription] = useState("");
    let [wind, setWind] = useState(" ");
    let [humidity, setHumidity] = useState(" ");
    let { icon, setIcon } = useState(" ");

    function showWeather(response) {
        console.log(response.data);
        setTemperature(response.data.condition.temperature);
        setDesccription(response.data.condition.description);
        setHumidity(response.data.temperature.humidity);
        setWind(response.data.speed.wind);
        setIcon( < img alt = "icon"
            src = { response.data.icon_url }
            />);
        }

        function handleSubmit(event) {
            let apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
            let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
            event.preventDefault();
            axios.get(apiUrl).then(showWeather);
        }

        function searchCity(event) {
            event.preventDefault();
            setCity(event.target.value);
        }
        return ( < div className = "returm" > < div className = "my-forrm" > { " " } < form onSubmit = { handleSubmit } > { " " } < input type = "search "
            placeholder = "enter-city"
            value = { city }
            onChange = { searchCity }
            />{" "} <input type ="submit"/ > (" ") { " " } < /form >   { " " } < /div > { " " } {

                temperature && ( < div > { " " } < h1 > Temperature: { temperature } < /h1>{" "} < /
                    div >
                )
            } { " " } {
                humidity && ( < div > { " " } < h1 > Humidity: { humidity } < /h1>{" "} </div > )
            }

            { " " }

            {
                description && ( < div > { " " } < h1 > Description: { description } < /h1>{" "} < div >)
                }

                { " " }

                {
                    wind && ( < div > { " " } < h1 > Wind: { wind } < /h1> </div > )
                }

                { " " }

                {
                    icon && ( < div > { " " } < h1 > Icon: { icon } < /h1>  < /div > )
                } { " " } < /div>
            )
        }