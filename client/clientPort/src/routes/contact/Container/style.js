import styled from "styled-components";
import Colors from "../../../components/Colors";

export const Container = styled.div`
  max-height: 100vh;
  height: 799px;
  width: 100vw;
  display: flex;
  background-color: ${Colors.blackBg};

  margin-top: ${(props) => (props.actionmobile === "big" ? "250px" : "")};

  .alert-error {
    position: absolute;
    width: 600px;
    right: 0px;
    height: 600px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    z-index: 1;
    padding-top: 0%;

    @media (max-width: 1200px) {
      width: 200px;
    }

    .error-msn {
      margin-left: auto;
      margin-right: 20px;
      width: 200px;
    }
  }

  .left {
    height: 100%;
    width: 50%;
    display: flex;
    // background-color: ${Colors.blackBg};

    @media (max-width: 1200px) {
      width: 100%;
    }

    .form {
      margin: auto;
      display: flex;
      flex-direction: column;

      .logo {
        height: 150px;
        width: 150px;
        border-radius: 50%;
        background-color: white;
        margin-left: auto;
        margin-right: auto;
        img {
          height: 100%;
          width: 100%;
        }
      }

      form {
        display: flex;
        flex-direction: column;
        height: 740px;
        width: 500px;
        background-color: white;
        border-radius: 25px;

        @media (max-width: 1200px) {
          width: 340px;
        }

        h1 {
          font-size: 24px;
          font-weight: bolder;
          color: ${Colors.blueBg};
          margin-left: auto;
          margin-right: auto;
          margin-top: 12px;
        }

        .input-area {
          width: 90%;
          margin-left: auto;
          margin-right: auto;
          margin-top: 10px;

          input {
            background-color: ${Colors.grayFont};
          }
          .subject {
            width: 250px;
          }
          .messager {
            height: 100px;
            background-color: ${Colors.grayFont};
          }
        }
        .btn-wharp {
          width: 100%;
          display: flex;
          margin-top: 12px;

          button {
            margin-left: auto;
            margin-right: auto;
            width: 80%;
          }
        }
      }
    }
  }
  .right {
    height: 100%;
    width: 50%;
    background-color: ${Colors.blueBg};
    display: flex;

    @media (max-width: 1200px) {
      display: none;
    }

    img {
      clip-path: circle(50% at 50% 50%);
      height: 600px;
      width: 600px;
      margin: auto;
    }
  }

  /* @media (max-width: 1120px) {
    height: 3000px;
  }
  @media (max-width: 800px) {
    height: 3300px;
  }
  @media (max-width: 580px) {
    height: 3900px;
  }

  @media (max-width: 1400px) {
    padding-left: 0;
    padding-right: 0;
  }*/
`;

export const Alert = styled.div`
  opacity: 0;
`;
