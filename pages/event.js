import "../styles/Home.module.css";
import Head from "next/head";

import Image from "next/image";
import styles from "../styles/LandingPage.module.css";
import Layout from "../components/Layout";
import data from "../utilis/data";

import styled from "styled-components";

const Logo = styled.img`
  height: 4vh;
  width: auto;
  position: absolute;
  margin-top: 3vh;
  margin-left: 5vw;
  z-index: 6;
`;

const Back = styled.div`
  .red-wrap {
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
  `
 const Events = () => {
    return (
        <div>
            <Logo className="logo" src="../images/Logo.svg" />
            <p>hiooooo</p>
            </div>
        
    );
}

export default Events;