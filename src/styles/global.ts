import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
:root{
  --background: #f0f2f5;
  --red: #e52e4d;
  --blue:#5429cc;
  --green:#33cc95;

  --blue-light: #6933ff;

  --text-title:#363f5f;
  --text-body: #969cb3;

  --shape:#ffffff;
}

*{
  margin:0;
  padding:0;
  box-sizing: border-box; 
}

/* font-size = 16px (desktop)
1 rem = 16px */

html{
  @media(max-width: 1080px){
    font-size: 93.75%; /*15px (utilizando percentual por conta da configuracao nos aparelhos dos usuarios*/
  }

  @media(max-width:720px){
    font-size:87.5%; /*14px */
  }
}

body{
  background: var(--background);
  -webkit-font-smoothing:antialiased; /*Hacker para deixar fonts mais legíveis em navegadores além do chrome */
}

body, textArea, input, button{
  font-family: "Poppins", sans-serif;
  font-weight: 400;
}

h1,h2,h3,h4,h5,h6, strong {
  font-weight: 600;
}

button{
  cursor:pointer;
}

[disable] {
  opacity: 0.6;
  cursor: not-allowed;
}

`