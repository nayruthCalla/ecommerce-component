import React from 'react';
import styled from 'styled-components';
import FooterCart from './FooterCart';

const BodyCartCont = styled.section`
  display: flex;
  align-items: start;
  margin : 3rem 0;
  width: 100%;
`;
const DescCont = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 1.5rem;
  width: 80%;
`;
const CartImage = styled.img`
  width: 100%;
`;
const DescCart = styled.p`
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  color: #000000;
`;
const PriceCart = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 32px;
  color: #000000;
`;
const CartImageCont = styled.figure`
  width: 20%;
  position: relative;
`;
const QuantiTyText = styled.h2`
  position: absolute;
  top: 20px;
  right: 26px; 
  background: #000000;
  border-radius: 20px;
  color: #FFFF;
  padding: 0.5rem 0.7rem 0.5rem 0.7rem;
  @media screen and (min-width: 768px) {
    top: 15px;
    right: 18px;
  }
  @media screen and (min-width: 1024px) {
    top: 23px;
    right: 23px;
  }
`;

const BodyCart = ({cartImg, description, price,qty,setTotal,total}) => {  
  return (
    <BodyCartCont>
      <CartImageCont>
        <CartImage src ={cartImg}/>
          <QuantiTyText>{qty}</QuantiTyText>    
      </CartImageCont>      
      <DescCont>
        <DescCart>{description}</DescCart>
        <PriceCart>${price}</PriceCart>
        <FooterCart qty = {qty} price = {price} setTotal ={setTotal} total = {total} description = {description}/>
      </DescCont>      
    </BodyCartCont>
  )
}

export default BodyCart
