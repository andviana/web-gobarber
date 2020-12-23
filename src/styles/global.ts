import { shade, transparentize } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
  outline:0;
}
*, *::after, *::before {
  box-sizing: border-box;
}
body {
  color: var(--primary);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  margin: 0;
  padding: 0;
  flex-direction: column;
  background-color: var(--unifesspa-body-dark);

}
body, input, button {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}
button {
  color:white;
  background-color: var(--bs-primary);
  font-weight:400;
  border:0;
  padding:0.5rem 1rem;
  border-radius:0.5rem;
  cursor:pointer;
  transition: background-color 0.2s;
  svg {
    margin: 0 0.25rem;
    color: ${transparentize(0.75, '#ffffff')}
  }

  &:hover{
    background-color: ${shade(0.25, '#007bff')}
  }
  &:focus{
      outline:none;
      box-shadow: 0 0.15rem 1.75rem 0 rgba(31, 45, 65, 0.15);
  }

}


:root {
  --primary: #36393f;
  --secondary: #2f3136;
  --tertiary: rgb(32,34,37);
  --quaternary: #292b2f;
  --quinary: #393d42;
  --senary: #828386;

  --bs-white: #fff;
  --bs-gray: #8a8c90;
  --bs-chat-input: rgb(64,68,75);
  --bs-symbol: #74777a;
  --bs-notification: #f84a4b;
  --bs-discord: #6e86d6;
  --bs-mention-detail: #f9a839;
  --bs-mention-message: #413f3f;
  --bs-link: #5d80d6;
  --bs-rocketseat: #6633cc;
  --bs-blue: #007bff;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #e83e8c;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #28a745;
  --bs-teal: #20c997;
  --bs-cyan: #17a2b8;
  --bs-white: #fff;
  --bs-gray: #6c757d;
  --bs-gray-dark: #343a40;
  --bs-primary: #007bff;
  --bs-secondary: #6c757d;
  --bs-success: #28a745;
  --bs-info: #17a2b8;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f8f9fa;
  --bs-dark: #343a40;


  --unifesspa-body-dark:#1f2d41;
  --unifesspa-body-light: #f2f2f2;
  --unifesspa-green-left: #278c18;
  --unifesspa-green-right: #008652;
  --unifesspa-green-dark: #2a333c;
  --unifesspa-green-light: #6dbf1b;
  --unifesspa-gray-normal: #9e9e9e;
  --unifesspa-gray-light: #e0e0e0

  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
}
`;
