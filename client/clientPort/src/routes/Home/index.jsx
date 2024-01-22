import * as C from "./Container/style.js";
import * as ComponentHeader from "./Header/style.js";
import * as ComponentSection from "./Section_1/style.js";
import LogoReact from "../../assets/react-icon.png";
import LogoMobile from "../../assets/icon-mobile.gif";
import * as B from "../../components/Buttons.js";
import { useState } from "react";

export const Home = () => {
  //states
  const [mobile, setmobile] = useState("");

  //Functions
  const menuMobile = () => {
    if (mobile == "") {
      setmobile("big");
    } else if (mobile == "big") {
      setmobile("");
    }
  };

  return (
    <>
      <C.Container>
        <ComponentHeader.Header size={mobile}>
          <div className="logo">
            <img src={LogoReact} alt="" />
          </div>
          <div className="title">
            <h1>Portfólio</h1>
          </div>

          <div className="menu-mobile">
            <div className="logo-mobile">
              <img src={LogoMobile} alt="" onClick={menuMobile} />
            </div>
            <div className="title-mobile">
              <h1>Portfólio</h1>
            </div>
            <ComponentHeader.BtnGroupMobile size={mobile}>
              <B.Rainbow>
                <button className="button-85" role="button">
                  Skills
                </button>
                <button className="button-85" role="button">
                  Contatos
                </button>
                <button className="button-85" role="button">
                  Sobre
                </button>
              </B.Rainbow>
            </ComponentHeader.BtnGroupMobile>
          </div>
          <div className="btn-group">
            <B.Rainbow>
              <button className="button-85" role="button">
                Skills
              </button>
              <button className="button-85" role="button">
                Contatos
              </button>
              <button className="button-85" role="button">
                Sobre
              </button>
            </B.Rainbow>
          </div>
        </ComponentHeader.Header>
        <ComponentSection.Section_1>a</ComponentSection.Section_1>
      </C.Container>
    </>
  );
};
