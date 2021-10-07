import React, {useState} from 'react';
import { Table, Button } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem';

const Cart = ({state}) => {

  let [isAlert, setIsAlert] = useState(true);
  const dispatch = useDispatch();
  const handleClose = () => { setIsAlert(false) }
  return (
    <>
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
        {state?.map((item, idx) => <CartItem key={idx.toString()+item.title} item={item} idx={idx}/>)}
      </tbody>
    </Table>
    { isAlert 
    ? (<div className="my-alert">
      <p>지금 구매하시면 신규할인 20%</p>
      <Button onClick={handleClose}>닫기</Button>
    </div>) 
    : null}
  </>
  )
}

function stateToProps(state) {
  return { 
    state: state.reducer,
  }
}

export default connect(stateToProps)(Cart)

// export default Cart;