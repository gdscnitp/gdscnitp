import styled from "styled-components";

const Button = styled.button`
  border: 1px solid black;
  background-color: white;
  color: black;
  padding: 10px 24px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 50px;
//   margin-top: 12vh;
  z-index: 2;
//   margin-left: 5vw;
`;

const Button2 = () => {
    return (
    <Button>Filter by Department</Button>
    );
}

export default Button2;