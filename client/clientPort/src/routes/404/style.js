import styled from "styled-components";
import Colors from "../../components/Colors";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: ${Colors.blueBg};

  img {
    height: 600px;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 35px;
    @media (max-width: 600px) {
      height: 300px;
    }
  }

  @media (max-width: 600px) {
    height: 400px;
  }
`;
