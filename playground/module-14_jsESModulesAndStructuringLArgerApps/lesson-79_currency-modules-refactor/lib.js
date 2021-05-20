import key from "./keep-safe.js";

const endpoint = "http://api.exchangeratesapi.io/latest";
const conversionRate = {};

export async function fetchRates() {
    // accessKey lives in keep-safe.js
    // eslint-disable-next-line no-undef
    const res = await fetch(`${endpoint}?${key}`);
    const rates = await res.json();
    return rates;
}

export async function convert(amount, to) {
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
