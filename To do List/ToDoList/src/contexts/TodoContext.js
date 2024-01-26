import { createContext, useContext } from "react";


export const TodoContext = createContext({
    //todo is an array and in this array we add new todo as an object
    todos: [
        {
            id:1,
            todo: "Todo msg",
            completed : false, //bydefault
        }
    ],
    //functionalities only define
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider