import { useState } from 'react'

export default function Totals(props) {
  const tax = props.amount * 0.08
  const total = props.amount + tax
  return (
    <div id="totals">
      <h2>Totals</h2>
      <div className="flex space-between">
        <p>Subtotal:</p>
        <p>${props.amount.toFixed(2)}</p>
      </div>
      <div className="flex space-between">
        <p>Tax:</p>
        <p>${tax.toFixed(2)}</p>
      </div>
      <div className="flex space-between">
        <p>TOTAL:</p>
        <p>${total.toFixed(2)}</p>
      </div>
    </div>
  )
}
