//components
import * as C from "./Container/style.js";
import * as ComponentHeader from "./Header/style.js";
import * as ComponentSection from "./Section_1/style.js";
import * as ComponentSection2 from "./Section_2/style.js";
import * as ComponentSection3 from "./Section_3/style.js";
import * as B from "../../components/Buttons.js";
import * as M from "../../components/Modal.js";
//fotos
import LogoReact from "../../assets/react-icon2.png";
import LogoMobile from "../../assets/icon-mobile.gif";
import foto from "../../assets/perfil-image.jpg";
//LogoSkill
import Js from "../../assets/skills/icon-js.png";
import Php from "../../assets/skills/icon-php.png";
import Node from "../../assets/skills/icon-node.png";
import Html from "../../assets/skills/icon-html.png";
import Css from "../../assets/skills/icon-css.png";
import Tailwind from "../../assets/skills/icon-tailwind.png";
import Bootstrap from "../../assets/skills/icon-bootstrap.png";
import Github from "../../assets/skills/icon-github.png";
import StyledComponent from "../../assets/skills/icon-styled-component.png";
import React from "../../assets/skills/icon-react.png";
import ReactNative from "../../assets/skills/icon-react-native.png";
import Python from "../../assets/skills/icon-python.png";
import Vite from "../../assets/skills/icon-vite.png";
import Mysql from "../../assets/skills/icon-mysql.png";
import Postgre from "../../assets/skills/icon-postgre.png";
//ferramentas
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useLayoutEffect } from "react";

