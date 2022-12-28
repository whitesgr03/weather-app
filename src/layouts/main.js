"use strict";

// library
import { format, isToday } from "date-fns";
import { countryList } from "../components/handleCountryData";

const main = (() => {
    const allCountry = countryList.getAll();
    const weatherIcons = [];
    let map = null;

    importWeatherIcons(require.context("../img/forecast", false, /\.(svg)$/));

    const createCurrentWeather = (data) => {
        const current = document.querySelector(".current");

        const template = `
            <div class="top">
                <div class="name">
                    <span class="city"></span>
                    <span class="country"></span>
                </div>
                <div class="date"></div>
            </div>
            <div class="temp">
                <span class="deg"></span>
                <span class="symbol">&#8451;</span>
            </div>
            <div class="bottom">
                <div>
                    <div class="icon"></div>
                    <span class="status"></span>
                </div>
                <div class="sun">
                    <div>
                        Sunrise <span class="sunrise"></span>
                    </div>
                    <div>Sunset <span class="sunset"></span></div>
                </div>
            </div>
            <div class="updateTime"></div>
        `;

        current.innerHTML = template;

        current.querySelector(".city").textContent = `${data.name}, `;

        const nameElemHeight = current.querySelector(".name").offsetHeight;

        const country = allCountry.find(
            (item) => item.alphaCode === data.sys.country
        );

        if (country) {
            const countryName =
                country["name"][0].toUpperCase() + country["name"].slice(1);
            current.querySelector(".country").textContent = `${countryName}`;
        }

        if (current.querySelector(".name").offsetHeight > nameElemHeight) {
            current.querySelector(".country").style.fontSize = "1rem";
        }

        current.querySelector(".date").textContent = format(
            new Date(),
            "E, MMM d"
        );

        current.querySelector(".deg").textContent = Math.round(data.main.temp);

        let icon = weatherIcons.find(
            (item) =>
                data.weather[0].main === item.main ||
                data.weather[0].icon === item.main
        );

        if (!icon) icon = weatherIcons.find((item) => item.main === "Other");

        current.querySelector(
            ".icon"
        ).style.backgroundImage = `url(${icon.url})`;

        const description = data.weather[0].description
            .split(" ")
            .map((item) => item[0].toUpperCase() + item.slice(1))
            .join(" ");

        current.querySelector(".status").textContent = description;

        current.querySelector(".sunrise").textContent = format(
            new Date(data.sys.sunrise * 1000),
            "HH:mm"
        );
        current.querySelector(".sunset").textContent = format(
            new Date(data.sys.sunset * 1000),
            "HH:mm"
        );

        current.querySelector(".updateTime").textContent = format(
            new Date(data.dt * 1000),
            "'Last updated of' HH:mm"
        );
    };

    const createWeatherForecast = (data) => {
        const daily = document.querySelector(".daily");

        daily.innerHTML = "";

        const day = {};
        for (let i of data.list) {
            const itemDate = new Date(i.dt * 1000);
            const date = itemDate.getDate();

            if (!day[date]) {
                day[date] = date;
                daily.append(createDateCard(itemDate));
            }

            const div = document.createElement("div");

            const template = `
                <li class="card">
                    <div>
                        <div class="dateTime"></div>
                        <img/>
                        <div>
                            <span class="tmp"></span
                            >&deg;
                        </div>
                    </div>
                </li>
            `;

            div.innerHTML = template;

            let icon = weatherIcons.find(
                (item) =>
                    i.weather[0].main === item.main ||
                    i.weather[0].icon === item.main
            );

            if (!icon)
                icon = weatherIcons.find((item) => item.main === "Other");

            if (i.pop > 0) {
                div.firstElementChild.append(createPopCard(i.pop));
            }

            div.querySelector("img").src = icon.url;
            div.querySelector("img").alt = icon.description;

            div.querySelector(".dateTime").textContent = format(
                new Date(i.dt * 1000),
                "h aaa"
            );

            div.querySelector(".tmp").textContent = Math.round(i.main.temp);
            daily.append(div.firstElementChild);
        }
    };

    const createWeatherDetails = (data) => {
        const details = document.querySelector(".details");

        const template = `
            <div class="feels-like">
                <div>
                    <div class="icon"></div>
                    <span class="title">Feels like</span>
                </div>
                <span class="value">12 &deg;</span>
            </div>
            <div class="wind">
                <div>
                    <div class="icon"></div>
                    <span class="title">Wind</span>
                </div>
                <span>
                    <div class="compass"></div>
                    <span class="value">15 m/s</span>
                </span>
            </div>
            <div class="amount">
                <div>
                    <div class="icon"></div>
                    <span class="title">Rain Amount</span>
                </div>
                <span class="value">12 mm</span>
            </div>
            <div class="humidity">
                <div>
                    <div class="icon"></div>
                    <span class="title">Humidity</span>
                </div>
                <span class="value">23%</span>
            </div>
            <div class="visibility">
                <div>
                    <div class="icon"></div>
                    <span class="title">Visibility</span>
                </div>
                <span class="value">0.51 km</span>
            </div>
            <div class="pressure">
                <div>
                    <div class="icon"></div>
                    <span class="title">Pressure</span>
                </div>
                <span class="value">1998.6 hPa</span>
            </div>
        `;

        details.innerHTML = template;

        details.querySelector(".feels-like .value").innerHTML = `${Math.round(
            data.main.feels_like
        )} &deg;`;

        details.querySelector(
            ".humidity .value"
        ).textContent = `${data.main.humidity} %`;

        details.querySelector(
            ".pressure .value"
        ).textContent = `${data.main.pressure} hPa`;

        details.querySelector(
            ".wind .value"
        ).textContent = `${data.wind.speed} m/s`;

        details.querySelector(
            ".wind .compass"
        ).style = `transform: rotate(${data.wind.deg}deg);`;

        let visibility = "--";

        if (data.visibility !== 10000) {
            visibility = `${data.visibility} km`;
        }

        details.querySelector(".visibility .value").textContent = visibility;

        let amount = "--";
        let title = "rain";

        if (data.rain) {
            const rain = data.rain["1h"] || data.rain["3h"];
            amount = `${rain} mm`;
        } else if (data.snow) {
            const snow = data.snow["1h"] || data.snow["3h"];
            amount = `${snow} mm`;
            title = "snow";
        }

        details.querySelector(".amount .icon").classList.add(title);

        details.querySelector(".amount .title").textContent = `${
            title[0].toUpperCase() + title.slice(1)
        } Amount`;
        details.querySelector(".amount .value").textContent = amount;
    };

    function importIconsInfo(resolve) {
        const keys = resolve.keys();

        for (let key of keys) {
            const name = key.match(/[\w-]*(?=.svg)/g)[0];

            const [main, icon = null] = name.split("-");
            const url = resolve(key);

            weatherIcons.push({
                main,
                icon,
                url,
            });
        }
    }

    function createDateCard(itemDate) {
        const div = document.createElement("div");
        div.innerHTML = `
                        <li class="date">
                            <div class="week"></div>
                            <div class="day"></div>
                        </li >
                    `;

        const [weeks, days] = format(itemDate, "EEEE, MMMM d").split(",");

        if (isToday(itemDate)) {
            div.querySelector(".week").textContent = "Today,";
        } else {
            div.querySelector(".week").textContent = weeks + ",";
        }
        div.querySelector(".day").textContent = days;
        return div.firstElementChild;
    }

    function createPopCard(pop) {
        const popCard = document.createElement("div");
        const probability = Math.floor(pop * 100);

        popCard.className = "precipitation";
        popCard.innerHTML = `
                <span class="probability"></span>
                <div class="icon"></div>
                `;

        popCard.querySelector(".probability").textContent = `${probability}%`;

        return popCard;
    }

    return {
        createCurrentWeather,
        createWeatherForecast,
        createWeatherDetails,
    };
})();

export { main };
