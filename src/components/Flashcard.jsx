import React from 'react';
import './Flashcard.css';


const Flashcard = (props) => {
    return (
        <div className='container' onClick={props.onClick}>
            {props.state ? (
                <h3>{props.answer}</h3>
            ) : (
                <h3>Name of the crypto</h3>
            )}
            <img src={props.image} className='picture'/>
        </div>
    )
}

export default Flashcard;