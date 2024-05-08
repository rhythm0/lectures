import {useState} from 'react'
import Item from './Item'


export default function Items(props) {

  function onItemChanged(item) {
    props.onItemChanged(item)
  }
  const lineItems = props.items.map((item) => <Item key={item.name} onItemChanged={onItemChanged} name={item.name} price={item.price} qty={item.qty} />)

  return (
    <div>
      <h2>Items</h2>
      <div id="items">
        {lineItems}
      </div>
    </div>
  )
}
