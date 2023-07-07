import { WppApelo } from "../../Components/WppChamada";
import { DivNameStyle, MVVStyle, MainStyle, VitrineStyle } from "./style";
import { IoEyeSharp } from "react-icons/io5";
import { SiTarget } from "react-icons/si";
import { MdDiamond } from "react-icons/md";
import { motion } from "framer-motion";
import logo from "../../Assets/LogoTipo.png";

export const QuemSomos = () => {
  const itemVariants = {
    hidden: { y: 100 },
    visible: { y: 0 },
  };

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
        <motion.li
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ ease: "backIn", duration: 0.5 }}
        >
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
            Administração financeira, gestão de recursos humanos, manutenção
            predial e mediação de conflitos são apenas algumas das áreas em que
            podemos ajudar. Estamos preparados para cuidar de todos os detalhes,
            visando a tranquilidade e a preservação do patrimônio dos
            condôminos.
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
          <MVVStyle>
            <section>
              <div>
                <SiTarget className="icons_missao" />
                <h5> Missão</h5>
              </div>

              <p>
                Nosso objetivo é ser reconhecidos por fornecer as melhores
                soluções e serviços em sindicância profissional e gestão
                condominial, com qualidade, rapidez, tecnologia e ética
                profissional. 
              </p>
            </section>
            <section>
              <div>
                <IoEyeSharp className="icons_missao" />
                <h5> Visão</h5>
              </div>
              <p>
                Nossa visão é ser uma equipe competitiva e abrangente no
                segmento de sindicância profissional e gestão condominial.
                Buscamos oferecer serviços que atendam às
                necessidades dos nossos clientes.
              </p>
            </section>
            <section>
              <div>
                <MdDiamond className="icons_missao" />
                <h5> Valor</h5>
              </div>
              <p>
                Nossos valores fundamentais são o compromisso e
                responsabilidade, a competência e soluções criativas, com foco
                na satisfação dos nossos clientes e nas relações éticas.
              </p>
            </section>
          </MVVStyle>
        </motion.li>
      </VitrineStyle>

      <WppApelo />
    </MainStyle>
  );
};
