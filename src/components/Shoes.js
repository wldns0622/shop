import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import {stockContext} from '../page/App';

React.createContext();

function Shoes({data}) {
  let stock = useContext(stockContext);
  let history = useHistory();
  return (
    <li className="col-md-4" onClick={() => { history.push(`/detail/${data.id}`) }}>
      <img src={`https://codingapple1.github.io/shop/shoes${parseInt(data.id) + 1}.jpg`} width="100%" alt="shoes"/>
      <h4>{data.title}</h4>
      <p>{data.content}</p>
      <p>{data.price}</p>
      {stock}
    </li>
  )
}


export default Shoes;