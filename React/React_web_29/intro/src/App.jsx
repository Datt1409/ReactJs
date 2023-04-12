import { useState } from "react";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Form from "./components/Form";
import List from "./components/List";

function App() {
    const [items, setItems] = useState(["abc", "xyz"]);

    const addItem = (newItem) => {
        const newItems = [...items, newItem];
        setItems(newItems);
    };

    return (
        <div>
            <h1>List gì đó</h1>

            <Form onSubmit={addItem} />

            <List items={items} />
        </div>
    );
}

export default App;

// Props vs State
// PropTypes
// JSDoc
// Các vấn đề thường gặp khi sử dụng State
// Xác định vị trí state
// Render components sử dụng map => key
// Two-way data bindings
