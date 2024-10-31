// Get modal and buttons
const modal = document.getElementById("loginModal");
const openModalBtn = document.querySelector(".open-modal-btn");
const closeModalBtn = document.querySelector(".close-btn");

// Open modal when button is clicked
openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Close modal when 'x' is clicked
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside of it
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
