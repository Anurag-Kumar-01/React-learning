import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './Contexts'
import { TodoContext } from './Contexts'
import { useTodo } from './Contexts'
import TodoForm from './Components/Todoform'
import TodoItem from './Components/Todoitems'
function App() {
  const [todos,setTodos] = useState([])

  const addTodo =(todo)=>{
    setTodos((prev)=> [...prev,{id:Date.now(),...todo}])
  }

  const updateTodo=(id,todo)=>{
    setTodos((prev)=> prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
  }
  const deleteTodo= (id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
  }

  const toggleCompleted = (id) =>{
    setTodos((prev)=>prev.map((todo)=>todo.id===id?{...todo,Completed: !todo.Completed} : todo))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,toggleCompleted,updateTodo,deleteTodo,addTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div className='w-full ' key={todo.id}>
                            <TodoItem todo={todo}/>   
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
