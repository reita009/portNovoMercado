//Components
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

import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { gsap } from "gsap";

export const Contact = () => {
  //states
  const [mobile, setmobile] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [showStarOff, setShowStarOff] = useState(true);
  const [showStarOn, setShowStarOn] = useState(false);

  //states do favorite
  const [showOneStar, setShowOneStar] = useState(false);
  const [hiddenOneStar, setHiddenOneStar] = useState(true);
  //
  const [showTwoStars, setShowTwoStars] = useState(false);
  const [hiddenTwoStars, setHiddenTwoStars] = useState(true);
  //
  const [showThreeStars, setShowThreeStars] = useState(false);
  const [hiddenThreeStars, setHiddenThreeStars] = useState(true);
  //
  const [showFourStars, setShowFourStars] = useState(false);
  const [hiddenFourStars, setHiddenFourStars] = useState(true);
  //
  const [showFiveStars, setShowFiveStars] = useState(false);
  const [hiddenFiveStars, setHiddenFiveStars] = useState(true);
  //Variaveis
  const alertRefName = useRef(null);
  const alertRefEmail = useRef(null);
  const alertRefSubject = useRef(null);
  const alertRefMessager = useRef(null);

  //HookForm
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const alertName = alertRefName.current;
    const alertEmail = alertRefEmail.current;
    const alertSubject = alertRefSubject.current;
    const alertMessager = alertRefMessager.current;

    /*Object.keys(errors).length > 0*/

    if (errors.name?.type === "required") {
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
    if (errors.email?.type === "required") {
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

    if (errors.subject?.type === "required") {
      gsap.fromTo(
        alertSubject,
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

    if (errors.messager?.type === "required") {
      gsap.fromTo(
        alertMessager,
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
  const modalActive = () => {
    if (showModal == true) {
      setShowModal(false);
    } else if (showModal == false) {
      setShowModal(true);
    }
  };
  const handleFormSubmit = (data) => {
    console.log(data);
  };
  const assessment = (vote) => {
    switch (vote) {
      case "show1star":
        setShowOneStar(true);
        setHiddenOneStar(false);
        break;
      case "hidden1star":
        setShowOneStar(false);
        setHiddenOneStar(true);
        setShowTwoStars(false);
        setHiddenTwoStars(true);
        setShowThreeStars(false);
        setHiddenThreeStars(true);
        setShowFourStars(false);
        setHiddenFourStars(true);
        setShowFiveStars(false);
        setHiddenFiveStars(true);
        break;
      case "show2star":
        setShowOneStar(true);
        setHiddenOneStar(false);
        setShowTwoStars(true);
        setHiddenTwoStars(false);
        break;
      case "hidden2star":
        setShowOneStar(false);
        setHiddenOneStar(true);
        setShowTwoStars(false);
        setHiddenTwoStars(true);
        setShowThreeStars(false);
        setHiddenThreeStars(true);
        setShowFourStars(false);
        setHiddenFourStars(true);
        setShowFiveStars(false);
        setHiddenFiveStars(true);
        break;
      case "show3star":
        setShowOneStar(true);
        setHiddenOneStar(false);
        setShowTwoStars(true);
        setHiddenTwoStars(false);
        setShowThreeStars(true);
        setHiddenThreeStars(false);
        break;
      case "hidden3star":
        setShowOneStar(false);
        setHiddenOneStar(true);
        setShowTwoStars(false);
        setHiddenTwoStars(true);
        setShowThreeStars(false);
        setHiddenThreeStars(true);
        setShowFourStars(false);
        setHiddenFourStars(true);
        setShowFiveStars(false);
        setHiddenFiveStars(true);
        break;
      case "show4star":
        setShowOneStar(true);
        setHiddenOneStar(false);
        setShowTwoStars(true);
        setHiddenTwoStars(false);
        setShowThreeStars(true);
        setHiddenThreeStars(false);
        setShowFourStars(true);
        setHiddenFourStars(false);
        break;
      case "hidden4star":
        setShowOneStar(false);
        setHiddenOneStar(true);
        setShowTwoStars(false);
        setHiddenTwoStars(true);
        setShowThreeStars(false);
        setHiddenThreeStars(true);
        setShowFourStars(false);
        setHiddenFourStars(true);
        setShowFiveStars(false);
        setHiddenFiveStars(true);
        break;
      case "show5star":
        setShowOneStar(true);
        setHiddenOneStar(false);
        setShowTwoStars(true);
        setHiddenTwoStars(false);
        setShowThreeStars(true);
        setHiddenThreeStars(false);
        setShowFourStars(true);
        setHiddenFourStars(false);
        setShowFiveStars(true);
        setHiddenFiveStars(false);

        break;
      case "hidden5star":
        setShowOneStar(false);
        setHiddenOneStar(true);
        setShowTwoStars(false);
        setHiddenTwoStars(true);
        setShowThreeStars(false);
        setHiddenThreeStars(true);
        setShowFourStars(false);
        setHiddenFourStars(true);
        setShowFiveStars(false);
        setHiddenFiveStars(true);
        break;
    }
  };

  return (
    <>
      {showModal && <M.Modal onClick={modalActive}></M.Modal>}
      {showModal && (
        <M.CardModal>
          <div className="congratilations">
            <h1>Parabéns!</h1>
            <p>Sua mensagem foi enviada com sucesso!</p>
          </div>
          <div className="gif">
            <div className="gif-whrap">
              <img src={gif} alt="" />

              <h1>5.0</h1>
            </div>
          </div>
          <div className="favorite-area">
            <h1>Avalie nossa plataforma</h1>

            <div className="favoriteStar">
              <div className="star star-1">
                {showOneStar && (
                  <img
                    src={StarOn}
                    alt=""
                    onClick={() => {
                      assessment("hidden1star");
                    }}
                  />
                )}
                {hiddenOneStar && (
                  <img
                    src={StarOff}
                    alt=""
                    onClick={() => {
                      assessment("show1star");
                    }}
                  />
                )}
              </div>

              <div className="star  star-2">
                {showTwoStars && (
                  <img
                    src={StarOn}
                    alt=""
                    onClick={() => {
                      assessment("hidden2star");
                    }}
                  />
                )}
                {hiddenTwoStars && (
                  <img
                    src={StarOff}
                    alt=""
                    onClick={() => {
                      assessment("show2star");
                    }}
                  />
                )}
              </div>
              <div className="star  star-3">
                {showThreeStars && (
                  <img
                    src={StarOn}
                    alt=""
                    onClick={() => {
                      assessment("hidden3star");
                    }}
                  />
                )}
                {hiddenThreeStars && (
                  <img
                    src={StarOff}
                    alt=""
                    onClick={() => {
                      assessment("show3star");
                    }}
                  />
                )}
              </div>
              <div className="star  star-4">
                {showFourStars && (
                  <img
                    src={StarOn}
                    alt=""
                    onClick={() => {
                      assessment("hidden4star");
                    }}
                  />
                )}
                {hiddenFourStars && (
                  <img
                    src={StarOff}
                    alt=""
                    onClick={() => {
                      assessment("show4star");
                    }}
                  />
                )}
              </div>
              <div className="star  star-5">
                {showFiveStars && (
                  <img
                    src={StarOn}
                    alt=""
                    onClick={() => {
                      assessment("hidden5star");
                    }}
                  />
                )}
                {hiddenFiveStars && (
                  <img
                    src={StarOff}
                    alt=""
                    onClick={() => {
                      assessment("show5star");
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          <B.BtnCardModal>
            <button className="button-63" role="button">
              Avaliar
            </button>
          </B.BtnCardModal>
        </M.CardModal>
      )}
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
                  <Link to={"/habilidades"}> Skills</Link>
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

          <ComponentContainer.Alert
            className="alert alert-warning error-msn"
            role="alert"
            ref={alertRefSubject}
            isHidden={errors.subject?.type === "required"}
          >
            <p>campo assunto obrigatório!</p>
          </ComponentContainer.Alert>

          <ComponentContainer.Alert
            className="alert alert-warning error-msn"
            role="alert"
            ref={alertRefMessager}
            isHidden={errors.messager?.type === "required"}
          >
            <p>campo menssagem obrigatório!</p>
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
                <label className="form-label">Mensagem:</label>
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
