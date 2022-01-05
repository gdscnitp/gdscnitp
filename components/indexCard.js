import styled from "styled-components";

const Card = styled.div`
  .math-bg {
    background-image: url("/images/math.svg");
    position: absolute;
    padding: 3.1%;
    padding-left: 5%;
    top: 14%;
    left: 26%;
    height: 75vh;
    width: 65vw;
    z-index: 2;
    .blank {
      background-image: url("/images/blank.svg");
      position: absolute;
      height: 62vh;
      width: 56vw;
      padding-left: 19vw;
      z-index: 4;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .title {
        color: #676c72;
        font-family: "Open Sans", sans-serif;
        font-size: 3rem;
      }

      .home-text {
        font-family: "Roboto Mono", monospace;
        color: #676c72;
        font-size: 1.3rem;
        text-align: left;
        max-width:600px;
      }
      .social {
        position: absolute;
        bottom: 9%;
        a {
          margin-right: 3rem;
          img{
            max-height: 4vh;
          }
        }
        @media (max-width: 768px) {
        bottom: 10vh;
        z-index: 15;
        }
      }
    }
    @media (max-width: 768px ) {
      position: relative;
      margin-top: 15vh;
      width: 88vw;
      left: 5vw;
      height: 60vh;
      z-index: -1;
      .blank {
        width: 78vw;
        height: 56vh;
        padding-left: 1vw;
        display: block;
        .home-text {
          font-size: 1rem;
        }
        .title {
          font-size: 2.5rem;
        }
      }
    }
    @media (max-height: 768px) {
      .blank {
        .home-text {
          font-size: 1rem;
        }
        .title {
          font-size: 1.6rem;
        }
      }
    }
    /* @media (max-width: 768px) {
        z-index: -15;
        } */
    /* width: 65vw; */
  }
`;
const Button = styled.a`
  background-color: #4285f4;
  border: none;
  color: white;
  box-sizing: border-box;
  width: 140px;
  min-height: 40px;
  padding: 0.7em 2.5em;
  border-radius: 2%;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;

  &:hover {
    background-color: white;
    color: black;
    border: 2px solid #4285f4;
  }
`;

const Card1 = () => {
    return (
    <Card>
        <div className="math-bg">
          <div className="blank">
            <h1 className="title"> Start a new journey</h1>
            <p className="home-text">
              Explore the community of developers from
              around the world here with the National
              Institute of Technology Patna-chapter
            </p>
            <Button
              href="https://gdsc.community.dev/national-institute-of-technology-nit-patna/"
              target="_blank"
            >
              Join Us
            </Button>
            <div className="social">
              <a
                href="https://www.facebook.com/gdscnitp/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/fbLogo.svg" alt="facebook" />
              </a>
              <a
                href="https://www.instagram.com/gdscnitp/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/instaLogo.svg" alt="instagram" />
              </a>
              <a
                href="https://twitter.com/gdscnitp"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/twitterLogo.svg" alt="twitter" />
              </a>
              <a
                href="https://www.linkedin.com/company/gdscnitp/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/linkedinLogo.svg" alt="linkedin" />
              </a>
             
               
            </div>
          </div>
        </div>
      </Card>
    );
}

export default Card1;