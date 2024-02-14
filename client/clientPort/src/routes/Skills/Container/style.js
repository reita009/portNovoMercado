import styled from "styled-components";
import Colors from "../../../components/Colors";

export const Container = styled.div`
  max-height: 100vh;
  height: 799px;
  width: 100vw;
  background-color: ${Colors.blackBg};
  padding-left: 50px;
  padding-right: 50px;
  @media (max-width: 620px) {
    padding-left: 0;
    padding-right: 0;
  }

  .title {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    font-size: 25px;
    font-weight: bold;
    color: ${Colors.blueLigth};
  }

  // margin-top: ${(props) => (props.actionmobile === "big" ? "250px" : "")};
`;

export const SkillArea = styled.div`
  width: 90%;
  height: 400px;
  padding-top: 30px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .card {
    display: flex;
    margin-top: 20px;
    flex-direction: row;
    height: 240px;
    width: 360px;
    padding: 3px;
    box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 1);

    .logo {
      width: 100px;
      img {
        width: 60px;
      }
    }
    .content {
      margin-left: 10px;
    }
    span {
      color: ${Colors.blue};
      font-weight: bold;
      width: 200px;
    }
  }
`;

export const Title = styled.div`
  height: 300px;
  width: 100vw;
  background-color: ${Colors.blackBg};
  padding-top: 50px;
  @import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");

  svg {
    font-family: "Russo One", sans-serif;
    width: 100%;
    height: 100%;
  }
  svg text {
    animation: stroke 5s infinite alternate;
    stroke-width: 2;
    stroke: #1e90ff;
    font-size: 100px;

    @media (max-width: 620px) {
      font-size: 60px;
    }
  }
  @keyframes stroke {
    0% {
      fill: rgba(30, 144, 255, 0);
      stroke: rgba(30, 144, 255, 1);
      stroke-dashoffset: 25%;
      stroke-dasharray: 0 50%;
      stroke-width: 2;
    }
    70% {
      fill: rgba(30, 144, 255, 0);
      stroke: rgba(30, 144, 255, 1);
    }
    80% {
      fill: rgba(30, 144, 255, 0);
      stroke: rgba(30, 144, 255, 1);
      stroke-width: 3;
    }
    100% {
      fill: rgba(30, 144, 255, 1);
      stroke: rgba(30, 144, 255, 0);
      stroke-dashoffset: -25%;
      stroke-dasharray: 50% 0;
      stroke-width: 0;
    }
  }

  .wrapper {
    background-color: ${Colors.blackBg};
  }
`;
