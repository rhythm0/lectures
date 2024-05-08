import { useState } from 'react';

export default function Items(props) {
  const [inputValue, setInputValue] = useState("")

  function onAddItem(event) {
    console.log("AddItemForm onAddItem")
    event.preventDefault()
    props.onAddItem(inputValue)
    setInputValue("")
  }
  return (
    <div>
      <h2>Add Item</h2>
      <form onSubmit={onAddItem}>
        <input value={inputValue} autoFocus type="text" onChange={(e) => setInputValue(e.target.value)} placholder="Apples, Bananas, etc..." />
      </form>
    </div>
  )

}
