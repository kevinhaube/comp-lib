import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Text from "../Typography/Text";

function CardHeader(props) {
  const Header = styled.div`
    height: 100%;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
  `;

  return (
    <Header>
      <Text variant="h4">{props.children[0]}</Text>
      <Text variant="caption" style={{ marginLeft: "2px" }}>
        {props.children[1]}
      </Text>
    </Header>
  );
}

export default CardHeader;
