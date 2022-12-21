"use strict";

import "./css/index.css";

import { weatherApi } from "./components/handleWeatherApi";
import { countryList } from "./components/handleCountryData";

const createWeatherApp = () => {
    let units = "metric"; // 設置切換按鈕 imperial

    // catch DOM
    const searchForm = document.querySelector(".searchForm");

    const init = async () => {
        searchForm.addEventListener("submit", searchWeather);

        window.addEventListener("unhandledrejection", (e) => {
            e.preventDefault();
            console.warn(`UNHANDLED PROMISE REJECTION: ${e.reason}`);
        });
    };

    async function searchWeather(e) {
        e.preventDefault();

        const searchField = this.querySelector(".searchField");

        if (searchField !== this.elements.search || !searchField.value.trim())
            return;

        let [city, country] = searchField.value
            .toLowerCase()
            .split(",")
            .map((i) => i.trim());

        if (countryList.has(city)) {
            throw Error("You need type 'city name' or 'city name, country'");
        }

        let query = city;

        if (country) {
            const countryCode = countryList.toCode(country);

            if (!countryCode) {
                throw Error("Country is incorrect");
            }

            if (countryCode) query += `,${countryCode}`;
        }

        let result = await weatherApi.getGeocoding(query);

        // console.log(result[0]);

        if (result.length === 0) throw Error("Try another search items");

        const [lat, lon] = [result[0].lat, result[0].lon];

        result = await weatherApi.getCurrentWeather(lat, lon, units);
        console.log("CurrentWeather", result);

        result = await weatherApi.getWeatherForecast(lat, lon, units);
        console.log("WeatherForecast", result);
    }

    return {
        init,
    };
};

export { createWeatherApp };
