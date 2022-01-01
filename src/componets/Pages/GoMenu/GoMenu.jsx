import {useState, useEffect} from 'react';
import styled from 'styled-components';
// import {useStateCart} from '../../../context/cartContext';
import MenuCard from './MenuTemplate/MenuCard';
import menu1 from '../../../assets/plate__french-fries.png';
import menu2 from '../../../assets/plate__salmon-vegetables.png';
import menu3 from '../../../assets/plate__spaghetti-meat-sauce.png';
import menu4 from '../../../assets/plate__ravioli.png';
import menu5 from '../../../assets/plate__tortellini.png';
import menu6 from '../../../assets/plate__fish-sticks-fries.png';
import menu7 from '../../../assets/plate__chicken-salad.png';
import menu8 from '../../../assets/plate__bacon-eggs.png';

//fake data

const data = [
  {
    menuImage: menu1,
    menuTitle: "French Fries with Ketchup",
    price: "2.23",
    inCart : false
  },
  {
    menuImage: menu2,
    menuTitle: "Salmon and Vegetables",
    price: "5.12",
    inCart : false
  },
  {
    menuImage: menu3,
    menuTitle: "Spaghetti with Sauce",
    price: "7.82",
    inCart : false
  },
  {
    menuImage: menu4,
    menuTitle: "Ravioli",
    price: "4.23"
  },
  {
    menuImage: menu5,
    menuTitle: "Tortellini with Ketchup",
    price: "2.23"
  },
  {
    menuImage: menu6,
    menuTitle: "Fish sticks fries",
    price: "5.12"
  },
  {
    menuImage: menu7,
    menuTitle: "chicken with salad",
    price: "7.82"
  },
  {
    menuImage: menu8,
    menuTitle: "Bacon eggs with Ketchup",
    price: "4.23"
  }
]


const GoMenuTitle = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 48px;
  margin: 2rem;
`;
const Container = styled.div`
  background: #FFFFFF;
 @media screen and (min-width: 768px) {
    width: 45%; 
    height: 484px;  
    margin: 7rem 0 7rem 0;
    box-shadow: 0px 0px 70px #C7CBE3;
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
    width: 415px;
    margin: 7rem 0 7rem 0;
  }
`;

const GoMenu = () => {

  const [listData, setListData] = useState([]);
  

  useEffect(()=>{

    setListData(data);
    
  },[]);

  return (
    <Container> 
      <GoMenuTitle>To Go Menu</GoMenuTitle>
      {
        listData.map((
          {
            menuImage,
            menuTitle,
            price,
            inCart                    
          }, index
        )=><MenuCard
        key={index}
        menuTitle = {menuTitle}
        price = {price}
        menuImage = {menuImage}
        inCart = {inCart}
        />        
        )
      }      
    </Container>
  )
}

export default GoMenu
