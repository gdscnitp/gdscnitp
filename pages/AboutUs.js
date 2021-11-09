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
 const Card = styled.div`
  .math-wrap{
  background-image: url("/images/AboutUsCard2.svg");
  position: absolute;
  background-repeat: no-repeat;
  // bottom: 0;
  top: 10%;
  left: 43%;
  // height: 150vh;
  // width: 190vw;
  padding: 9vh 5vw;
  }

  .white-wrap{
    // position: absolute;
    height: auto;
    width: 40vw;
    z-index: -1;
  }

  .content{
    position: absolute;
    // margin-top: 1%;
    top: 10%;
    z-index: 1;
    margin-left: 15%;
  } 
  .title{
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    color: #676C72;
    font-size: 35px;
  }
  .subTitle{
    position: absolute;
    margin-top: -12%;
    color: #ff0000;
    font-family: 'Roboto Mono', monospace;
    font-size: 21px;
  }
  .desc{
    position: absolute;
    font-family: 'Roboto Mono', monospace;
    color: #676C72;
    font-size: 14px;
    text-align: justify;
    width: 120%;
  }
  .button {
    background-color: #4285f4;
    border: none;
    color: white;
    padding: 0.7em 2.5em;
    border-radius: 2%;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.2vw;
    margin-top: 23vh;
    
  }

  .button:hover {
    background-color: white;
    color: black;
    border: 2px solid #4285f4;
    // cursor: pointer;
  }
  .socials{
    position: absolute;
    width: 55%;
    margin-top: -8%;
    margin-left: 70%;
  }
  .socilsIndividual{
    margin: 1.2vh;
  }
 `;
//  const Button = styled.div`

//   .button {
//     background-color: #4285f4;
//     border: none;
//     color: white;
//     padding: 0.7em 2.5em;
//     border-radius: 2%;
//     font-family: "Open Sans", sans-serif;
//     font-weight: bold;
//     text-align: center;
//     text-decoration: none;
//     display: inline-block;
//     font-size: 1.2vw;
//     margin-top: 23vh;
    
//   }

//   .button:hover {
//     background-color: white;
//     color: black;
//     border: 2px solid #4285f4;
//     // cursor: pointer;
//   }
// `;

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
            <Card>
              <div className="math-wrap">
              <div className="white-wrap">
              <img src="/images/AboutUsWhite.svg" />
              </div>
              <div className="content">
                <p className="title">Person’s Name</p>
                <p className="subTitle">Person’s Department</p>
                <p className="desc">Person’s Bio Description- Explore the community of developers from around the world here with the National Institute of Technology Patna-chapter</p>
                {/* <Button> */}
                <div className="button">Meet</div>
                <div className="socials">
                <img className="socilsIndividual" src="/images/fbLogo.svg"/>
                <img className="socilsIndividual" src="/images/twitterLogo.svg"/>
                <img className="socilsIndividual" src="/images/linkedinLogo.svg"/>
                <img className="socilsIndividual" src="/images/instaLogo.svg"/>
                </div>
                {/* </Button> */}
              </div>
              
              </div>
              
            </Card>
            <Navbar />
        </Container>
    )
}

export default AboutUs

 
 
