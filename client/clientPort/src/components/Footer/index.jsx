import { Link } from "react-router-dom";
import ContactGitHub from "../../assets/Contact/github.gif";
import ContactEmail from "../../assets/Contact/e-mail.gif";
import ContactLinkedin from "../../assets/Contact/linkedin.gif";
import ContactPhone from "../../assets/Contact/phone.gif";
import FigureFooter from "../../assets/FigureFooter.gif";

import * as F from "./style";

export const Footer = () => {
  return (
    <>
      <F.Footer>
        <div className="left">
          <img src={FigureFooter} alt="" />
        </div>
        <div className="right">
          <div className="contactGroup">
            <div className="contact-card">
              <Link
                to={"mailto:julio.dev.santana@gmail.com"}
                className="img-whrap"
              >
                <img src={ContactEmail} alt="" />
              </Link>
              <span>E-mail</span>
              <p>julio.dev.santana@gmail.com</p>
            </div>

            <div className="contact-card">
              <Link to={"https://wa.me/5513996844641"} className="img-whrap">
                <img src={ContactPhone} alt="" />
              </Link>
              <span>Telefone</span>
              <p>(13) 996844641</p>
            </div>

            <div className="contact-card">
              <Link
                to={"https://www.linkedin.com/in/julio-cesar-santana/"}
                className="img-whrap"
              >
                <img src={ContactLinkedin} alt="" />
              </Link>
              <span>Linkedin</span>
              <p>@julio santana</p>
            </div>

            <div className="contact-card">
              <Link to={"https://github.com/reita009"} className="img-whrap">
                <img src={ContactGitHub} alt="" />
              </Link>
              <span>GitHub</span>
              <p>@reita009</p>
            </div>
          </div>
        </div>
      </F.Footer>
    </>
  );
};
