// These are the arrays of strings
const textMessage = [
  "What was your last text and who was it from? Most interesting text wins.",
  "Call your parents and tell them you are in a random country, the funniest response wins!",
  "Call your crush and confess your feelings for them! Best response wins.",
];

const snapchat = [
  "Find a weird memory of yourself, the weirdest memory wins!",
  "Find the worst picture in your eyes only, the worst picture of all wins",
];

const instagram = [
  "Find the weirdest DM you’ve ever gotten",
  "Find the most hated instagram influencer",
  "Find the most controversial post",
];

const tiktok = [
  "Show the funniest TikTok from your liked TikToks. Funniest TikTok wins",
  "Show the cringiest video you have liked on Tiktok. Cringiest Tiktok wins",
];
const misc = [
  "Find the weirdest thing you have purchased from Amazon, weirdest item wins!",
  "Find the funniest photo of yourself in the past month, the funniest photo wins!",
  "Quick! Play the first song that pops up on your phone, the weirdest song wins!",
  "What is the weirdest app on your phone,the weirdest app wins!",
  "Show the last website you visited, most interesting website wins",
  "show me the last selfie you took, funniest selfie wins",
  "Show me the most-used emoji in your phone, most interesting emoji wins",
  "What is your favorite song, best song wins",
];

// This is the JavaScript code that selects a random string from one of the four arrays and displays it in the element with the id "string-display"
//const btn = document.getElementById("btn");
const stringDisplay = document.getElementById("string-display");

// This is the function that selects a random string from one of the arrays and displays it in the element with the id "string-display"
function displayRandomString() {
  // Select a random number between 0 and 4
  const randomIndex = Math.floor(Math.random() * 5);

  // Select a random array
  const randomArray = [textMessage, snapchat, instagram, tiktok, misc][
    randomIndex
  ];

  // Select a random string from the selected array
  const randomString =
    randomArray[Math.floor(Math.random() * randomArray.length)];
  //var randomIndex = Math.floor(Math.random() * textArray.length);

  // Display the random string in the element with the id "string-display"
  stringDisplay.innerHTML = randomString;

  //icons
  const icon = document.getElementById("icon");

  const textMessageIcon = "<i class='bi bi-chat-dots'></i>";
  const snapchatIcon = "<i class='bi bi-snapchat'></i>";
  const instagramIcon = "<i class='bi bi-instagram'></i>";
  const tiktokIcon = "<i class='bi bi-tiktok'></i>";
  const miscIcon = "<i class='bi bi-phone'></i>";

  // Change the body's background color depending on which array the random string came from
  if (textMessage.includes(randomString)) {
    document.getElementById("game").style.backgroundColor = "transparent";
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "#2d77e7ff";
    document.body.style.color = "#FFFFFF";
    icon.innerHTML = textMessageIcon;
  } else if (snapchat.includes(randomString)) {
    document.getElementById("game").style.backgroundColor = "transparent";
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "#fdfe00ff";
    document.body.style.color = "#000000";
    icon.innerHTML = snapchatIcon;
  } else if (instagram.includes(randomString)) {
    document.getElementById("game").style.backgroundColor = "transparent";
    document.body.style.backgroundImage =
      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)";
    document.body.style.color = "#FFFFFF";
    icon.innerHTML = instagramIcon;
  } else if (tiktok.includes(randomString)) {
    document.getElementById("game").style.backgroundColor = "transparent";
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "#d9d9d9ff";
    document.body.style.color = "#000000";
    icon.innerHTML = tiktokIcon;
  } else if (misc.includes(randomString)) {
    document.getElementById("game").style.backgroundColor = "transparent";
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#FFFFFF";
    icon.innerHTML = miscIcon;
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
