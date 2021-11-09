import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  font-family: "Open Sans", sans-serif;
//   font-weight: bold;
  border: 1px #FBBC04;
  background-color: #FBBC04;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 50px;
  margin-top: 22vh;
  z-index: 2;
  margin-left: 7vw;
`;

const Button2 = () => {
    return (
    <Button>Filter by Roles ‘Active’</Button>
    );
}

export default Button2;