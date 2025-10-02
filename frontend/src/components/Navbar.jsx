import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-hot-toast";
import { setUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = useSelector((store) => store.app.user);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/v1/users/logout', {
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
    <nav className="fixed top-5 left-0 right-0 mx-40 z-50">
      <div className="flex justify-between items-center w-full ">
        <div className="text-3xl font-bold text-red-700">
          <Link to="/">MoviePedia</Link>
        </div>
        {!user && (
          <Link className="bg-red-700 text-white px-4 py-1 rounded" to="/auth/login">
            Sign In
          </Link>
        )}
        {user && (
          <div className="flex items-center gap-4">
            <span className="text-lg">{user.name}</span>
            <button className="bg-red-700 text-white px-4 py-1 rounded" onClick={handleSignOut}>Sign Out</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
