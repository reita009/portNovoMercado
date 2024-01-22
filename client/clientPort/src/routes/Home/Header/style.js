import styled from "styled-components";
import Colors from "../../../components/Colors.js";

export const Header = styled.header`
  height: ${(props) => (props.size === "big" ? "300px" : "150px")};
  width: 100%;
  display: flex;
  color: ${Colors.whiteFont};
  border-bottom: ${Colors.blue} 2px solid;

  .menu-mobile {
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 801px) {
      display: none;
    }
  }
  .title {
    margin-bottom: 2px;
  }

  .logo-mobile {
    margin-top: 12px;
    display: none;
    img {
      height: 60px;
      width: 60px;
      cursor: pointer;
      margin-right: auto;
      margin-left: auto;
    }

    @media (max-width: 801px) {
      display: flex;
    }
  }
  .title-mobile {
    display: none;

    @media (max-width: 801px) {
      display: flex;
    }

    h1 {
      margin-left: auto;
      margin-right: auto;
    }
  }

  .logo {
    height: 60px;
    width: 60px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 20px;
    border-radius: 50%;
    cursor: pointer;
    img {
      height: 60px;
      width: 60px;
    }

    @media (max-width: 800px) {
      display: none;
    }
  }
  .title {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;

    @media (max-width: 800px) {
      display: none;
    }
  }
  .btn-group {
    width: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    button {
      margin-right: 5px;
      margin-left: 5px;
    }

    @media (max-width: 800px) {
      display: none;
    }
  }
`;

export const BtnGroupMobile = styled.div`
  height: 300px;
  width: 100vw;
  margin-top: auto;
  margin-right: auto;
  padding-bottom: 5px;

  display: ${(props) => (props.size === "big" ? "flex" : "none")};
  img {
    height: 60px;
    width: 60px;
    cursor: pointer;
    margin-right: auto;
    margin-left: auto;
  }
  div {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  button {
    width: 80%;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }
`;
