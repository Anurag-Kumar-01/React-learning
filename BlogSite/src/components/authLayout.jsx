import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const Protected = ({children,authentication=true}) => {
    const navigate = useNavigate()
    const [loader, setloader] = useState(true)
    const authstatus = useSelector(state=>state.auth.status)
    useEffect(() => {
        if(authentication && authstatus !==authentication){
            navigate('/login')
        }
        else if(!authentication && authstatus !==authentication){
            navigate('/')
        }
        setloader(false)
      
    }, [authstatus,navigate,authentication])
    

  return (
   loader? <h1>Loadig...</h1> : <>{children}</>
  )
}
