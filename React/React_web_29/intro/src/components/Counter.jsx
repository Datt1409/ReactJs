import React, { useState } from "react";

function Button({ label, onClick }) {
    return <button onClick={onClick}>{label}</button>;
}

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            Counter: {count}
            <Button onClick={() => setCount(count + 1)} label="Cộng"></Button>
            <Button label="Trừ"></Button>
        </div>
    );
}
