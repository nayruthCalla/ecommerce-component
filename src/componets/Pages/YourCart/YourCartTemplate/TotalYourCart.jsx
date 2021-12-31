import {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useStateCart} from '../../../../context/cartContext';
import {rounded} from '../../../../utilities/utils'

const Container = styled.article`
  display: flex;
  width:100%;
  flex-direction: column;
  align-items: end;
`;
const TotalCont = styled.div`
  width: 70%;
  display: flex;
  margin: 2rem 2rem 0 0;
  justify-content: space-between;
`;
const TotalText = styled.h3`
  font-weight: bold;
  font-size: 32px;
  color: #000000;
  /* margin: 0 0 0 5rem; */
`;
const TotalTextF = styled(TotalText)`
  color: #6B00F5;
`;
const TotalDesc = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 32px;
  color: #000000;  
`;

const Line = styled.div`
  border: 3px solid #D7D7F9;
  height: 0;
  width:100%;
  margin-bottom: 50px;
  `;

const TotalYourCart = () => {
  const {data} = useStateCart();
  
  console.log(data)
  const [total , setTotal] = useState({
    subTotalPrices:0,
    tax:0,
    totalPrice:0
  });

  useEffect(()=>{

    const prices = data.map(i => i.qty*i.price);
    prices.shift();
    const subTotalPrices = prices.reduce((a,b) => a + b,0)
    const tax = subTotalPrices * 0.0975;
    const totalPrice = subTotalPrices + tax;
    setTotal({
      subTotalPrices,
      tax,
      totalPrice
    })

  },[data])
  return (
    <Container>
      <Line/>
      <TotalCont>
        <TotalDesc>Subtotal: </TotalDesc>
        <TotalText>${rounded(total.subTotalPrices)}</TotalText>
      </TotalCont>
      <TotalCont>
        <TotalDesc>Tax: </TotalDesc>
        <TotalText>${rounded(total.tax)}</TotalText>
      </TotalCont>
      <TotalCont>
        <TotalDesc>Total: </TotalDesc>
        <TotalTextF>${rounded(total.totalPrice)}</TotalTextF>
      </TotalCont>
    </Container>
  )
}

export default TotalYourCart
