import { useContext,createContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id : 1,
            todo : "msg",
            Completed: false,
        }
    ],
    addTodo : (todo)=>{},
    updateTodo : (todo,id)=>{},
    deleteTodo : (id)=>{},
    toggleCompleted: (id)=>{}

})

export const useTodo = ()=>{
    return useContext(TodoContext)
}
export const TodoProvider = TodoContext.Provider