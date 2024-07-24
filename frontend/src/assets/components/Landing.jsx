import { TiTick } from "react-icons/ti";
import ToDoHero from './ToDoHero'
import Form from "./Form";
import TodoList from "./TodoList";
import { useState } from "react";
function Landing(){

    const [todos, setTodos] = useState([
        {
            title: 'Some Task',
            id: self.crypto.randomUUID(),
            is_completed: false
        },
        {
            title: 'Some other task',
            id: self.crypto.randomUUID(),
            is_completed: true
        },
        {
            title: 'Last task',
            id: self.crypto.randomUUID(),
            is_completed: false
        },

    ])
    const todos_completed = todos.filter(
        (todos) => todos.is_completed === true
    ).length
    const total_todos = todos.length;
    return(
        <div className=" border w-full h-full justify-center m-auto relative bg-black">
             <div className=" flex flex-row  border w-fit items-center justify-center text-white bg-black absolute top-5 left-24 " >
                <TiTick className=" w-12 h-12 " />
                <h1 className=" text-2xl">TODO</h1>
             </div>
             <ToDoHero todos_completed={todos_completed} total_todos={total_todos} />
             <Form/>
             <TodoList todos={todos}/>
        
        </div>
    )
}
export default Landing