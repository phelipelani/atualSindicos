import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
*{
    font-family: 'Lato', sans-serif;
    font-size:16px;
    box-sizing:border-box;   
    background-color:pink;
    padding:0;
    margin:0;
    border:0;
    background-color:transparent;
    };

.wppIcons{
    width: 2rem;
    font-size:1.2rem;
    color: #becfe3;
}
.fone:hover{
    color: #fff;
	cursor:pointer;
}

.wpp:hover{
    color: #2AE40C;
	cursor:pointer;
}
.insta:hover{
    color: #E59F09;
    cursor:pointer
}

.close{
    display:none;
    @media (min-width:720px) {
        display:flex
        
    }
}


.mobile{
    transition:0.3s;
    width:80vw;
}

`;
