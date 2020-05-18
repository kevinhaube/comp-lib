import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const defaultFontSize = 14
const pxToRem = (pxValue) => {
    return `${pxValue / defaultFontSize}rem`
}

function Title(props) {

    //TODO: Current styles are temporary, make new dope style
    //TODO: Add @media query for font sizes

    const h1 = styled.h1`
        font-size: ${pxToRem(96)};
        line-height: 1.167;
        letter-spacing: -1.5;
        font-family: Roboto;
        font-weight: 300;
        margin: 0;
    `
    const h2 = styled.h2`
        font-size: ${pxToRem(60)};
        line-height: 1.2;
        letter-spacing: -0.5;
        font-weight: 300;
        margin: 0;
    `
    const h3 = styled.h3`
        font-size: ${pxToRem(48)};
        line-height: 1.167;
        letter-spacing: 0;
        font-weight: 400;
        margin: 0;
    `
    const h4 = styled.h4`
        font-size: ${pxToRem(34)};
        line-height: 1.235;
        letter-spacing: 0.25;
        font-weight: 400;
        margin: 0;
    `
    const h5 = styled.h5`
        font-size: ${pxToRem(24)};
        line-height: 1.334;
        letter-spacing: 0;
        font-weight: 400;
        margin: 0;
    `
    const h6 = styled.h6`
        font-size: ${pxToRem(14)};
        line-height: 1.57;
        letter-spacing: 0.1;
        font-weight: 500;
        margin: 0;
    `

    // Title is assigned to one of the above styled elements via {props.variant} (Default: h1)
    const variantMap = {
        h1: h1,
        h2: h2,
        h3: h3,
        h4: h4,
        h5: h5,
        h6: h6,
    }

    const Title = variantMap[props.variant]

    return (
        <Title style={props.style}>{props.children}</Title>
    )
}

// Defined prop types
Title.propTypes = {
    children: PropTypes.element.isRequired,
    variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
}

// Defined default props
Title.defaultProps = {
    variant: 'h1'
}

export default Title
