const text = document.getElementById("text");
const showBtn = document.getElementById("showBtn");
const hideBtn = document.getElementById("hideBtn");
const colorBtn = document.getElementById("colorBtn");
const messageInput = document.getElementById("messageInput");
const setMessageBtn = document.getElementById("setMessageBtn");
const colorPicker = document.getElementById("colorPicker");
const applyColorBtn = document.getElementById("applyColorBtn");

// fade in / out text
function showText() {
    text.classList.remove("hidden");
    text.classList.add("visible");
}

function hideText() {
    text.classList.remove("visible");
    text.classList.add("hidden");
}

showBtn.addEventListener("click", showText);
hideBtn.addEventListener("click", hideText);

// random background color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // 0–255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function setRandomBackground() {
    document.body.style.backgroundColor = getRandomColor();
}

colorBtn.addEventListener("click", setRandomBackground);

// set custom message
function setMessage() {
    const value = messageInput.value.trim();

    if (value !== "") {
        text.textContent = value;
        showText();
    }
}

setMessageBtn.addEventListener("click", setMessage);

// apply picked color
function applyPickedColor() {
    const chosenColor = colorPicker.value; // e.g. "#ff0000"
    document.body.style.backgroundColor = chosenColor;
}

applyColorBtn.addEventListener("click", applyPickedColor);

// =======================
// Keyboard Shortcuts 😎
// =======================

document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();

    if (key === "s") {
        // S = show text
        showText();
    } else if (key === "h") {
        // H = hide text
        hideText();
    } else if (key === "c") {
        // C = random color
        setRandomBackground();
    } else if (key === "p") {
        // P = apply picked color
        applyPickedColor();
    } else if (key === "enter") {
        // Enter = set message
        setMessage();
    }
});
