import { createSlice, nanoid } from "@reduxjs/toolkit";
//nanoid generates unique id

const initialState = {
    todos: [{
        id:1,
        text:"Hello Jee"
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id:nanoid(),
                text:action.payload   //payload is an object
            }
            //how to use this state
            //state is preserved in redux so we need not to worry about the previous data and then spread and then add new we can simply do here in easy way
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !==
            action.payload)
        },
    }
})
//export all functionalities
export const{addTodo, removeTodo} = todoSlice.actions

//aware store about this reducers   
export default todoSlice.reducer