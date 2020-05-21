import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Text from "../Typography/Text";

// Returns pixel value for border-raidus based on props
const border = (propBorder) => {
  if (propBorder === "pill") return 500;
  if (propBorder === "squared") return 0;
  return 5;
};

function Button(props) {
  //TODO: Add @media query for font sizes
  //TODO: Responsive sizing for button element

  // FilledButton is the default button style
  const FilledButton = styled.button`
    /* Shape Styling */
    padding: 1rem 2rem;
    margin: 1rem;
    background: ${props.color};
    color: #fff;
    border: none;
    border-radius: ${border(props.border)}px;

    white-space: nowrap;
    transition: 150ms;

    &:hover:enabled {
      cursor: pointer;
      transform: translate(0px, -2px);
      box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.1);
    }

    &:disabled {
      opacity: 0.3;
    }
  `;
  // Extends FilledButton, adds outline and adjust font color
  const OutlinedButton = styled(FilledButton)`
    padding: calc(1rem - 2px) calc(2rem - 2px);
    background: rgba(250, 250, 250, 0);
    border: 2px solid ${props.color};
    color: ${props.color};
  `;

  // Renders OutlinedButton if type is 'outlined', defauts to FilledButton
  if (props.type === "outlined") {
    return (
      <OutlinedButton disabled={props.disabled}>
        <Text variant="button">{props.children}</Text>
      </OutlinedButton>
    );
  } else {
    return (
      <FilledButton disabled={props.disabled}>
        <Text variant="button">{props.children}</Text>
      </FilledButton>
    );
  }
}

// Defined prop types
Button.propTypes = {
  children: PropTypes.element.isRequired,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["outlined", "filled"]),
  border: PropTypes.oneOf(["pill", "normal", "squared"]),
};

// Defined default props
Button.defaultProps = {
  color: "#000",
  default: "normal",
};

export default Button;
