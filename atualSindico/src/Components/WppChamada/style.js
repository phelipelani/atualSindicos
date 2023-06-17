import styled from "styled-components";

export const DivWpp = styled.div`
  display: flex;
  position: fixed;
  bottom: 1rem;
  left: 0.5rem;
  color: #becfe3;
  align-items: center;
  gap: 1rem;
  
  .wppLogo {
    font-size: 2rem;
    cursor: pointer;
  }
  .wppLogo:hover {
    color: #2ae40c;
  }

  h3 {
    padding: 1rem;
    border-radius: 1.5rem;
    width: 200px;
    height: 70px;
    align-items: center;
    justify-items: center;
    text-align: center;
    background-color: rgba(49, 29, 59, 0.3);
  }
  
`;
