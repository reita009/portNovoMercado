//Components
import * as ComponentHeader from "../../components/Header/style";
import * as B from "../../components/Buttons.js";

//fotos
import LogoReact from "../../assets/react-icon2.png";
import LogoMobile from "../../assets/icon-mobile.gif";
import foto from "../../assets/perfil-image.jpg";
import FigureFooter from "../../assets/FigureFooter.gif";
//contact Logo
import ContactGitHub from "../../assets/Contact/github.gif";
import ContactEmail from "../../assets/Contact/e-mail.gif";
import ContactLinkedin from "../../assets/Contact/linkedin.gif";
import ContactPhone from "../../assets/Contact/phone.gif";

import { Link } from "react-router-dom";
import { useState } from "react";

export const Contact = () => {
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
      <ComponentHeader.Header>
        <ComponentHeader.Header size={mobile}>
          <Link to={"/"}>
            <div className="logo">
              <img src={LogoReact} alt="" />
            </div>
          </Link>
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
                  <Link to={"contato"}>Contatos</Link>
                </button>
                <button className="button-85" role="button">
                  Sobre
                </button>
              </B.Rainbow>
            </ComponentHeader.BtnGroupMobile>
          </div>
          <div className="btn-group">
            <B.BtnWelcome>
              <button className="button-86" role="button">
                Skills
              </button>
            </B.BtnWelcome>
            <B.BtnWelcome>
              <Link to={"/contato"}>
                <button className="button-86" role="button">
                  Contatos
                </button>
              </Link>
            </B.BtnWelcome>
            <B.BtnWelcome>
              <button className="button-86" role="button">
                Sobre
              </button>
            </B.BtnWelcome>
          </div>
        </ComponentHeader.Header>
      </ComponentHeader.Header>
    </>
  );
};
