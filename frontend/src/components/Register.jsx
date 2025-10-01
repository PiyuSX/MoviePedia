import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-black/80 p-8 rounded-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-6">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-700 text-white py-3 rounded font-semibold hover:bg-red-800 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-gray-400 mt-4">
          Already have an account?{' '}
          <Link to="/auth/login" className="text-white hover:underline">
            Sign in now
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register