const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

// Toggle the menu on hamburger click
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Close the menu on link click
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    menu.classList.remove("active");
  }
});
