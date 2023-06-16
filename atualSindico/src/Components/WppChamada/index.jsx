import { IoLogoWhatsapp } from "react-icons/io";
import { DivWpp } from "./style";
export const WppApelo = () => {
  function openWhatsApp() {
    const phoneNumber = "+5512983003611";
    const message = "Olá! Gostaria de conversar!";
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  }
  return (
    <DivWpp onClick={openWhatsApp}>
      <h3>
        Converse diretamente <br></br>conosco no WhatsApp!
      </h3>
      <IoLogoWhatsapp className="wppLogo" />
    </DivWpp>
  );
};
