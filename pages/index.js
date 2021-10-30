import "../styles/Home.module.css";
import Head from "next/head";

import Image from "next/image";
import styles from "../styles/LandingPage.module.css";
import Layout from "../components/Layout";
import data from "../utilis/data";
import Navbar from "../components/navbar";
import LogoGDSC from "../components/logo";

import styled from "styled-components";


const Back = styled.div`
  .yellow-wrap {
    background-image: url("/images/yellow-dot.svg");
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
  .black-green-wrap {
    right: 0;
    top: 20%;
    position: absolute;
    width: 20vw;
    height: 50vh;
    z-index: -2;
  }
  .mandir {
    position: absolute;
    top: 0;
    margin-left: 30vw;
    height: 30vh;
    width: 20vw;
  }
  .main-building-nitp {
    position: absolute;
    height: 50vh;
    width: 40vw;
    top: 17%;
    left: -8%;
  }
  
`;

const Card = styled.div`
  .math-bg {
    position: absolute;
    top: 14%;
    left: 26%;
    height: 63vh;
    width: 75vw;
    z-index: 2;
  }
  .blank {
    background-image: url("/images/blank.svg");
    position: absolute;
    top: 20%;
    left: 34%;
    height: 52vh;
    width: 59vw;
    padding-left: 20%;
    z-index: 4;
    
  }
  .title {
    color: #676c72;
    /* text-align: center; */
    font-family: "Open Sans", sans-serif;
    padding-top: 11%;
   
    font-size: 2.5em;
  }
  .home-text {
    margin-bottom: 8%;
    font-family: 'Roboto Mono', monospace;
    color: #676c72;
    font-size: 0.77em;
  }
  .bihar-map {
    position: absolute;
    height: 52vh;
    width: 40vw;
    z-index: 5;
    top:21%;
    left:9%;
  }
  .patna{
    position: absolute;
    z-index:6;
    height:8vh;
    width: 6vw;
    top:44%;
    left:19%;
  }
  
`;
const Button = styled.div`

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
    font-size: 16px;
    
  }

  .button:hover {
    background-color: white;
    color: black;
    border: 2px solid #4285f4;
  }
`;
function Home() {
  return (
    <Layout>
      
      <LogoGDSC />
      <Back>
        <div className="yellow-wrap"></div>
        <img className="mandir" src="/images/Mahavir_Mandir_1_.svg" />
        <div className="black-green-wrap">
          <img src="/images/black-green.svg" />
        </div>
        <img
          className="main-building-nitp"
          src="/images/NIT_Patna_Main_Building_1_.svg"
        />
        
      </Back>
      <Card>
        <img className="math-bg" src="/images/math.svg" />
        <img className="bihar-map" src="/images/bihar-map.png" />
        <img className="patna" src="/images/patna.svg" />
        <div className="blank">
          <h1 className="title"> Start a new journey</h1>
          <p className="home-text">
            Explore the community of developers from <br />
            around the world here with the National
            <br /> Institute of Technology Patna-chapter
          </p>
          <Button>
            <div className="button">Join Us</div>
          </Button>
        </div>
      </Card>
      <Navbar/>
    </Layout>
  );
}

export default Home;
