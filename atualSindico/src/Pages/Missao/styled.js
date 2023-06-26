import { styled } from "styled-components";
import background from "../../Assets/bg_MIssao.jfif";

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
background-color:orange;
margin-top:11vh;

section{
  border:2px solid black

}



p{
  color:#becfe3
}

`