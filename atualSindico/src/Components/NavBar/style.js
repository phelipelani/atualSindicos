import styled from "styled-components";

export const DivHeader = styled.header`
  background-color: #2a1a31;
  display: flex;
  flex-direction: column;
  height: 20vh;
  width: 100vw;
  align-items: center;
  box-shadow: 0 2px 4px rgba(148, 148, 148, 1);
  position: fixed;
  z-index: 100;
<<<<<<< HEAD
=======

  .menu_desktop{
    width: 75%;

  }

`;

export const LogoDivStyle = styled.div`
  width: 25%;
  height: 100%;
  margin: 1rem 2rem 1rem 1rem;
  border-radius: 1rem;
>>>>>>> e397da7d80fda8d5c106c67fc17cc973dd17a435

  @media (min-width: 720px) {
  }
`;

export const SociaisMidiasStyled = styled.div`
  width: 100%;
  display: flex;
  height: 20%;
  background: #CECFFB;
  align-items: center;

  .socialContainer {
    margin: 5px;
    width: 35%;
    display: flex;
    justify-content: center;

    h5 {
      padding: 0.1rem;
      font-size: 0.6rem;
      color: #2a1a31;
    }
  }

  @media (min-width: 720px) {
  }
`;

export const Menu_nav_social = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 720px) {
  }
`;

export const LogoDivStyle = styled.div`
  width: 50%;
  height: 100%;
  padding: 1rem;
  align-items: center;
  img {
    width: calc(100% - 1rem);
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 720px) {
  }
`;

export const NavListStyle = styled.nav`
<<<<<<< HEAD
  position: fixed;
  top: 20vh;
=======
position: inherit;
display: flex;
flex-direction: row;
width: 100%;
height: 60px;
justify-content: space-around;
align-items: center;

a {
  padding: 30px 1rem 0 1rem;
  color: #becfe3;
  text-decoration: none;
  opacity: 0.5;
  cursor: pointer;
  text-align: end;
  font-size: 1.5rem;
  width:300px;
}

@media (max-width: 720px){
  position: absolute;
  top: 11vh;
>>>>>>> e397da7d80fda8d5c106c67fc17cc973dd17a435
  background: #2a1a31;
  right: 0;
  border-bottom-left-radius: 10px;
  height: 80vh;
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  a {
    padding: 1rem;
    color: #CECFFB;
    text-decoration: none;
    opacity: 0.5;
    cursor: pointer;
    text-align: center;
    font-size: 1rem;
  }
  a:hover {
    opacity: 1;
  }
}

 
 
`;

export const MenuHamburgue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 45px;
  height: 30px;
  margin-right: 2rem;
  justify-content: space-around;

  @media (min-width: 720px) {
    display: none;
  }

  div {
    width: 100%;
    height: 2px;
    background-color: #CECFFB;
  }
  .open .line1 {
    transform: translateY(8px) rotate(45deg);
  }
  .open .line2 {
    opacity: 0;
  }
  .open .line3 {
    transform: translateY(-8px) rotate(-45deg);
  }
`;
