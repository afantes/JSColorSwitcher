const colors = document.querySelectorAll(".color");

colors.forEach((color) => {

    color.addEventListener("click", () => {

        // Get the selected color
        const selectedColor = color.getAttribute("data-color");

        // Change the background color
        document.body.style.backgroundColor = selectedColor;

        // Store the color in local storage
        localStorage.setItem("selectedColor", selectedColor);
    });
});

// Get the saved color from local storage
const savedColor = localStorage.getItem("selectedColor");

// If a color has been saved, set it as the background color
if (savedColor) {
    document.body.style.backgroundColor = savedColor;
}