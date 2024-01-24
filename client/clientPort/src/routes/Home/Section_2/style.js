import styled from "styled-components";
import Colors from "../../../components/Colors";

export const Section_2 = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.blackBg};
  /*
  .teste {
    height: 300px;
    width: 300px;
    background-color: red;
    transform: translateX(-700px) rotate(180deg);
    opacity: 0;
  }*/

  .skill-area {
    height: 900px;
    display: flex;
    flex-direction: column;
    padding-top: 35px;
    margin-bottom: 20px;

    h1 {
      font-size: 40px;
      text-align: center;
      color: ${Colors.whiteFont};
    }
    .card-group {
      display: flex;
      flex-wrap: wrap;
      width: 90%;
      height: 80%;
      padding: 20px;
      margin-top: 12px;
      margin-left: auto;
      margin-right: auto;
      justify-content: space-around;

      @media (max-width: 801px) {
        height: 2800px;
        width: 100%;
        background-color: ${Colors.blackBg};
      }

      .card-skill {
        transform: translateX(-7000px) /*rotate(180deg)*/;
        transition: ease-out 1.1s;

        opacity: 0.1;

        @media (max-width: 801px) {
          margin-bottom: 20px;
        }

        display: flex;
        flex-direction: column;
        text-align: center;
        padding-top: 8px;
        padding-left: 18px;
        background-color: #222222;
        cursor: pointer;
        height: 140px;
        width: 180px;
        border-left: 0px;
        border-top: 0px;
        border-right: 0px;
        border-bottom: 10px solid;
        border-image-slice: 1;
        border-width: 5px;

        border-image-source: linear-gradient(
          to left,
          rgba(9, 64, 121, 1),
          rgba(0, 212, 255, 1)
        );
        clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
        &:hover {
          transform: scale(2.5);
          transition: ease-in-out;
          transition-duration: 1s;
        }

        span {
          color: ${Colors.grayFont};
          font-size: 18px;
        }
        img {
          height: 80px;
          width: 80px;
          margin-left: 30px;
          margin-top: 10px;
        }
      }
    }
  }
`;
