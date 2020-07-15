import React, { Component } from "react";
import styled from "styled-components";

class MainText extends Component {
  render() {
    return (
      <div>
        <Containter>
          <Content>
            Welcome!
            <SubContent>
              We believe every woman is beautiful in her own way. We’re here to
              help you to find your best beauty and style.
            </SubContent>
          </Content>
        </Containter>
      </div>
    );
  }
}

const Containter = styled.div`
  position: relative;
  width: 375px;
  height: 812px;
  border: solid 1px #ccc;
  border-radius: 30px;
  /* display: flex;
  justify-content: column;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 342.5px;
  left: 11%;
  margin: 0 auto; */
`;

const Content = styled.div`
  /* font-family: Helvetica Neue;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  display: flex;
  margin: auto;
  letter-spacing: -0.005em;
  flex-flow: column wrap;
  max-width: 250px; */
  position: absolute;
  width: 295px;
  height: 127px;
  left: 40px;
  top: 342.5px;
`;

const SubContent = styled.div`
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.005em;
  margin: auto;
  margin-top: 26px;
  max-width: 300px;
`;
export default MainText;
