import React from "react";
import { PropTypes } from 'prop-types';

const backgroundColor = {
    primary: "#61D3F8",
    secondary: "#FFFFFF",
    black: "#000000"
}

const textColor = {
    primary: "#000000",
    secondary: "#000000",
    black: "#FFFFFF"
}

const Button = ({btnText, variant, onClick, className, ...props}) => {
    const styles = {
        backgroundColor: backgroundColor[variant] || backgroundColor.primary,
        color:  textColor[variant] || textColor.primary
    }

    return (
        <button style={styles} {...props} onClick={onClick}>
            {btnText}
        </button>
    )
}
Button.propTypes = {
    variant: PropTypes.oneOf([
        "primary",
        "secondary",
        "black"
    ]),
    onClick: PropTypes.func,
    btnText: PropTypes.string
}
Button.defaultProps = {
    variant: "primary",
    onClick: () => {},
    btnText: "submit"
}

export default Button;