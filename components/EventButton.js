import styled from "styled-components";

const Button = styled.button`
  background-color: #4285f4;
    border: none;
    color: white;
    padding: 0.3em 0.7em;
    border-radius: 2%;
    font-family: "Open Sans", sans-serif;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.2vw;
    :hover{
        background-color: white;
    color: #4285f4;
    border: 2px solid #4285f4;
    }
`;

const EventButton = () => {
    return (
    <Button>Enroll Now</Button>
    );
}

export default EventButton;