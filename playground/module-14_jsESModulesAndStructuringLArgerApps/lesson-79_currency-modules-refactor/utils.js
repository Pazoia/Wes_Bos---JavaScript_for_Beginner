export function generateOptions(options) {
    return Object.entries(options)
        .map(
            // eslint-disable-next-line prettier/prettier
            ([currencyCode, currencyName]) => 
            `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`   
        )
        .join("");
}

export function formatCurrency(amount, currency) {
    return Intl.NumberFormat("en-UK", {
        style: "currency",
        currency,
    }).format(amount);
}
