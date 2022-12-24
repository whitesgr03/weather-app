"use strict";

import "./css/style.css";

import { weatherApi } from "./components/handleWeatherApi";
import { countryList } from "./components/handleCountryData";

import { main } from "./layouts/main";

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

        const geocoding = await weatherApi.getGeocoding(query);

        if (geocoding.length === 0) throw Error("Try another search items");

        const [lat, lon] = [geocoding[0].lat, geocoding[0].lon];

        let CurrentWeather = await weatherApi.getCurrentWeather(
            lat,
            lon,
            units
        );

        CurrentWeather.name = geocoding[0].name;
        CurrentWeather.sys.country = geocoding[0].country;

        main.createCurrentWeather(CurrentWeather);
        main.createWeatherDetails(CurrentWeather);
    }

    return {
        init,
    };
};

export { createWeatherApp };
