import React from "react";

import bg4 from "../assets/bg4.png";

export default function Onboarding4() {
  return (
    <div>
      <img src={bg4} alt="background image" />

      <Containter>
        <Content>EXPLORE MORE STYLES!</Content>
        <SubContent>
          After the analysis, browse hundreds of product recommendations that
          best fit in your color type
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
