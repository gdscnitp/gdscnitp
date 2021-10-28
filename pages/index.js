import "../styles/Home.module.css"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/LandingPage.module.css'
import Layout from "../components/Layout";
import data from "../utilis/data"

// images
import Yellow from "../public/images/yellow-dot.svg";
import BlackGreen from "../public/images/black-green.svg";



import { Card,CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography,Avatar } from '@material-ui/core';

import styled from "styled-components";

const Mandir=styled.div`
position:absolute;
height:480px;
width:auto;
img{
  width:100%;
  height:100%;
}
`;

const Back=styled.div`
.yellow-wrap{
float:right;
position:absolute;
width:30vw;
height:20vh;
z-index:-1;
}`


function Home (){
  return (
    <Layout>
    <Back>       <img className="yellow-wrap" src="/images/yellow-dot.svg"/> 

       <img src="/images/Mahavir_Mandir_1_.svg" />
       <div className={styles.blackGreen}>
       <Mandir> ̰
         <img src="/images/Mahavir_Mandir_1_.svg" height={100} width={100} />
         </Mandir> 
</div>

       
    </Back>
    </Layout>
  )
}

export default Home
