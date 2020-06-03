import { storiesOf } from "@storybook/react";
import React from "react";

import Badge from "../Components/Badge/Badge";

storiesOf("Badge", module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => (
    <div style={{ display: "flex", justifyContent: "center" }}>{storyFn()}</div>
  ))
  .add("All Badges", () => (
    <div>
      <Badge>Default Badge</Badge>
    </div>
  ));
