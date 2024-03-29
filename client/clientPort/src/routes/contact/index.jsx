//Components
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

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { gsap } from "gsap";
import axios from "axios";

export const Contact = () => {
  //states
  const [mobile, setmobile] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [star, setStar] = useState(0);

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
  const alertRefMessage = useRef(null);

  const navigate = useNavigate();

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
    const alertMessage = alertRefMessage.current;

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

    if (errors.message?.type === "required") {
      gsap.fromTo(
        alertMessage,
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
  const handleFormSubmit = async (data) => {
    /*  const res = await axios
      .post("http://localhost:8081/message", data)
      .then((response) => {
        if (response.status == 200) {
          setShowModal(true);
        }
      })
      .catch((err) => {
        console.log(`opa! algo deu errado: ${err}`);
      });
    //console.log(data);*/
    setShowModal(true);
  };
  const handleVoteStar = async () => {
    /* let votado = { vote: star };

    const res = await axios
      .post("http://localhost:8081/star", votado)
      .then((response) => {
        if (response.status == 200) {
          console.log(response);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(`opa! algo deu errado: ${err}`);
      });
  };
  const voteStar = (vote) => {
    setStar(vote);*/
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
        setStar("3");
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
        setStar("4");
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
        setStar("5");

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
          <form className="favorite-area">
            <h1>Avalie nossa plataforma</h1>

            <div className="favoriteStar">
              <div
                className="star star-1"
                onClick={() => {
                  voteStar(1);
                }}
              >
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

              <div
                className="star  star-2"
                onClick={() => {
                  voteStar(2);
                }}
              >
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
              <div
                className="star  star-3"
                onClick={() => {
                  voteStar(3);
                }}
              >
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
              <div
                className="star  star-4"
                onClick={() => {
                  voteStar(4);
                }}
              >
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
              <div
                className="star  star-5"
                onClick={() => {
                  voteStar(5);
                }}
              >
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
          </form>
          <Link to="/">
            <B.BtnCardModal>
              <button
                className="button-63"
                role="button"
                onClick={handleVoteStar}
              >
                Avaliar
              </button>
            </B.BtnCardModal>
          </Link>
        </M.CardModal>
      )}
      <Header />

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
            ref={alertRefMessage}
            isHidden={errors.message?.type === "required"}
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
                  {...register("message", {
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
      <Footer />
    </>
  );
};
