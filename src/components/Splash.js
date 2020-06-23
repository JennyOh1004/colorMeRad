import React, { Component } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import hero from "../assets/hero-arrow.png";

class Splash extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <Image>
            <img src={logo} alt="Main Logo" />
          </Image>
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

const Image = styled.div`
  position: absolute;
  top: 310px;
  left: 48.33px;
`;

const Button = styled.div`
  position: absolute;
  width: 56px;
  height: 56px;
  left: 160px;
  top: 614px;
`;

const Title = styled.h1`
  font-family: Baloo Tamma 2;
  font-style: normal;
  font-weight: bold;
  font-size: 88px;
  line-height: 95.6%;
`;

export default Splash;
