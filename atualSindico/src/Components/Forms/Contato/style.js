import { styled } from "styled-components";

export const FormStyle = styled.form`
  border-radius: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  width: 45%;

  @media (min-width: 720px) {

    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    width: 50%;
  }
`;

export const HeaderForm = styled.div`
  @media (min-width: 720px) {
    height: 20%;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    img {
      object-fit: cover;
      height: 100%;
      width: 10%;
    }
    h3 {
      font-size: 2vw;
      color: #411052;
    }
  }
`;
export const BodyForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80%;
    gap: 1vw;
    align-items: center;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    height:15%;

    label {
      font-size: 1vw;
      color: #411052;
      font-weight: 900;
    }
    input {
      width: 100%;
      padding: 8px;
      font-size: 0.8vw;
      border: none;
      border-bottom: 1px solid #fff;
      background: transparent;
      :focus {
        outline: none;
        border: 1px solid blue;
      }
    }
    textarea {
      background-color: rgba(218, 233, 240, 0.3);
      color: #411052;
      font-size: 0.8vw;
      padding: 0.5rem;
      height: 2.5em;
      overflow: auto;
      resize: none;
    }
  }
  button {
    width: 15vw;
    height: 5vh;
    border-radius: 2rem;

    background-color: #411052;
    color: rgba(218, 233, 240, 1);
    cursor: pointer;

    font-size: 1.5vw;
  }
`;
