import React from 'react';
import './custom-button.styles.css';

const CustomButton = (props) => {
    return(
        <button
        type={props.type || 'button'}
        className={`button ${props.className}`}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    )
};

export default CustomButton;