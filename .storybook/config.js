import React from "react";
import { configure, addParameters, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

addDecorator(withInfo);

addDecorator((Story) => <Story />);

addParameters({
  options: {
    name: "HospitalRun",
    url: "https://github.com/kevinhaube/comp-lib",
    showPanel: false,
  },
});

// automatically import all files ending in *.stories.js
const req = require.context("../src/stories", true, /\.stories\.tsx$/);

function loadStories() {
  require("../src/stories/button.stories");
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
