import styled from "styled-components";
import Colors from "../../../components/Colors";

export const Section_1 = styled.section`
  height: 1300px;
  width: 100hw;
  display: flex;
  flex-direction: column;

  .sectionWarp {
    display: flex;
    @media (max-width: 801px) {
      flex-direction: column;
      height: 790px;
    }
  }

  .left {
    @media (max-width: 801px) {
      height: 40%;
      width: 100%;
    }

    height: 60%;
    width: 50%;

    .welcome {
      width: 400px;
      height: 300px;
      margin-top: 100px;
      margin-left: 115px;
      @media (max-width: 801px) {
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        text-align: center;
      }

      .btn-group {
        display: flex;
        margin-top: 12px;
        justify-content: space-around;
      }

      h1 {
        color: ${Colors.whiteFont};
        font-size: 40px;
        margin-bottom: 3px;
      }
      span {
        color: ${Colors.blue};
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 3px;
      }
      p {
        color: ${Colors.grayFont};
        font-size: 24px;
      }
    }
  }
  .right {
    height: 60%;
    width: 50%;
    margin-top: 100px;
    @media (max-width: 801px) {
      margin-top: 30px;
      height: 80%;
      width: 100%;
      background-color: ${Colors.blackBg};
    }

    .perfil-image {
      height: 350px;
      width: 350px;
      border-radius: 50%;
      background-size: cover;
      margin-left: auto;
      margin-right: 150px;
      clip-path: polygon(
        20% 0%,
        80% 0%,
        100% 20%,
        100% 80%,
        80% 100%,
        20% 100%,
        0% 80%,
        0% 20%
      );

      @media (max-width: 801px) {
        margin-left: auto;
        margin-right: auto;
      }

      img {
        height: 350px;
        width: 350px;
        clip-path: polygon(
          20% 0%,
          80% 0%,
          100% 20%,
          100% 80%,
          80% 100%,
          20% 100%,
          0% 80%,
          0% 20%
        );

        @media (max-width: 801px) {
          margin-top: 40px;
          margin-left: auto;
          margin-right: auto;
        }
        //box-shadow: 4px 7px 9px 5px rgba(30, 144, 255, 1);
      }
    }
  }
  .section-footer {
    width: 100vw;
    height: 40%;
    display: flex;

    @media (max-width: 801px) {
      background-color: ${Colors.blackBg};
    }

    .about {
      height: 300px;
      width: 900px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (max-width: 801px) {
        width: 90%;
      }

      h1 {
        margin-top: 20px;
        font-size: 34px;
        color: ${Colors.blue};
      }
      p {
        margin-top: 12px;
        font-size: 16px;
        font-display: inherit;
        color: ${Colors.grayFont};
      }
    }
  }
`;

///clip-path: polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%);
