import React, { Component } from "react";
import styled from "styled-components";
import bg1 from "../assets/bg1.png";
import hero from "../assets/hero-arrow.png";
import MainText from "./MainText";

class Onboarding1 extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <MainText />
          <img src={bg1} alt="Background image" />
          <Button>
            <img src={hero} alt="Hero Arrow Icon" />
          </Button>
        </Wrapper>
      </div>
    );
  }
}

const Wrapper = styled.div`
  width: 375px;
  height: 812px;
  border: solid 1px #ccc;
  border-radius: 30px;
  color: #fff;
`;

const Button = styled.div`
  position: absolute;
  width: 56px;
  height: 56px;
  left: 160px;
  top: 614px;
`;

export default Onboarding1;
