import styled from "styled-components";

const Logo = styled.img`
  // height: 4vh;
  // width: auto;
  height: 5vh;
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