import "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/LandingPage.module.css";
import Layout from "../components/Layout";
import data from "../utilis/data";

// images
import Yellow from "../public/images/yellow-dot.svg";
import BlackGreen from "../public/images/black-green.svg";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Avatar,
} from "@material-ui/core";

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
  .yellow-wrap {
    background-image: url("/images/yellow-dot.svg");
    right: 0;
    position: absolute;
    width: 30vw;
    height: 40vh;
    z-index: -1;
    @media (max-width: 768px) {
      width: 100vw;
      bottom: 0;
  }
  }
  .mandir {
    position: absolute;
    top: 0;
    margin-left: 30vw;
  }
`;

function Home() {
  return (
    <Layout>
      <Logo className="logo" src="../images/Logo.svg" />
      <Back>
        <div className="yellow-wrap"></div>
        <img className="mandir" src="/images/Mahavir_Mandir_1_.svg" />
      </Back>
    </Layout>
  );
}

export default Home;
