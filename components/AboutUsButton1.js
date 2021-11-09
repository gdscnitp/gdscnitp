import styled from "styled-components";

const Button = styled.button`
position: absolute;
font-family: "Open Sans", sans-serif;
  border: 1px solid black;
  background-color: white;
  color: black;
  padding: 10px 24px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 50px;
  margin-top: 12vh;
  z-index: 2;
  margin-left: 7vw;
`;


const Button1 = () => {
    return (
    <Button>Filter by Department</Button>
    );
}

export default Button1;