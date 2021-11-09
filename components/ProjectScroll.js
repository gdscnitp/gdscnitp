import styled from "styled-components";

const Number = styled.button`
  border: solid 2px;
  position: absolute;
  background-color: white;

  color: #676c72;
  height: 5vh;
  width: 5vh;
  z-index: 7;
  border-radius: 50%;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.2vw;
  top: 19%;
  left: 55%;
  :hover {
    background-color: white;
    color: #4285f4;
    border: 1px solid #4285f4;
  }
`;

function ProjectScroll(props) {
  return <Number>{props.number}</Number>;
}

export default ProjectScroll;
