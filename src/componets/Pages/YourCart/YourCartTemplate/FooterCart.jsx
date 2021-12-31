import {useState,useEffect} from 'react';
import styled from 'styled-components';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {rounded} from '../../../../utilities/utils';
import {useStateCart} from '../../../../context/cartContext';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 0 0 0;
`;
const CounterBtn = styled.button`
  background: #6B00F5;
  border: none;
  color: #FFFFFF;
  font-size: 2.5rem;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem;
`;
const CounterText = styled.h3`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  margin: 0 1.5rem 0 1.5rem;
`;
const TotalPrice = styled.h2`
  font-weight: bold;
  font-size: 32px;
  line-height: 32px;
  text-align: right;
  color: #000000;
  margin: 0 0 0 3rem;
`;
const MySwal = withReactContent(Swal);
const swalWithBootstrapButtons = MySwal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger',    
  },
  confirmButtonColor: '#93C54B',
  cancelButtonColor: '#D9534F',
});
const FooterCart = ({qty,price,setTotal,total,description}) => {

  const [subTotal,setSubTotal] = useState(0);
  const {data, setData, setAddNw} = useStateCart()
  const totalPr = rounded(price*qty);
  const arr = [total];
  arr.push(subTotal);
  // console.log(qty,description)
  useEffect(()=>{ 

    setSubTotal(totalPr);
    setTotal(totalPr);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[totalPr]);  

  const removeProd = () => {    
    //console.log('restar')
    const newArr = data.map(i => {
      if(i.menuTitle === description){
        i.qty--;        
      }        
      return i
    })
    setData(newArr)
    console.log(newArr)
  }
  const addProd = () => {
    console.log('sumar')
    const newArr = data.map(i => {
      if(i.menuTitle === description){
        i.qty++
      }
      return i
    })
    setData(newArr)
    console.log(newArr)
  }
  const deletedCart = (description) => {
    const datFilter = data.filter(i=>(
      i.menuTitle !== description
    ));  
    return datFilter
  }
  if(qty === 0){
    swalWithBootstrapButtons.fire({
      title: 'Do you want to remove the menu from your cart?',
      text: 'If you delete, you will be able to add the menu again :)',
      icon: 'question',            
      showCancelButton: true,
      confirmButtonText: 'Yes, delete',
      cancelButtonText: 'No, cancel',            
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        const newArr = deletedCart(description);
        console.log(newArr);
        setData(newArr);
        setAddNw(true);
  
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
        console.log('cancel')
      }
    })
  }
  return (
    <FooterContainer>
      <CounterBtn type = "button" onClick = {removeProd} disabled={qty===0}>
        <FaAngleLeft/>
      </CounterBtn>
      <CounterText>{qty}</CounterText>
      <CounterBtn type = "button" onClick = {addProd}>
        <FaAngleRight/>
      </CounterBtn>
      <TotalPrice>
        ${totalPr}
      </TotalPrice>        
  </FooterContainer>
  )
}

export default FooterCart
