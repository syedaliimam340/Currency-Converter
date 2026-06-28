import { API_KEY } from "./config.js";

const base_url = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair`;


const dropdownSelects = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");
const msg = document.querySelector(".msg");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

// Page load pe exchange rate update
window.addEventListener("load", () => {
  updateExchangeRate();
});

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

  // Flag update on change
  Select.addEventListener("change", (e) => {
    updateFlag(e.target);
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
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data.conversion_rate;
  let total = amount * rate;

  msg.innerHTML = `<p>${amount} ${fromCurr.value} = ${total.toFixed(2)} ${toCurr.value}</p>`;
};

// Button click
btn.addEventListener("click", (e) => {
  e.preventDefault();
  updateExchangeRate();
});
