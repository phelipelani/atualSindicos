import { MainStyle } from "./styled";
import logo from "../../Assets/lg1.png";
import cond1 from "../../Assets/cond1.jpeg";
import cond2 from "../../Assets/cond2.jpeg";
import cond3 from "../../Assets/cond3.jpeg";
import Video from "../../Assets/video.mp4";
// eslint-disable-next-line react/prop-types
export const Depoimentos = ({ isMenuActive }) => {
  return (
    <MainStyle>
      <div>
        <img src={logo} alt="Logo Atual Sindicos" />
      </div>
      <ul>
        <li>Gestão administrativa e financeira do condominio</li>
        <li>Elaboração de previsao orçamentária e controle de gastos</li>
        <li>Mediação e resolução de conflitos entre condôminos</li>
        <li>Supervisão de obras e manutenção predial</li>
      </ul>
      <div>
        <div>
          <video src={Video} controls />
        </div>
        <div>
          <h2>Buscamos ser diferentes, fazer primeiro e fazer mais. </h2>
          <br />
          <p>
            Acima de tudo atuamos com ética e justiça, sempre valorizando o
            respeito ao ser humano.
          </p>
        </div>
        <div>
          <h2>Alguns de nossos clientes</h2>
          <div>
            <img src={cond1} alt="Foto Condominio 1" />
            <img src={cond2} alt="Foto Condominio 2" />
            <img src={cond3} alt="Foto Condominio 3" />
          </div>
        </div>
      </div>
      <div>
        <h3>Avaliação de nossos clientes</h3>
        <ul>
          <li>
            <h3>""</h3>
            <p></p>
          </li>
          <li>
            <h3>""</h3>
            <p></p>
          </li>
          <li>
            <h3>""</h3>
            <p></p>
          </li>
          <li>
            <h3>""</h3>
            <p></p>
          </li>
        </ul>
      </div>
    </MainStyle>
  );
};
