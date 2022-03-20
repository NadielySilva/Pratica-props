import React, { Component } from "react";

import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import About from "./components/About";

const Title = styled.h1`
  font-size: 40px;
  color: pink;
  width: 50vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  border-radius: 30px 30px 0 0;
  background-color: purple;
`;

const Container = styled.div`
  font-family: 'Lato', sans-serif;
  color: purple;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Title>Olá</Title>
        <About name={"Nadiely"} age={"29"} subject={"props"} ></About>
      </Container>
    );
  }
}

export default App;
