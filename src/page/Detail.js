import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import '../style/Detail.scss';

let Box = styled.div`
  padding: 20px;
`

let Title = styled.h4`
  font-size: 32px;
  color: ${ props => props.color }
`

function Detail({shoes}) {
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
      <div className="my-alert2">
        <p>재고가 얼마 남지 않았습니다</p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" alt="shoes"/>
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}</p>
          <button className="btn btn-danger">주문하기</button> 
          <button className="btn btn-danger" onClick={()=> { history.goBack() }}>뒤로가기</button> 
        </div>
      </div>
    </div> 
  )
}

export default Detail;