import styled from "styled-components";
import Link from "next/link";
import Layout from "./Layout";


const Nav = styled.div`
@media (max-width: 768px){
  /* display:none; */
}
  position: absolute;
  bottom: 0;
  width: 100%;
  align-items: center;
  margin: auto;
  justify-content: space-evenly;
  background-image: url("/images/nav.svg");
  background-repeat: no-repeat;
  height: 5vh;
  background-size: cover;
  display: flex;
  color: #fff;

`;

const Navbar = () => {
  return (
    // <Nav>

    //   <Link href="/">
    //     <a className="home">Home</a>
    //   </Link>
    //   <Link href="/event">
    //     <a className="events">Events</a>
    //   </Link>
    //   <Link href="/project">
    //     <a className="project">Project </a>
    //   </Link>
    //   <Link href="/AboutUs">
    //     <a className="about">About Us</a>
    //   </Link>
      
    // </Nav>
    <Nav>

    <Link href="/">
      <a className="home">Home</a>
    </Link>
    <Link href="/">
      <a className="events">Events</a>
    </Link>
    <Link href="/">
      <a className="project">Project </a>
    </Link>
    <Link href="/">
      <a className="about">About Us</a>
    </Link>
    
  </Nav>
  );
};


export default Navbar;
