/* eslint-disable arrow-body-style */
console.log("APIs");

const baseEndPoint = "https://api.github.com";
const usersEndPoint = `${baseEndPoint}/users`;
const userEl = document.querySelector(".user");

async function displayUser(username) {
    userEl.textContent = "loading...";
    const response = await fetch(`${usersEndPoint}/${username}`);
    const data = await response.json();
    userEl.textContent = `Hello ${data.name},
    you've been a member since ${data.created_at.slice(0, 4)}`;
}

function handleError(err) {
    console.log("Something went wrong!");
    console.log(err);
}

displayUser("pazoia").catch(handleError);
