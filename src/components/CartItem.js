import React from 'react';

const CartItem = ({item, idx}) => {
  return (
    <tr>
      <td>{item.id + 1}</td>
      <td>{item.name}</td>
      <td>{item.quan}</td>
      <td><button onClick={() => {  }}>+</button></td>
    </tr>
  )
}

export default CartItem;