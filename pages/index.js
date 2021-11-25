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
      height: 15vh;
    }
  }
  .black-green-wrap {
    right: 0;
    top: 20%;
    position: absolute;
    width: 20vw;
    height: 50vh;
    z-index: -2;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .mandir {
    position: absolute;
    top: 0;
    margin-left: 30vw;
    height: 30vh;
    width: 20vw;
    @media (max-width: 768px) {
      top: auto;
      bottom: 20vh;
      right: 0;
      margin-right: 0;
      height: auto;
      width: 40vw;
      margin: auto;
    }
  }
  .main-building-nitp {
    position: absolute;
    height: 50vh;
    width: 40vw;
    top: 17%;
    left: -8%;
    @media (max-width: 768px) {
      position: relative;
      left: -4%;
      height: auto;
      top: 10vh;
    }
  }
  .bihar-map {
    position: absolute;
    height: 52vh;
    width: 40vw;
    max-width: 40vw;
    z-index: 5;
    top: 21%;
    left: 9vw;
    @media (max-width: 768px) {
      position: absolute;
      height: auto;
      width: 90vw;
      min-width: 74vw;
      top: 10%;
      left: 15vw;
    }
  }
`;

const Card = styled.div`
  .math-bg {
    background-image: url("/images/math.svg");
    position: absolute;
    padding: 3.7%;
    padding-left: 5%;
    top: 14%;
    left: 26%;
    height: 75vh;
    width: 65vw;
    z-index: 2;
    .blank {
      background-image: url("/images/blank.svg");
      position: absolute;
      // padding: 9%;
      // top: 20%;
      // left: 10%;
      height: 62vh;
      width: 56vw;
      padding-left: 19vw;
      /* padding-top: 10%; */
      z-index: 4;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .title {
        color: #676c72;
        /* text-align: center; */
        font-family: "Open Sans", sans-serif;
        // padding-top: 11%;
        font-size: 3rem;
      }

      .home-text {
        font-family: "Roboto Mono", monospace;
        color: #676c72;
        font-size: 1.3rem;
        text-align: left;
      }
    }
    @media (max-width: 768px) {
      position: relative;
      margin-top: 15vh;
      width: 90vw;
      left: 5vw;
      height: 50vh;
      .blank {
        width: 80vw;
        height: 45vh;
        padding-left: 1vw;
        display: block;
        .home-text {
          font-size: 1.2rem;
        }
        .title{
          font-size: 3rem;
        }
      }
    }
  }
`;
const Button = styled.div`
  .button {
    background-color: #4285f4;
    border: none;
    color: white;
    box-sizing: border-box;
    min-width:100px;
    min-height: 40px;
    padding: 0.7em 2.5em;
    border-radius: 2%;
    font-family: "Open Sans", sans-serif;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
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
        <img
          className="mandir"
          src="/images/Mahavir_Mandir_1_.svg"
          alt="mahavir-mandir"
        />
        <div className="black-green-wrap">
          <img src="/images/black-green.svg" alt="black-green" />
        </div>
        <div>
          <img
            className="main-building-nitp"
            src="/images/NIT_Patna_Main_Building_1_.svg"
            alt="nit-patna"
          />
          <img className="bihar-map" src="/images/map.svg" alt="bihar-map" />
        </div>
      </Back>
      <Card>
        <div className="math-bg">
          {/* <img  src="/images/math.svg" /> */}
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
        </div>
      </Card>
      <Navbar />
    </Layout>
  );
}

export default Home;
