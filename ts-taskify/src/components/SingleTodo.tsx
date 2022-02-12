import React from 'react'

import { Todo } from '../model';

interface Props{
    todo?: Todo,
    todos?: Todo[];
    setTodos?: React.Dispatch<React.SetStateAction<Todo[]>>,
    handleAdd?: (e: React.FormEvent) => void,
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {

    return (
        <div>SingleTodo</div>
    )
}

export default SingleTodo