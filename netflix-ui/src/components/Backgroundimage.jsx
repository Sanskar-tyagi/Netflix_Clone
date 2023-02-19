import React from "react";
import styled from "styled-components";
export default function backgroundimage() {
  return (
    <Container>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/935156fb-9579-4fc2-ad94-70680402b8ef/3689d1b9-def2-446b-bc6c-ba159a4469f8/IN-en-20230109-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
      />
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 736.4px;
    width: 100vw;
  }
`;
