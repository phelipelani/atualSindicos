import ContactForm from "../../Components/Forms/Contato";
import Maps from "../../Components/Maps";
import { MainStyle } from "./styled";

// eslint-disable-next-line react/prop-types
export const Contato = ({ isMenuActive }) => {
  return (
    <MainStyle className={`${isMenuActive ? "mobile" : ""}`}>
      <h1>Contato</h1>;
      <ContactForm />
      <Maps />
    </MainStyle>
  );
};
