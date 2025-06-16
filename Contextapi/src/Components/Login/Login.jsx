import React, { useContext, useState } from 'react'
import Usercontext from '../../Context/Usercontext';

export const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const {setUser} = useContext(Usercontext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }

  return (
    <>
    <div>Login</div>
    <input type='text'
     value={username}
     onChange={(e)=> setUsername(e.target.value)}
    placeholder='Username' />
    <input type='text'
    value={password}
     onChange={(e)=> setPassword(e.target.value)}
      placeholder='Password' />
      <button
      onClick={
        handleSubmit
      }
      >Submit</button>
    
    </>
  )
}
