import { FormEvent } from "react";
import { TODOListProps, Todo } from "../Todo/TODOList";

function Form({ todos, setTodos }: TODOListProps) {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        // To prevent to submit the form and reload page
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const input = form.querySelector(
            'input[name="todo"]'
        ) as HTMLInputElement;

        const value = input.value;
        const newTodo: Todo = {
            title: value,
            id: self.crypto.randomUUID(),
            isCompleted: false,
        };

        // To update todo state
        setTodos((prevTodos) => [...prevTodos, newTodo]);

        // Store updated todo list in local storage
        const updatedTodoList = JSON.stringify([...todos, newTodo]);
        localStorage.setItem("todos", updatedTodoList);

        // reset the form
        form.reset();
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="todo">
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Write your next task"
                />
            </label>
            <button>
                <span className="visually-hidden">Submit</span>
                <svg
                    clipRule="evenodd"
                    fillRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                >
                    <path
                        d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                        fillRule="nonzero"
                    />
                </svg>
            </button>
        </form>
    );
}
export default Form;
