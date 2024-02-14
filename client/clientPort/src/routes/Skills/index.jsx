import * as ComponentHeader from "../../components/Header/style";
import * as ComponentContainer from "./Container/style.js";
import * as B from "../../components/Buttons.js";
import * as M from "../../components/Modal.js";

//fotos
import LogoReact from "../../assets/react-icon2.png";
import LogoMobile from "../../assets/icon-mobile.gif";
import LogoForm from "../../assets/LogoForm.png";
import foto from "../../assets/perfil-image.jpg";
import FigureFooter from "../../assets/FigureFooter.gif";
import BrandComunication from "../../assets/brandCommunication.gif";
import gif from "../../assets/giphy.gif";
import StarOn from "../../assets/favoriteOn.png";
import StarOff from "../../assets/favoriteOff.png";
//contact Logo
import ContactGitHub from "../../assets/Contact/github.gif";
import ContactEmail from "../../assets/Contact/e-mail.gif";
import ContactLinkedin from "../../assets/Contact/linkedin.gif";
import ContactPhone from "../../assets/Contact/phone.gif";
//Skill Logo
import Logic1 from "../../assets/paginaSkill/logic/logic1.png";
import Logic2 from "../../assets/paginaSkill/logic/logic2.png";
import Logic3 from "../../assets/paginaSkill/logic/logic3.png";
import Logic4 from "../../assets/paginaSkill/logic/logic4.png";
import html from "../../assets/paginaSkill/markup/html.png";
import css from "../../assets/paginaSkill/markup/css.png";

import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { gsap } from "gsap";

export const Skills = () => {
  //states
  const [mobile, setmobile] = useState("");

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
                <Link to={"/"}> Home</Link>
              </button>
              <button className="button-85" role="button">
                <Link to={"/habilidades"}>Skills</Link>
              </button>
              <button className="button-85" role="button">
                <Link to={"/contato"}>Contatos</Link>
              </button>
              <button className="button-85" role="button">
                Sobre
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
            <button className="button-86" role="button">
              Sobre
            </button>
          </B.BtnWelcome>
        </div>
      </ComponentHeader.Header>
      <ComponentContainer.Title>
        <div className="wrapper">
          <svg>
            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
              Habilidades
            </text>
          </svg>
        </div>
      </ComponentContainer.Title>

      <ComponentContainer.Container>
        <div className="title">Lógica de programação</div>
        <ComponentContainer.SkillArea>
          <div className="card">
            <div className="logo">
              <img src={Logic1} alt="" />
            </div>
            <div className="content">
              <span>JavaScript</span>
              <p>
                Conhecimento sólido em lógica de programação, com total
                eficiência no uso de variáveis, funções, loops, array,
                condicionais e requisições via API.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="logo">
              <img src={Logic2} alt="" />
            </div>
            <div className="content">
              <span>PHP</span>
              <p>
                Conhecimento sólido em lógica de programação, com total
                eficiência no uso de variáveis, funções, loops, array,
                condicionais e requisições via API. Integrações sólidas com
                formulários e banco de dados.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="logo">
              <img src={Logic3} alt="" />
            </div>
            <div className="content">
              <span>Python</span>
              <p>
                Conhecimento sólido em lógica de programação, com total
                eficiência no uso de variáveis, funções, loops, condicionais e
                dicionários
              </p>
            </div>
          </div>

          <div className="card">
            <div className="logo">
              <img src={Logic4} alt="" />
            </div>
            <div className="content">
              <span>C#</span>
              <p>
                Conhecimento sólido em lógica de programação, com total
                eficiência no uso de variáveis, funções, loops, listas
              </p>
            </div>
          </div>
        </ComponentContainer.SkillArea>
        <div className="title">Linguagens de marcações</div>
        <ComponentContainer.SkillArea>
          <div className="card">
            <div className="logo">
              <img src={html} alt="" />
            </div>
            <div className="content">
              <span>HTML</span>
              <p>
                Conhecimento sólido em lógica de programação, com total
                eficiência no uso de variáveis, funções, loops, listas
              </p>
            </div>
          </div>

          <div className="card">
            <div className="logo">
              <img src={css} alt="" />
            </div>
            <div className="content">
              <span>CSS</span>
              <p>
                Conhecimento sólido em lógica de programação, com total
                eficiência no uso de variáveis, funções, loops, listas
              </p>
            </div>
          </div>
        </ComponentContainer.SkillArea>
      </ComponentContainer.Container>
    </>
  );
};