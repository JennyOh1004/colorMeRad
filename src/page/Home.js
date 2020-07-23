import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import hero from "../assets/hero.png";

const Hero = styled.div`
  position: absolute;
  width: 213px;
  height: 252px;
  left: 48.33px;
  top: 310.71px;
`;

export default function Home() {
  return (
    <Hero>
      <img src={hero} alt="Hero Image" />
    </Hero>
  );
}
