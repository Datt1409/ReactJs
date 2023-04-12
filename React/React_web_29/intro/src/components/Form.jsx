import React, { useState } from "react";

export default function Form({ onSubmit }) {
    const [input, setInput] = useState("");

    // Controlled form
    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(input);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={input}
                onChange={handleChange}
                type="text"
                placeholder="New item"
            />
            <button>Add</button>
        </form>
    );
}
