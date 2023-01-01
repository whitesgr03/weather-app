"use strict";

import L from "leaflet";

const weatherApi = (() => {
    const DOMAIN = "api.openweathermap.org";
    const FREE_OPENWEATHER_API_KEY = "ee7edaa11b365485de77f73f7bc105b2";
    const LAYERS = {
        clouds_new: "Clouds",
        precipitation_new: "Precipitation",
        pressure_new: "Sea level pressure",
        wind_new: "Wind speed",
        temp_new: "Temperature",
    };

    const getGeocoding = async (query) => {
        const url = `http://${DOMAIN}/geo/1.0/direct?q=${query}&appid=${FREE_OPENWEATHER_API_KEY}`;
        return await fetchDate(url);
    };

    const getCurrentWeather = async (lat, lon, units) => {
        const url = `https://${DOMAIN}/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${FREE_OPENWEATHER_API_KEY}`;
        return await fetchDate(url);
    };

    const getWeatherForecast = async (lat, lon, units) => {
        const url = `https://${DOMAIN}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${FREE_OPENWEATHER_API_KEY}`;
        return await fetchDate(url);
    };

    const getWeatherLayers = () => {

        const overlayMaps = {};

        for (let i in LAYERS) {
            overlayMaps[LAYERS[i]] = L.tileLayer(
                `https://tile.openweathermap.org/map/${i}/{z}/{x}/{y}.png?appid=${FREE_OPENWEATHER_API_KEY}`
            );
        }

        return overlayMaps;
    };

    async function fetchDate(url) {
        try {
            const response = await Promise.race([
                fetch(url),
                timeoutPromise(3000),
            ]);

            if (!response.ok) {
                throw new Error("Failed to fetch");
            }

            return response.json();
        } catch (error) {
            handleError(error);
        }
    }

    function timeoutPromise(time) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error("timeout"));
            }, time);
        });
    }

    function handleError(error) {
        if (error.message === "Failed to fetch") {
            alert(error.message);
        }
        console.log(error);
    }

    return {
        getGeocoding,
        getCurrentWeather,
        getWeatherForecast,
        getWeatherLayers,
    };
})();

export { weatherApi };
