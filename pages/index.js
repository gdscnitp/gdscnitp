import "../styles/Home.module.css";
import Head from "next/head";

import Image from "next/image";
import styles from "../styles/LandingPage.module.css";
import Layout from "../components/Layout";
import data from "../utilis/data";
import Navbar from "../components/navbar";
import LogoGDSC from "../components/logo";
import NavMobile from "../components/NavMobile";

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
      width: 50vw;
      right: 0;
      bottom: 30vh;
      height: 25vh;
      z-index: -1;
    }
  }
  .black-green-wrap {
    right: 0;
    top: 0;
    position: absolute;
    width: auto;
    /* width: 22vw; */
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    z-index: -2;
    img{
      height: 100%;
    }
    @media (max-width: 768px) {
      width: auto;
      right: 0;
      top: 65vh;
      height: 36vh;
      z-index: -2;
      bottom: 10vh;
    }
  }
  .mandir {
    position: absolute;
    top: -5%;
    margin-left: 30vw;
    height: 30vh;
    width: 20vw;
    @media (max-width: 768px) {
      top: auto;
      bottom: 50vh;
      right: 0;
      margin-right: 0;
      height: auto;
      width: 40vw;
      margin: auto;
      z-index: -2;
    }
    animation: mandirAnimation 1s;
  }
  @keyframes mandirAnimation{
    from {top: -10%;}
    to {top: -5%;}
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
      max-height: 26vh;
    }
    animation: nitpAnimation 1s ;
  }
  @keyframes nitpAnimation {
  from {left: -16%;}
  to {left: -8%;}
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
      max-height: 24vh;
      top: 10%;
      left: 15vw;
    }
  }
`;

const Card = styled.div`
  .math-bg {
    background-image: url("/images/math.svg");
    position: absolute;
    padding: 3.1%;
    padding-left: 5%;
    top: 14%;
    left: 26%;
    height: 75vh;
    width: 65vw;
    z-index: 2;
    .blank {
      background-image: url("/images/blank.svg");
      position: absolute;
      height: 62vh;
      width: 56vw;
      padding-left: 19vw;
      z-index: 4;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .title {
        color: #676c72;
        font-family: "Open Sans", sans-serif;
        font-size: 3rem;
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
        bottom: 9%;
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
      margin-top: 15vh;
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
function Home() {
  return (
    <Layout>
      <LogoGDSC />
      <Back>
        <div className="yellow-wrap"></div>
        <img
          className="mandir"
          src="/images/Mahavir_Mandir1_.svg"
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
          <div className="blank">
            <h1 className="title"> Start a new journey</h1>
            <p className="home-text">
              Explore the community of developers from
              around the world here with the National
              Institute of Technology Patna-chapter
            </p>
            <Button
              href="https://gdsc.community.dev/national-institute-of-technology-nit-patna/"
              target="_blank"
            >
              Join Us
            </Button>
            <div className="social">
              <a
                href="https://www.facebook.com/gdscnitp/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/fbLogo.svg" alt="facebook" />
              </a>
              <a
                href="https://www.instagram.com/gdscnitp/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/instaLogo.svg" alt="instagram" />
              </a>
              <a
                href="https://twitter.com/gdscnitp"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/twitterLogo.svg" alt="twitter" />
              </a>
              <a
                href="https://www.linkedin.com/company/gdscnitp/"
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
      <NavMobile />
    </Layout>
  );
}

export default Home;
