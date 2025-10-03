import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {toast} from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../store/userSlice'
import { API_URL } from '../utils/constant'
import { useState } from 'react'

const Login = () => {
  const { register, handleSubmit, reset } = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data) => {
    setIsLoading(true)
    toast.loading('Connecting to server... Please wait, this may take up to 90 seconds on first request.', { id: 'loading' })
    
    try {
      const res = await axios.post(`${API_URL}/api/v1/users/login`, data, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true,
        timeout: 90000 // 90 seconds timeout for Render wake-up
      })
      
      toast.dismiss('loading')
      
      if (res.data.success) {
        toast.success(res.data.message)
        localStorage.setItem('user', JSON.stringify(res.data.user))
        reset()
        dispatch(setUser(res.data.user))
        navigate('/browse')
      }
    } catch (error) {
      toast.dismiss('loading')
      
      if (error.response) {
        toast.error(error.response.data.message)
      } else if (error.request) {
        toast.error('Connection timeout. The server is waking up - please click Sign In again in 10 seconds!')
      } else {
        toast.error('An error occurred. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-black/80 p-8 rounded-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-6">Sign In</h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <div>
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-red-700 text-white py-3 rounded font-semibold hover:bg-red-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        <p className="text-gray-400 mt-4">
          New to MoviePedia?{' '}
          <Link to="/auth/signup" className="text-white hover:underline">
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login