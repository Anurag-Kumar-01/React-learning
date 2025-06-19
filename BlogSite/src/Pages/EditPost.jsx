import React,{useEffect,useState} from 'react'
import appwriteService from '../appwrite/config'
import { Postform,Container } from '../components'
import { useNavigate, useParams } from 'react-router-dom'


export const EditPost = () => {
    const [post,setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect((slug)=>{
        if(slug){
            appwriteService.getPost(slug).then((post)=>{
            if(post){
                setPosts(post)
            }
        })
        }else{
            navigate('/')
        }
        
    },[slug,navigate])
  return post ? 
  <div className='py-8'>
    <Container>
        <Postform post={post}/>
    </Container>
  </div>
  : null
}
