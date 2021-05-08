/*
    Importing the currencies as shown below,
    would load the currencies script on page load,
    not what we are looking for as we want to load the script
    when we need it on this case.
*/
// import currencies from "./currencies.js";

export async function handleButtonClick() {
    // ON DEMAND IMPORT
    // The currencies script will only get fired up
    // when we click on the button being listened to.
    const currenciesModule = await import("./currencies.js");
    console.log(currenciesModule.default);
}
