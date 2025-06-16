import './App.css'
import { Login } from './Components/Login/Login'
import { Profile } from './Components/Profile/Profile'
import UserProvider from './Context/UserProvider'
function App() {
 

  return (
    <>
    <UserProvider>
       <h1>Welcome, Anurag Kumar here!!</h1>
     <Login/>
     <Profile/>

    </UserProvider>
    
    </>
  )
}

export default App
