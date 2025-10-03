import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-hot-toast";
import { setUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../utils/constant";

const Navbar = () => {
  const user = useSelector((store) => store.app.user);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/v1/users/logout`, {
        withCredentials: true
      })
      if (res.data.success) {
        toast.success(res.data.message)
        dispatch(setUser(null))
        navigate('/')
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <nav className="sticky top-0 bg-black bg-opacity-95 shadow-md py-4 px-4 md:px-8 lg:px-16 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl md:text-3xl font-bold text-red-700 hover:text-red-600 transition-colors">
          <Link to="/">MoviePedia</Link>
        </div>
        {!user && (
          <Link className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md transition-colors font-medium" to="/auth/login">
            Sign In
          </Link>
        )}
        {user && (
          <div className="flex items-center gap-4">
            <span className="text-lg text-white hidden md:inline">{user.name}</span>
            <button className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md transition-colors font-medium" onClick={handleSignOut}>Sign Out</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
