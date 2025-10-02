import {Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'


const Home = () => {
    const user = useSelector((store) => store.app.user)
    const navigate = useNavigate()
    useEffect(()=> {
        if(user){
          navigate('/browse')
        }
    }, [user, navigate])
    return (
        <div className="relative">
            <img src="bg.png" alt="" className='h-screen w-full object-cover -z-10' />
            <div className="absolute inset-0 flex flex-col gap-8 items-center justify-center z-10">
                <h1 className="text-3xl font-bold text-white">Unlimited movies, TV shows, and more</h1>
                <Link className="bg-red-700 text-xl font-bold text-white px-6 py-2 rounded" to="/auth/signup">
            Get Started
          </Link>
            </div>
        </div>
    )
}

export default Home