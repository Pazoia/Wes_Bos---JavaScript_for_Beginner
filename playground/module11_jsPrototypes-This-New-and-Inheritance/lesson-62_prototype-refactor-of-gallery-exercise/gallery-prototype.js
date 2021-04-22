/* eslint-disable no-use-before-define */
/* eslint-disable no-useless-return */
function Gallery(gallery) {
    if (!gallery) {
        throw new Error("NO GALLERY FOUND!");
    }

    this.gallery = gallery;

    // Select the elements we need
    this.images = Array.from(gallery.querySelectorAll("img"));
    this.modal = document.querySelector(".modal");
    this.prevButton = this.modal.querySelector(".prev");
    this.nextButton = this.modal.querySelector(".next");

    // Bind our methods to the instance when we need them
    this.showNextImage = this.showNextImage.bind(this);
    this.showPrevImage = this.showPrevImage.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    /*
        These are our event listeners
    */
    // prettier-ignore
    this.images.forEach((image) => 
        image.addEventListener("click", (e) =>
            this.showImage(e.currentTarget)
    ));

    // Loop over each image, open modal with Enter key
    this.images.forEach((image) => {
        // attach an event listener to each image
        image.addEventListener("keyup", (e) => {
            if (e.key === "Enter") {
                this.showImage(e.currentTarget);
            }
        });
    });

    this.modal.addEventListener("click", this.handleClickOutside);
}

Gallery.prototype.handleClickOutside = function (e) {
    if (e.target === e.currentTarget) {
        this.closeModal();
    }
};

Gallery.prototype.handleKeyUp = function (e) {
    if (e.key === "Escape") return this.closeModal();
    if (e.key === "ArrowRight") return this.showNextImage();
    if (e.key === "ArrowLeft") return this.showPrevImage();
};

Gallery.prototype.showNextImage = function () {
    this.showImage(this.currentImage.nextElementSibling || this.gallery.firstElementChild);
};

Gallery.prototype.showPrevImage = function () {
    this.showImage(this.currentImage.previousElementSibling || this.gallery.lastElementChild);
};

Gallery.prototype.openModal = function () {
    // First check if the modal is already open
    if (this.modal.matches(".open")) {
        console.info("Modal already open");
        return; // Stop the function from running
    }
    this.modal.classList.add("open");

    // Event Listeners to be bound when we open the modal
    window.addEventListener("keyup", this.handleKeyUp);
    this.nextButton.addEventListener("click", this.showNextImage);
    this.prevButton.addEventListener("click", this.showPrevImage);
};

Gallery.prototype.closeModal = function () {
    this.modal.classList.remove("open");
    // TODO: add event listeners for clicks and keyboards

    // Event Listeners to be debound when we open the modal
    window.removeEventListener("keyup", this.handleKeyUp);
    this.nextButton.removeEventListener("click", this.showNextImage);
    this.prevButton.removeEventListener("click", this.showPrevImage);
};

Gallery.prototype.showImage = function (el) {
    if (!el) {
        console.info("no image to show");
        return;
    }
    // Update the modal with this info
    this.modal.querySelector("img").src = el.src;
    this.modal.querySelector("h2").textContent = el.title;
    this.modal.querySelector("figure p").textContent = el.dataset.description;
    this.currentImage = el;
    this.openModal();
};

// Use it on the page

const gallery1 = new Gallery(document.querySelector(".gallery1"));
const gallery2 = new Gallery(document.querySelector(".gallery2"));

console.log(gallery1, gallery2);
