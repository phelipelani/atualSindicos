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
    gap: 0.5rem;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
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
  height: 80%;
  gap: 1rem;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
      font-size: 1.5rem;
      color: #411052;
      font-weight: 900;
    }
    input {
      width: 100%;
      padding: 8px;
      font-size: 1rem;
      border: none;
      border-bottom: 1px solid #fff;
      background: transparent;
      :focus {
        outline: none;
        border: 2px solid blue;
      }
    }
    textarea {
      background-color: rgba(218, 233, 240, 0.3);
      color: #411052;
      font-size: 1rem;
      padding: 0.5rem;
      height: 2.5em;
      overflow: auto;
      resize: none;
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
