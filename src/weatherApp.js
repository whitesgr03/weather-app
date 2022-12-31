"use strict";

import "./css/style.css";

import { weatherApi } from "./components/handleWeatherApi";
import { countryList } from "./components/handleCountryData";
import { main } from "./layouts/main";

const createWeatherApp = () => {
    let units = "metric"; // 設置切換按鈕 imperial
    let searchItem = null;
    let carouselItemCount = null; // Number of items displayed per slide

    // catch DOM
    const content = document.querySelector(".content");
    const temperatureScales = document.querySelector(".temperatureScales");
    const searchForm = document.querySelector(".searchForm");
    const carousel = document.querySelector(".carousel");
    const wrap = carousel.querySelector(".wrap");
    const list = wrap.querySelector(".daily");

    const init = () => {
        content.classList.add("init");
        setCarouselDisplayItems();
        getGeocoding("taipei, Taiwan");

        searchForm.addEventListener("submit", searchWeather);

        temperatureScales.addEventListener("pointerdown", toggleTmpScales);

        carousel.addEventListener("pointerdown", scrollCarousel);
        carousel.addEventListener("selectstart", (e) => e.preventDefault());

        window.addEventListener("resize", setCarouselDisplayItems);
    };

    function searchWeather(e) {
        e.preventDefault();

        const searchField = this.querySelector(".searchField");

        if (searchField !== this.elements.search || !searchField.value.trim())
            return;

        searchForm.addEventListener("animationend", removeShake);

        let [city, country] = searchField.value
            .toLowerCase()
            .split(",")
            .map((i) => i.trim());

        if (countryList.has(city)) {
            this.classList.add("error");
            this.classList.add("shake");
            this.querySelector(".message").textContent =
                "You need type 'city name' or 'city name, country'";
            return;
        }

        let query = city;

        if (country) {
            const countryCode = countryList.toCode(country);

            if (!countryCode) {
                this.classList.add("error");
                this.classList.add("shake");
                this.querySelector(".message").textContent =
                    "Country is incorrect";
                return;
            }

            if (countryCode) query += `,${countryCode}`;
        }

        getGeocoding(query);

        function removeShake() {
            this.classList.remove("shake");
            this.removeEventListener("animationend", removeShake);
        }
    }

    async function getGeocoding(query) {
        const geocoding = await weatherApi.getGeocoding(query);

        if (geocoding.length === 0) {
            searchForm.classList.add("error");
            searchForm.classList.add("shake");
            searchForm.querySelector(".message").textContent =
                "Try another search items";
            return;
        }

        searchItem = query;
        searchForm.classList.remove("error");

        content.addEventListener("animationend", removeSlide);
        content.classList.add("clear");
        content.classList.add("loading");

        function removeSlide(e) {
            const name = e.animationName;
            switch (name) {
                case "slide-right":
                    showWeather(geocoding[0]);
                    break;
                case "slide-left":
                    content.className = "content";
                    this.removeEventListener("animationend", removeSlide);
                    break;
            }
        }
    }

    async function showWeather(geocoding) {
        const [lat, lon] = [geocoding.lat, geocoding.lon];

        const layers = weatherApi.getWeatherLayers();

        main.createWeatherMap(geocoding, layers);

        let CurrentWeather = await weatherApi.getCurrentWeather(
            lat,
            lon,
            units
        );

        CurrentWeather.name = geocoding.name;
        CurrentWeather.sys.country = geocoding.country;
        main.createCurrentWeather(CurrentWeather, units);
        main.createWeatherDetails(CurrentWeather, units);

        const WeatherForecast = await weatherApi.getWeatherForecast(
            lat,
            lon,
            units
        );

        list.style.transform = "translateX(0px)";
        main.createWeatherForecast(WeatherForecast);

        content.classList.add("done");
        content.classList.remove("loading");
    }

    function scrollCarousel(e) {
        if (e.target.closest(".arrow")) {
            scrollByClick(e);
        }

        if (e.target.closest(".daily")) {
            scrollByPointerMove(e);
        }
    }

    function scrollByPointerMove(e) {
        const items = list.querySelectorAll("li");
        const itemWidth =
            +getComputedStyle(items[0]) // The width of each li tag
                .getPropertyValue("width")
                .match(/\d+/)[0] + 20;

        list.addEventListener("dragstart", (e) => e.preventDefault());

        let shiftX = e.clientX - list.getBoundingClientRect().left;

        document.addEventListener("pointermove", onPointerMove);
        document.addEventListener("pointerup", onPointerUp);

        function onPointerMove(e) {
            list.setPointerCapture(e.pointerId);

            let newLeft =
                e.clientX - shiftX - wrap.getBoundingClientRect().left;

            if (newLeft > 0) {
                newLeft = 0;
            }
            let rightEdge = (items.length - carouselItemCount) * itemWidth;
            if (newLeft < -rightEdge) {
                newLeft = -rightEdge;
            }

            list.style.transform = `translateX(${newLeft}px)`;
        }

        function onPointerUp() {
            document.removeEventListener("pointerup", onPointerUp);
            document.removeEventListener("pointermove", onPointerMove);
            list.removeEventListener("dragstart", (e) => e.preventDefault());
        }
    }

    function scrollByClick(e) {
        const arrowBtn = e.target.closest(".arrow");

        if (arrowBtn.classList.contains("active")) {
            return;
        }

        arrowBtn.classList.add("active");

        list.addEventListener("transitionend", removeActive);

        const items = list.querySelectorAll("li");
        const itemWidth =
            +getComputedStyle(items[0]) // The width of each li tag
                .getPropertyValue("width")
                .match(/\d+/)[0] + 20;
        const direction = arrowBtn.classList[1];

        let leftEdge =
            list.getBoundingClientRect().left -
            wrap.getBoundingClientRect().left;

        switch (direction) {
            case "prev":
                leftEdge += itemWidth * carouselItemCount;
                leftEdge = Math.min(leftEdge, 0);
                break;
            case "next":
                leftEdge -= itemWidth * carouselItemCount;
                leftEdge = Math.max(
                    leftEdge,
                    -itemWidth * (items.length - carouselItemCount)
                );
                break;
        }

        list.style.transform = `translateX(${leftEdge}px)`;

        function removeActive() {
            arrowBtn.classList.remove("active");
            this.removeEventListener("transitionend", removeActive);
        }
    }

    function setCarouselDisplayItems() {
        const wrap = carousel.querySelector(".wrap");

        wrap.style.maxWidth = "700px";
        carouselItemCount = 4;

        if (wrap.offsetWidth < 520) {
            wrap.style.maxWidth = "340px";
            carouselItemCount = 2;
        } else if (wrap.offsetWidth < 700) {
            wrap.style.maxWidth = "520px";
            carouselItemCount = 3;
        }
    }

    function toggleTmpScales() {
        if (content.classList.length !== 1) return;

        if (units === "metric") {
            units = "imperial";
        } else {
            units = "metric";
        }

        temperatureScales.classList.toggle("imperial");
        getGeocoding(searchItem);
    }

    return {
        init,
    };
};

export { createWeatherApp };