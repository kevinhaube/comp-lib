import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function Surface(props) {
  //TODO: Customization through props

  const Surface = styled.div`
    width: ${props.width};
    max-width: 100%;
    display: inline-flex;
    flex-wrap: wrap;
    background-color: #fff;
    border-radius: 10px;
    padding: 1rem;
    margin: 1rem;
    box-shadow: -4px 4px 10px 2px rgba(0, 0, 0, 0.05);
  `;

  return <Surface style={props.style}>{props.children}</Surface>;
}

// Defined prop types
Surface.propTypes = {
  width: PropTypes.string,
};

// Defined default props
Surface.defaultProps = {
  width: "auto",
};

export default Surface;
