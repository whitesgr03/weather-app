(self["webpackChunky"] = self["webpackChunky"] || []).push([[826],{

/***/ 565:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/leaflet/dist/leaflet-src.js
var leaflet_src = __webpack_require__(243);
var leaflet_src_default = /*#__PURE__*/__webpack_require__.n(leaflet_src);
;// CONCATENATED MODULE: ./src/components/handleWeatherApi.js



const weatherApi = (() => {
  const DOMAIN = "api.openweathermap.org";
  const FREE_OPENWEATHER_API_KEY = "ee7edaa11b365485de77f73f7bc105b2";
  const LAYERS = {
    clouds_new: "Clouds",
    precipitation_new: "Precipitation",
    pressure_new: "Sea level pressure",
    wind_new: "Wind speed",
    temp_new: "Temperature"
  };
  const getGeocoding = async query => {
    const url = `https://${DOMAIN}/geo/1.0/direct?q=${query}&appid=${FREE_OPENWEATHER_API_KEY}`;
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
      overlayMaps[LAYERS[i]] = leaflet_src_default().tileLayer(`https://tile.openweathermap.org/map/${i}/{z}/{x}/{y}.png?appid=${FREE_OPENWEATHER_API_KEY}`);
    }
    return overlayMaps;
  };
  async function fetchDate(url) {
    try {
      const response = await Promise.race([fetch(url), timeoutPromise(3000)]);
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
    getWeatherLayers
  };
})();

;// CONCATENATED MODULE: ./src/components/handleCountryData.js


const countryList = (() => {
  const COUNTRIES = [{
    name: "afghanistan",
    alphaCode: "AF"
  }, {
    name: "åland islands",
    alphaCode: "AX"
  }, {
    name: "albania",
    alphaCode: "AL"
  }, {
    name: "algeria",
    alphaCode: "DZ"
  }, {
    name: "american samoa",
    alphaCode: "AS"
  }, {
    name: "andorra",
    alphaCode: "AD"
  }, {
    name: "angola",
    alphaCode: "AO"
  }, {
    name: "anguilla",
    alphaCode: "AI"
  }, {
    name: "antarctica",
    alphaCode: "AQ"
  }, {
    name: "antigua and barbuda",
    alphaCode: "AG"
  }, {
    name: "argentina",
    alphaCode: "AR"
  }, {
    name: "armenia",
    alphaCode: "AM"
  }, {
    name: "aruba",
    alphaCode: "AW"
  }, {
    name: "australia",
    alphaCode: "AU"
  }, {
    name: "austria",
    alphaCode: "AT"
  }, {
    name: "azerbaijan",
    alphaCode: "AZ"
  }, {
    name: "bahamas",
    alphaCode: "BS"
  }, {
    name: "bahrain",
    alphaCode: "BH"
  }, {
    name: "bangladesh",
    alphaCode: "BD"
  }, {
    name: "barbados",
    alphaCode: "BB"
  }, {
    name: "belarus",
    alphaCode: "BY"
  }, {
    name: "belgium",
    alphaCode: "BE"
  }, {
    name: "belize",
    alphaCode: "BZ"
  }, {
    name: "benin",
    alphaCode: "BJ"
  }, {
    name: "bermuda",
    alphaCode: "BM"
  }, {
    name: "bhutan",
    alphaCode: "BT"
  }, {
    name: "plurinational state of bolivia",
    alphaCode: "BO"
  }, {
    name: "bonaire",
    alphaCode: "BQ"
  }, {
    name: "bosnia and herzegovina",
    alphaCode: "BA"
  }, {
    name: "botswana",
    alphaCode: "BW"
  }, {
    name: "bouvet island",
    alphaCode: "BV"
  }, {
    name: "brazil",
    alphaCode: "BR"
  }, {
    name: "british indian ocean territory",
    alphaCode: "IO"
  }, {
    name: "brunei darussalam",
    alphaCode: "BN"
  }, {
    name: "bulgaria",
    alphaCode: "BG"
  }, {
    name: "burkina faso",
    alphaCode: "BF"
  }, {
    name: "burundi",
    alphaCode: "BI"
  }, {
    name: "cabo verde",
    alphaCode: "CV"
  }, {
    name: "cambodia",
    alphaCode: "KH"
  }, {
    name: "cameroon",
    alphaCode: "CM"
  }, {
    name: "canada",
    alphaCode: "CA"
  }, {
    name: "cayman islands",
    alphaCode: "KY"
  }, {
    name: "central african republic",
    alphaCode: "CF"
  }, {
    name: "chad",
    alphaCode: "TD"
  }, {
    name: "chile",
    alphaCode: "CL"
  }, {
    name: "china",
    alphaCode: "CN"
  }, {
    name: "christmas island",
    alphaCode: "CX"
  }, {
    name: "colombia",
    alphaCode: "CO"
  }, {
    name: "comoros",
    alphaCode: "KM"
  }, {
    name: "congo",
    alphaCode: "CD"
  }, {
    name: "congo",
    alphaCode: "CG"
  }, {
    name: "cook islands",
    alphaCode: "CK"
  }, {
    name: "costa rica",
    alphaCode: "CR"
  }, {
    name: "côte d'ivoire",
    alphaCode: "CI"
  }, {
    name: "croatia",
    alphaCode: "HR"
  }, {
    name: "cuba",
    alphaCode: "CU"
  }, {
    name: "curaçao",
    alphaCode: "CW"
  }, {
    name: "cyprus",
    alphaCode: "CY"
  }, {
    name: "czechia",
    alphaCode: "CZ"
  }, {
    name: "denmark",
    alphaCode: "DK"
  }, {
    name: "djibouti",
    alphaCode: "DJ"
  }, {
    name: "dominica",
    alphaCode: "DM"
  }, {
    name: "dominican republic",
    alphaCode: "DO"
  }, {
    name: "ecuador",
    alphaCode: "EC"
  }, {
    name: "egypt",
    alphaCode: "EG"
  }, {
    name: "el salvador",
    alphaCode: "SV"
  }, {
    name: "equatorial guinea",
    alphaCode: "GQ"
  }, {
    name: "eritrea",
    alphaCode: "ER"
  }, {
    name: "estonia",
    alphaCode: "EE"
  }, {
    name: "eswatini",
    alphaCode: "SZ"
  }, {
    name: "ethiopia",
    alphaCode: "ET"
  }, {
    name: "falkland islands",
    alphaCode: "FK"
  }, {
    name: "faroe islands",
    alphaCode: "FO"
  }, {
    name: "fiji",
    alphaCode: "FJ"
  }, {
    name: "finland",
    alphaCode: "FI"
  }, {
    name: "france",
    alphaCode: "FR"
  }, {
    name: "french guiana",
    alphaCode: "GF"
  }, {
    name: "french polynesia",
    alphaCode: "PF"
  }, {
    name: "french southern territories",
    alphaCode: "TF"
  }, {
    name: "gabon",
    alphaCode: "GA"
  }, {
    name: "gambia",
    alphaCode: "GM"
  }, {
    name: "georgia",
    alphaCode: "GE"
  }, {
    name: "germany",
    alphaCode: "DE"
  }, {
    name: "ghana",
    alphaCode: "GH"
  }, {
    name: "gibraltar",
    alphaCode: "GI"
  }, {
    name: "greece",
    alphaCode: "GR"
  }, {
    name: "greenland",
    alphaCode: "GL"
  }, {
    name: "grenada",
    alphaCode: "GD"
  }, {
    name: "guadeloupe",
    alphaCode: "GP"
  }, {
    name: "guam",
    alphaCode: "GU"
  }, {
    name: "guatemala",
    alphaCode: "GT"
  }, {
    name: "guernsey",
    alphaCode: "GG"
  }, {
    name: "guinea",
    alphaCode: "GN"
  }, {
    name: "guinea-bissau",
    alphaCode: "GW"
  }, {
    name: "guyana",
    alphaCode: "GY"
  }, {
    name: "haiti",
    alphaCode: "HT"
  }, {
    name: "heard island and mcdonald islands",
    alphaCode: "HM"
  }, {
    name: "holy see",
    alphaCode: "VA"
  }, {
    name: "honduras",
    alphaCode: "HN"
  }, {
    name: "hong kong",
    alphaCode: "HK"
  }, {
    name: "hungary",
    alphaCode: "HU"
  }, {
    name: "iceland",
    alphaCode: "IS"
  }, {
    name: "india",
    alphaCode: "IN"
  }, {
    name: "indonesia",
    alphaCode: "ID"
  }, {
    name: "islamic republic of iran",
    alphaCode: "IR"
  }, {
    name: "iraq",
    alphaCode: "IQ"
  }, {
    name: "ireland",
    alphaCode: "IE"
  }, {
    name: "isle of man",
    alphaCode: "IM"
  }, {
    name: "israel",
    alphaCode: "IL"
  }, {
    name: "italy",
    alphaCode: "IT"
  }, {
    name: "jamaica",
    alphaCode: "JM"
  }, {
    name: "japan",
    alphaCode: "JP"
  }, {
    name: "jersey",
    alphaCode: "JE"
  }, {
    name: "jordan",
    alphaCode: "JO"
  }, {
    name: "kazakhstan",
    alphaCode: "KZ"
  }, {
    name: "kenya",
    alphaCode: "KE"
  }, {
    name: "kiribati",
    alphaCode: "KI"
  }, {
    name: "north korea",
    alphaCode: "KP"
  }, {
    name: "korea",
    alphaCode: "KP"
  }, {
    name: "south korea",
    alphaCode: "KR"
  }, {
    name: "kuwait",
    alphaCode: "KW"
  }, {
    name: "kyrgyzstan",
    alphaCode: "KG"
  }, {
    name: "lao people's democratic republic",
    alphaCode: "LA"
  }, {
    name: "latvia",
    alphaCode: "LV"
  }, {
    name: "lebanon",
    alphaCode: "LB"
  }, {
    name: "lesotho",
    alphaCode: "LS"
  }, {
    name: "liberia",
    alphaCode: "LR"
  }, {
    name: "libya",
    alphaCode: "LY"
  }, {
    name: "liechtenstein",
    alphaCode: "LI"
  }, {
    name: "lithuania",
    alphaCode: "LT"
  }, {
    name: "luxembourg",
    alphaCode: "LU"
  }, {
    name: "macao",
    alphaCode: "MO"
  }, {
    name: "north macedonia",
    alphaCode: "MK"
  }, {
    name: "madagascar",
    alphaCode: "MG"
  }, {
    name: "malawi",
    alphaCode: "MW"
  }, {
    name: "malaysia",
    alphaCode: "MY"
  }, {
    name: "maldives",
    alphaCode: "MV"
  }, {
    name: "mali",
    alphaCode: "ML"
  }, {
    name: "malta",
    alphaCode: "MT"
  }, {
    name: "marshall islands",
    alphaCode: "MH"
  }, {
    name: "martinique",
    alphaCode: "MQ"
  }, {
    name: "mauritania",
    alphaCode: "MR"
  }, {
    name: "mauritius",
    alphaCode: "MU"
  }, {
    name: "mayotte",
    alphaCode: "YT"
  }, {
    name: "mexico",
    alphaCode: "MX"
  }, {
    name: "federated states of micronesia",
    alphaCode: "FM"
  }, {
    name: "republic of Moldova",
    alphaCode: "MD"
  }, {
    name: "monaco",
    alphaCode: "MC"
  }, {
    name: "mongolia",
    alphaCode: "MN"
  }, {
    name: "montenegro",
    alphaCode: "ME"
  }, {
    name: "montserrat",
    alphaCode: "MS"
  }, {
    name: "morocco",
    alphaCode: "MA"
  }, {
    name: "mozambique",
    alphaCode: "MZ"
  }, {
    name: "myanmar",
    alphaCode: "MM"
  }, {
    name: "namibia",
    alphaCode: "NA"
  }, {
    name: "nauru",
    alphaCode: "NR"
  }, {
    name: "nepal",
    alphaCode: "NP"
  }, {
    name: "netherlands",
    alphaCode: "NL"
  }, {
    name: "new caledonia",
    alphaCode: "NC"
  }, {
    name: "new zealand",
    alphaCode: "NZ"
  }, {
    name: "nicaragua",
    alphaCode: "NI"
  }, {
    name: "niger",
    alphaCode: "NE"
  }, {
    name: "nigeria",
    alphaCode: "NG"
  }, {
    name: "niue",
    alphaCode: "NU"
  }, {
    name: "norfolk island",
    alphaCode: "NF"
  }, {
    name: "northern mariana islands",
    alphaCode: "MP"
  }, {
    name: "norway",
    alphaCode: "NO"
  }, {
    name: "oman",
    alphaCode: "OM"
  }, {
    name: "pakistan",
    alphaCode: "PK"
  }, {
    name: "palau",
    alphaCode: "PW"
  }, {
    name: "palestine, state of",
    alphaCode: "PS"
  }, {
    name: "panama",
    alphaCode: "PA"
  }, {
    name: "papua new guinea",
    alphaCode: "PG"
  }, {
    name: "paraguay",
    alphaCode: "PY"
  }, {
    name: "peru",
    alphaCode: "PE"
  }, {
    name: "philippines",
    alphaCode: "PH"
  }, {
    name: "pitcairn",
    alphaCode: "PN"
  }, {
    name: "poland",
    alphaCode: "PL"
  }, {
    name: "portugal",
    alphaCode: "PT"
  }, {
    name: "puerto rico",
    alphaCode: "PR"
  }, {
    name: "qatar",
    alphaCode: "QA"
  }, {
    name: "réunion",
    alphaCode: "RE"
  }, {
    name: "romania",
    alphaCode: "RO"
  }, {
    name: "russian",
    alphaCode: "RU"
  }, {
    name: "rwanda",
    alphaCode: "RW"
  }, {
    name: "saint barthélemy",
    alphaCode: "BL"
  }, {
    name: "saint helena",
    alphaCode: "SH"
  }, {
    name: "saint kitts and nevis",
    alphaCode: "KN"
  }, {
    name: "saint lucia",
    alphaCode: "LC"
  }, {
    name: "saint martin",
    alphaCode: "MF"
  }, {
    name: "saint pierre and miquelon",
    alphaCode: "PM"
  }, {
    name: "saint vincent and the grenadines",
    alphaCode: "VC"
  }, {
    name: "samoa",
    alphaCode: "WS"
  }, {
    name: "san marino",
    alphaCode: "SM"
  }, {
    name: "sao tome and principe",
    alphaCode: "ST"
  }, {
    name: "saudi arabia",
    alphaCode: "SA"
  }, {
    name: "senegal",
    alphaCode: "SN"
  }, {
    name: "serbia",
    alphaCode: "RS"
  }, {
    name: "seychelles",
    alphaCode: "SC"
  }, {
    name: "sierra leone",
    alphaCode: "SL"
  }, {
    name: "singapore",
    alphaCode: "SG"
  }, {
    name: "sint maarten",
    alphaCode: "SX"
  }, {
    name: "slovakia",
    alphaCode: "SK"
  }, {
    name: "slovenia",
    alphaCode: "SI"
  }, {
    name: "solomon islands",
    alphaCode: "SB"
  }, {
    name: "somalia",
    alphaCode: "SO"
  }, {
    name: "south africa",
    alphaCode: "ZA"
  }, {
    name: "south georgia and the south sandwich islands",
    alphaCode: "GS"
  }, {
    name: "south sudan",
    alphaCode: "SS"
  }, {
    name: "spain",
    alphaCode: "ES"
  }, {
    name: "sri lanka",
    alphaCode: "LK"
  }, {
    name: "sudan",
    alphaCode: "SD"
  }, {
    name: "suriname",
    alphaCode: "SR"
  }, {
    name: "svalbard",
    alphaCode: "SJ"
  }, {
    name: "sweden",
    alphaCode: "SE"
  }, {
    name: "switzerland",
    alphaCode: "CH"
  }, {
    name: "syrian arab republic",
    alphaCode: "SY"
  }, {
    name: "taiwan",
    alphaCode: "TW"
  }, {
    name: "tajikistan",
    alphaCode: "TJ"
  }, {
    name: "tanzania, the united republic of",
    alphaCode: "TZ"
  }, {
    name: "thailand",
    alphaCode: "TH"
  }, {
    name: "timor-leste",
    alphaCode: "TL"
  }, {
    name: "togo",
    alphaCode: "TG"
  }, {
    name: "tokelau",
    alphaCode: "TK"
  }, {
    name: "tonga",
    alphaCode: "TO"
  }, {
    name: "trinidad and tobago",
    alphaCode: "TT"
  }, {
    name: "tunisia",
    alphaCode: "TN"
  }, {
    name: "türkiye",
    alphaCode: "TR"
  }, {
    name: "turkmenistan",
    alphaCode: "TM"
  }, {
    name: "turks and caicos islands",
    alphaCode: "TC"
  }, {
    name: "tuvalu",
    alphaCode: "TV"
  }, {
    name: "uganda",
    alphaCode: "UG"
  }, {
    name: "ukraine",
    alphaCode: "UA"
  }, {
    name: "united arab emirates",
    alphaCode: "AE"
  }, {
    name: "united kingdom",
    alphaCode: "GB"
  }, {
    name: "united states minor outlying islands",
    alphaCode: "UM"
  }, {
    name: "united states of america",
    alphaCode: "US"
  }, {
    name: "uruguay",
    alphaCode: "UY"
  }, {
    name: "uzbekistan",
    alphaCode: "UZ"
  }, {
    name: "vanuatu",
    alphaCode: "VU"
  }, {
    name: "bolivarian Republic of Venezuela",
    alphaCode: "VE"
  }, {
    name: "viet nam",
    alphaCode: "VN"
  }, {
    name: "western sahara",
    alphaCode: "EH"
  }, {
    name: "yemen",
    alphaCode: "YE"
  }, {
    name: "zambia",
    alphaCode: "ZM"
  }, {
    name: "zimbabwe",
    alphaCode: "ZW"
  }];
  const has = city => {
    const matchObj = COUNTRIES.find(item => item.name === city.toLowerCase());
    if (!matchObj) return false;
    return true;
  };
  const toCode = country => {
    const matchObj = COUNTRIES.find(item => item.name === country);
    if (!matchObj) return false;
    return matchObj.alphaCode;
  };
  const getAll = () => {
    return COUNTRIES;
  };
  return {
    toCode,
    has,
    getAll
  };
})();

// EXTERNAL MODULE: ./node_modules/leaflet/dist/images/marker-icon.png
var marker_icon = __webpack_require__(94);
// EXTERNAL MODULE: ./node_modules/leaflet/dist/images/marker-shadow.png
var marker_shadow = __webpack_require__(965);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/format/index.js + 32 modules
var format = __webpack_require__(147);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/isToday/index.js + 2 modules
var isToday = __webpack_require__(767);
;// CONCATENATED MODULE: ./src/layouts/main.js


// library





const main = (() => {
  const allCountry = countryList.getAll();
  const weatherIcons = [];
  let map = null;
  importWeatherIcons(__webpack_require__(203));
  const createCurrentWeather = (data, units) => {
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
                <span class="symbol"></span>
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
    const country = allCountry.find(item => item.alphaCode === data.sys.country);
    if (country) {
      const countryName = country["name"].replace(/\b\w/g, word => word.toUpperCase());
      current.querySelector(".country").textContent = `${countryName}`;
    }
    if (current.querySelector(".name").offsetHeight > nameElemHeight) {
      current.querySelector(".country").style.fontSize = "1rem";
    }
    current.querySelector(".date").textContent = (0,format/* default */.Z)(new Date(), "E, MMM d");
    current.querySelector(".deg").textContent = Math.round(data.main.temp);
    let symbol = null;
    switch (units) {
      case "metric":
        symbol = "&#8451;";
        break;
      case "imperial":
        symbol = "&#8457;";
        break;
    }
    current.querySelector(".symbol").innerHTML = symbol;
    let icon = weatherIcons.find(item => data.weather[0].main === item.main || data.weather[0].icon === item.main);
    if (!icon) icon = weatherIcons.find(item => item.main === "Other");
    current.querySelector(".icon").style.backgroundImage = `url(${icon.url})`;
    const description = data.weather[0].description.replace(/\b\w/g, word => word.toUpperCase());
    current.querySelector(".status").textContent = description;
    current.querySelector(".sunrise").textContent = (0,format/* default */.Z)(new Date(data.sys.sunrise * 1000), "HH:mm");
    current.querySelector(".sunset").textContent = (0,format/* default */.Z)(new Date(data.sys.sunset * 1000), "HH:mm");
    current.querySelector(".updateTime").textContent = (0,format/* default */.Z)(new Date(data.dt * 1000), "'Last updated of' HH:mm");
  };
  const createWeatherForecast = data => {
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
      let icon = weatherIcons.find(item => i.weather[0].main === item.main || i.weather[0].icon === item.main);
      if (!icon) icon = weatherIcons.find(item => item.main === "Other");
      if (i.pop > 0) {
        div.firstElementChild.append(createPopCard(i.pop));
      }
      div.querySelector("img").src = icon.url;
      div.querySelector("img").alt = icon.description;
      div.querySelector(".dateTime").textContent = (0,format/* default */.Z)(new Date(i.dt * 1000), "h aaa");
      div.querySelector(".tmp").textContent = Math.round(i.main.temp);
      daily.append(div.firstElementChild);
    }
  };
  const createWeatherDetails = (data, units) => {
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
    details.querySelector(".feels-like .value").innerHTML = `${Math.round(data.main.feels_like)} &deg;`;
    details.querySelector(".humidity .value").textContent = `${data.main.humidity} %`;
    details.querySelector(".pressure .value").textContent = `${data.main.pressure} hPa`;
    let wind = null;
    switch (units) {
      case "metric":
        wind = `${data.wind.speed} m/s`;
        break;
      case "imperial":
        wind = `${data.wind.speed} mph`;
        break;
    }
    details.querySelector(".wind .value").textContent = wind;
    details.querySelector(".wind .compass").style = `transform: rotate(${data.wind.deg}deg);`;
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
    details.querySelector(".amount .title").textContent = `${title.replace(/\b\w/g, word => word.toUpperCase())} Amount`;
    details.querySelector(".amount .value").textContent = amount;
  };
  const createWeatherMap = (data, overlayMaps) => {
    if (map) {
      map.off();
      map.remove();
    }
    const osm = leaflet_src_default().tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>|<a href="https://openweathermap.org/"> OpenWeatherMap</a>'
    });
    map = leaflet_src_default().map("map", {
      center: [data.lat, data.lon],
      zoom: 6,
      minZoom: 1,
      maxZoom: 18,
      layers: [osm]
    });
    let DefaultIcon = leaflet_src_default().icon({
      iconUrl: marker_icon,
      shadowUrl: marker_shadow,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
    leaflet_src_default().marker([data.lat, data.lon], {
      icon: DefaultIcon
    }).bindPopup(data.name).addTo(map);
    leaflet_src_default().control.layers(null, overlayMaps).addTo(map);
  };
  function importWeatherIcons(resolve) {
    const keys = resolve.keys();
    for (let key of keys) {
      const main = key.match(/[\w-]*(?=.svg)/g)[0];
      const url = resolve(key);
      weatherIcons.push({
        main,
        url
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
    const [weeks, days] = (0,format/* default */.Z)(itemDate, "EEEE, MMMM d").split(",");
    if ((0,isToday/* default */.Z)(itemDate)) {
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
    createWeatherMap
  };
})();

;// CONCATENATED MODULE: ./src/weatherApp.js






const createWeatherApp = () => {
  let units = "metric";
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
    setCarouselDisplayItems();
    getGeocoding("taipei, Taiwan");
    searchForm.addEventListener("submit", searchWeather);
    temperatureScales.addEventListener("pointerdown", toggleTmpScales);
    carousel.addEventListener("pointerdown", scrollCarousel);
    carousel.addEventListener("selectstart", e => e.preventDefault());
    window.addEventListener("resize", setCarouselDisplayItems);
  };
  function searchWeather(e) {
    e.preventDefault();
    const searchField = this.querySelector(".searchField");
    if (searchField !== this.elements.search || !searchField.value.trim()) return;
    searchForm.addEventListener("animationend", removeShake);
    let [city, country] = searchField.value.toLowerCase().split(",").map(i => i.trim());
    if (countryList.has(city)) {
      this.classList.add("error");
      this.classList.add("shake");
      this.querySelector(".message").textContent = "You need type 'city name' or 'city name, country'";
      return;
    }
    let query = city;
    if (country) {
      const countryCode = countryList.toCode(country);
      if (!countryCode) {
        this.classList.add("error");
        this.classList.add("shake");
        this.querySelector(".message").textContent = "Country is incorrect";
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
      searchForm.querySelector(".message").textContent = "Try another search items";
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
    let CurrentWeather = await weatherApi.getCurrentWeather(lat, lon, units);
    CurrentWeather.name = geocoding.name;
    CurrentWeather.sys.country = geocoding.country;
    main.createCurrentWeather(CurrentWeather, units);
    main.createWeatherDetails(CurrentWeather, units);
    const WeatherForecast = await weatherApi.getWeatherForecast(lat, lon, units);
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
    const itemWidth = +getComputedStyle(items[0]) // The width of each li tag
    .getPropertyValue("width").match(/\d+/)[0] + 20;
    list.addEventListener("dragstart", e => e.preventDefault());
    let shiftX = e.clientX - list.getBoundingClientRect().left;
    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerup", onPointerUp);
    function onPointerMove(e) {
      list.setPointerCapture(e.pointerId);
      let newLeft = e.clientX - shiftX - wrap.getBoundingClientRect().left;
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
      list.removeEventListener("dragstart", e => e.preventDefault());
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
    const itemWidth = +getComputedStyle(items[0]) // The width of each li tag
    .getPropertyValue("width").match(/\d+/)[0] + 20;
    const direction = arrowBtn.classList[1];
    let leftEdge = list.getBoundingClientRect().left - wrap.getBoundingClientRect().left;
    switch (direction) {
      case "prev":
        leftEdge += itemWidth * carouselItemCount;
        leftEdge = Math.min(leftEdge, 0);
        break;
      case "next":
        leftEdge -= itemWidth * carouselItemCount;
        leftEdge = Math.max(leftEdge, -itemWidth * (items.length - carouselItemCount));
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
    init
  };
};

;// CONCATENATED MODULE: ./src/index.js



const weatherApp = createWeatherApp();
weatherApp.init();

/***/ }),

/***/ 203:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./01d.svg": 932,
	"./01n.svg": 748,
	"./09d.svg": 510,
	"./09n.svg": 559,
	"./Clouds.svg": 164,
	"./Other.svg": 501,
	"./Rain.svg": 420,
	"./Snow.svg": 142,
	"./Thunderstorm.svg": 263
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 203;

/***/ }),

/***/ 932:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/27ae523a3ff009026350.svg";

/***/ }),

/***/ 748:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/5f4e28eeb1ce7abeb96a.svg";

/***/ }),

/***/ 510:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/8bbafa6418f086a8f3e0.svg";

/***/ }),

/***/ 559:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/6262bddac7138c18d823.svg";

/***/ }),

/***/ 164:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/d8a93782d282a98f7eb3.svg";

/***/ }),

/***/ 501:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/6b05f1fde22268f2e764.svg";

/***/ }),

/***/ 420:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/7233930089050693071d.svg";

/***/ }),

/***/ 142:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/738fbaf6e8b043274ab2.svg";

/***/ }),

/***/ 263:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/d554b2b13d48a709d41b.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [216], () => (__webpack_exec__(565)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);