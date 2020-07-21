import React from "react";

import bg1 from "../assets/bg1.png";
import styled from "@emotion/styled";

export default function Onboarding1() {
  return (
    <div>
      <img src={bg1} alt="background image" />

      <Containter>
        <Content>Welcome!</Content>
        <SubContent>
          We believe every woman is beautiful in her own way. We’re here to help
          you to find your best beauty and style.
        </SubContent>
      </Containter>
    </div>
  );
}
const Containter = styled.div`
  position: relative;
  width: 375px;
  height: 812px;
`;
const Content = styled.div`
  position: absolute;
  left: 30.13%;
  right: 30.13%;
  top: 42.18%;
  bottom: 53.02%;

  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.005em;

  color: #000;
`;
const SubContent = styled.div`
  position: absolute;
  width: 295px;
  height: 72px;
  left: 40px;
  top: 397.5px;

  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.005em;

  color: #000;
`;
