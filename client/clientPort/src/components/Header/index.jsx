//components

import * as ComponentHeader from "../../components/Header/style.js";
import * as B from "../../components/Buttons.js";
import { useState } from "react";
//fotos
import LogoReact from "../../assets/react-icon2.png";
import LogoMobile from "../../assets/icon-mobile.gif";

import { Link } from "react-router-dom";

export const Header = () => {
  //states
  const [mobile, setmobile] = useState("");
  const [showModal, setShowModal] = useState(false);
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
                <Link to={"/habilidades"}>Skills</Link>
              </button>
              <button className="button-85" role="button">
                <Link to={"/contato"}>Contatos</Link>
              </button>
              <button className="button-85" role="button">
                <Link to={"/sobre"}>Sobre</Link>
              </button>
            </B.Rainbow>
          </ComponentHeader.BtnGroupMobile>
        </div>
        <div className="btn-group">
          <B.BtnWelcome>
            <Link to={"/habilidades"}>
              <button className="button-86" role="button">
                Skills
              </button>
            </Link>
          </B.BtnWelcome>
          <B.BtnWelcome>
            <Link to={"/contato"}>
              <button className="button-86" role="button">
                Contatos
              </button>
            </Link>
          </B.BtnWelcome>
          <B.BtnWelcome>
            <Link to={"/sobre"}>
              <button className="button-86" role="button">
                Sobre
              </button>
            </Link>
          </B.BtnWelcome>
        </div>
      </ComponentHeader.Header>
    </>
  );
};
