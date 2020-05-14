import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function Surface(props) {

    //TODO: Responsive scaling
    //TODO: PropTypes and DefaultProps
    //TODO: Customization through props

    const Surface = styled.div`
        display: inline-flex;
        background-color: #fff;
        border-radius: 10px;
        padding: 1rem;
        margin: 1rem;
        box-shadow: -4px 4px 10px 2px rgba(0,0,0,0.05);
    `

    return (
        <Surface>{props.children}</Surface>
    )
}

// Defined prop types
Surface.propTypes = {
    
}

// Defined default props
Surface.defaultProps = {
    
}

export default Surface
