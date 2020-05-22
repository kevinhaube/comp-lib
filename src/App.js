import React from "react";
import styled from "styled-components";
import Button from "./Components/Button/Button";
import Surface from "./Components/Surface/Surface";
import Text from "./Components/Typography/Text";
import Badge from "./Components/Badge/Badge";
import Card from "./Components/Card/Card";

import CloseIcon from "@material-ui/icons/Close";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import CardHeader from "./Components/Card/CardHeader";

function App() {
  const primary = "#e524af";
  const secondary = "#18D8AA";

  const Section = styled.div`
    height: 100%;
    display: inline-flex;
    flex-direction: ${(props) => props.direction || "row"};
    justify-content: center;
    flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};
  `;

  return (
    <div
      style={{
        padding: "0 3rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Buttons */}
      <Surface style={{ flexDirection: "column" }}>
        <Section direction="column">
          <Text variant="h3">Buttons</Text>
          <Text
            variant="caption"
            style={{ color: primary, paddingLeft: "2px" }}
          >
            In Dev
          </Text>
          <Section wrap>
            <Button border="pill">Pill Button</Button>
            <Button type="outlined" border="pill">
              Pill Button
            </Button>
            <Button disabled>Disabled Button</Button>
            <Button type="outlined">Normal Button</Button>
          </Section>
        </Section>
      </Surface>

      {/* Typography */}
      <Surface style={{ flexDirection: "column" }}>
        <Section direction="column">
          <Text variant="h3">Typography</Text>
          <Text
            variant="caption"
            style={{ color: primary, paddingLeft: "2px" }}
          >
            In Dev
          </Text>
        </Section>
        <Section direction="column">
          <Text variant="d1" style={{ margin: ".25rem 0" }}>
            d1: Display
          </Text>
          <Text variant="d2" style={{ margin: ".25rem 0" }}>
            d2: Display
          </Text>
          <Text variant="h1" style={{ margin: ".25rem 0" }}>
            h1: Heading
          </Text>
          <Text variant="h2" style={{ margin: ".25rem 0" }}>
            h2: Heading
          </Text>
          <Text variant="h3" style={{ margin: ".25rem 0" }}>
            h3: Heading
          </Text>
          <Text variant="h4" style={{ margin: ".25rem 0" }}>
            h4: Heading
          </Text>
          <Text variant="p1" style={{ maxWidth: "550px", margin: ".25rem 0" }}>
            p1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            lacus turpis, aliquet quis porttitor vel, laoreet ut eros. Donec
            eget turpis purus.
          </Text>
          <Text variant="p2" style={{ maxWidth: "550px", margin: ".25rem 0" }}>
            p2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            lacus turpis, aliquet quis porttitor vel, laoreet ut eros. Donec
            eget turpis purus.
          </Text>
          <Text variant="button">Button Text</Text>
          <Text variant="caption">This is a proper caption</Text>
        </Section>
      </Surface>

      {/* Badges */}
      <Surface style={{ maxWidth: "550px", flexDirection: "column" }}>
        <Section direction="column">
          <Text variant="h3">Badges</Text>
          <Text
            variant="caption"
            style={{ color: primary, paddingLeft: "2px" }}
          >
            In Dev
          </Text>
        </Section>
        <Section style={{ paddingTop: "1rem" }}>
          <Badge>Default</Badge>
          <Badge
            suffix={
              <CloseIcon
                style={{ marginLeft: ".25rem", padding: "0", opacity: "0.4" }}
              />
            }
          >
            Suffix
          </Badge>
          <Badge
            prefix={
              <AttachMoneyIcon
                style={{ marginRight: ".25rem", padding: "0", opacity: "0.4" }}
              />
            }
          >
            Prefix
          </Badge>
        </Section>
        <Section>
          <Badge small>Small</Badge>
          <Badge
            small
            suffix={
              <CloseIcon style={{ opacity: "0.4", marginLeft: ".25rem" }} />
            }
          >
            Suffix
          </Badge>
          <Badge
            small
            prefix={
              <AttachMoneyIcon
                style={{ opacity: "0.4", marginRight: ".25rem" }}
              />
            }
          >
            Prefix
          </Badge>
        </Section>
        <Section>
          <Badge disabled>Disabled</Badge>
          <Badge small disabled>
            Disabled
          </Badge>
        </Section>
        <Section>
          <Badge color={primary}>Color</Badge>
          <Badge
            color={secondary}
            suffix={
              <CloseIcon style={{ opacity: "0.7", marginLeft: ".25rem" }} />
            }
          >
            Color
          </Badge>
          <Badge
            small
            color={primary}
            prefix={
              <AttachMoneyIcon
                style={{ opacity: "0.7", marginRight: ".25rem" }}
              />
            }
          >
            Small
          </Badge>
        </Section>
      </Surface>

      {/* Cards */}
      <Surface style={{ flexDirection: "column" }}>
        <Section direction="column">
          <Text variant="h3">Cards</Text>
          <Text
            variant="caption"
            style={{ color: primary, paddingLeft: "2px" }}
          >
            In Dev
          </Text>
        </Section>
        <Card>
          <CardHeader>
            {"Card Title"}
            {"Subtitle"}
          </CardHeader>
          <Text style={{ marginTop: "1rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus
            turpis, aliquet quis porttitor vel, laoreet ut eros. Donec eget
            turpis purus.
          </Text>
        </Card>
      </Surface>
    </div>
  );
}

export default App;
