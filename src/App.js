import React from "react";
import LandingPage from "./pages/LandingPage";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
      font-family: Roboto, "Helvetica Neue", Helvetica, Arial, Helvetica, sans-serif;
    }

    body {
      margin: 0; 
    }
`;

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <LandingPage></LandingPage>
    </>
  );
}

export default App;
