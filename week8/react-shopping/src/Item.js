import { useState } from 'react'

export default function Item(props) {
  const [item_qty, setQty] = useState(props.qty)

  function increaseQty(event) {
    event.preventDefault()
    setQty(item_qty + 1)
    props.onItemChanged({ name: props.name, qty: item_qty, price: props.price });
  }

  function reduceQty(event) {
    event.preventDefault()
    if (item_qty > 1) {
      setQty(item_qty - 1)
      props.onItemChanged({name: props.name, qty: item_qty, price: props.price }); 
    }
  }
    
  const amount = props.price * item_qty
  
  return (
    <div className="flex space-between items">
      <div className="flex item_desc width-full">
        <div className="flex center-vertically qty_buttons">
          <button className="red" onClick={reduceQty}>-</button>
          <p>{item_qty}</p>
          <button className="green" onClick={increaseQty}>+</button>
        </div>
        {props.name}
      </div>

      <p className="item_amount">${amount.toFixed(2)}</p>
    </div>
  )
}