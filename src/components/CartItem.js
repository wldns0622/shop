import React from 'react';
import { useDispatch } from 'react-redux';
import {Button} from 'react-bootstrap';

const CartItem = ({item, idx}) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{idx+1}</td>
      <td>{item.name}</td>
      <td>{item.quan}</td>
      <td>
        <Button onClick={() => { dispatch({ type: '증가', data: idx })}} variant="primary">+</Button>
        &nbsp;
        <Button onClick={() => { dispatch({ type: '감소', data: idx })}} variant="primary">-</Button>
      </td>
    </tr>
  )
}

export default CartItem;