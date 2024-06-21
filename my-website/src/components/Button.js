import React from 'react'
//import { Link } from 'react-router-dom'

function Button (props) {
    const style = {
        width: "110px",
        background: "#f4ce14",
        margin: "20px",
        borderRadius: "5px",
        border: "none",
        padding: "8px",
        fontSize: "14px",
        fontFamily: "Karla"
    }

    return (
        <button style={style}>
            <strong>{props.children}</strong>
        </button>
    );
};

export default Button;