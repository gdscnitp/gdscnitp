import styled from "styled-components";

const Button = styled.button`
position: absolute;
font-family: "Open Sans", sans-serif;
  border: 1px solid black;
  background-color: white;
  color: black;
  width: 15vw;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 50px;
  margin-top: 12vh;
  z-index: 2;
  margin-left: 7vw;
  @media (max-width: 768px) {
    font-size: 12px;
    width: 42vw;
    }
`;


const Button1 = () => {
    return (
    <Button>Filter by Department</Button>
    );
}

export default Button1;