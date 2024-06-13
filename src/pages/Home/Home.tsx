import { useEffect, useState } from "react";

import Form from "../../components/Form/Form";
import TODOHero from "../../components/Todo/TODOHero";
import TODOList, { Todo } from "../../components/Todo/TODOList";
import "./styles.css";

function TODO() {
    const [todos, setTodos] = useState<Todo[]>([]);

    // Retrieve data from localStorage when component mounts
    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    const todos_completed = todos.filter((todo) => todo.isCompleted).length;
    const total_todos = todos.length;

    return (
        <div className="wrapper">
            <TODOHero
                todosCompleted={todos_completed}
                totalTodos={total_todos}
            />
            <Form todos={todos} setTodos={setTodos} />
            <TODOList todos={todos} setTodos={setTodos} />
        </div>
    );
}

export default TODO;
