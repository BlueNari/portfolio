document.getElementById("start-button").addEventListener("click", function () {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("portfolio").style.display = "flex";
});


function openPopup(windowId) {
    document.querySelectorAll(".popup-window").forEach((popup) => {
        popup.style.display = "none";
    });
    document.getElementById(windowId).style.display = "block";
}

const startButton = document.getElementById("start-button");
const welcomeSection = document.getElementById("welcome");
const portfolioSection = document.getElementById("portfolio");
const musicControls = document.getElementById("music-controls");
const musicToggle = document.getElementById("music-toggle");
const backgroundMusic = document.getElementById("background-music");

// Handle Start Button click
startButton.addEventListener("click", () => {
  // Hide the welcome screen
  welcomeSection.style.display = "none";

  // Show the portfolio section and music controls
  portfolioSection.style.display = "flex";
  musicControls.style.display = "block";
});

// Handle Play/Pause toggle
musicToggle.addEventListener("click", () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    musicToggle.textContent = "Pause Music";
  } else {
    backgroundMusic.pause();
    musicToggle.textContent = "Play Music";
  }
});

// Popup window logic (example setup)
function openPopup(windowId) {
  document.querySelectorAll(".popup-window").forEach((popup) => {
    popup.style.display = "none";
  });
  const popup = document.getElementById(windowId);
  if (popup) {
    popup.style.display = "block";
  }
}

document.getElementById("start-button").addEventListener("click", function () {
    
    document.getElementById("welcome").style.display = "none";

    
    document.getElementById("portfolio").style.display = "flex";

    
    const contactSection = document.getElementById("contact-section");
    contactSection.style.left = "20%"; 
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); 
    alert("Thank you for your message! I'll get back to you soon!");
});

function sendEmail() {
  window.location.href = "mailto:bluenari21@gmail.com";
}