import key from "./keep-safe.js";
import currencies from "./currencies.js";

const fromInput = document.querySelector("[name='from_amount']");
const toSelect = document.querySelector("[name='to_currency']");
const toAmount = document.querySelector(".to_amount");
const endpoint = "http://api.exchangeratesapi.io/latest";
const form = document.querySelector(".app form");
const conversionRate = {};

function generateOptions(options) {
    return Object.entries(options)
        .map(
            // eslint-disable-next-line prettier/prettier
            ([currencyCode, currencyName]) => 
            `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`   
        )
        .join("");
}

async function fetchRates() {
    // accessKey lives in keep-safe.js
    // eslint-disable-next-line no-undef
    const res = await fetch(`${endpoint}?${key}`);
    const rates = await res.json();
    return rates;
}

async function convert(amount, to) {
    // first check if we have the rates to convert from that currency
    if (!conversionRate[to]) {
        const rates = await fetchRates();
        // store them for next time
        conversionRate[to] = JSON.stringify(rates.rates[to]);
    }
    // convert that amount it's been passed
    const rate = conversionRate[to];
    const convertedAmount = rate * amount;
    return convertedAmount;
}

function formatCurrency(amount, currency) {
    return Intl.NumberFormat("en-UK", {
        style: "currency",
        currency,
    }).format(amount);
}

async function handleInput() {
    const rawAmount = await convert(fromInput.value, toSelect.value);
    toAmount.textContent = formatCurrency(rawAmount, toSelect.value);
}

const optionsHTML = generateOptions(currencies);

// populate the options elements
toSelect.innerHTML = optionsHTML;

form.addEventListener("input", handleInput);
