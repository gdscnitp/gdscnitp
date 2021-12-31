import styled from "styled-components";
import "../styles/Home.module.css";
import LogoGDSC from "../components/logo";
import Navbar from "../components/navbar";
import ProjectButton from "../components/ProjectButton";
import ProjectScroll from "../components/ProjectScroll";

const Container =styled.div`
max-width: 100%;
overflow: hidden;
`;

const Back = styled.div`
  .blue-wrap {
    background-image: url("/images/blue-dot.svg");
    right: 0;
    top: -4vh;
    position: absolute;
    width: 20vw;
    height: 40vh;
    z-index: -1;
    @media (max-width: 768px) {
      width: 50vw;
      top: 55vh;
      right: 0;
      /* bottom: 30vh; */
      height: 22vh;
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
`;

const Project = styled.div`
  /*
  .project-thumbnail {
    position: absolute;
    height: 45vh;
    width: 42vw;
    box-shadow: 5px 5px 5px #676c72;
    background-color: #f9f9f9;
    z-index: 5;
    top: 12%;
    margin-left: 5vw;
  } */
  .scroll {
    position: absolute;
    height: 45vh;
    width: 5vw;
    top: 12%;
    left: 54%;
    z-index: 6;
    background-color: #f9f9f9;
    box-shadow: 0px 0px 5px #676c72;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .milestones{
    position: absolute;
    margin-left: 5vw;
    top: 63%;
    color: #676C72;
    font-family: "Open Sans", sans-serif;
    z-index: 7;
    font-weight: bolder;
    font-size: 1.4em;
    @media (max-width: 768px) {
      top: 40vh;
    }
  }
`;

const Card = styled.div`
  .math-bg {
    background-image: url("/images/math.svg");
    position: absolute;
    padding: 2%;
    top: 14%;
    left: 66%;
    height: 70vh;
    width: 26vw;
    z-index: 2;
    .blank {
      background-image: url("/images/blank.svg");
      position: absolute;
      height: 62vh;
      width: 22vw;
      padding-left: 2vw;
      z-index: 4;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .title {
        color: #676c72;
        font-family: "Open Sans", sans-serif;
        font-size: 4rem;
      }
      .project-des {
        font-family: "Roboto Mono", monospace;
        color: #676c72;
        font-size: 1.3rem;
        text-align: left;
        max-width:600px;
      }
      .social {
        position: absolute;
        bottom: 5%;
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
      margin-top: 53vh;
      padding: 5vw;
      width: 88vw;
      left: 5vw;
      height: 45vh;
      z-index: -1;
      .blank {
        width: 78vw;
        height: 45vh;
        padding-left: 3vw;
        display: block;
        .project-des {
          font-size: 1rem;
        }
        .title {
          font-size: 2.5rem;
          margin-top: 2vh;
        }
      }
    }
    @media (max-height: 768px) {
      .blank {
        .project-des {
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
  background-color: white;
  border: 2px solid #4285f4;
  color: #4285f4;
  box-sizing: border-box;
  width: 240px;
  min-height: 38px;
  padding: 0.5em 2.5em;
  border-radius: 2%;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;

  &:hover {
    background-color: white;
    font-weight: bold;
    /* color: black; */
    border: 4px solid #4285f4;
  }
`;

function project() {
  return (
      <Container>
        <LogoGDSC />
        <Back>
        <div className="blue-wrap"></div>
        <div className="black-green-wrap">
          <img src="/images/black-green.svg" alt="black-green" />
        </div>
        </Back>

        <Card>
        <div className="math-bg">
          <div className="blank">
            <h1 className="title"> Project Name</h1>
            <p className="project-des">
            Project Description- Explore the community of developers from around the world here with the National Institute of Technology Patna-chapter
            </p>
            <Button
              href=" "
            >
              GitHub
            </Button>
          </div>
        </div>
      </Card>

<Project>
        {/* <div className="project-thumbnail"></div>
        <div className="scroll"></div> */}
        {/* <ProjectScroll number="1" /> */}
        <div className="milestones">
          Milestones Cleared
          </div>
        <div style={{marginLeft: "5vw"}} >
        <ProjectButton name="Idea"  />
        </div>
        <div style={{marginLeft: "13vw"}} >
        <ProjectButton name="Code" />
        </div>
        <div style={{marginLeft: "21vw"}} >
        <ProjectButton name="Test" />
        </div>
        <div style={{marginLeft: "29vw"}} >
        <ProjectButton name="Live" />
        </div>

        <Navbar />
      </Project>
      </Container>
  );
}

export default project;
