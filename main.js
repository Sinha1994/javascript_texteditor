let text = document.querySelector("textarea");
let boldButton = document.querySelector("button:nth-child(1)");
boldButton.addEventListener("click", () => {
  text.style.fontWeight="bold";
});
let italicButton = document.querySelector("button:nth-child(2)");
italicButton.addEventListener("click", () => {
  text.style.fontStyle="italic";
});
let underLineButton = document.querySelector("button:nth-child(3)");
underLineButton.addEventListener("click", () => {
  text.style.textDecoration="underline";
});
let leftButton = document.querySelector("button:nth-child(4)");
leftButton.addEventListener("click", () => {
 text.style.textAlign="left";
});
let centerButton = document.querySelector("button:nth-child(5)");
centerButton.addEventListener("click", () => {
 text.style.textAlign="center";
});
let rightButton = document.querySelector("button:nth-child(6)");
rightButton.addEventListener("click", () => {
 text.style.textAlign="right";
});
let upperButton = document.querySelector("button:nth-child(7)");
upperButton.addEventListener("click", () => {
 text.style.textTransform="uppercase";
});
let lowerButton = document.querySelector("button:nth-child(8)");
lowerButton.addEventListener("click", () => {
 text.style.textTransform="lowercase";
});
let capitalButton = document.querySelector("button:nth-child(9)");
capitalButton.addEventListener("click", () => {
 text.style.textTransform="capitalize";
});
let clearButton = document.querySelector("button:nth-child(10)");
clearButton.addEventListener("click", () => {
 text.value="";
});