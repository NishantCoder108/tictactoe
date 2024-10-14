import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { useState } from "react";

const TodoApp = () => {
    const [items, setItems] = useState([]);

    const handleItems = (data) => {
        console.log({ data });

        setItems((prev) => [data, ...prev]);
    };

    const handleComplete = (itemId) => {
        setItems((prev) => {
            return prev.map((item) => {
                console.log("item idx:", item.id, "| idx:", itemId);
                if (item.id === itemId) {
                    return { ...item, isCompleted: true };
                }

                return item;
            });
        });
    };
    const removeItem = (idx) => {
        const filtered = items.filter((item) => item.id !== idx);
        setItems(filtered);
    };

    console.log({ items });
    return (
        <div>
            <h1>Todo app</h1>
            <TodoForm handleItems={handleItems} />

            {items.map((item, i) => (
                <TodoItem
                    idx={item.id}
                    key={item.id}
                    index={i}
                    isCompleted={item.isCompleted}
                    text={item.text}
                    removeItem={removeItem}
                    handleComplete={handleComplete}
                />
            ))}
        </div>
    );
};

export default TodoApp;
