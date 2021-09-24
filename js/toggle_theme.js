// Select the button
const btn = document.querySelector(".toggle-theme");
// Select the theme preference from localStorage
const currentTheme = localStorage.getItem("theme");

//Event listeners
btn.addEventListener("click", changeTheme);

//Functions
function changeTheme() {
  // Toggle the .light-theme class on each click
  document.body.classList.toggle("light-theme");

  // Let's say the theme is equal to dark
  let theme = "dark";
  // If the body contains the .light-theme class...
  if (document.body.classList.contains("light-theme")) {
    // ...then let's make the theme light
    theme = "light";
  }
  // Then save the choice in localStorage
  localStorage.setItem("theme", theme);

  // change icon on each click
  if (btn.getAttribute("src") == "/images/icon-sun.svg")
    btn.setAttribute("src", "/images/icon-moon.svg");
  else btn.setAttribute("src", "/images/icon-sun.svg");
}

// If the current theme in localStorage is "light"...
if (currentTheme == "light") {
  // ...then use the .light-theme class
  document.body.classList.add("light-theme");
  // and change the icon
  btn.setAttribute("src", "/images/icon-moon.svg");
}

