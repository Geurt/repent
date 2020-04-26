import React from 'react';

const Confession = () => {
    return (
        <div className="confession">
            <h2 className="confession--title">I have sinned.</h2>
            <p className="confession--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="confession--button-container">
            <button className="confession--button confession--button__forgive">forgive</button>
            <button className="confession--button confession--button__not">not</button>
            </div>
        </div>
    )
}

export default Confession;
