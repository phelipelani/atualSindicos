import { WppApelo } from "../../Components/WppChamada";
import { DivNameStyle, MainStyle, VitrineStyle } from "./style";
import { motion } from "framer-motion";

import logo from "../../Assets/LogoTipo.png";

export const QuemSomos = () => {
  // const [text, setText] = useState("");

  // const [isDeleting, setIsDeleting] = useState(false);

  const message = " \n";
  // let i = 0;
  // let deleting = false;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (i === message.length && !deleting) {
  //       setIsDeleting(true);
  //       setTimeout(() => {
  //         // eslint-disable-next-line react-hooks/exhaustive-deps
  //         deleting = true;
  //       }, 3000);
  //     }

  //     if (i === 0 && deleting) {
  //       setIsDeleting(false);
  //       deleting = false;
  //     }

  //     if (deleting) {
  //       setText(message.substring(0, i--));
  //     } else {
  //       setText(message.substring(0, i++));
  //     }

  //     if (i > message.length) {
  //       // eslint-disable-next-line react-hooks/exhaustive-deps
  //       i = message.length;
  //     }
  //   }, 100);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [message]);

  const itemVariants = {
    hidden: { x: 100 },
    visible: { x: 0 },
  };
  return (
    <MainStyle>
      <DivNameStyle>
        <img src={logo} alt="LogoTipo Atual_Sindicos" />
        <div>
        <em className="Atual">Atual Sindico Profissional </em> <em className="slogan">Gestão Condominial </em>
        </div>
       
      </DivNameStyle>

      <VitrineStyle>
        <motion.li
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <h3>Quem Somos</h3>
          <br />
          <h4>
            Com experiência em gestão a mais de 10 anos, somos a Síndico
            Profissional e Gestão Condominial, uma empresa dedicada a prestar
            serviços de gestão condominial de alta qualidade. Contamos com uma
            equipe de profissionais experientes e altamente capacitados, que
            estão sempre atualizados com as melhores práticas do mercado.
            Oferecemos soluções personalizadas para atender às necessidades de
            cada condomínio, incluindo administração financeira, gestão de
            recursos humanos, manutenção predial, mediação de conflitos e muito
            mais. Nosso objetivo é garantir a tranquilidade e a preservação do
            patrimônio dos condôminos, através de uma gestão eficiente,
            transparente e profissional. Ao optar pelos nossos serviços, os
            condomínios têm acesso a uma equipe de profissionais altamente
            capacitados, que possuem amplo conhecimento das normas vigentes e
            estão sempre atualizados com as melhores práticas de gestão
            condominial. Valorizamos a comunicação transparente e o
            relacionamento próximo com os condôminos, buscando sempre a sua
            participação e envolvimento nas decisões importantes para o
            condomínio. Nossa empresa preza pela ética, transparência e
            responsabilidade em todas as nossas ações, garantindo uma gestão
            eficaz e confiável.
          </h4>
        </motion.li>
      </VitrineStyle>

      <WppApelo />
    </MainStyle>
  );
};
