"use strict";

const weatherApi = (() => {
    const DOMAIN = "api.openweathermap.org";
    const API_KEY = "ee7edaa11b365485de77f73f7bc105b2";

    const getGeocoding = async (query) => {
        const url = `http://${DOMAIN}/geo/1.0/direct?q=${query}&appid=${API_KEY}`;
        return await fetchDate(url);
    };

    const getCurrentWeather = async (lat, lon, units) => {
        const url = `https://${DOMAIN}/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`;
        return await fetchDate(url);
    };

    const getWeatherForecast = async (lat, lon, units) => {
        const url = `https://${DOMAIN}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`;
        return await fetchDate(url);
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
            console.warn(error.message);
        }
        console.log(error);
    }

    return { getGeocoding, getCurrentWeather, getWeatherForecast };
})();

export { weatherApi };