import styled from "styled-components";
import Link from "next/link";
import Layout from "./Layout";


const NavMob = styled.div`
position: absolute;
  bottom: -1%;
  
  width: 100%;
  align-items: center;
  margin: auto;
  justify-content: space-evenly;
  background-image: url("/images/nav.svg");
  background-repeat: no-repeat;
  height: 5vh;
  background-size: cover;
  display: flex;
  
@media (max-width: 768px){
.hamburger{
    display:block;
    background-color: transparent;
    position:absolute;
    border:0;
    color:red;
    font-size:50px;
    z-index:10;
    right:0;
}
  .hamburger:focus{
    outline:none;
  }
}
@media (min-width:768px){
    display:none;
}
`;

const NavMobile = () => {
  return (
    <NavMob>
      <button className="hamburger" id="hamburger">
        <i className="fas fa-bars"></i>
      </button>
    </NavMob>
  );
};

export default NavMobile;
