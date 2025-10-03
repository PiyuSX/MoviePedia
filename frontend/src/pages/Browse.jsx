import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import BagroundVideo from "../components/BagroundVideo"
import List from "../components/List"

const Browse = () => {
  const user = useSelector((store) => store.app.user)


  const navigate = useNavigate()

    useEffect(()=> {
        if(!user){
          navigate('/auth/login')
        }
    }, [user, navigate])
    
  return (
    <div className='min-h-screen'>
        <BagroundVideo />
        <List />
    </div>
  )
}

export default Browse