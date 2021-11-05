import styled from "styled-components";

const Logo = styled.img`
  // height: 4vh;
  // width: auto;
  height: 6vh;
  position: absolute;
  margin-top: 3vh;
  margin-left: 5vw;
  z-index: 6;
`;

const LogoGDSC = () => {
    return (
<Logo className="logo" src="../images/Logo.svg" />
    );
}

export default LogoGDSC;