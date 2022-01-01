import "../css/App.css";
import GoMenu from "./Pages/GoMenu/GoMenu";
import YourCart from "./Pages/YourCart/YourCart";
import styled from "styled-components";
import bRight from "../assets/bg__top-right.svg";
import tRight from "../assets/bg__btm-right.svg";
import bleft from "../assets/bg__left.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  pasition: relative;
  @media screen and (min-width: 768px) {
    background: #eff0f6;
    flex-direction: row;
    justify-content: center;
    gap: 5rem;
  }
  @media screen and (min-width: 1024px) {
    background: #eff0f6;
  }
`;
const Img1 = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    position: absolute;
    width: 13%;
    right: 3px;
  }
  @media screen and (min-width: 1024px) {
    display: inline;
  }
`;
const Img2 = styled(Img1)`
  top: 515px;
  right: 2px;
  width: 10%;
`;
const Img3 = styled(Img1)`
  top: 194px;
  left: -57px;
  width: 12%;
`;

const App = () => {
  return (
    <Container>
      <Img1 src={bRight} alt="" />
      <Img2 src={tRight} alt="" />
      <Img3 src={bleft} alt="" />
      <GoMenu />
      <YourCart />
    </Container>
  );
};

export default App;
