let sunnyScore = 950
let displayScore = 0

let slider = document.querySelector("#slider")
let scoreDisplay = document.querySelector(".scoreDisplay")


// /// Change the slider image thru ranges
// if (displayScore <= 250) {
//   let change = document.createElement("style");
//   document.head.appendChild(s);
//   let change.textContent = "body{ background: navy}"
//   } else if (displayScore > 250 && displayScore <= 500) {
//     let change.textContent = "body{ background: blue}"
//   } else if (displayScore > 750) {
//     let change.textContent = "body{ background: white}"
//   }
// /// Change the slider image thru ranges

// /// Change the slider image thru ranges
// if (displayScore <= 250) {
//   let change = document.createElement("style");
//   document.head.appendChild(s);
//   let change.textContent = "#slider::-webkit-slider-thumb{ background: yellow}"
//   } else if (displayScore > 250 && displayScore <= 500) {
//     let change.textContent = "#slider::-webkit-slider-thumb{ background: orange}"
//   } else if (displayScore > 750) {
//     let change.textContent = "#slider::-webkit-slider-thumb{ background: red}"
//   }
// /// Change the slider image thru ranges

/// Count up function
const count = setInterval(function(){
    displayScore = displayScore + 10;
    slider.value = displayScore;
    scoreDisplay.innerHTML = `${displayScore}`;
  if (displayScore >= sunnyScore) {
    clearInterval(count)
  }
}, 14);
/// Count up function
