import { Routes, Route } from "react-router-dom"
import Login from "../components/Login"
import Register from "../components/Register"

const Auth = () => {
  return (
    <div className="relative min-h-screen">
      <img src="/bg.png" alt="" className='fixed top-0 left-0 h-screen w-full object-cover -z-10' />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Register />} />
      </Routes>
    </div>
  )
}

export default Auth