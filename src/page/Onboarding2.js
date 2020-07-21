import React from "react";

import bg1 from "../assets/bg2.png";

export default function Onboarding2() {
  return (
    <div>
      <img src={bg1} alt="background image" />

      <Containter>
        <Content>DISCOVER YOUR COLORS!</Content>
        <SubContent>
          Start off a quick color analysis to find your color type. With just
          one selfie, you’ll get which colors go best with you
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
  left: 1.19%;
  right: 1.19%;
  top: 0%;
  bottom: 55%;

  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.005em;

  color: #000000;
`;
const SubContent = styled.div`
  position: absolute;
  width: 295px;
  height: 72px;
  left: 0px;
  top: 88px;

  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.005em;

  color: #000000;
`;
