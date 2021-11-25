import styled from "styled-components";
import Link from "next/link";

const Nav = styled.div`
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
  /* background: #000; */
  color: #fff;
  .blue-nav {
    position: absolute;
    bottom: 0;
    left: 0;
    /* width: 100%; */
    z-index: 6;
  }
  /* .home {
    position: absolute;
    bottom: 4%;
    left: 18.5%;
    z-index: 7;
    color: white;
    font-family: "Open Sans", sans-serif, medium;
  }
  .events {
    position: absolute;
    bottom: 4%;
    left: 38.5%;
    z-index: 7;
    color: white;
    font-family: "Open Sans", sans-serif, medium;
  }
  .project {
    position: absolute;
    bottom: 4%;
    left: 58.5%;
    z-index: 7;
    color: white;
    font-family: "Open Sans", sans-serif, medium;
  }
  .about {
    position: absolute;
    bottom: 4%;
    left: 78.5%;
    z-index: 7;
    color: white;
    font-family: "Open Sans", sans-serif, medium;
  } */
`;

const Navbar = () => {
  return (
    <Nav>
      {/* <img className="blue-nav" src="/images/nav.svg" alt="blue-nav" /> */}

      <Link href="/">
        <a className="home">Home</a>
      </Link>
      <Link href="/event">
        <a className="events">Events</a>
      </Link>
      <Link href="/project">
        <a className="project">Project </a>
      </Link>
      <Link href="/AboutUs">
        <a className="about">About Us</a>
      </Link>
    </Nav>
  );
};

export default Navbar;
