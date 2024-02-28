import Colors from "../../components/Colors";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import * as C from "./style";

import Image from "../../assets/404.gif";

export const NotFound = () => {
  return (
    <>
      <Header />
      <C.Container>
        <img src={Image} alt="" />
      </C.Container>
      <Footer />
    </>
  );
};
