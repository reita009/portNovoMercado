//Components
import * as ComponentHeader from "../../components/Header/style";
import * as ComponentContainer from "./Container/style.js";
import * as B from "../../components/Buttons.js";

//fotos
import LogoReact from "../../assets/react-icon2.png";
import LogoMobile from "../../assets/icon-mobile.gif";
import LogoForm from "../../assets/LogoForm.png";
import foto from "../../assets/perfil-image.jpg";
import FigureFooter from "../../assets/FigureFooter.gif";
import BrandComunication from "../../assets/brandCommunication.gif";
//contact Logo
import ContactGitHub from "../../assets/Contact/github.gif";
import ContactEmail from "../../assets/Contact/e-mail.gif";
import ContactLinkedin from "../../assets/Contact/linkedin.gif";
import ContactPhone from "../../assets/Contact/phone.gif";

import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { gsap } from "gsap";

export const Contact = () => {
  //states
  const [mobile, setmobile] = useState("");
  //Variaveis
  const alertRefName = useRef(null);
  const alertRefEmail = useRef(null);

  //HookForm
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const alertName = alertRefName.current;
    const alertEmail = alertRefEmail.current;
    if (/*Object.keys(errors).length > 0*/ errors.name?.type === "required") {
      gsap.fromTo(
        alertName,
        {
          opacity: 0,
          x: 300,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
        }
      );
    }
    if (/*Object.keys(errors).length > 0*/ errors.email?.type === "required") {
      gsap.fromTo(
        alertEmail,
        {
          opacity: 0,
          x: 300,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
        }
      );
    }
  }, [errors]);

  //Functions
  const menuMobile = () => {
    if (mobile == "") {
      setmobile("big");
    } else if (mobile == "big") {
      setmobile("");
    }
  };

  const handleFormSubmit = (data) => {
    console.log(data);
  };
  console.log(errors.name?.type === "required");
  console.log(errors.email?.type === "required");
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
                  <Link to={"/"}> Home</Link>
                </button>
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
      <ComponentContainer.Container actionmobile={mobile}>
        <div className="alert-error ">
          <ComponentContainer.Alert
            className="alert alert-warning error-msn"
            role="alert"
            ref={alertRefName}
            isHidden={errors.name?.type === "required"}
          >
            <p>campo nome obrigatório!</p>
          </ComponentContainer.Alert>
          <ComponentContainer.Alert
            className="alert alert-warning error-msn"
            role="alert"
            ref={alertRefEmail}
            isHidden={errors.email?.type === "required"}
          >
            <p>campo E-mail obrigatório!</p>
          </ComponentContainer.Alert>
        </div>

        <div className="left ">
          <div className="form">
            <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
              <div className="logo">
                <img src={LogoForm} alt="" />
              </div>
              <h1>Entre em contato</h1>
              <div className="mb-3 input-area">
                <label className="form-label">Nome:</label>
                <input
                  {...register("name", { required: true, minLength: 2 })}
                  type="text"
                  className="form-control"
                  placeholder="Digite seu nome..."
                />
              </div>
              <div className="mb-3 input-area">
                <label className="form-label">E-mail:</label>
                <input
                  {...register("email", { required: true, minLength: 2 })}
                  type="email"
                  className="form-control"
                  placeholder="Digite seu email..."
                />
              </div>
              <div className="mb-3 input-area">
                <label className="form-label">Assunto:</label>
                <input
                  {...register("subject", { required: true, minLength: 2 })}
                  type="text"
                  className="form-control subject"
                  placeholder="Digite qual o assunto..."
                />
              </div>

              <div className="mb-3 input-area">
                <label className="form-label">E-mail:</label>
                <textarea
                  {...register("messager", {
                    required: true,
                    minLength: 2,
                    maxLength: 300,
                  })}
                  type="text"
                  cols="30"
                  rows="10"
                  className="form-control messager"
                  placeholder="Digite seu email..."
                />
              </div>

              <B.BtnForm className="btn-wharp">
                <button type="submit" className="button-19" role="button">
                  Enviar
                </button>
              </B.BtnForm>
            </form>
          </div>
        </div>
        <div className="right">
          <img src={BrandComunication} alt="" />
        </div>
      </ComponentContainer.Container>
    </>
  );
};
