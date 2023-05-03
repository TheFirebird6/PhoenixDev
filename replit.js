console.warn("Other JS File Connected.")

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  if (hamburger.innerText == "☰") {
    hamburger.innerText = "✕";
  }

  else if (hamburger.innerText == "✕") {
    hamburger.innerText = "☰";
  }
}

navAlert = document.getElementById('nav-alert');
navAlertDelete = document.getElementById('nav-alert-delete');

try {
  navAlertDelete.addEventListener("click", deleteNavAlert);
} catch (e) {
  console.log();
}

function deleteNavAlert() {
  navAlert.remove();
}