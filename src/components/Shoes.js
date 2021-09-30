import React from 'react';

function Shoes({data}) {
  return (
    <li className="col-md-4">
      <img src={data.src} width="100%" alt="shoes"/>
      <h4>{data.title}</h4>
      <p>{data.content}</p>
      <p>{data.price}</p>
    </li>
  )
}


export default Shoes;