import styled from "styled-components";

const Button = styled.button`
  background-color: white;
    border: solid 1px #4285f4;
    color: #4285f4;
    padding: 0.3em 0.7em;
    border-radius: 2%;
    font-family: "Open Sans", sans-serif;
    text-align: center;
    margin-right: 7%;
   margin-top: 115%;
    display: inline-block;
    font-size: 1.2vw;
    :hover{
        background-color: #4285f4;
    color: white;
   
    }
`;

const ButtonBorder = () => {
    return (
    <Button>Highlights</Button>
    );
}

export default ButtonBorder;