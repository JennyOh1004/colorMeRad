import React, { Component } from "react";
import Splash from "./Splash";
import Onboarding1 from "./Onboarding1";
import Onboarding2 from "./Onboarding2";
import MainText from "./MainText";

class Main extends Component {
  render() {
    return (
      <div>
        {/* <Splash /> */}
        {/* <Onboarding1 /> */}
        <Onboarding2 />
        {/* <MainText /> */}
      </div>
    );
  }
}

export default Main;
