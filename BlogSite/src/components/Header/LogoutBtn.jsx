import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

export const LogoutBtn = () => {
    const dispatch = useDispatch()
     const logoutHandler=()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        }).catch((error)=> {
            console.log(error)
        })//catch
     }
  return (
   <button className='inl ine-block px-6 py-2 duration-200 hover:bg-blue-500 rounded-full'
   onClick={logoutHandler}>
    LogOut
   </button>
  )
}
