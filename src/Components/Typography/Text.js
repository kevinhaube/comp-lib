import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const defaultFontSize = 14;
const pxToRem = (pxValue) => {
  return `${pxValue / defaultFontSize}rem`;
};

function Text(props) {
  //TODO: Add @media query for font sizes

  const d1 = styled.h1`
    font-size: ${pxToRem(48)};
    line-height: 1.167;
    letter-spacing: -1.5px;
    font-weight: 400;
    margin: 0;
  `;
  const d2 = styled.h1`
    font-size: ${pxToRem(36)};
    line-height: 1.167;
    letter-spacing: -1.5px;
    font-weight: 400;
    margin: 0;
  `;
  const h1 = styled.h1`
    font-size: ${pxToRem(32)};
    line-height: 1.167;
    letter-spacing: -1.5px;
    font-weight: 600;
    margin: 0;
  `;
  const h2 = styled.h2`
    font-size: ${pxToRem(28)};
    line-height: 1.2;
    letter-spacing: -0.5px;
    font-weight: 600;
    margin: 0;
  `;
  const h3 = styled.h3`
    font-size: ${pxToRem(24)};
    line-height: 1.167;
    letter-spacing: 0px;
    font-weight: 600;
    margin: 0;
  `;
  const h4 = styled.h4`
    font-size: ${pxToRem(20)};
    line-height: 1.235;
    letter-spacing: 0.25px;
    font-weight: 600;
    margin: 0;
  `;
  const paragraph1 = styled.p`
    font-size: ${pxToRem(16)};
    line-height: 1.5;
    letter-spacing: 0.15px;
    margin: 0;
  `;
  const paragraph2 = styled.p`
    font-size: ${pxToRem(14)};
    line-height: 1.43;
    letter-spacing: 0.15px;
    margin: 0;
  `;
  const caption = styled.p`
    font-size: ${pxToRem(12)};
    line-height: 1.66;
    letter-spacing: 0.4px;
    font-wight: 400;
    margin: 0;
  `;
  const button = styled.p`
    font-size: ${pxToRem(14)};
    line-height: 1.75;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 500;
    margin: 0;
  `;

  // Title is assigned to one of the above styled elements via {props.variant} (Default: p1)
  const variantMap = {
    d1: d1,
    d2: d2,
    h1: h1,
    h2: h2,
    h3: h3,
    h4: h4,
    p1: paragraph1,
    p2: paragraph2,
    caption: caption,
    button: button,
  };

  const Title = variantMap[props.variant];

  return <Title style={props.style}>{props.children}</Title>;
}

// Defined prop types
Text.propTypes = {
  children: PropTypes.element.isRequired,
  variant: PropTypes.oneOf([
    "d1",
    "d2",
    "h1",
    "h2",
    "h3",
    "h4",
    "p1",
    "p2",
    "caption",
    "button",
  ]),
};

// Defined default props
Text.defaultProps = {
  variant: "p1",
};

export default Text;
