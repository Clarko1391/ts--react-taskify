import React, { useState } from 'react';
import './App.css';

import { Todo } from './model';

import InputField from './components/InputField';
import TodoList from './components/TodoList';


// ============================================================================
// Typing practice
// ============================================================================
// ===  primitives  ===
// let name: string;
// let age: number;
// let is_student: boolean;

// ===  unions  ===
// let age_union: number | string;

// ===  typed array  ===
// let hobbies: string[];

// ===  tuple  ===
// let role: [number, string];

// ===  ANY TYPE ===
// let anything: any;

// === UNKNOWN TYPE ===
// let unknown_value: unknown;


// === Objects ===
// ==  without interface ==
// let person_plain: Object;


// ==  with interface  ==
// type Person = 
// {
//   name: string;
//   age: number;
//   is_student?: boolean;
//   hobbies?: string[];
//   role?: [number, string];
// }

// let clark: Person = 
// {
//   name: "Clark",
//   age: 30,
//   is_student: true,
//   hobbies: ["reading", "coding", "cooking"],
// }

// let jeffrey: Person = 
// {
//   name: "Jeffrey",
//   age: 43,
//   is_student: false,
//   hobbies: ["hunting", "smoking", "adultery"],
// }

// let susan: Person = 
// {
//   name: "Susan",
//   age: 25,
//   is_student: true,
//   hobbies: ["knitting", "psychology", "hiking"],
// }

// ===  Array of objects  ===
// let lots_of_people: Person[];

// lots_of_people = [clark, jeffrey, susan]


// === Functions === 

// Method 1
// let printName: Function;

// printName = ( name: string ) => {
//   console.log(name);
// };

// printName("Piyush");

// Method 2
// define argument types and return types, if no return, void
// void returns undefined, never doesn't return anything
// let printBetterName: ( name:string ) => void

// printBetterName = ( name: string ) => {
//   console.log(name);
// }

// printBetterName("Meredith")

// ============================================================================
// end of typing pratice
// ============================================================================


// Convert standard function to functional component and apply type
// Type React.FC is "Functional Component", "ReactNode" type supports all types
const App: React.FC = () => 
{

  // ==========================================================================
  // No state management system present, just using local state for now
  // Should provide type to the state as below, can also use unions if needed
  // the todo is a string todo, todos is an array of Todos with more props 
  // ==========================================================================


  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {

      setTodos(
        [
          ...todos, 
          { 
            id: Date.now(), 
            todo, 
            is_done: false 
          }
        ]
      )

      setTodo("");
    }
  };


  return (
    <div className="App">
      
      <span className="heading">Taskify</span>

      <InputField 
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
        />

      <TodoList 
        todos={todos}
        setTodos={setTodos}
        />
      
    </div>
  );
}

export default App;
