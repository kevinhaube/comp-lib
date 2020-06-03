import { storiesOf } from "@storybook/react";
import React from "react";

import Button from "../Components/Button/Button";

storiesOf("Button", module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => (
    <div style={{ textAlign: "left", marginLeft: "2.5rem" }}>{storyFn()}</div>
  ))
  .add("Default Button", () => (
    <div>
      <Button>Button</Button>
      <Button border="pill">Button</Button>
    </div>
  ));
