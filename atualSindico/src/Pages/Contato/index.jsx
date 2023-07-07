import { CartaoContato } from "../../Components/CartaoContato";
import ContactForm from "../../Components/Forms/Contato";
import Maps from "../../Components/Maps";
import { WppApelo } from "../../Components/WppChamada";
import { ContainerContato, ContainerStyle, MainStyle } from "./styled";

// eslint-disable-next-line react/prop-types
export const Contato = ({ isMenuActive }) => {
  return (
    <MainStyle className={`${isMenuActive ? "mobile" : ""}`}>
      <ContainerStyle>
        <ContainerContato>
          <CartaoContato />
          <ContactForm />
        </ContainerContato>
        <Maps />
      </ContainerStyle>
      <WppApelo />
    </MainStyle>
  );
};
