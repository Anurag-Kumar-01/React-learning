
import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {
 

  return (
    <>
      <h1 className='bg-gray-500'>Welcome to Redux Toolkit </h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
