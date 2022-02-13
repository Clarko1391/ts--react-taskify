import React, { useState, useRef, useEffect } from 'react';

import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

import { MdDone } from 'react-icons/md'; 

import { Todo } from '../model';

import './/styles.css';

interface Props{
    todo: Todo,
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    handleAdd?: (e: React.FormEvent) => void,
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => 
{

    // Local state for handling form editing
    const [edit, setEdit] = useState<boolean>(false);
    const [edit_todo, setEditTodo] = useState<string>(todo.todo);


    const handleSetEdit = () => 
    {
            if(!edit && !todo.is_done)
            {
                setEdit(!edit)
            }
    }


    const handleEdit = ( event: React.FormEvent, id: number ) => 
    {
        event.preventDefault();

        setTodos
        (
            todos.map
            (
                todo => todo.id === id ?
                    {...todo, todo:edit_todo}
                    : 
                    todo
            )
        )

        setEdit(false);
    }


    const handleDelete = ( id: number ) => 
    {
        setTodos
        (
            todos.filter
            (
                todo => todo.id !== id
            )
        )
    }


    const handleDone = ( id: number ) => 
    {
        setTodos
        (
            todos.map
            (
                todo => todo.id === id ?
                    {...todo, is_done:!todo.is_done}
                    : 
                    todo
            )
        )
    }


    // TODO: Review why this functionality isn't working as expected
    // useRef for handling auto-focus on form edit
    const inputRef = useRef<HTMLInputElement>(null);


    // UseEffect for triggering focus into edit input field
    useEffect(() => 
    {
        inputRef.current?.focus();
    }, [edit]);


    return (
        <form
            className="todos__single"
            onSubmit={(e)=> handleEdit(e, todo.id)}
            >
                {
                    edit ?
                    (
                        <input 
                            className='todos__single--text'
                            value={edit_todo}
                            onChange={(e) => setEditTodo(e.target.value)}
                            />
                    )
                    :
                    (
                        todo.is_done ? 
                        (
                            <s className="todos__single--text">
                                {todo?.todo}
                            </s>
                        )
                        :
                        (
                            <span className="todos__single--text">
                                {todo?.todo}
                            </span>
                        )
                    )
                }
                
                
                
                
                <div>

                    <span 
                        className="icon"
                        onClick={() => handleSetEdit()}
                        >
                        <AiFillEdit />
                    </span>
                    <span 
                        className="icon"
                        onClick={() => handleDelete(todo.id)}
                        >
                        <AiFillDelete />
                    </span>
                    <span 
                        className="icon"
                        onClick={() => handleDone(todo.id)}
                        >
                        <MdDone />
                    </span>
                </div>
        </form>
    )
}

export default SingleTodo