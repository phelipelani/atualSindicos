import qrcode from "../../Assets/Atual Sindicos.png";
import { DivCartaoImg, DivCartaoStyle, DivCartaoText } from "./style";
export const CartaoContato = () => {
  return (
    <DivCartaoStyle>
      <DivCartaoImg>
        <img src={qrcode} alt="QR code Atual Sindico" />
      </DivCartaoImg>
      <DivCartaoText>
        <h4>
          Atual Sindicos Profissionais <br /> Gestão Condominial
        </h4>
        <div>
          <p>Email</p>
          <h6>sindicoprofissionalatual@gmail.com</h6>
        </div>
        <div>
          <p>Instagran</p>
          <h6>@atual_sindicoprofissional</h6>
        </div>
        <div>
          <p>Telefone</p>
          <h6>(12) 3883 - 8005 </h6>
        </div>
      </DivCartaoText>
    </DivCartaoStyle>
  );
};
