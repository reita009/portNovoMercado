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
  height: 65%;
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

  .cardContent {
    display: flex;

    div {
      width: 50%;
    }

    .left {
      .video {
        background-color: red;
        height: 350px;
        width: 580px;
      }
    }
    .right {
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
        }
        margin-bottom: 20px;
      }
      p {
        width: 600px;
        color: ${Colors.grayFont};
        margin-bottom: 20px;
      }
      span {
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

    button {
      height: 15px;
      font-size: 13px;
      margin-right: 20px;
    }
  }
`;
