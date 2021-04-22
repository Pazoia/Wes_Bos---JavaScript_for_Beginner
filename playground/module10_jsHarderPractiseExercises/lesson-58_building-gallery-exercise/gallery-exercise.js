/* eslint-disable no-use-before-define */
/* eslint-disable no-useless-return */
function Gallery(gallery) {
    if (!gallery) {
        throw new Error("NO GALLERY FOUND!");
    }

    // Select the elements we need
    const images = Array.from(gallery.querySelectorAll("img"));
    const modal = document.querySelector(".modal");
    const prevButton = modal.querySelector(".prev");
    const nextButton = modal.querySelector(".next");
    let currentImage;

    function handleClickOutside(e) {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    }

    function handleKeyUp(e) {
        if (e.key === "Escape") return closeModal();
        if (e.key === "ArrowRight") return showNextImage();
        if (e.key === "ArrowLeft") return showPrevImage();
    }

    function showNextImage() {
        showImage(currentImage.nextElementSibling || gallery.firstElementChild);
    }

    function showPrevImage() {
        showImage(currentImage.previousElementSibling || gallery.lastElementChild);
    }

    function openModal() {
        // First check if the modal is already open
        if (modal.matches(".open")) {
            console.info("Modal already open");
            return; // Stop the function from running
        }
        modal.classList.add("open");

        // Event Listeners to be bound when we open the modal
        window.addEventListener("keyup", handleKeyUp);
        nextButton.addEventListener("click", showNextImage);
        prevButton.addEventListener("click", showPrevImage);
    }

    function closeModal() {
        modal.classList.remove("open");
        // TODO: add event listeners for clicks and keyboards

        // Event Listeners to be debound when we open the modal
        window.removeEventListener("keyup", handleKeyUp);
        nextButton.removeEventListener("click", showNextImage);
        prevButton.removeEventListener("click", showPrevImage);
    }

    function showImage(el) {
        if (!el) {
            console.info("no image to show");
            return;
        }
        // Update the modal with this info
        modal.querySelector("img").src = el.src;
        modal.querySelector("h2").textContent = el.title;
        modal.querySelector("figure p").textContent = el.dataset.description;
        currentImage = el;
        openModal();
    }

    /*
        These are our event listeners
    */
    // prettier-ignore
    images.forEach((image) => 
        image.addEventListener("click", (e) =>
            showImage(e.currentTarget)
    ));

    modal.addEventListener("click", handleClickOutside);
}

// Use it on the page

const gallery1 = Gallery(document.querySelector(".gallery1"));
const gallery2 = Gallery(document.querySelector(".gallery2"));
