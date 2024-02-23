import styled from "styled-components";
import Colors from "./Colors";

export const Modal = styled.div`
  background-color: gray;
  opacity: 0.5;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export const CardModal = styled.div`
  background-color: ${Colors.hardBlue};
  height: 75%;
  width: 75%;
  top: 18%;
  left: 10%;
  border-radius: 12px;
  display: flex;
  position: fixed;
  z-index: 2000;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1600px) {
  }
  @media (max-width: 1340px) {
    overflow-y: auto;
  }

  .button-63 {
    margin-top: 25px;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }

  .congratilations {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    h1 {
      color: ${Colors.blue};
      font-size: 80px;
      @media (max-width: 555px) {
        font-size: 50px;
      }
    }
    p {
      font-size: 25px;
      color: ${Colors.grayFont};
    }
  }
  .gif {
    display: flex;

    .gif-whrap {
      display: flex;
      margin-left: auto;
      margin-right: auto;

      img {
        height: 200px;
        border-radius: 15px;
        @media (max-width: 500px) {
          height: 120px;
        }
      }
      h1 {
        color: gold;
        font-size: 130px;
        margin-left: 60px;

        @media (max-width: 815px) {
          display: none;
        }
      }
    }
  }
  .favorite-area {
    width: 100%;
    margin-top: 17px;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
      color: ${Colors.grayFont};
    }

    .favoriteStar {
      justify-content: center;
      display: flex;

      .star {
        cursor: pointer;
        margin-left: 10px;
        margin-right: 10px;
        img {
          @media (max-width: 434px) {
            height: 35px;
          }
        }
      }
    }
  }

  .cardContent {
    display: flex;
    @media (max-width: 1340px) {
      flex-direction: column;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    }

    div {
      width: 50%;
    }

    .left {
      .video {
        background-color: red;
        height: 350px;
        width: 580px;
        @media (max-width: 1600px) {
          height: 300px;
          width: 500px;
        }
        @media (max-width: 820px) {
          height: 250px;
          width: 280px;
        }
      }
    }
    .right {
      @media (max-width: 820px) {
        height: 600px;
        width: 100%;
      }

      .title {
        width: 100%;
        display: flex;

        h1 {
          color: ${Colors.blue};
        }
        span {
          margin-left: auto;
          font-size: 20px;
          cursor: pointer;
          @media (max-width: 1340px) {
            margin-top: 60px;
          }
        }
        margin-bottom: 20px;
      }

      p {
        width: 600px;
        color: ${Colors.grayFont};
        margin-bottom: 20px;
        @media (max-width: 1600px) {
          width: 500px;
        }
        @media (max-width: 820px) {
          width: 80%;
          font-size: 12px;
        }
      }
      span {
        color: ${Colors.blue};
        font-size: 17px;
      }
      .date {
        color: ${Colors.blue};
        font-size: 17px;
      }
    }
  }

  .footer {
    width: 100%;
    height: 90px;
    margin-top: 80px;
    display: flex;

    @media (max-width: 820px) {
      flex-direction: column;
    }
    @media (max-width: 460px) {
      margin-top: 200px;
    }
    button {
      height: 15px;
      font-size: 13px;
      margin-right: 20px;
      @media (max-width: 820px) {
        margin-top: 15px;
        margin-bottom: 15px;
        width: 90%;
      }
    }
  }
`;
