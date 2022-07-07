import React from "react";

const Input = () => {
    return (
        <header>
            <input type="checkbox" id="toggle-all" className="toggle-all" />
            <label htmlFor="toggle-all"></label>
            <input type="text" id="new-todo" placeholder="What needs to be done?" autoFocus />
        </header>
    );
};

export default Input;