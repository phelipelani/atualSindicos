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
.icons_missao{
    width: 2.5rem;
    height:1.5rem;
    color:  #becfe3;
    
}

.marker_pointer{
    margin-top:-30px;
    
  }
.wppIcons{
    width: 1rem;
    color:  #2a1a31;
    padding:2px;

    @media (min-width: 720px) {
        width:2rem;
        height:1.4rem;
        padding:0.1rem;
    }
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
