import React from "react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import PrevIcon from "../../assets/prev-icon.png";
import NextIcon from "../../assets/hero-arrow.png";

import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";

export default {
  title: "components|Icons",
  component: null,
  decorators: [withKnobs],
};

const Wrapper = styled.div`
  & > img + img {
    margin: 20px;
  }
`;

const Icon = styled.div`
  margin: 30px;
  padding: 10px;
`;

export const icon = () => {
  return (
    <Wrapper>
      <Icon>
        Prev Icon
        <img src={PrevIcon} />
      </Icon>
      <Icon>
        Next Icon
        <img src={NextIcon} />
      </Icon>
    </Wrapper>
  );
};

icon.story = {
  name: "Default",
};
