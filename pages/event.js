import styled from "styled-components";
import "../styles/Home.module.css";
import LogoGDSC from "../components/logo";
import Navbar from "../components/navbar";
import Layout from "../components/Layout";
import { Hidden } from "@material-ui/core";

const Event = styled.div`
  .red-wrap {
    background-image: url("/images/red-wrap.svg");
    right: 0;
    position: absolute;
    width: 17vw;
    height: 30vh;
    z-index: -1;
    overflow: hidden;
    @media (max-width: 768px) {
      width: 100vw;
      bottom: 0;
    }
  }
  .black {
    overflow: hidden;
    left: 70%;
    position: absolute;
    z-index: -2;
    height: 40vh;
    width: 30vw;
    top: 20%;
    
  }
  .yellow {
    
    height: 40vh;
    width: 45vw;
    position: absolute;
    left:60%;
    top:35%;
    
    
  }
  
`;

function event() {
  return (
    <Layout>
      <div className="event" >
        <LogoGDSC />
        <Event>
          <div className="red-wrap"></div>
          <div className="black">
            <img src="/images/black-wrap.svg"  />
          </div>
          <div className="yellow">
           <img src="/images/yellow-event.svg" />
          </div>
        </Event>

        <Navbar />
      </div>
    </Layout>
  );
}

export default event;
