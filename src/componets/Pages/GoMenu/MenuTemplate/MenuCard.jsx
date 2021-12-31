import {useState, useEffect} from 'react';
import {useStateCart} from '../../../../context/cartContext';
import styled,{css} from 'styled-components';
import { FaCheck } from "react-icons/fa";
import { IconContext } from "react-icons";


const Container = styled.article`
  display: flex;
  position: relative;
  background: rgba(122, 179, 243, 0.2);
  border-radius: 20px;
  margin: 4rem 0 0 3rem;
  padding: 2rem 2rem 4.5rem 2rem;
  justify-content: flex-end;
  left: 1.5rem;
  .iconCart{
  }
`;
const GoMenuDesCon = styled.article`
  display: flex;
  width: 50%;
  flex-direction:column;
  align-items: flex-start;
`;
const MenuTitle = styled.h3`
  font-weight: normal;
  font-size: 1.8rem;
  color: #000000;
`;
const MenuPrice = styled.h2`
  font-size: 3.2rem;
  margin: 1.5rem 0 1.5rem 0;
`;
const AddButton = styled('button')(
  (({addT})=> css`
  background: ${ addT ?"#000000":"#6B00F5"};
  border-radius: 20px;
  border:none;
  color: #FFFFFF;
  font-size: 1.6rem;
  padding: 1rem 2rem;
  position: absolute;
  top: 144px;
  font-weight: bold;
` )
);
const MenuImage = styled.img`
  position: absolute;
  width: 50%;
  top: -2rem;
  left: -3.6rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const MenuCard = ({menuTitle, price, menuImage,inCart}) => {

  const [add,setAdd] = useState();
  const {setData, data, addNw,setAddNw} = useStateCart();
  const [dataIn, setDataIn] = useState({}); 

  console.log(addNw)
  
  const handleSubmit = () => {
   // console.log('click uno',menuTitle, price,menuImage); 
    
    setDataIn({menuTitle, price, menuImage, qty : 1 , inCart: true});    
    setAdd(true);
  } 
  console.log(inCart)
  useEffect(()=>{
    
    const selectedMenu = data.find(item => item.menuTitle === dataIn.menuTitle);
    if(selectedMenu){
      const newArr = data.map(i => {
        if(i.menuTitle === dataIn.menuTitle){
          i.qty++
        }
        return i
      })
      setData([...newArr]);
    }else{
      setAddNw(false);
      setData([...data,dataIn]);
    }   
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[dataIn])
  return (
    <Container>
      <MenuImage src = {menuImage}/>
      <GoMenuDesCon>
        <MenuTitle>{menuTitle}</MenuTitle>
        <MenuPrice>$ {price}</MenuPrice>
        <AddButton type = "button" onClick={handleSubmit} addT = {add}>
          {
            add
            ?<IconContext.Provider value = {{className : "iconCart"}}>
              <FaCheck/>  In Cart                       
              </IconContext.Provider>
            :"Add to Cart"            
          }          
          </AddButton>
      </GoMenuDesCon>      
    </Container>
  )
}

export default MenuCard
