import { NavLink, Outlet } from "react-router";
import AquaTradeBD from "../../Shared/AquaTradeBD/AquaTradeBD";
import { FaSignOutAlt, FaUserCog } from "react-icons/fa";


const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open min-h-screen">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      {/* Drawer content */}
      <div className="drawer-content flex flex-col">
        {/* Navbar for mobile */}
        <div className="navbar text-white w-full lg:hidden">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2">Dashboard</div>
        </div>
        {/* Main content */}
        <div>
          <Outlet />
        </div>
      </div>

      {/* Drawer sidebar */}
      <div className="drawer-side flex justify-between">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu bg-slate-600 text-base-content min-h-full w-80 p-4 flex flex-col justify-between h-full">
          <div>
            <AquaTradeBD />
            <hr className="mt-6 mb-3 text-slate-400 font-bold border" />
            <div className="space-y-2">
              
            </div>
          </div>
          {/* profile and logout section */}
          <div className="bg-slate-500 p-4 rounded-xl shadow-2xl">
            <li>
              <NavLink
                to="/dashboard/profile"
                // onClick={handleCloseDrawer}
                className={({ isActive }) =>
                  isActive
                    ? "text-teal-300 font-semibold bg-teal-700"
                    : "text-white"
                }
              >
                <FaUserCog /> Profile
              </NavLink>
            </li>
            <li>
                <NavLink
                  to="/login"
                //   onClick={handleLogout}
                  className="text-red-500 flex items-center gap-2"
                >
                  <FaSignOutAlt /> LogOut
                </NavLink>
              {/* {user ? (
              ) : (
                <NavLink
                  to="/login"
                //   onClick={handleCloseDrawer}
                  className="text-green-500 flex items-center gap-2"
                >
                  <FaSignInAlt /> Login
                </NavLink>
              )} */}
            </li>
          </div>
        </ul>
      </div>
    </div>
    );
};

export default DashboardLayout;