console.warn("JS File Connected.");

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

let a = getCookie("timesClicked");
let b = setCookie("timesClicked", a, 365);
console.log(a);

function redirectPage(page) {
  location.assign(page);
}

function getCurrentDate() {
  let date;
  let dateTime;

  date = new Date;
  dateTime = date.toISOString().split("T")[0];

  document.querySelector("#DATE").textContent = dateTime;
  document.getElementById("change").innerHTML = "Times Clicked: " + a + ".0";
}

function change() {
  a++;
  b = setCookie("timesClicked", a, 365);

  document.getElementById("change").innerHTML = "Times Clicked: " + a + ".0";
  console.log("Button Clicked")

  return a;
};