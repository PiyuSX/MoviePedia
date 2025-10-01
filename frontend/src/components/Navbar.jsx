import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isAuthPage = location.pathname.startsWith("/auth");

  return (
    <nav className="fixed top-5 left-0 right-0 mx-40 z-50">
      <div className="flex justify-between items-center w-full ">
        <div className="text-3xl font-bold text-red-700">
          <Link to="/">MoviePedia</Link>
        </div>
        {!isAuthPage && (
          <Link className="bg-red-700 text-white px-4 py-1 rounded" to="/auth/login">
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
