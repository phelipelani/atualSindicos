import { WppApelo } from "../../Components/WppChamada";
import { DivNameStyle, MainStyle, VitrineStyle } from "./style";
import logo from "../../Assets/LogoTipo.png";

export const QuemSomos = () => {

  return (
    <MainStyle>
      <DivNameStyle>
        <img src={logo} alt="LogoTipo Atual_Sindicos" />
        <div>
          <em className="Atual">Atual Sindico Profissional </em>{" "}
          <em className="slogan">Gestão Condominial </em>
        </div>
      </DivNameStyle>

      <VitrineStyle>
        <li>
          <h4>Quem Somos</h4>
          <br />
          <br />
          <h3>
            Você está buscando uma gestão condominial de alta qualidade para o
            seu condomínio? A Atual Síndico Profissional e Gestão Condominial
            está aqui para ajudar! Com mais de 10 anos de experiência no ramo,
            somos uma equipe dedicada e experiente, pronta para oferecer
            soluções personalizadas que atendam às suas necessidades.
            <br />
            <br />
            Nossa empresa se destaca pela excelência em todos os aspectos da
            gestão condominial. Contamos com profissionais altamente
            capacitados, sempre atualizados com as melhores práticas do mercado,
            para garantir que o seu condomínio esteja em boas mãos.
            <br />
            <br />
            Administração financeira, gestão de pessoas, manutenção predial e
            mediação de conflitos são apenas algumas das áreas em que podemos
            ajudar. Estamos preparados para cuidar de todos os detalhes, visando
            a tranquilidade e a preservação do patrimônio dos condôminos.
            <br />
            <br />
            <br />
            <br />
            <h4>Por que escolher a Atual Sindico Profissional?</h4>
            <br />
            <br />
            Ao escolher os nossos serviços, você terá acesso a uma equipe de
            profissionais altamente capacitados, que conhecem profundamente as
            normas vigentes e aplicam as melhores práticas de gestão
            condominial. Valorizamos a transparência e o relacionamento próximo
            com os condôminos, buscando sempre a participação ativa de todos nas
            decisões importantes para o condomínio.
            <br />
            <br />
            A ética, a transparência e a responsabilidade são valores
            fundamentais para nós. Nossas ações são pautadas por uma gestão
            eficaz e confiável, que visa proporcionar o melhor para o seu
            condomínio.
            <br />
            <br />
            Não perca tempo e entre em contato conosco hoje mesmo! Descubra como
            podemos transformar a gestão do seu condomínio, garantindo a
            segurança, a tranquilidade e o bem-estar de todos os condôminos.
          </h3>
          <br />
          <br />
        </li>
      </VitrineStyle>

      <WppApelo />
    </MainStyle>
  );
};
