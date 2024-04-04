// This is a helpful function to generate a random number from 1 to 6
const pickRandomNumber = function() {
  return Math.floor(Math.random() * 6) + 1;
}

// Your code goes here...
function onDocumentLoaded() {
  console.log("Document loaded") // debug
  const link = document.querySelector("main a")//找到主要的a 不然就是index html
  console.log(link) // debug
  link.addEventListener("click",rollTheDice)
}
function rollTheDice(event) {
  console.log("Rolling the dice") // debug
  event.preventDefault();
  let n1 = pickRandomNumber()
  let n2 = pickRandomNumber()
  let images = document.querySelectorAll("#dice img")
  images[0].src = "images/" + n1 + ".png"
  images[1].src = "images/" + n2 + ".png"
}
document.addEventListener("DOMContentLoaded", onDocumentLoaded)


