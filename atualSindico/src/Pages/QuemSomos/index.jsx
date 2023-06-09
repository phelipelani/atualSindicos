import { WppApelo } from "../../Components/WppChamada";
import { H2Style, MainStyle, VitrineStyle } from "./style";

export const QuemSomos = () => {
  return (
    <MainStyle>
      <H2Style>
        <em>
          Atual Sindico Profissional <br></br>
          Gestão Condominial
        </em>
        <br></br>
        <br></br>
        <br></br>
        Com experiência em gestão a mais de 15 anos
      </H2Style>
      <VitrineStyle>
        <li>
          <h3>
            Somos a Atual Síndico Profissional e Gestão Condominial, uma empresa
            especializada na prestação de serviços de síndico profissional e
            gestão de condomínios. Nossa equipe é formada por profissionais
            experientes e dedicados a oferecer soluções eficientes e
            personalizadas para atender às necessidades de cada condomínio.
          </h3>
        </li>
        <li>
          <h3>
            Nossos serviços abrangem todas as áreas relacionadas à gestão
            condominial, incluindo administração financeira, gestão de recursos
            humanos, manutenção predial, mediação de conflitos, Nosso objetivo é
            garantir a tranquilidade e a preservação do patrimônio dos
            condôminos, através de uma gestão eficiente, transparente e
            profissional.
          </h3>
        </li>
        <li>
          <h3>
            Ao optar pelos nossos serviços, os condomínios contam com a
            expertise de profissionais capacitados, que possuem amplo
            conhecimento das normas vigentes, além de estarem atualizados com as
            melhores práticas de gestão condominial.
          </h3>
        </li>
        <li>
          <h3>
            Valorizamos a comunicação transparente e o relacionamento próximo
            com os condôminos, buscando sempre a sua participação e envolvimento
            nas decisões importantes para o condomínio. Nossa empresa preza pela
            ética, transparência e responsabilidade em todas as nossas ações,
            garantindo uma gestão eficaz e confiável.
          </h3>
        </li>
        <li>
          <h3>
            Na Atual Síndico Profissional e Gestão Condominial, nosso
            compromisso é fornecer aos condomínios uma gestão profissional de
            qualidade, que traga segurança, tranquilidade e preservação para
            todos os envolvidos. Estamos prontos para cuidar do seu condomínio,
            garantindo uma gestão eficiente e o bem-estar de todos os
            condôminos.
          </h3>
        </li>
      </VitrineStyle>

      <WppApelo />
    </MainStyle>
  );
};
