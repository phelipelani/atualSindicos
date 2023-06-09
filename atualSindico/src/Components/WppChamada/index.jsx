import { IoLogoWhatsapp } from "react-icons/io";
import { DivWpp } from "./style";
export const WppApelo = () => {
  return (
    <DivWpp>
      <h3>
        Converse diretamente <br></br>conosco no WhatsApp!
      </h3>
      <IoLogoWhatsapp className="wppLogo" />
    </DivWpp>
  );
};
