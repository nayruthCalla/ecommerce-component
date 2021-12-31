import {useState, useEffect} from 'react';
import styled from 'styled-components';
// import {useStateCart} from '../../../context/cartContext';
import MenuCard from './MenuTemplate/MenuCard';
import menu1 from '../../../assets/plate__french-fries.png';
import menu2 from '../../../assets/plate__salmon-vegetables.png';
import menu3 from '../../../assets/plate__spaghetti-meat-sauce.png';
// import menu4 from '../../../assets/plate__ravioli.png';
// import menu5 from '../../../assets/plate__tortellini.png';
// import menu6 from '../../../assets/plate__fish-sticks-fries.png';
// import menu7 from '../../../assets/plate__chicken-salad.png';
// import menu8 from '../../../assets/plate__bacon-eggs.png';

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
  // {
  //   menuImage: menu4,
  //   menuTitle: "Ravioli",
  //   price: "4.23"
  // },
  // {
  //   menuImage: menu5,
  //   menuTitle: "Tortellini with Ketchup",
  //   price: "2.23"
  // },
  // {
  //   menuImage: menu6,
  //   menuTitle: "Fish sticks fries",
  //   price: "5.12"
  // },
  // {
  //   menuImage: menu7,
  //   menuTitle: "chicken with salad",
  //   price: "7.82"
  // },
  // {
  //   menuImage: menu8,
  //   menuTitle: "Bacon eggs with Ketchup",
  //   price: "$4.23"
  // }
]


const GoMenuTitle = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 48px;
  margin: 2rem;
`;

const GoMenu = () => {

  const [listData, setListData] = useState([]);
  

  useEffect(()=>{

    setListData(data);
    
  },[]);

  return (
    <div> 
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
    </div>
  )
}

export default GoMenu
