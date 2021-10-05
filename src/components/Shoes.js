import React, { useContext } from 'react';
import {stockContext} from '../page/App';

React.createContext();

function Shoes({data}) {

  let stock = useContext(stockContext);
  
  return (
    <li className="col-md-4">
      <img src={`https://codingapple1.github.io/shop/shoes${data.id + 1}.jpg`} width="100%" alt="shoes"/>
      <h4>{data.title}</h4>
      <p>{data.content}</p>
      <p>{data.price}</p>
      {stock}
    </li>
  )
}


export default Shoes;