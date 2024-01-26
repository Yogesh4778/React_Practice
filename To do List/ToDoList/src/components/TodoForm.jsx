import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoForm() {
    
    const [todo, setTodo] = useState("")

    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()

        if(!todo) return

        // addTodo(todo) -> wrong way
        //since we spread array and object so we have to give inputs in the form of object
        addTodo({todo, completed: false})  //since we add id in APP.jsx so we need not to mention id here and since our  field name and value name is same so we can remove field name also
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

