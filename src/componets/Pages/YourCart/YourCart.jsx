import {useState, useEffect} from 'react';
import styled from 'styled-components';
import YourCartTemp from './YourCartTemplate/YourCartTemp';
import TotalYourCart from './YourCartTemplate/TotalYourCart';
import {useStateCart} from '../../../context/cartContext';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 7rem 0 0 0;
  background: #FFFFFF;
  box-shadow: 0px 0px 70px #C7CBE3;  
  @media screen and (min-width: 768px) {
    width: 45%;
    height: 484px;
    margin: 7rem 0 7rem 0;
    border-radius: 25px;
    overflow-y: scroll;
  overflow-x: hidden;
::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar
{
	width: 12px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color:  rgba(122, 178, 243, 0.898);
}
  
  }
  @media screen and (min-width: 1024px) {
    height: 484px;
    margin-top: 70px;
    width: 415px;
  }
`;
const TitleYourCart = styled.h2`
  font-weight: bold;
  font-size: 32px;
  line-height: 48px;
  color: #000000;
`;
const P = styled.p`
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  color: #cc4141;
  margin: 2rem 0 2rem 0;
  text-align: center;
`;
const YourCart = () => {
  const {data} = useStateCart(); 
  const [total, setTotal] = useState();

  useEffect(()=>{
    if(data.length >0) {
     // console.log(data)
    }  
  },[data]);
console.log(data)
 
  return (
    <Container>
      <TitleYourCart>Your Cart</TitleYourCart>
      {
        data.length >1
        ?(
          data.map(({
            menuImage,
            menuTitle,
            price,
            qty
          },index)=>
          index ===0
          ? null            
            :<YourCartTemp 
                  key = {index} 
                  cartImg={menuImage} 
                  description={menuTitle} 
                  price={price} 
                  qty={qty}
                  setTotal = {setTotal}
                  total = {total}
                  />))
          : <P>Your cart is empty.</P>
        }  
      <TotalYourCart/>   
    </Container>
  )
}

export default YourCart
