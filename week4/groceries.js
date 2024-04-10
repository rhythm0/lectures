// When you type a grocery item into the text input and press [Enter]:
// - the new item should appear at the bottom of the list
// - the text input should be reset to a blank input field
// - the cursor should be blinking in the text input again

// 加一行为了能没有error
// groceries.js:7 Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
//     at setupListeners (groceries.js:7:33)
//     at groceries.js:10:1

document.addEventListener("DOMContentLoaded", setupListeners)


function setupListeners() {
  document.querySelector("form").addEventListener("submit", addItem)
}

// 为了没有error要去掉
// setupListeners();


function addItem(e) {
  e.preventDefault();
  console.log(e);

  let textToAdd = document.querySelector("input").value //把value设置成输入的
  let template = document.querySelector("#new-item-template")
  let newItem = template.content.cloneNode(true)
  // 第一部分
  // let newItem = document.createElement("li")
  newItem.textContent = textToAdd
  let ul = document.querySelector("#groceries") // 找到target的id
  ul.appendChild(newItem)
  
  // 清空输入窗口
  document.querySelector("input").value=""
}