export const Home = () => {
  //LayoutEffect
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".card-skill", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".section_2",
        //markers: true,
        start: "top 400px",
        end: "bottom 1300px",
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf(".card-skill");
    };
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".project-area", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".section_3",
        markers: true,
        start: "top 400px",
        end: "bottom 1400px",
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf(".card-skill");
    };
  }, []);

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
  const modalActive = () => {
    if (showModal == true) {
      setShowModal(false);
    } else if (showModal == false) {
      setShowModal(true);
    }
  };

  return (
    <>
      {showModal && <M.Modal onClick={modalActive}></M.Modal>}
      {showModal && (
        <M.CardModal>
          <div className="cardContent">
            <div className="left">
              <div className="video">Video</div>
            </div>
            <div className="right">
              <div className="title">
                <h1>Titulo</h1>
                <span onClick={modalActive}>X</span>
              </div>
              <p>
                Searched destroying selfish Gandalf fisherman? May the blessings
                of Elves and Men and all Free Folk go with you. Disband
                achieving unleashed Ered rolling writing fool's forbids dressed
                club greater poisoned. Hole lair months deep pledged Bilbo
                Baggins. Searched destroying selfish Gandalf fisherman? May the
                blessings of Elves and Men and all Free Folk go with you.
                Disband achieving unleashed Ered rolling writing fool's forbids
                dressed club greater poisoned. Hole lair months deep pledged
                Bilbo Baggins. Searched destroying selfish Gandalf fisherman?
                May the blessings of Elves and Men and all Free Folk go with
                you. Disband achieving unleashed Ered rolling writing fool's
                forbids dressed club greater poisoned. Hole lair months deep
                pledged Bilbo Baggins. Searched destroying selfish Gandalf
                fisherman? May the blessings of Elves and Men and all Free Folk
                go with you. Disband achieving unleashed Ered rolling writing
                fool's forbids dressed club greater poisoned. Hole lair months
                deep pledged Bilbo Baggins.
              </p>
              <span>17 de Março de 2022</span>
            </div>
          </div>
          <div className="footer">
            <B.BtnCardModal>
              <button className="button-63" role="button">
                Acessar projeto
              </button>
            </B.BtnCardModal>
            <B.BtnCardModal>
              <button className="button-63" role="button">
                Acessar repositório
              </button>
            </B.BtnCardModal>
            <B.BtnCardModal>
              <button className="button-63" role="button">
                Ver post no linkedin
              </button>
            </B.BtnCardModal>
          </div>
        </M.CardModal>
      )}
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
          <B.BtnWelcome>
            <button className="button-86" role="button">
              Skills
            </button>
          </B.BtnWelcome>
          <B.BtnWelcome>
            <button className="button-86" role="button">
              Contatos
            </button>
          </B.BtnWelcome>
          <B.BtnWelcome>
            <button className="button-86" role="button">
              Sobre
            </button>
          </B.BtnWelcome>
        </div>
      </ComponentHeader.Header>
      <C.Container>
        <ComponentSection.Section_1>
          <div className="sectionWarp">
            <section className="left">
              <div className="welcome">
                <h1>Olá, eu sou o</h1>
                <span>Julio Santana :)</span>
                <p>Desenvolvedor Full-stack</p>
                <div className="btn-group">
                  <B.Rainbow>
                    <button className="button-85" role="button">
                      Download CV
                    </button>
                  </B.Rainbow>
                  <B.Rainbow>
                    <button className="button-85" role="button">
                      Entrar em contato
                    </button>
                  </B.Rainbow>
                </div>
              </div>
            </section>
            <section className="right">
              <div className="perfil-image">
                <img src={foto} alt="" />
              </div>
            </section>
          </div>
          <section className="section-footer">
            <div className="about">
              <h1>Sobre mim</h1>
              <p>
                Desenvolvedor Front-end com experiência em React.js, Next.js,
                Redux, JavaScript, TypeScript, Styled Components, Material UI e
                consumo de APIs REST. Apaixonado pelo desenvolvimento de
                componentes reutilizáveis. Também possui experiência em projetos
                gerenciados por Metodologias Ágeis. Formado em Sistemas de
                Informação e cursando Especialização em Front-End na Digital
                House Brasil.
              </p>
            </div>
          </section>
        </ComponentSection.Section_1>

        <ComponentSection2.Section_2 className="section_2">
          <div className="skill-area">
            <h1>Habilidades</h1>
            <div className="card-group">
              <div className="card-skill">
                <span>JavaScript</span>
                <img src={Js} alt="" />
              </div>
              <div className="card-skill">
                <span>PHP</span>
                <img src={Php} alt="" />
              </div>
              <div className="card-skill">
                <span>NodeJS</span>
                <img src={Node} alt="" />
              </div>
              <div className="card-skill">
                <span>HTML</span>
                <img src={Html} alt="" />
              </div>
              <div className="card-skill">
                <span>CSS</span>
                <img src={Css} alt="" />
              </div>
              <div className="card-skill">
                <span>TAILWIND</span>
                <img src={Tailwind} alt="" />
              </div>
              <div className="card-skill">
                <span>Bootstrap</span>
                <img src={Bootstrap} alt="" />
              </div>
              <div className="card-skill">
                <span>Styled-Component</span>
                <img src={StyledComponent} alt="" />
              </div>
              <div className="card-skill">
                <span>GitHub</span>
                <img src={Github} alt="" />
              </div>
              <div className="card-skill">
                <span>React-Js</span>
                <img src={React} alt="" />
              </div>
              <div className="card-skill">
                <span>React-native</span>
                <img src={ReactNative} alt="" />
              </div>
              <div className="card-skill">
                <span>Vite</span>
                <img src={Vite} alt="" />
              </div>
              <div className="card-skill">
                <span>Python</span>
                <img src={Python} alt="" />
              </div>
              <div className="card-skill">
                <span>Mysql</span>
                <img src={Mysql} alt="" />
              </div>
              <div className="card-skill">
                <span>Postgre</span>
                <img src={Postgre} alt="" />
              </div>
            </div>
          </div>
        </ComponentSection2.Section_2>

        <ComponentSection3.Section_3 className="section_3">
          <div className="title">
            <h1>Projetos</h1>
          </div>

          <div className="project">
            <div className="title-project">
              <h3>Destaques</h3>
            </div>
            <div className="project-area">
              <div className="project-card" onClick={modalActive}>
                <div className="gradient-effect"></div>
                <div className="content-project">
                  <div className="name-project">
                    <span>exemplo</span>
                  </div>
                  <div className="tec-project">
                    <img src={Node} alt="" />
                    <img src={React} alt="" />
                    <img src={Html} alt="" />
                    <img src={Css} alt="" />
                  </div>
                </div>
              </div>
              <div className="project-card">2</div>
              <div className="project-card">3</div>
            </div>
          </div>
        </ComponentSection3.Section_3>
      </C.Container>
    </>
  );
};
