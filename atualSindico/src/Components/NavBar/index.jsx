import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import {
  DivHeader,
  LogoDivStyle,
  MenuHamburgue,
  NavListStyle,
  SociaisMidiasStyled,
} from "./style";
import { Link, Outlet } from "react-router-dom";
import logo from "../../../src/Assets/lg1.png";

// eslint-disable-next-line react/prop-types
export const NavBar = ({ isMenuActive, setIsMenuActive }) => {
  const handleMenuToggle = () => {
    setIsMenuActive(!isMenuActive);
  };

  function openFone() {
    const url = "tel:+551238838005";
    window.open(url);
  }

  function openInsta() {
    const url = "https://www.instagram.com/atual_sindicoprofissional/";
    window.open(url);
  }

  function openWhatsApp() {
    const phoneNumber = "+5512983003611";
    const message = "Olá! Gostaria de conversar!";
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  }

  return (
    <>
      <DivHeader>
        <LogoDivStyle>
          <img src={logo} alt="Logo Atual" />
        </LogoDivStyle>
        <div className="menu_desktop">
          <SociaisMidiasStyled>
            <div className="socialContainer">
              <BsFillTelephoneOutboundFill className="wppIcons fone" />
              <h5 onClick={openFone}>(12) 3883 - 8005 </h5>
            </div>
            <div className="socialContainer">
              <IoLogoWhatsapp onClick={openWhatsApp} className="wppIcons wpp" />
              <h5 onClick={openWhatsApp}>(12) 9 8300 - 3611</h5>
            </div>
            <div className="socialContainer">
              <RiInstagramFill className="wppIcons insta" />
              <h5 onClick={openInsta}>@atual_sindicoprofissional</h5>
            </div>
          </SociaisMidiasStyled>
          <div>
            <MenuHamburgue className={`mobileMenu`} onClick={handleMenuToggle}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </MenuHamburgue>
            <NavListStyle className={`${!isMenuActive ? "close" : ""}`}>
              <Link to={"/"}>Home</Link>
              <Link to={"/Missao"}>Missão & Valor</Link>
              <Link to={"/quem_somos"}>Quem Somos</Link>
              <Link to={"contato"}>Contato</Link>
            </NavListStyle>
          </div>
        </div>
      </DivHeader>
      <Outlet />
    </>
  );
};
