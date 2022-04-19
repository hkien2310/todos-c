import React from 'react';

const Label = (props) => {
    const {children, className, style, onClick } = props;

    return (
        <label
        className={`abc ${className || ""}`}
        style={style}
        onClick={onClick}
      >
        {children}
      </label>
    )
}

export default Label;