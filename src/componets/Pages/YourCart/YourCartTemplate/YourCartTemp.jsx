import React from 'react';
import styled from 'styled-components';
import BodyCart from './BodyCart';
import DividingLine from '../../../Layouts/LineStyle/DividingLine';
// import FooterCart from './FooterCart';


const Container = styled.article`
  display: flex;
  flex-direction: column;
`;

const YourCartTemp = ({cartImg, description, price, qty, setTotal, total}) => {
  return (
    <Container>      
        <BodyCart 
        cartImg = {cartImg} 
        description = {description} 
        price = {price} 
        qty = {qty} 
        setTotal = {setTotal} 
        total = {total} 
        />
      <DividingLine />        
    </Container>
  )
}

export default YourCartTemp
