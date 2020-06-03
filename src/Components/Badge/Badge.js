import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Text from "../Typography/Text";

function Badge(props) {
  const Root = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${props.fontColor};
    padding: 6px 12px;
    margin: 0.125rem 0.25rem;
    background: ${props.color};
    border-radius: 500px;
    white-space: nowrap;

    font-family: Roboto;
    font-weight: 500;
    text-transform: uppercase;
    user-select: none;
  `;
  const SmallBadge = styled(Root)`
    padding: 2px 8px;
    max-height: 25px;
  `;
  const DisabledStyle = {
    opacity: "0.2",
  };

  if (props.small) {
    return (
      <SmallBadge style={props.disabled ? DisabledStyle : props.style}>
        {props.prefix ? props.prefix : null}
        <Text variant="caption">{props.children}</Text>
        {props.suffix ? props.suffix : null}
      </SmallBadge>
    );
  } else {
    return (
      <Root style={props.disabled ? DisabledStyle : props.style}>
        {props.prefix ? props.prefix : null}
        <Text variant="caption">{props.children}</Text>
        {props.suffix ? props.suffix : null}
      </Root>
    );
  }
}

// Defined prop types
Badge.propTypes = {
  children: PropTypes.element.isRequired,
  color: PropTypes.string,
  fontColor: PropTypes.string,
  disabled: PropTypes.bool,
  prefix: PropTypes.element,
  suffix: PropTypes.element,
};

// Defined default props
Badge.defaultProps = {
  color: "#000",
  fontColor: "#fff",
};

export default Badge;
