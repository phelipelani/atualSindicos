import { styled } from "styled-components";
import background from "../../Assets/bg_contato.jfif";

export const MainStyle = styled.main`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)),
    url(${background}) center/cover no-repeat;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: static;
  padding-top: 11vh;
  display: flex;
  justify-content: center;
`;

export const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  padding: 11vh 8vw;
  gap: 2rem;
  label {
    font-size: 1.5rem;
    color: #cbd8e8;
  }
  input {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid #ccc;
    border-radius: 0;
    background: transparent;
    :focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
  }
`;
