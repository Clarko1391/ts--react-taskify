import React, { useRef } from 'react'
import './styles.css'


// Define the type of our props within an interface
interface Props{
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e: React.FormEvent) => void,
}


// Provide the props, along with the Props interface we defined above
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => 
{

    // Hook into form HTML element and remove focus on submit
    // TODO: Look into why this won't work for 'enter', only on click
    const inputRef = useRef<HTMLInputElement>(null);


    return (

        <form
            className="input"
            onSubmit= {(e) => 
                {
                    handleAdd(e);
                    inputRef.current?.blur();
                }}
            >
            
            <input 
                type="input"
                placeholder="enter a todo"
                className="input__box"
                value={todo}
                onChange={
                    (e) => {setTodo(e.target.value)}
                }
                />
            
            <button 
                className="input__submit"
                type="submit"
                >
                Go
            </button>
        </form>
    )
}

export default InputField