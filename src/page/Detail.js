import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Stock from '../components/Stock';
import '../style/Detail.scss';

let Box = styled.div`
  padding: 20px;
`

let Title = styled.h4`
  font-size: 32px;
  color: ${ props => props.color }
`

function Detail({shoes, stock, setStock}) {
  let [alert, setAlert] = useState(true);
  let [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // 2초후에 알림창 사라지게 하기
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [alert]);

  let history = useHistory();
  let { id } = useParams();
  let [shoe] = shoes.filter((item) => {
    return +item.id === +id;
  })

  return (
    <div className="container">
      <Box>
        <Title className="red" color="blue">Detail</Title>
      </Box>

      <input onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>

      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" alt="shoes"/>
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}원</p>

          <Stock stock={stock}/>          

          <button className="btn btn-danger" onClick={() => {
            let stockArr = [...stock];
            stockArr[0]--;
            setStock(stockArr);
          }}>주문하기</button> 
          <button className="btn btn-danger" onClick={()=> { history.goBack() }}>뒤로가기</button> 
        </div>
      </div>
      {
        alert 
        ? (<div className="my-alert">
          <p>재고가 얼마 남지 않았습니다</p>
        </div>) 
        : null
      }
    </div> 
  )
}

export default Detail;