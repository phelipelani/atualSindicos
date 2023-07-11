import { styled } from "styled-components";
import background from "../../Assets/bg_MIssao.jfif";

export const MainStyle = styled.main`
  background: linear-gradient(rgba(190, 207, 227, 0.6), rgba(190, 207, 227, 0.6)),
    url(${background}) center/cover no-repeat;
  width: 100vw;
  height: 100%;
  object-fit: cover;
  padding-top: 12vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-sizing: border-box;
`;

export const ContainerStyle = styled.div`
background-color:orange;
margin-top:11vh;
height:100%;
`