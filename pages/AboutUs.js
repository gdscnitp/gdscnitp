import styled from "styled-components";
import "../styles/Home.module.css";
import LogoGDSC from "../components/logo";
import Navbar from "../components/navbar";
import Button1 from "../components/AboutUsButton1";
import Button2 from "../components/AboutUsButton2";

const Container =styled.div`
max-width: 100%;
overflow: hidden;
`;
const Back = styled.div`
  .red-wrap {
    background-image: url("/images/AboutUsRed.svg");
    right: 0;
    position: absolute;
    width: 17vw;
    height: 30vh;
    z-index: -1;
    top: 0;
    @media (max-width: 768px) {
    //   width: 100vw;
    //   bottom: 0;
    }
  }
  .blue-black-wrap {
    right: -23vw;
    top: 0.5%;
    position: absolute;
    width: 45vw;
    // height: 100%;
    z-index: -2;
  }
  // .green-bg{
  //   position: absolute;
  //   width: 130%;
  //   top: -50%;
  //   left: -56%;
  // }
  .green-bg{
    position: absolute;
    bottom: 0;
    height: 100%;
    width: 90%;
    left: 0;
    z-index: -2;
  }
 `; 

function AboutUs() {
    return (
        <Container>
            <LogoGDSC />
            <Back>
              <Button1/>
              <Button2/>
            <div className="red-wrap"></div>
            <div className="blue-black-wrap">
            <img src="/images/AboutUsBlueBlack.svg" />
            </div>
            {/* <div className="green-bg"> */}
                {/* <img src="/images/AboutUsGreen.svg"/> */}
                <img className="green-bg" src="/images/AboutUsGreen.png"/>
            {/* </div> */}
        
            </Back>
            <Navbar />
        </Container>
    )
}

export default AboutUs

 
 
