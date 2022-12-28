"use strict";

const countryList = (() => {
    const COUNTRIES = [
        {
            name: "afghanistan",
            alphaCode: "AF",
        },
        {
            name: "åland islands",
            alphaCode: "AX",
        },
        {
            name: "albania",
            alphaCode: "AL",
        },
        {
            name: "algeria",
            alphaCode: "DZ",
        },
        {
            name: "american samoa",
            alphaCode: "AS",
        },
        {
            name: "andorra",
            alphaCode: "AD",
        },
        {
            name: "angola",
            alphaCode: "AO",
        },
        {
            name: "anguilla",
            alphaCode: "AI",
        },
        {
            name: "antarctica",
            alphaCode: "AQ",
        },
        {
            name: "antigua and barbuda",
            alphaCode: "AG",
        },
        {
            name: "argentina",
            alphaCode: "AR",
        },
        {
            name: "armenia",
            alphaCode: "AM",
        },
        {
            name: "aruba",
            alphaCode: "AW",
        },
        {
            name: "australia",
            alphaCode: "AU",
        },
        {
            name: "austria",
            alphaCode: "AT",
        },
        {
            name: "azerbaijan",
            alphaCode: "AZ",
        },
        {
            name: "bahamas",
            alphaCode: "BS",
        },
        {
            name: "bahrain",
            alphaCode: "BH",
        },
        {
            name: "bangladesh",
            alphaCode: "BD",
        },
        {
            name: "barbados",
            alphaCode: "BB",
        },
        {
            name: "belarus",
            alphaCode: "BY",
        },
        {
            name: "belgium",
            alphaCode: "BE",
        },
        {
            name: "belize",
            alphaCode: "BZ",
        },
        {
            name: "benin",
            alphaCode: "BJ",
        },
        {
            name: "bermuda",
            alphaCode: "BM",
        },
        {
            name: "bhutan",
            alphaCode: "BT",
        },
        {
            name: "plurinational state of bolivia",
            alphaCode: "BO",
        },
        {
            name: "bonaire",
            alphaCode: "BQ",
        },
        {
            name: "bosnia and herzegovina",
            alphaCode: "BA",
        },
        {
            name: "botswana",
            alphaCode: "BW",
        },
        {
            name: "bouvet island",
            alphaCode: "BV",
        },
        {
            name: "brazil",
            alphaCode: "BR",
        },
        {
            name: "british indian ocean territory",
            alphaCode: "IO",
        },
        {
            name: "brunei darussalam",
            alphaCode: "BN",
        },
        {
            name: "bulgaria",
            alphaCode: "BG",
        },
        {
            name: "burkina faso",
            alphaCode: "BF",
        },
        {
            name: "burundi",
            alphaCode: "BI",
        },
        {
            name: "cabo verde",
            alphaCode: "CV",
        },
        {
            name: "cambodia",
            alphaCode: "KH",
        },
        {
            name: "cameroon",
            alphaCode: "CM",
        },
        {
            name: "canada",
            alphaCode: "CA",
        },
        {
            name: "cayman islands",
            alphaCode: "KY",
        },
        {
            name: "central african republic",
            alphaCode: "CF",
        },
        {
            name: "chad",
            alphaCode: "TD",
        },
        {
            name: "chile",
            alphaCode: "CL",
        },
        {
            name: "china",
            alphaCode: "CN",
        },
        {
            name: "christmas island",
            alphaCode: "CX",
        },
        {
            name: "colombia",
            alphaCode: "CO",
        },
        {
            name: "comoros",
            alphaCode: "KM",
        },
        {
            name: "congo",
            alphaCode: "CD",
        },
        {
            name: "congo",
            alphaCode: "CG",
        },
        {
            name: "cook islands",
            alphaCode: "CK",
        },
        {
            name: "costa rica",
            alphaCode: "CR",
        },
        {
            name: "côte d'ivoire",
            alphaCode: "CI",
        },
        {
            name: "croatia",
            alphaCode: "HR",
        },
        {
            name: "cuba",
            alphaCode: "CU",
        },
        {
            name: "curaçao",
            alphaCode: "CW",
        },
        {
            name: "cyprus",
            alphaCode: "CY",
        },
        {
            name: "czechia",
            alphaCode: "CZ",
        },
        {
            name: "denmark",
            alphaCode: "DK",
        },
        {
            name: "djibouti",
            alphaCode: "DJ",
        },
        {
            name: "dominica",
            alphaCode: "DM",
        },
        {
            name: "dominican republic",
            alphaCode: "DO",
        },
        {
            name: "ecuador",
            alphaCode: "EC",
        },
        {
            name: "egypt",
            alphaCode: "EG",
        },
        {
            name: "el salvador",
            alphaCode: "SV",
        },
        {
            name: "equatorial guinea",
            alphaCode: "GQ",
        },
        {
            name: "eritrea",
            alphaCode: "ER",
        },
        {
            name: "estonia",
            alphaCode: "EE",
        },
        {
            name: "eswatini",
            alphaCode: "SZ",
        },
        {
            name: "ethiopia",
            alphaCode: "ET",
        },
        {
            name: "falkland islands",
            alphaCode: "FK",
        },
        {
            name: "faroe islands",
            alphaCode: "FO",
        },
        {
            name: "fiji",
            alphaCode: "FJ",
        },
        {
            name: "finland",
            alphaCode: "FI",
        },
        {
            name: "france",
            alphaCode: "FR",
        },
        {
            name: "french guiana",
            alphaCode: "GF",
        },
        {
            name: "french polynesia",
            alphaCode: "PF",
        },
        {
            name: "french southern territories",
            alphaCode: "TF",
        },
        {
            name: "gabon",
            alphaCode: "GA",
        },
        {
            name: "gambia",
            alphaCode: "GM",
        },
        {
            name: "georgia",
            alphaCode: "GE",
        },
        {
            name: "germany",
            alphaCode: "DE",
        },
        {
            name: "ghana",
            alphaCode: "GH",
        },
        {
            name: "gibraltar",
            alphaCode: "GI",
        },
        {
            name: "greece",
            alphaCode: "GR",
        },
        {
            name: "greenland",
            alphaCode: "GL",
        },
        {
            name: "grenada",
            alphaCode: "GD",
        },
        {
            name: "guadeloupe",
            alphaCode: "GP",
        },
        {
            name: "guam",
            alphaCode: "GU",
        },
        {
            name: "guatemala",
            alphaCode: "GT",
        },
        {
            name: "guernsey",
            alphaCode: "GG",
        },
        {
            name: "guinea",
            alphaCode: "GN",
        },
        {
            name: "guinea-bissau",
            alphaCode: "GW",
        },
        {
            name: "guyana",
            alphaCode: "GY",
        },
        {
            name: "haiti",
            alphaCode: "HT",
        },
        {
            name: "heard island and mcdonald islands",
            alphaCode: "HM",
        },
        {
            name: "holy see",
            alphaCode: "VA",
        },
        {
            name: "honduras",
            alphaCode: "HN",
        },
        {
            name: "hong kong",
            alphaCode: "HK",
        },
        {
            name: "hungary",
            alphaCode: "HU",
        },
        {
            name: "iceland",
            alphaCode: "IS",
        },
        {
            name: "india",
            alphaCode: "IN",
        },
        {
            name: "indonesia",
            alphaCode: "ID",
        },
        {
            name: "islamic republic of iran",
            alphaCode: "IR",
        },
        {
            name: "iraq",
            alphaCode: "IQ",
        },
        {
            name: "ireland",
            alphaCode: "IE",
        },
        {
            name: "isle of man",
            alphaCode: "IM",
        },
        {
            name: "israel",
            alphaCode: "IL",
        },
        {
            name: "italy",
            alphaCode: "IT",
        },
        {
            name: "jamaica",
            alphaCode: "JM",
        },
        {
            name: "japan",
            alphaCode: "JP",
        },
        {
            name: "jersey",
            alphaCode: "JE",
        },
        {
            name: "jordan",
            alphaCode: "JO",
        },
        {
            name: "kazakhstan",
            alphaCode: "KZ",
        },
        {
            name: "kenya",
            alphaCode: "KE",
        },
        {
            name: "kiribati",
            alphaCode: "KI",
        },
        {
            name: "north korea",
            alphaCode: "KP",
        },
        {
            name: "korea",
            alphaCode: "KP",
        },
        {
            name: "south korea",
            alphaCode: "KR",
        },
        {
            name: "kuwait",
            alphaCode: "KW",
        },
        {
            name: "kyrgyzstan",
            alphaCode: "KG",
        },
        {
            name: "lao people's democratic republic",
            alphaCode: "LA",
        },
        {
            name: "latvia",
            alphaCode: "LV",
        },
        {
            name: "lebanon",
            alphaCode: "LB",
        },
        {
            name: "lesotho",
            alphaCode: "LS",
        },
        {
            name: "liberia",
            alphaCode: "LR",
        },
        {
            name: "libya",
            alphaCode: "LY",
        },
        {
            name: "liechtenstein",
            alphaCode: "LI",
        },
        {
            name: "lithuania",
            alphaCode: "LT",
        },
        {
            name: "luxembourg",
            alphaCode: "LU",
        },
        {
            name: "macao",
            alphaCode: "MO",
        },
        {
            name: "north macedonia",
            alphaCode: "MK",
        },
        {
            name: "madagascar",
            alphaCode: "MG",
        },
        {
            name: "malawi",
            alphaCode: "MW",
        },
        {
            name: "malaysia",
            alphaCode: "MY",
        },
        {
            name: "maldives",
            alphaCode: "MV",
        },
        {
            name: "mali",
            alphaCode: "ML",
        },
        {
            name: "malta",
            alphaCode: "MT",
        },
        {
            name: "marshall islands",
            alphaCode: "MH",
        },
        {
            name: "martinique",
            alphaCode: "MQ",
        },
        {
            name: "mauritania",
            alphaCode: "MR",
        },
        {
            name: "mauritius",
            alphaCode: "MU",
        },
        {
            name: "mayotte",
            alphaCode: "YT",
        },
        {
            name: "mexico",
            alphaCode: "MX",
        },
        {
            name: "federated states of micronesia",
            alphaCode: "FM",
        },
        {
            name: "republic of Moldova",
            alphaCode: "MD",
        },
        {
            name: "monaco",
            alphaCode: "MC",
        },
        {
            name: "mongolia",
            alphaCode: "MN",
        },
        {
            name: "montenegro",
            alphaCode: "ME",
        },
        {
            name: "montserrat",
            alphaCode: "MS",
        },
        {
            name: "morocco",
            alphaCode: "MA",
        },
        {
            name: "mozambique",
            alphaCode: "MZ",
        },
        {
            name: "myanmar",
            alphaCode: "MM",
        },
        {
            name: "namibia",
            alphaCode: "NA",
        },
        {
            name: "nauru",
            alphaCode: "NR",
        },
        {
            name: "nepal",
            alphaCode: "NP",
        },
        {
            name: "netherlands",
            alphaCode: "NL",
        },
        {
            name: "new caledonia",
            alphaCode: "NC",
        },
        {
            name: "new zealand",
            alphaCode: "NZ",
        },
        {
            name: "nicaragua",
            alphaCode: "NI",
        },
        {
            name: "niger",
            alphaCode: "NE",
        },
        {
            name: "nigeria",
            alphaCode: "NG",
        },
        {
            name: "niue",
            alphaCode: "NU",
        },
        {
            name: "norfolk island",
            alphaCode: "NF",
        },
        {
            name: "northern mariana islands",
            alphaCode: "MP",
        },
        {
            name: "norway",
            alphaCode: "NO",
        },
        {
            name: "oman",
            alphaCode: "OM",
        },
        {
            name: "pakistan",
            alphaCode: "PK",
        },
        {
            name: "palau",
            alphaCode: "PW",
        },
        {
            name: "palestine, state of",
            alphaCode: "PS",
        },
        {
            name: "panama",
            alphaCode: "PA",
        },
        {
            name: "papua new guinea",
            alphaCode: "PG",
        },
        {
            name: "paraguay",
            alphaCode: "PY",
        },
        {
            name: "peru",
            alphaCode: "PE",
        },
        {
            name: "philippines",
            alphaCode: "PH",
        },
        {
            name: "pitcairn",
            alphaCode: "PN",
        },
        {
            name: "poland",
            alphaCode: "PL",
        },
        {
            name: "portugal",
            alphaCode: "PT",
        },
        {
            name: "puerto rico",
            alphaCode: "PR",
        },
        {
            name: "qatar",
            alphaCode: "QA",
        },
        {
            name: "réunion",
            alphaCode: "RE",
        },
        {
            name: "romania",
            alphaCode: "RO",
        },
        {
            name: "russian",
            alphaCode: "RU",
        },
        {
            name: "rwanda",
            alphaCode: "RW",
        },
        {
            name: "saint barthélemy",
            alphaCode: "BL",
        },
        {
            name: "saint helena",
            alphaCode: "SH",
        },
        {
            name: "saint kitts and nevis",
            alphaCode: "KN",
        },
        {
            name: "saint lucia",
            alphaCode: "LC",
        },
        {
            name: "saint martin",
            alphaCode: "MF",
        },
        {
            name: "saint pierre and miquelon",
            alphaCode: "PM",
        },
        {
            name: "saint vincent and the grenadines",
            alphaCode: "VC",
        },
        {
            name: "samoa",
            alphaCode: "WS",
        },
        {
            name: "san marino",
            alphaCode: "SM",
        },
        {
            name: "sao tome and principe",
            alphaCode: "ST",
        },
        {
            name: "saudi arabia",
            alphaCode: "SA",
        },
        {
            name: "senegal",
            alphaCode: "SN",
        },
        {
            name: "serbia",
            alphaCode: "RS",
        },
        {
            name: "seychelles",
            alphaCode: "SC",
        },
        {
            name: "sierra leone",
            alphaCode: "SL",
        },
        {
            name: "singapore",
            alphaCode: "SG",
        },
        {
            name: "sint maarten",
            alphaCode: "SX",
        },
        {
            name: "slovakia",
            alphaCode: "SK",
        },
        {
            name: "slovenia",
            alphaCode: "SI",
        },
        {
            name: "solomon islands",
            alphaCode: "SB",
        },
        {
            name: "somalia",
            alphaCode: "SO",
        },
        {
            name: "south africa",
            alphaCode: "ZA",
        },
        {
            name: "south georgia and the south sandwich islands",
            alphaCode: "GS",
        },
        {
            name: "south sudan",
            alphaCode: "SS",
        },
        {
            name: "spain",
            alphaCode: "ES",
        },
        {
            name: "sri lanka",
            alphaCode: "LK",
        },
        {
            name: "sudan",
            alphaCode: "SD",
        },
        {
            name: "suriname",
            alphaCode: "SR",
        },
        {
            name: "svalbard",
            alphaCode: "SJ",
        },
        {
            name: "sweden",
            alphaCode: "SE",
        },
        {
            name: "switzerland",
            alphaCode: "CH",
        },
        {
            name: "syrian arab republic",
            alphaCode: "SY",
        },
        {
            name: "taiwan",
            alphaCode: "TW",
        },
        {
            name: "tajikistan",
            alphaCode: "TJ",
        },
        {
            name: "tanzania, the united republic of",
            alphaCode: "TZ",
        },
        {
            name: "thailand",
            alphaCode: "TH",
        },
        {
            name: "timor-leste",
            alphaCode: "TL",
        },
        {
            name: "togo",
            alphaCode: "TG",
        },
        {
            name: "tokelau",
            alphaCode: "TK",
        },
        {
            name: "tonga",
            alphaCode: "TO",
        },
        {
            name: "trinidad and tobago",
            alphaCode: "TT",
        },
        {
            name: "tunisia",
            alphaCode: "TN",
        },
        {
            name: "türkiye",
            alphaCode: "TR",
        },
        {
            name: "turkmenistan",
            alphaCode: "TM",
        },
        {
            name: "turks and caicos islands",
            alphaCode: "TC",
        },
        {
            name: "tuvalu",
            alphaCode: "TV",
        },
        {
            name: "uganda",
            alphaCode: "UG",
        },
        {
            name: "ukraine",
            alphaCode: "UA",
        },
        {
            name: "united arab emirates",
            alphaCode: "AE",
        },
        {
            name: "united kingdom",
            alphaCode: "GB",
        },
        {
            name: "united states minor outlying islands",
            alphaCode: "UM",
        },
        {
            name: "united states of america",
            alphaCode: "US",
        },
        {
            name: "uruguay",
            alphaCode: "UY",
        },
        {
            name: "uzbekistan",
            alphaCode: "UZ",
        },
        {
            name: "vanuatu",
            alphaCode: "VU",
        },
        {
            name: "bolivarian Republic of Venezuela",
            alphaCode: "VE",
        },
        {
            name: "viet nam",
            alphaCode: "VN",
        },
        {
            name: "western sahara",
            alphaCode: "EH",
        },
        {
            name: "yemen",
            alphaCode: "YE",
        },
        {
            name: "zambia",
            alphaCode: "ZM",
        },
        {
            name: "zimbabwe",
            alphaCode: "ZW",
        },
    ];

    const has = (city) => {
        const matchObj = COUNTRIES.find(
            (item) => item.name === city.toLowerCase()
        );

        if (!matchObj) return false;

        return true;
    };

    const toCode = (country) => {
        const matchObj = COUNTRIES.find((item) => item.name === country);

        if (!matchObj) return false;

        return matchObj.alphaCode;
    };

    const getAll = () => {
        return COUNTRIES;
    };

    return { toCode, has, getAll };
})();

export { countryList };
