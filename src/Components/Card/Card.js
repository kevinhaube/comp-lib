import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Surface from "../Surface/Surface";

function Card(props) {
  // const Root = styled`
  //   overflow: hidden;
  // `;

  const Image = styled.div`
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    object-fit: cover;
  `;

  return (
    <Surface style={{ flexDirection: "column", maxWidth: "300px" }}>
      {props.img ? (
        <Image>
          <img>{props.img}</img>
        </Image>
      ) : null}
      {props.children}
    </Surface>
  );
}

// Defined prop types
Card.propTypes = {
  children: PropTypes.element.isRequired,
  img: PropTypes.element,
};

// Defined default props
Card.defaultProps = {};

export default Card;
