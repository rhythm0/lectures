
// File-level variables
// numberOfLikes = 0

// * Global variables on `window`
// window.numberOfLikes = 0

window.app = {
    numberOfLikes: 0
}



document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".like").forEach( (link) => { link.addEventListener("click", (event) => {
        console.log("Clicked on a heart.") // 点红心时给console feedback
        // increment 点赞数字

        const link = event.currentTarget; // 点数字也不会报错了
        const counterElement = link.querySelector("span")
        // 法1
        // let counterValue = parseInt(counterElement.textContent) // js默认数字是string，所以要parse
        // counterValue += 1
        // counterElement.textContent = counterValue

        // 法2
        // numberOfLikes += 1
        // counterElement.textContent = numberOfLikes

        // 法3：在console里 window.app.numberOfLikes会给数字
        window.app.numberOfLikes += 1
        counterElement.textContent = window.app.numberOfLikes
        }) 
    })
})

