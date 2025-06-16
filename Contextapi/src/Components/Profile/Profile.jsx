import React from 'react'
import Usercontext from '../../Context/Usercontext'
import { useContext } from 'react'
export const Profile = () => {
     const {user} = useContext(Usercontext)

     if(!user) return <div>Please Login!!</div>

     return <div>Welcome {user.username}</div>
     
 
}
