// Selecting elements
const dateTime = document.querySelector(".dateTime");
const colorTheme = document.querySelector(".color");
const monoTheme = document.querySelector(".mono");
const mainContent = document.querySelector(".main-content");
const span = document.querySelector(".span-it");
const frameImages = document.querySelectorAll(".frame-img");
const aboutImage = document.querySelector(".about-img");
const video = document.querySelector("video");
const quoteIcon = document.querySelector("quote-icon");
const quoteImages = document.querySelectorAll(".quote-images");

// Function to display day and time
function setDate() {
  const date = new Date();

  let day = date.getDay();
  switch (day) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 7:
      day = "Sunday";
      break;
    default:
      break;
  }

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let meridian = hours >= 12 && hours < 24 ? "PM" : "AM";

  //
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Alternatively
  // hours = hours.toString().padStart(2, '0')
  // ...

  dateTime.innerHTML = `${day}, ${hours}:${minutes}:${seconds} ${meridian}`;
}

// update time every 1 second
setInterval(setDate, 1000);

// initial call to display the date and time
setDate();

// Theme switcher
function colorThemeStyles() {
  colorTheme.classList.add("theme-active");
  monoTheme.classList.remove("theme-active");
  mainContent.style.backgroundColor = "#ffdec4";
  span.style.color = "#FF8000";
  frameImages.forEach((img) => (img.style.filter = "grayscale(0)"));
  aboutImage.style.filter = "grayscale(0)";
}

function monoThemeStyles() {
  monoTheme.classList.add("theme-active");
  colorTheme.classList.remove("theme-active");
  mainContent.style.backgroundColor = "#f9f9f9";
  span.style.color = "#707070";
  frameImages.forEach((img) => (img.style.filter = "grayscale(1)"));
  quoteImages.forEach((img) => (img.style.filter = "grayscale(1)"));
  aboutImage.style.filter = "grayscale(1)";
  video.style.filter = "grayscale(1)";
  quoteIcon.style.filter = "grayscale(1)";
}

function changeTheme(event) {
  if (event.target === colorTheme) {
    localStorage.setItem("theme", "color");
    colorThemeStyles();
  } else if (event.target === monoTheme) {
    localStorage.setItem("theme", "mono");
    monoThemeStyles();
  } else {
    localStorage.setItem("theme", "mono");
  }
}

function getSavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  savedTheme === "mono" ? monoThemeStyles() : colorThemeStyles();
}

colorTheme.addEventListener("click", changeTheme);
monoTheme.addEventListener("click", changeTheme);

window.addEventListener("load", getSavedTheme);
