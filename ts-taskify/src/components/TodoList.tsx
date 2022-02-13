import React from 'react'

import { Todo } from '../model';

import SingleTodo from './SingleTodo';

import './styles.css';

// Define the type of our props within an interface
interface Props{
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    handleAdd?: (e: React.FormEvent) => void,
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {


    return (
        <div
            className="todos"
            >

            {todos.map(todo => (
                <SingleTodo 
                    key={todo.id}
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                    />
                ))
            }
            
        </div>
    )
}

export default TodoList