import styled from "styled-components";
import Colors from "../../../components/Colors";

export const Section_3 = styled.section`
  height: 9000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.blackBg};

  @media (max-width: 1668px) {
    //padding-bottom: 700px;
  }
  @media (max-width: 400px) {
    padding-bottom: 700px;
  }
  .modal {
    background-color: gray;
    opacity: 0.8;
    height: 8000px;
    width: 100%;
    position: absolute;
    z-index: 2;
  }

  .title {
    align-items: center;
    @media (max-width: 581px) {
      margin-top: 600px;
    }
    @media (max-width: 400px) {
      margin-top: 1700px;
    }

    h1 {
      font-size: 40px;
      text-align: center;
      color: ${Colors.whiteFont};
    }
  }
  .project {
    width: 90%;
    height: 400px;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 801px) {
      width: 100%;
    }

    .title-project {
      width: 80px;
      height: 35px;
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

      @media (max-width: 415px) {
        margin-left: 30px;
      }

      h3 {
        font-size: 23px;
        color: ${Colors.whiteFont};
      }
    }

    .project-area {
      @media (max-width: 801px) {
        flex-direction: column;
        height: 1000px;
      }

      transform: translateX(-7000px) /*rotate(180deg)*/;
      transition: ease-out 1.1s;

      opacity: 0.1;
      flex-wrap: wrap;
      width: 100%;
      height: 100%;
      margin-top: 40px;
      display: flex;
      justify-content: space-around;

      .project-card {
        @media (max-width: 1701px) {
          margin-top: 20px;
        }
        @media (max-width: 801px) {
          width: 80%;
          margin-left: auto;
          margin-right: auto;
        }

        width: 500px;
        height: 300px;
        background-color: #13131f;
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
        .content-project {
          height: 100px;
          width: 200px;
          margin-top: -40%;
          margin-left: 30%;
          text-align: center;

          @media (max-width: 415px) {
            margin-top: -200px;
            margin-left: 20%;
          }

          .name-project {
            display: flex;

            span {
              margin-left: auto;
              margin-right: auto;
              font-size: 22px;
              color: ${Colors.whiteFont};
              margin-bottom: 10px;
            }
          }
          .tec-project {
            img {
              height: 30px;
              width: 30px;
            }
          }
        }

        .gradient-effect {
          width: 100%;
          height: 100%;
          background-color: gray;
          opacity: 0.1;
          display: flex;
        }
        &:hover {
          transform: scale(1.2);
          transition: ease-in-out;
          transition-duration: 1s;
          cursor: pointer;
        }
      }
    }
  }
`;
