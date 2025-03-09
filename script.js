const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const colorDisplay = document.getElementById("color-display");

// Define color names for better display
const colorNames = {
  grey: "Grey",
  purple: "Purple",
  blue: "Blue",
  yellow: "Yellow",
  teal: "Teal",
  coral: "Coral",
};

// Color hex values for better contrast with text
const textColors = {
  grey: "#ffffff",
  purple: "#ffffff",
  blue: "#ffffff",
  yellow: "#333333",
  teal: "#ffffff",
  coral: "#333333",
};

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const colorId = e.target.id;

    // Apply background color to body
    body.style.backgroundColor = colorId;

    // Update the color display text
    colorDisplay.textContent = colorNames[colorId] || colorId;
    colorDisplay.style.color = colorId;

    // Add active state to selected button
    buttons.forEach((btn) => {
      btn.style.border = "none";
    });
    e.target.style.border = "3px solid #333";

    // Adjust text color based on background for better contrast
    if (colorId === "yellow" || colorId === "coral") {
      document
        .querySelectorAll(".instruction-panel p, .instruction-panel h2")
        .forEach((element) => {
          element.style.color = "#333";
        });
    } else {
      document
        .querySelectorAll(".instruction-panel p, .instruction-panel h2")
        .forEach((element) => {
          element.style.color = "";
        });
    }

    // Add a small animation effect
    document.querySelector(".canvas").style.transform = "scale(0.98)";
    setTimeout(() => {
      document.querySelector(".canvas").style.transform = "scale(1)";
    }, 200);
  });
});

// Initialize with a subtle animation
document.querySelector(".canvas").style.opacity = "0";
document.querySelector(".canvas").style.transform = "translateY(20px)";

window.addEventListener("load", function () {
  setTimeout(() => {
    document.querySelector(".canvas").style.transition =
      "opacity 0.8s ease, transform 0.8s ease";
    document.querySelector(".canvas").style.opacity = "1";
    document.querySelector(".canvas").style.transform = "translateY(0)";
  }, 200);
});
