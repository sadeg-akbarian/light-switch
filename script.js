const button1 = document.querySelector("button");
button1.addEventListener("click", function () {
  console.log("Super");
  button1.classList.toggle("buttonLightSwitch");
  document.querySelector("body").classList.toggle("bodyLightSwitch");
  if (document.querySelector("title").innerText !== "Good Night") {
    document.querySelector("title").innerText = "Good Night";
  } else {
    document.querySelector("title").innerText = "Good Morning";
  }
});
