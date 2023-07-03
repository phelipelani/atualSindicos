import { styled } from "styled-components";

export const FormStyle = styled.form`
  border-radius: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  background: rgba(218, 233, 240, 0.6);
  box-shadow: 0 2px 4px rgba(49, 29, 59, 0.7);
  width: 45%;

  @media (min-width: 720px) {
    height: 80%;
    align-items: center;
  }
`;

export const HeaderForm = styled.div`
  @media (min-width: 720px) {
    border-radius: 1rem;
    height: 20%;
    width: 80%;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 0.5rem;
    margin-bottom: 1.5rem;
    justify-content: space-around;
    img {
      height: auto;
      object-fit: cover;
    }
    h3 {
      font-size: 2rem;
      color: #411052;
    }
  }
`;
export const BodyForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 90%;
  gap: 1.5rem;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 15%;
    label {
      font-size: 1.5rem;
      color: #411052;
      font-weight: 800;
    }
    input {
      width: 100%;
      padding: 8px;
      font-size: 1rem;
      border: none;
      border-bottom: 1px solid #fff;
      border-radius: 0;
      background: transparent;
      :focus {
        outline: none;
        border: 2px solid blue;
      }
    }
    textarea {
      background-color: rgba(218, 233, 240, 0.3);
      color: #411052;
      font-size: 1.2rem;
      padding:0.5rem;
      height: 2.5em;
      overflow: auto; /* Adiciona barra de rolagem quando o conteúdo excede o tamanho do textarea */
      resize: none; /* Impede o redimensionamento do textarea pelo usuário */
    }
  }
  button {
    width: 50%;
    height: 12%;
    border-radius: 2rem;

    background-color: #411052;
    color: rgba(218, 233, 240, 1);
    cursor: pointer;

    font-size: 2rem;
  }
`;
