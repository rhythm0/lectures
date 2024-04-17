window.app = { 
  numberOfLikes: 0,
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".like").forEach( (link) => { link.addEventListener("click", (event) => {
    console.log("Clicked on a heart.")
    const link = event.currentTarget;
    const counterElement = link.querySelector("span")
    // let counterValue = parseInt(counterElement.textContent)
    // counterValue += 1
    window.app.numberOfLikes += 1
    counterElement.textContent = window.app.numberOfLikes
    })  
  })
})

