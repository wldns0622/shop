import React from 'react';
import { useDispatch } from 'react-redux';
import {Button} from 'react-bootstrap';

const CartItem = ({item}) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{item.id + 1}</td>
      <td>{item.name}</td>
      <td>{item.quan}</td>
      <td>
        <Button onClick={() => { dispatch({ type: '증가' }) }} variant="primary">+</Button>
        &nbsp;
        <Button onClick={() => { dispatch({ type: '감소' }) }} variant="primary">-</Button>
      </td>
    </tr>
  )
}

export default CartItem;