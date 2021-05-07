const fromInput = document.querySelector("[name='from_amount']");
const toSelect = document.querySelector("[name='to_currency']");
const toAmount = document.querySelector(".to_amount");
const endpoint = "http://api.exchangeratesapi.io/latest";
const form = document.querySelector(".app form");
const conversionRate = {};

const currencies = {
    USD: "United States Dollar",
    AUD: "Australian Dollar",
    BGN: "Bulgarian Lev",
    BRL: "Brazilian Real",
    CAD: "Canadian Dollar",
    CHF: "Swiss Franc",
    CNY: "Chinese Yuan",
    CZK: "Czech Republic Koruna",
    DKK: "Danish Krone",
    GBP: "British Pound Sterling",
    HKD: "Hong Kong Dollar",
    HRK: "Croatian Kuna",
    HUF: "Hungarian Forint",
    IDR: "Indonesian Rupiah",
    ILS: "Israeli New Sheqel",
    INR: "Indian Rupee",
    JPY: "Japanese Yen",
    KRW: "South Korean Won",
    MXN: "Mexican Peso",
    MYR: "Malaysian Ringgit",
    NOK: "Norwegian Krone",
    NZD: "New Zealand Dollar",
    PHP: "Philippine Peso",
    PLN: "Polish Zloty",
    RON: "Romanian Leu",
    RUB: "Russian Ruble",
    SEK: "Swedish Krona",
    SGD: "Singapore Dollar",
    THB: "Thai Baht",
    TRY: "Turkish Lira",
    ZAR: "South African Rand",
    EUR: "Euro",
};

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
    const res = await fetch(`${endpoint}?${accessKey}`);
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
