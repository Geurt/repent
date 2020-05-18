import React from 'react';

const Confession = (props) => {
    return (
        <div className="confession">
            <h2 className="confession--title">{props.title}</h2>
            <p className="confession--text">{props.body}</p>
            <div className="confession--button-container">
            <button className="confession--button confession--button__forgive">forgive</button>
            <button className="confession--button confession--button__not">not</button>
            </div>
        </div>
    )
}

export default Confession;
