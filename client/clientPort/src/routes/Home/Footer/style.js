import styled from "styled-components";
import Colors from "../../../components/Colors";

export const Footer = styled.footer`
  background-color: ${Colors.blueBg};
  height: 600px;
  display: flex;
  padding-left: 5%;
  padding-right: 5%;

  @media (max-width: 1155px) {
    flex-direction: column;
  }
  @media (max-width: 742px) {
    height: 910px;
  }

  .left {
    width: 100%;
    display: flex;

    img {
      height: 350px;
      width: 350px;
      margin: auto;

      @media (max-width: 742px) {
        height: 200px;
        width: 200px;
        margin-top: 70px;
      }
    }
  }
  .right {
    width: 100%;
    display: flex;

    .contactGroup {
      width: 100%;
      display: flex;
      justify-content: space-around;
      @media (max-width: 742px) {
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
      }

      .contact-card {
        display: flex;
        flex-direction: column;
        height: 150px;
        width: 200px;
        margin-top: auto;
        margin-bottom: auto;
        //   margin-left: 20px;
        // margin-right: 20px;

        .img-whrap {
          height: 70px;
          width: 70px;
          background-color: white;
          border-radius: 50%;
          display: flex;
          margin-left: auto;
          margin-right: auto;

          img {
            height: 50px;
            width: 50px;
            margin: auto;
            border-radius: 50%;
          }
        }

        span {
          margin-left: auto;
          margin-right: auto;
          font-size: 20px;
          font-weight: bolder;
          margin-top: 8px;
        }
        p {
          margin-top: 8px;
          color: #576574;
          font-size: 15px;
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
  }
`;
