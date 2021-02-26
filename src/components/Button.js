import React from 'react'
import PropTypes from 'prop-types'

const Button = ({text, color, onClick}) => {
    return (
        <button className="btn" style={{ backgroundColor:`${color}` }} onClick={onClick} >{text}</button>
    )
}

Button.defaultProps = {
    text : "Add task",
    color : "black"
}

Button.propTypes = {
    text : PropTypes.string.isRequired,
    color : PropTypes.string.isRequired
}

export default Button
