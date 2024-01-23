import styled from "styled-components";
import Colors from "../../../components/Colors";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.blackBg};
  @media (max-width: 801px) {
    overflow-x: hidden;
  }
`;
