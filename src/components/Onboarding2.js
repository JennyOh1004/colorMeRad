import React, { Component } from "react";
import styled from "styled-components";
import bg2 from "../assets/bg2.png";
import hero from "../assets/hero-arrow.png";

class Onboarding2 extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <Bg>
            <img src={bg2} alt="Background image" />
          </Bg>
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
`;

const Bg = styled.div`
  z-index: 0;
`;

const Button = styled.div`
  position: absolute;
  width: 56px;
  height: 56px;
  left: 160px;
  top: 614px;
  z-index: 5;
`;

export default Onboarding2;
