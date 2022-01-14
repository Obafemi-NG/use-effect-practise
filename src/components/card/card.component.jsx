import React from 'react';
import './card.styles.css';

const Card = (props) => {
    return (
        <div className = 'card' >
            {props.children}
        </div>
    )
}
export default Card;