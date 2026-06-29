const API_KEY = "4ddcd9343ea39897d305bf5f";
const base_url = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair`;

const countryList = {
  "USD": "US",
  "AED": "AE",
  "AFN": "AF",
  "ALL": "AL",
  "AMD": "AM",
  "ANG": "AN",
  "AOA": "AO",
  "ARS": "AR",
  "AUD": "AU",
  "AWG": "AW",
  "AZN": "AZ",
  "BAM": "BA",
  "BBD": "BB",
  "BDT": "BD",
  "BGN": "BG",
  "BHD": "BH",
  "BIF": "BI",
  "BMD": "BM",
  "BND": "BN",
  "BOB": "BO",
  "BRL": "BR",
  "BSD": "BS",
  "BTN": "BT",
  "BWP": "BW",
  "BYN": "BY",
  "BZD": "BZ",
  "CAD": "CA",
  "CDF": "CD",
  "CHF": "CH",
  "CLF": "CL",
  "CLP": "CL",
  "CNH": "CN",
  "CNY": "CN",
  "COP": "CO",
  "CRC": "CR",
  "CUP": "CU",
  "CVE": "CV",
  "CZK": "CZ",
  "DJF": "DJ",
  "DKK": "DK",
  "DOP": "DO",
  "DZD": "DZ",
  "EGP": "EG",
  "ERN": "ER",
  "ETB": "ET",
  "EUR": "FR",
  "FJD": "FJ",
  "FKP": "FK",
  "FOK": "FO",
  "GBP": "GB",
  "GEL": "GE",
  "GGP": "GG",
  "GHS": "GH",
  "GIP": "GI",
  "GMD": "GM",
  "GNF": "GN",
  "GTQ": "GT",
  "GYD": "GY",
  "HKD": "HK",
  "HNL": "HN",
  "HRK": "HR",
  "HTG": "HT",
  "HUF": "HU",
  "IDR": "ID",
  "ILS": "IL",
  "IMP": "IM",
  "INR": "IN",
  "IQD": "IQ",
  "IRR": "IR",
  "ISK": "IS",
  "JEP": "JE",
  "JMD": "JM",
  "JOD": "JO",
  "JPY": "JP",
  "KES": "KE",
  "KGS": "KG",
  "KHR": "KH",
  "KID": "KI",
  "KMF": "KM",
  "KRW": "KR",
  "KWD": "KW",
  "KYD": "KY",
  "KZT": "KZ",
  "LAK": "LA",
  "LBP": "LB",
  "LKR": "LK",
  "LRD": "LR",
  "LSL": "LS",
  "LYD": "LY",
  "MAD": "MA",
  "MDL": "MD",
  "MGA": "MG",
  "MKD": "MK",
  "MMK": "MM",
  "MNT": "MN",
  "MOP": "MO",
  "MRU": "MR",
  "MUR": "MU",
  "MVR": "MV",
  "MWK": "MW",
  "MXN": "MX",
  "MYR": "MY",
  "MZN": "MZ",
  "NAD": "NA",
  "NGN": "NG",
  "NIO": "NI",
  "NOK": "NO",
  "NPR": "NP",
  "NZD": "NZ",
  "OMR": "OM",
  "PAB": "PA",
  "PEN": "PE",
  "PGK": "PG",
  "PHP": "PH",
  "PKR": "PK",
  "PLN": "PL",
  "PYG": "PY",
  "QAR": "QA",
  "RON": "RO",
  "RSD": "RS",
  "RUB": "RU",
  "RWF": "RW",
  "SAR": "SA",
  "SBD": "SB",
  "SCR": "SC",
  "SDG": "SD",
  "SEK": "SE",
  "SGD": "SG",
  "SHP": "SH",
  "SLE": "SL",
  "SLL": "SL",
  "SOS": "SO",
  "SRD": "SR",
  "SSP": "SS",
  "STN": "ST",
  "SYP": "SY",
  "SZL": "SZ",
  "THB": "TH",
  "TJS": "TJ",
  "TMT": "TM",
  "TND": "TN",
  "TOP": "TO",
  "TRY": "TR",
  "TTD": "TT",
  "TVD": "TV",
  "TWD": "TW",
  "TZS": "TZ",
  "UAH": "UA",
  "UGX": "UG",
  "UYU": "UY",
  "UZS": "UZ",
  "VES": "VE",
  "VND": "VN",
  "VUV": "VU",
  "WST": "WS",
  "XAF": "CF",
  "XCD": "AG",
  "XCG": "CG",
  "XDR": "XD",
  "XOF": "BE",
  "XPF": "NC",
  "YER": "YE",
  "ZAR": "ZA",
  "ZMW": "ZM",
  "ZWG": "ZW",
  "ZWL": "ZW"
};

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

function initializeApp() {
  const dropdownSelects = document.querySelectorAll(".dropdown select");
  const btn = document.querySelector("button");
  const msg = document.querySelector(".msg");
  const fromCurr = document.querySelector(".from select");
  const toCurr = document.querySelector(".to select");

  // Dropdowns fill karna
  for (const Select of dropdownSelects) {
    for (let code in countryList) {
      let Newoption = document.createElement("option");
      Newoption.innerText = code;
      Newoption.value = code;

      if (Select.name === "from" && code === "PKR") {
        Newoption.selected = "selected";
      } else if (Select.name === "to" && code === "USD") {
        Newoption.selected = "selected";
      }

      Select.append(Newoption);
    }

    // Flag update on change and trigger conversion
    Select.addEventListener("change", (e) => {
      updateFlag(e.target);
      updateExchangeRate();
    });
  }

  // Flag update function
  const updateFlag = (element) => {
    let code = element.value;
    let countrycode = countryList[code];
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
    let flagImg = element.parentElement.querySelector("img");
    flagImg.src = newsrc;
  };

  // Exchange rate update function
  const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input").value;
    if (amount === "" || amount < 0) {
      amount = "1";
      document.querySelector(".amount input").value = amount;
    }

    const URL = `${base_url}/${fromCurr.value}/${toCurr.value}`;
    try {
      let response = await fetch(URL);
      let data = await response.json();
      let rate = data.conversion_rate;
      let total = amount * rate;

      msg.innerHTML = `<p>${amount} ${fromCurr.value} = ${total.toFixed(2)} ${toCurr.value}</p>`;
    } catch (error) {
      msg.innerHTML = `<p>Error fetching exchange rate: ${error.message}</p>`;
    }
  };

  // Button click
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    updateExchangeRate();
  });

  // Call updateExchangeRate on page load
  updateExchangeRate();
}
