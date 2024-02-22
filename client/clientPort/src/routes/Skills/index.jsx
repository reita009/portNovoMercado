import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer/index.jsx";
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
import bootstrap from "../../assets/paginaSkill/markup/bootstrap.png";
import styled from "../../assets/paginaSkill/markup/styled.png";
import ReactJS from "../../assets/paginaSkill/frontend/ReactJS.png";
import Angular from "../../assets/paginaSkill/frontend/Angular.png";
import Ejs from "../../assets/paginaSkill/frontend/Ejs.png";
import NextJS from "../../assets/paginaSkill/frontend/NextJS.png";
import NodeJs from "../../assets/paginaSkill/backend/NodeJs.png";
import Express from "../../assets/paginaSkill/backend/expressJS.png";
import KnexJs from "../../assets/paginaSkill/backend/KnexJs.png";
import Sequelize from "../../assets/paginaSkill/backend/Sequelize.png";
import Mysql from "../../assets/paginaSkill/bancoDeDados/mysql.png";
import Postgre from "../../assets/paginaSkill/bancoDeDados/postgre.png";
import MongoDb from "../../assets/paginaSkill/bancoDeDados/mongodb.png";
import ReactNative from "../../assets/paginaSkill/mobile/reactNative.png";
import GitHub from "../../assets/paginaSkill/plataform/github.png";
import GitLab from "../../assets/paginaSkill/plataform/gitlab.png";
import NetliFy from "../../assets/paginaSkill/plataform/netlify.png";
import Jira from "../../assets/paginaSkill/plataform/jira.png";

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
      <Header />
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
                Conhecimento sólido e bem organizado de páginas web é
                fundamental. Tendo total conhecimento de todas as tags e
                frameworks para montar um sistema robusto
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
                Tenho conhecimento avançado em CSS, tendo total conhecimento da
                linguagem de estilo e suas respectivas ferramentas, além de um
                certo conhecimento avançado para animações.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="logo">
              <img src={bootstrap} alt="" />
            </div>
            <div className="content">
              <span>Bootstrap</span>
              <p>
                Conhecimento total sobre a ferramenta de estilo e todas as suas
                respectivas classes.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="logo">
              <img src={styled} alt="" />
            </div>
            <div className="content">
              <span>Styled-components</span>
              <p>
                Conhecimento total da ferramenta, de sua utilização na criação
                de componentes e da conexão prévia com o CSS.
              </p>
            </div>
          </div>
        </ComponentContainer.SkillArea>
        <div className="title">Frontend</div>
        <ComponentContainer.SkillArea>
          <div className="card">
            <div className="logo">
              <img src={ReactJS} alt="" />
            </div>
            <div className="content">
              <span>React-Js</span>
              <p>
                Conhecimento total em ReactJS e suas respectivas bibliotecas,
                conhecimento extremamente avançado em hooks, componentes
                individuais e criação de single-page applications.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="logo">
              <img src={Angular} alt="" />
            </div>
            <div className="content">
              <span>Angular</span>
              <p>
                Conhecimento pleno da ferramenta, criação de app, uso de
                property binding e de diversas diretivas.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="logo">
              <img src={Ejs} alt="" />
            </div>
            <div className="content">
              <span>EJS</span>
              <p>
                Achei uma ferramenta bem simples de se trabalhar, confesso que
                não fui muito a fundo em conhecimento por achar um tanto
                limitada, mas tenho conhecimento totalmente funcional.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="logo">
              <img src={NextJS} alt="" />
            </div>
            <div className="content">
              <span>Next-JS</span>
              <p>
                Tenho conhecimentos sólidos em consequência do meu leque de
                conhecimento em ReactJS e NodeJS. Estou estudando a ferramenta e
                me considero um usuário funcional.
              </p>
            </div>
          </div>
        </ComponentContainer.SkillArea>
        <div className="title">Backend</div>
        <ComponentContainer.SkillArea>
          <div className="card">
            <div className="logo">
              <img src={NodeJs} alt="" />
            </div>
            <div className="content">
              <span>NodeJs</span>
              <p>
                Total conhecimento da ferramenta de backend e suas respectivas
                bibliotecas, conhecimento em lógica para criação de sistemas e
                aplicativo backend usando Node.js.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="logo">
              <img src={Express} alt="" />
            </div>
            <div className="content">
              <span>Express</span>
              <p>
                Conhecimento avançado da ferramenta no uso de rotas e criação de
                servidores, e autoconhecimento na criação de API Rest
              </p>
            </div>
          </div>

          <div className="card">
            <div className="logo">
              <img src={Sequelize} alt="" />
            </div>
            <div className="content">
              <span>Sequelize</span>
              <p>
                Pleno conhecimento da ferramenta de ORM, projetando aplicativos
                com uma conexão sólida com bancos de dados como MySQL e
                PostgreSQL.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="logo">
              <img src={KnexJs} alt="" />
            </div>
            <div className="content">
              <span>KnexJs</span>
              <p>
                Conhecimento total da ferramenta e consultas que facilitam a
                conexão com os bancos de dados SQL.
              </p>
            </div>
          </div>
        </ComponentContainer.SkillArea>
        <div className="title">Banco de dados</div>
        <ComponentContainer.SkillArea>
          <div className="card">
            <div className="logo">
              <img src={Mysql} alt="" />
            </div>
            <div className="content">
              <span>Mysql</span>
              <p>
                Conhecimento total na tecnologia de banco de dados MySQL, em
                criação de banco de dados, tabelas, etc
              </p>
            </div>
          </div>

          <div className="card">
            <div className="logo">
              <img src={Postgre} alt="" />
            </div>
            <div className="content">
              <span>PostgreSql</span>
              <p>
                Conhecimento total na tecnologia de banco de dados Postgre, em
                criação de banco de dados, tabelas, etc.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="logo">
              <img src={MongoDb} alt="" />
            </div>
            <div className="content">
              <span>MongoDb</span>
              <p>
                Conhecimento pleno na tecnologia de banco de dados não
                relacional, conhecimento em conexão e criação de collections.
              </p>
            </div>
          </div>
        </ComponentContainer.SkillArea>
        <div className="title">Mobile</div>
        <ComponentContainer.SkillArea>
          <div className="card">
            <div className="logo">
              <img src={ReactNative} alt="" />
            </div>
            <div className="content">
              <span>ReactNative</span>
              <p>
                Conhecimento total na ferramenta mobile, conhecimento na criação
                do aplicativo, autoconhecimento na criação de componentes e
                deploy do app.
              </p>
            </div>
          </div>
        </ComponentContainer.SkillArea>
        <div className="title">Plataformas de gerenciamentos</div>
        <ComponentContainer.SkillArea>
          <div className="card">
            <div className="logo">
              <img src={GitHub} alt="" />
            </div>
            <div className="content">
              <span>GitHub</span>
              <p>
                Total conhecimento na ferramenta de versionamento, conhecimento
                em divisões de branch e uso correto de commit, etc
              </p>
            </div>
          </div>

          <div className="card">
            <div className="logo">
              <img src={GitLab} alt="" />
            </div>
            <div className="content">
              <span>GitLab</span>
              <p>
                Conhecimento pleno na ferramenta de versionamento e experiência
                profissional em meu antigo emprego
              </p>
            </div>
          </div>

          <div className="card">
            <div className="logo">
              <img src={NetliFy} alt="" />
            </div>
            <div className="content">
              <span>Netlify</span>
              <p>
                Total conhecimento na plataforma de hospedagem de site e alguns
                projetos já hospedados.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="logo">
              <img src={Jira} alt="" />
            </div>
            <div className="content">
              <span>Jira</span>
              <p>
                Total conhecimento na metodologia ágil usando a ferramenta Jira,
                plataforma de gerenciamento de projetos.
              </p>
            </div>
          </div>
        </ComponentContainer.SkillArea>
      </ComponentContainer.Container>
      <Footer />
    </>
  );
};
