import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function Title(props) {

    //TODO: Add @media query for font sizes

    const Title = styled.h1`
        font-size: 1.3vw;
        font-family: Roboto;
        font-weight: 600;
        margin: 0;
    `

    return (
        <Title>{props.children}</Title>
    )
}

// Defined prop types
Title.propTypes = {
    
}

// Defined default props
Title.defaultProps = {
    
}

export default Title
