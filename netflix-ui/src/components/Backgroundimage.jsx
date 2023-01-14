import React from "react";
import background from "../assets/login.jpg";
import styled from "styled-components";
export default function backgroundimage() {
  return (
    <Container>
      <img src={background} alt="" />
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`;
