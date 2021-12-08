import styled from "styled-components";
import "../styles/Home.module.css";
import LogoGDSC from "../components/logo";
import Navbar from "../components/navbar";

const Container =styled.div`
max-width: 100%;
overflow: hidden;
`;

const Back = styled.div`
  .red-wrap {
    background-image: url("/images/red-wrap.svg");
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
      z-index: -1;
    }
  }
  .yellow-black-wrap {
    right: 0;
    position: absolute;
    width: 23vw;
    height: 85vh;
    max-height: 100vh;
    bottom: 0;
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
`;


const Card = styled.div`
  .math-bg {
    background-image: url("/images/math.svg");
    position: absolute;
    padding: 2%;
    top: 14%;
    left: 66%;
    height: 70vh;
    width: 26vw;
    z-index: 2;
    .blank {
      background-image: url("/images/blank.svg");
      position: absolute;
      height: 62vh;
      width: 22vw;
      padding-left: 2vw;
      z-index: 4;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .title {
        color: #676c72;
        /* margin-top: 0vh; */
        /* margin-bottom: 0.5vh; */
        font-family: "Open Sans", sans-serif;
        font-size: 3rem;
      }
      .event-des {
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
        .event-des {
          font-size: 1rem;
        }
        .title {
          font-size: 2.5rem;
          margin-top: 8vh;
        }
      }
    }
    @media (max-height: 768px) {
      .blank {
        .event-des {
          font-size: 1rem;
        }
        .title {
          font-size: 1.6rem;
        }
      }
    }
  }
`;

const SearchBar = styled.div`
input{
  border-width: 1px;
  border-radius: 4vh;
  height: 5vh;
  width: 18vw;
  padding: 1vw;
  @media (max-width: 768px) {
      input{
      
      }
    }
}
`;

const Button1 = styled.a`
  background-color: white;
  border: none;
  color: #4285f4;
  box-sizing: border-box;
  width: 8vw;
  padding: 0.4em 0.5em;
  border-radius: 2%;
  border: solid 1px #4285f4;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  text-decoration: none;
  /* display: inline-block; */
  font-size: 1rem;

  &:hover {
    background-color: white;
    border: 2px solid #4285f4;
  }
`;
const Button2 = styled.a`
  background-color: #4285f4;
  border: none;
  color: white;
  box-sizing: border-box;
  width: 8vw;
  /* min-height: 5.6vh; */
  padding: 0.4em 0.5em;
  border-radius: 2%;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  text-decoration: none;
  /* display: inline-block; */
  font-size: 1rem;
  margin-left: 10vw;

  &:hover {
    background-color: white;
    color: black;
    border: 2px solid #4285f4;
  }


`;

function event() {
  return (
    <Container>
        <LogoGDSC />
        <Back>
          <div className="red-wrap"></div>
          <div className="yellow-black-wrap">
            <img src="/images/yellow-black-event.svg" alt="yellow-black" />
          </div>
          </Back>
          <Card>
        <div className="math-bg">
          <div className="blank">
          <SearchBar>
          <input type="text" placeholder="Search events"></input>
          </SearchBar>
            <h1 className="title"> Event Name</h1>
            <p className="event-des">
            Event Description- Explore the community of developers from around the world here with the National Institute of Technology Patna-chapter
            </p>
            <Button1
              href=" " 
              target="_blank"
            >
              Highlights
            </Button1>
            <Button2 
              href=" "
              target="_blank"
            >
              Enroll Now
            </Button2>
          </div>
        </div>
      </Card>
        <Navbar />
    </Container>
  );
}

export default event;
