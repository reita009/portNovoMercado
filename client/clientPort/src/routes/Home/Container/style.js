import styled from "styled-components";
import Colors from "../../../components/Colors";

export const Container = styled.div`
  height: 2600px;
  width: 100vw;
  padding-left: 15%;
  padding-right: 15%;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.blackBg};

  @media (max-width: 1120px) {
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
  }
`;
