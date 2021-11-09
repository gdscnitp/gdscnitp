import styled from "styled-components";

const Logo = styled.img`
  // height: 4vh;
  // width: auto;
<<<<<<< HEAD
  height: 4vh;
=======
  height: 5vh;
>>>>>>> e46c83bd662a3c07e4c2e588006ce12b1b7001f8
  position: absolute;
  margin-top: 3vh;
  margin-left: 7vw;
  z-index: 6;
  
`;

const LogoGDSC = () => {
    return (
<Logo className="logo" src="../images/Logo.svg" />
    );
}

export default LogoGDSC;