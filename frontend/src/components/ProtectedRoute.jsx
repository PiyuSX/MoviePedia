import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ children }) => {
  const user = useSelector((store) => store.app.user)
  
  if (!user) {
    return <Navigate to="/auth/login" replace />
  }
  
  return children
}

export default ProtectedRoute
