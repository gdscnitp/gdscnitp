import styled from "styled-components";
import "../styles/Home.module.css";
import LogoGDSC from "../components/logo";
import Navbar from "../components/navbar";
import Layout from "../components/Layout";
import ButtonBorder from "../components/EventButtonBorder";
import EventButton from "../components/EventButton";

const Event = styled.div`
  .red-wrap {
    background-image: url("/images/red-wrap.svg");
    right: 0;
    position: absolute;
    width: 17vw;
    height: 30vh;
    z-index: -1;
    @media (max-width: 768px) {
      width: 100vw;
      bottom: 0;
    }
  }
  .yellow-black-wrap {
    left: 79%;
    right: 0;
    top: 20%;
    position: absolute;
    width: 40vw;
    height: 70vh;
    z-index: -2;
  }

  .writing-wrap {
    padding: 2% 12% 0 5%;
    background-image: url("/images/writing-wrap.svg");
    margin-left: 66%;
    position: absolute;
    margin-top: 7%;
    width: auto;
    height: 65vh;
    background-repeat: no-repeat;
  }
  .event-name {
    color: #676c72;
    position: absolute;
    font-family: "Open Sans", sans-serif;
    font-size: 1.2em;
    top: 20%;
  }
  .event-des {
    color: #676c72;
    font-family: "Roboto Mono", monospace;
    position: relative;
    text-align: justify;
    top: 27%;
    font-size: 0.9em;
  }
`;

const Button = styled.div`
  .button-border {
    background-color: white;
    border: solid 1px #4285f4;
    color: #4285f4;
    padding: 0.4em 2.5em;
    border-radius: 2%;
    font-family: "Open Sans", sans-serif;
    text-align: center;
   
    display: inline-block;
    font-size: 1.2vw;
  }

  .button-border:hover {
    background-color: #4285f4;
    color: white;
    border: 2px solid #4285f4;
  }
  .button {
    background-color: #4285f4;
    border: none;
    color: white;
    padding: 0.7em 2.5em;
    border-radius: 2%;
    font-family: "Open Sans", sans-serif;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.2vw;
    
  }

  .button:hover {
    background-color: white;
    color: black;
    border: 2px solid #4285f4;
  }
`;

function event() {
  return (
    <Layout>
      <div className="event">
        <LogoGDSC />
        <Event>
          <div className="red-wrap"></div>
          <div className="yellow-black-wrap">
            <img src="/images/yellow-black-event.svg" alt="yellow-black" />
          </div>
          <div className="writing-wrap">
            <h4 className="event-name">Event Name</h4>
            <p className="event-des">
              Event Description- Explore the community of developers from around
              the world here with the National Institute of Technology
              Patna-chapter
            </p>
            {/* <Button>

            <div className="button" >GitHub</div>
            <div className="button-border" >GitHub</div>
          </Button> */}
          <div style={{display:"inline"}}>
          <ButtonBorder />
          <EventButton />
          </div>
          </div>
        </Event>

        <Navbar />
      </div>
    </Layout>
  );
}

export default event;
