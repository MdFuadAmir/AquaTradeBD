import { NavLink } from "react-router";
import AquaTradeBD from "../../Shared/AquaTradeBD/AquaTradeBD";

const Navbar = () => {
    const navLink =<>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/about-us'}>About Us</NavLink></li>
    <li><NavLink to={'/contact-us'}>Contact Us</NavLink></li>
    </>
    return (
        <div className="navbar bg-gray-800 text-gray-300 md:px-10 lg:px-20">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {navLink}
      </ul>
    </div>
    <AquaTradeBD/>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLink}
    </ul>
  </div>
  <div className="navbar-end ">
    {/* <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            {user ? (
              <img src={user.photoURL} className="w-10 h-10 rounded-full" />
            ) : (
              <div className="w-10 rounded-full bg-blue-500 flex items-center justify-center text-blue-950">
                pro
              </div>
            )}
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-blue-950"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            {user ? (
              <li>
                <Link  className="text-red-500">
                  <FaSignOutAlt /> LogOut
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/login" className="text-green-500">
                  <FaSignInAlt /> Login
                </Link>
              </li>
            )}
          </ul>
        </div> */}
  </div>
</div>
    );
};

export default Navbar;