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
    @media (max-width: 768px) {
      width: 50vw;
      right: 0;
      bottom: 30vh;
      height: 25vh;
      z-index: -1;;
    }
  }
  .blue-black-wrap {
    right: 0;
    position: absolute;
    width: 23vw;
    height: 100vh;
    overflow: hidden;
    z-index: -2;
    img{
      height: 110vh;
    }
    @media (max-width: 768px) {
      width: 70vw;
      right: 0;
      bottom: 0;
      height: 55vh;
      z-index: -2;
    }
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
//  const Card = styled.div`
//   .math-wrap{
//   background-image: url("/images/AboutUsCard2.svg");
//   position: absolute;
//   background-repeat: no-repeat;
//   // bottom: 0;
//   top: 10%;
//   left: 43%;
//   // height: 150vh;
//   // width: 190vw;
//   padding: 9vh 5vw;
//   }

//   .white-wrap{
//     // position: absolute;
//     height: auto;
//     width: 40vw;
//     z-index: -1;
//   }

//   .content{
//     position: absolute;
//     // margin-top: 1%;
//     top: 10%;
//     z-index: 1;
//     margin-left: 15%;
//     @media (max-width: 768px) {
//      display: none;
//     }
//   } 
//   .title{
//     font-family: "Open Sans", sans-serif;
//     font-weight: bold;
//     color: #676C72;
//     font-size: 35px;
//   }
//   .subTitle{
//     position: absolute;
//     margin-top: -12%;
//     color: #ff0000;
//     font-family: 'Roboto Mono', monospace;
//     font-size: 21px;
//   }
//   .desc{
//     position: absolute;
//     font-family: 'Roboto Mono', monospace;
//     color: #676C72;
//     font-size: 14px;
//     text-align: justify;
//     width: 120%;
//   }
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
//   .socials{
//     position: absolute;
//     width: 55%;
//     margin-top: -8%;
//     margin-left: 70%;
//     @media (max-width: 768px) {
//      display: none;
//     }
//   }
//   .socilsIndividual{
//     margin: 1.2vh;
//   }
//  `;
const Card = styled.div`
  .math-bg {
    background-image: url("/images/math.svg");
    position: absolute;
    padding: 3.1%;
    padding-left: 5%;
    top: 14%;
    left: 36%;
    height: 75vh;
    width: 58vw;
    z-index: 2;
    .blank {
      background-image: url("/images/blank.svg");
      position: absolute;
      height: 62vh;
      width: 48vw;
      padding-left: 19vw;
      z-index: 4;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .title {
        color: #676c72;
        margin-top: 0vh;
        margin-bottom: 0.5vh;
        font-family: "Open Sans", sans-serif;
        font-size: 3rem;
      }
      .subTitle{
       color: #ff0000;
       font-family: 'Roboto Mono', monospace;
       font-size: 2rem;
       margin-top: 1vh;
       margin-bottom: 1vh;
      }
      .home-text {
        font-family: "Roboto Mono", monospace;
        color: #676c72;
        font-size: 1.3rem;
        text-align: left;
        max-width:600px;
      }
      .social {
        position: absolute;
        bottom: 5%;
        a {
          margin-right: 3rem;
          img{
            max-height: 4vh;
          }
        }
      }
    }
    @media (max-width: 768px ) {
      position: relative;
      margin-top: 38vh;
      width: 88vw;
      left: 5vw;
      height: 60vh;
      z-index: -1;
      .blank {
        width: 78vw;
        height: 56vh;
        padding-left: 1vw;
        display: block;
        .home-text {
          font-size: 1rem;
        }
        .title {
          font-size: 2.5rem;
          margin-top: 8vh;
        }
        .subTitle{
       font-size: 1.5rem;
       margin-top: 1vh;
       margin-bottom: 1vh;
        }
      }
    }
    @media (max-height: 768px) {
      .blank {
        .home-text {
          font-size: 1rem;
        }
        .title {
          font-size: 1.6rem;
        }
      }
    }
  }
`;
const Button = styled.a`
  background-color: #4285f4;
  border: none;
  color: white;
  box-sizing: border-box;
  width: 140px;
  min-height: 40px;
  padding: 0.7em 2.5em;
  border-radius: 2%;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;

  &:hover {
    background-color: white;
    color: black;
    border: 2px solid #4285f4;
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
            <img src="/images/AboutUsBlueBlack.svg" alt="blue-back"/>
            </div>
            {/* <div className="green-bg"> */}
                {/* <img src="/images/AboutUsGreen.svg"/> */}
                <img className="green-bg" src="/images/AboutUsGreen.png" alt="green-bg"/>
            {/* </div> */}
            
            </Back>
            <Card>
        <div className="math-bg">
          <div className="blank">
            <h1 className="title"> Person’s Name</h1>
            <p className="subTitle">Person’s Department</p>
            <p className="home-text">
            Person’s Bio Description- Explore the community of developers from around the world here with the National Institute of Technology Patna-chapter
            </p>
            <Button
              href="https://gdsc.community.dev/national-institute-of-technology-nit-patna/"
              target="_blank"
            >
              Meet
            </Button>
            <div className="social">
              <a
                href=" "
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/fbLogo.svg" alt="facebook" />
              </a>
              <a
                href=" "
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/instaLogo.svg" alt="instagram" />
              </a>
              <a
                href=" "
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/twitterLogo.svg" alt="twitter" />
              </a>
              <a
                href=" "
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/linkedinLogo.svg" alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
      </Card>
            <Navbar />
        </Container>
    )
}

export default AboutUs

 
 
