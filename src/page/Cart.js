import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import CartItem from '../components/CartItem';

const Cart = ({state}) => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
      </thead>
      <tbody>
        {state?.map((item, idx) => <CartItem key={idx+item.title} item={item}/>)}
      </tbody>
    </Table>
  )
}

function stateToProps(state) {
  return { state }
}

export default connect(stateToProps)(Cart)

// export default Cart;