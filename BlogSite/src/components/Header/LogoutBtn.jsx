import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/config'
import {logout} from '../../store/authSlice'

export const LogoutBtn = () => {
    const dispatch = useDispatch()
     const logoutHandler=()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })//catch
     }
  return (
   <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-500 rounded-full'>
    LogOut
   </button>
  )
}
