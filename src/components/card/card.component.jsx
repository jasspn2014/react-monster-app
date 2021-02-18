import React from 'react';
import './card.styles.css';

export const Card = props => {
    return(
        <div className = "card">
            <img src={`https://robohash.org/${props.monster.id}?set=set1&size=150x150`} alt="Robot" />
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    );
}