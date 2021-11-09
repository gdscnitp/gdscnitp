import styled from "styled-components";

const Button = styled.button`
  background-color: #EA4335;
  position: absolute;
    border: none;
    color: white;
    height: 10vh;
    width: 10vh;
    
    border-radius: 50%;
    font-family: "Open Sans", sans-serif;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.2vw;
    
    margin-top: 70vh;
    z-index: 1;
    :hover{
        background-color: white;
    color: #4285f4;
    border: 1px solid #4285f4;
    }
`;

const ProjectButton = (props) => {
    return (
    <Button>{props.name}</Button>
    );
}

export default ProjectButton;