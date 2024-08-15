import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
  }

  * {
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    body {
      padding: 1rem;
    }
  }

  @media (max-width: 480px) {
    body {
      font-size: 14px;
    }
  }
`;
export default GlobalStyle;