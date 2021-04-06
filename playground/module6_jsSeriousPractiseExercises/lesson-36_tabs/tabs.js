console.log("Working with tabs!!!");

const tabs = document.querySelector(".tabs");
const tabButtons = tabs.querySelectorAll("[role='tab']");
const tabPanels = tabs.querySelectorAll("[role='tabpanel']");

function handleTabClick(event) {
    // hide all tab panels
    tabPanels.forEach((panel) => {
        panel.hidden = true;
    });
    // mark all tabs as unselected
    tabButtons.forEach((tab) => {
        tab.setAttribute("aria-selected", false);
    });
    // mark the clicked tab as selected
    // find the associated tabPanel and show it
}

tabButtons.forEach((button) => button.addEventListener("click", handleTabClick));
