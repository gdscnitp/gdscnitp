import styled from "styled-components";

const Button = styled.button`
  background-color: #EA4335;
  position: absolute;
    border: none;
    color: white;
    height: 10vh;
    width: 10vh;
    /* margin-left: 5vw; */
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
    }
`;

const ProjectButton1 = (props) => {
    return (
    <Button>Idea</Button>
    );
}

export default ProjectButton1;