import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Browse = () => {
  const user = useSelector((store) => store.app.user)

  const navigate = useNavigate()

    useEffect(()=> {
        if(!user){
          navigate('/auth/login')
        }
    }, [user, navigate])
    
  return (
    <div className='min-h-screen'>Hello</div>
  )
}

export default Browse