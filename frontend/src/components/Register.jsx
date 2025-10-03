import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import axios from "axios"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { API_URL } from "../utils/constant"
import { useState } from "react"

const Register = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm()
  const [isLoading, setIsLoading] = useState(false)
  
  const onSubmit = async (data) => {
    console.log('Attempting registration with:', { ...data, password: '***' })
    console.log('API URL:', API_URL)
    
    setIsLoading(true)
    toast.loading('Connecting to server... Please wait.', { id: 'loading' })
    
    const maxRetries = 3
    let attempt = 0
    
    while (attempt < maxRetries) {
      try {
        attempt++
        
        if (attempt > 1) {
          toast.loading(`Retry attempt ${attempt}/${maxRetries}... Server is waking up.`, { id: 'loading' })
        }
        
        // Increased timeout for Render's free tier wake-up time
        const res = await axios.post(`${API_URL}/api/v1/users/register`, data, {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true,
          timeout: 120000 // 120 seconds timeout
        })

        console.log('Registration response:', res.data)
        toast.dismiss('loading')

        if (res.data.success) {
          toast.success(res.data.message)
          reset()
          navigate('/auth/login')
        }
        return // Success, exit the function
        
      } catch (error) {
        console.error(`Registration attempt ${attempt} error:`, error)
        
        if (error.response) {
          // Server responded with error - don't retry
          toast.dismiss('loading')
          toast.error(error.response.data.message || 'Registration failed')
          setIsLoading(false)
          return
        } else if (attempt < maxRetries) {
          // No response, but we have retries left
          console.log(`Attempt ${attempt} failed, retrying...`)
          await new Promise(resolve => setTimeout(resolve, 2000)) // Wait 2 seconds before retry
        } else {
          // No more retries left
          toast.dismiss('loading')
          toast.error('Unable to connect to server. Please try again later or check your internet connection.')
        }
      }
    }
    
    setIsLoading(false)
  }

      

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-black/80 p-8 rounded-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-6">Sign Up</h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
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
            {isLoading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>
        <p className="text-gray-400 mt-4">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-white hover:underline">
            Sign in now
          </Link>
        </p>
      </div>
    </div>
  )
}


export default Register
