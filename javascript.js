// These are the four arrays of strings
const textMessage = ["red", "blue"];

const snapchat = [
  "Find a weird memory of yourself, the weirdest memory wins!",
  "Find the worst picture in your eyes only, the worst picture of all wins",
];

const instagram = [
  "Find the weirdest DM you’ve ever gotten",
  "Find the most hated instagram influencer",
];

const tiktok = [
  "Show the funniest TikTok from your liked TikToks. Funniest TikTok wins",
  "Show the cringiest video you have liked on Tiktok. Cringiest Tiktok wins",
];
const misc = ["1", "2"];

// This is the JavaScript code that selects a random string from one of the four arrays and displays it in the element with the id "string-display"
const btn = document.getElementById("btn");
const stringDisplay = document.getElementById("string-display");

// This is the function that selects a random string from one of the arrays and displays it in the element with the id "string-display"
function displayRandomString() {
  // Select a random number between 0 and 3
  const randomIndex = Math.floor(Math.random() * 5);

  // Select a random array
  const randomArray = [textMessage, snapchat, instagram, tiktok, misc][
    randomIndex
  ];

  // Select a random string from the selected array
  const randomString = randomArray[Math.floor(Math.random() * 2)];

  // Display the random string in the element with the id "string-display"
  stringDisplay.textContent = randomString;

  // Change the body's background color depending on which array the random string came from
  if (textMessage.includes(randomString)) {
    document.getElementById("game").style.backgroundColor = "transparent";
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "#2d77e7ff";
    document.body.style.color = "#FFFFFF";
  } else if (snapchat.includes(randomString)) {
    document.getElementById("game").style.backgroundColor = "transparent";
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "#fdfe00ff";
    document.body.style.color = "#000000";
  } else if (instagram.includes(randomString)) {
    document.getElementById("game").style.backgroundColor = "transparent";
    document.body.style.backgroundImage =
      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)";
    document.body.style.color = "#FFFFFF";
  } else if (tiktok.includes(randomString)) {
    document.getElementById("game").style.backgroundColor = "transparent";
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "#d9d9d9ff";
    document.body.style.color = "#000000";
  } else if (misc.includes(randomString)) {
    document.getElementById("game").style.backgroundColor = "transparent";
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#FFFFFF";
  }
}

// Call the displayRandomString() function when the button is clicked
btn.addEventListener("click", displayRandomString);

// First, select the element with the class "settings"
const settingsDiv = document.querySelector(".settings");

// This is the onclick function that will be called when the element is clicked
function showSettings() {
  // Set the opacity of the element to 1 and the z-index to 2
  settingsDiv.setAttribute("style", "opacity: 1; z-index: 2;");
}

function hideSettings() {
  // Set the opacity of the element to 1 and the z-index to 2
  settingsDiv.setAttribute("style", "opacity: 0; z-index: 1;");
}
