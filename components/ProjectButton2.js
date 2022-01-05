import styled from "styled-components";

const Button = styled.button`
  background-color: #4285F4;
  position: absolute;
    border: none;
    color: white;
    height: 10vh;
    width: 10vh;
    margin-left: 7vw;
    border-radius: 50%;
    font-family: "Open Sans", sans-serif;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.2vw;
    
    margin-top: 5vh;
    z-index: 1;
    :hover{
        background-color: white;
    color: #4285f4;
    border: 1px solid #4285f4;
    }

    @media (max-width: 768px) {
    height: 7vh;
    width: 7vh;
    margin-top: 1.7vh;
    font-size: 4vw;
    margin-left: 21vw;
    }
`;

const ProjectButton2 = (props) => {
    return (
    <Button>Code</Button>
    );
}

export default ProjectButton2;