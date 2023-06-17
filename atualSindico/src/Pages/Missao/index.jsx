import { ContainerStyle, MainStyle } from "./styled";

// eslint-disable-next-line react/prop-types
export const Missao = ({ isMenuActive }) => {
  return (
    <MainStyle className={`${isMenuActive ? "mobile" : ""}`}>
      <ContainerStyle>
        <section>
          <h3>Missão</h3>
          <p>
            Atual síndico profissional e gestão condominial ser reconhecida por
            prestar com qualidade as melhores soluções e serviços em sindico
            profissional e gestao condominial, por meio de rapidez, tecnologia e
            ética profissional, proporcionando o bom estar dos nossos clientes.
            Garantindo cada vez mais credibilidade, solidez e excelência no
            mercado{" "}
          </p>
        </section>
        <section>
          <h3>Visão</h3>
          <p>
            Ser uma equipe competitiva que atue de forma abrangente no
            seguimento de sindico profissional e gestão condominial, através de
            um serviço de qualidade, buscando atender as necessidades e
            expectativas dos nossos clientes.
          </p>
        </section>
        <section>
          <h3>Valor</h3>
          <p>
            Compromisso e responsabilidade, competência e soluções criativas,
            com foco na satisfação dos nossos clientes e ética nas relações.
          </p>
        </section>
      </ContainerStyle>
    </MainStyle>
  );
};
