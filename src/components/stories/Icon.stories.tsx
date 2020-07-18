import React from "react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import PrevIcon from "../../assets/prev-icon.png";

export default {
  title: "components|Icons",
  component: null,
  decorators: [withKnobs],
};

export const icon = () => {
  return (
    <div>
      <img src={PrevIcon} />
    </div>
  );
};

icon.story = {
  name: "Default",
};
