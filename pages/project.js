import styled from "styled-components";
import "../styles/Home.module.css";
import LogoGDSC from "../components/logo";
import Navbar from "../components/navbar";
import ProjectButton from "../components/ProjectButton";
import ProjectScroll from "../components/ProjectScroll";

const Project = styled.div`
  .wrap {
    left: 75%;
    position: absolute;
    width: auto;
    height: 99.9vh;
    z-index: -1;
    @media (max-width: 768px) {
      width: 100vw;
      bottom: 0;
    }
  }

  .writing-wrap {
    padding: 3.7% 12% 0 5%;
    background-image: url("/images/writing-wrap.svg");
    margin-left: 66%;
    position: absolute;
    margin-top: 7%;
    width: auto;
    height: 65vh;
    background-repeat: no-repeat;
  }
  .project-name {
    color: #676c72;
    position: absolute;
    font-family: "Open Sans", sans-serif;
    font-size: 1.2em;
  }
  .project-des {
    color: #676c72;
    font-family: "Roboto Mono", monospace;
    position: relative;
    text-align: justify;
    top: 12%;
    font-size: 0.9em;
  }
  .project-thumbnail {
    position: absolute;
    height: 45vh;
    width: 42vw;
    box-shadow: 5px 5px 5px #676c72;
    background-color: #f9f9f9;
    z-index: 5;
    top: 12%;
    margin-left: 5vw;
  }
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
  }
`;

const Button = styled.div`
  .button {
    background-color: white;
    border: solid 1px #4285f4;
    color: #4285f4;
    padding: 0.4em 5em;
    border-radius: 2%;
    font-family: "Open Sans", sans-serif;
    text-align: center;

    display: inline-block;
    font-size: 1.2vw;
  }

  .button:hover {
    background-color: #4285f4;
    color: white;
    border: 2px solid #4285f4;
  }
`;

function project() {
  return (
    <div>
      <Project>
        <LogoGDSC />
        <img className="wrap" src="/images/project-wrap.svg" />
        <div className="writing-wrap">
          <h4 className="project-name">Project Name</h4>
          <p className="project-des">
            Project Description- Explore the community of developers from around
            the world here with the National Institute of Technology
            Patna-chapter
          </p>
          <Button>
            <div className="button" style={{ marginTop: "100%" }}>
              GitHub
            </div>
          </Button>
        </div>
        <div className="project-thumbnail"></div>
        <div className="scroll"></div>
        

        <ProjectScroll number="1" />
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
    </div>
  );
}

export default project;
