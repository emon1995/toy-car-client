import ActiveLink from "../../components/ActiveLink/ActiveLink";
import logo from "../../assets/toy-car.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="shadow-xl bgColor">
      <div className="navbar text-white lg:max-w-[1440px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bgColor text-white rounded-box w-52"
            >
              <li>
                <ActiveLink to={`/`}>Home</ActiveLink>
              </li>
              <li>
                <ActiveLink to={`/allToys`}>All Toys</ActiveLink>
              </li>
              {user && (
                <>
                  <li>
                    <ActiveLink to={`/myToys`}>My Toys</ActiveLink>
                  </li>
                  <li>
                    <ActiveLink to={`/addToy`}>Add A Toy</ActiveLink>
                  </li>
                </>
              )}
              <li>
                <ActiveLink to={`/blog`}>Blog</ActiveLink>
              </li>
            </ul>
          </div>
          <Link
            to={`/`}
            className="btn btn-ghost normal-case text-xs md:text-xl gap-2"
          >
            <img className="w-7 h-7" src={logo} alt="logo" />
            CarsToyZone
          </Link>
        </div>
        <div className="navbar-center hidden navbar-end lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <ActiveLink to={`/`}>Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to={`/allToys`}>All Toys</ActiveLink>
            </li>
            {user && (
              <>
                <li>
                  <ActiveLink to={`/myToys`}>My Toys</ActiveLink>
                </li>
                <li>
                  <ActiveLink to={`/addToy`}>Add A Toy</ActiveLink>
                </li>
              </>
            )}
            <li>
              <ActiveLink to={`/blog`}>Blogs</ActiveLink>
            </li>
          </ul>
        </div>
        <div className="ml-4 ">
          {user && (
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom tooltip-secondary text-white"
              data-tip={user?.displayName}
            >
              <div className="w-10 ml-2 rounded-full">
                {user?.photoURL && <img src={user?.photoURL} />}
              </div>
            </label>
          )}
          {user && (
            <button
              onClick={handleLogout}
              className="btn active border-none shadow-2xl ml-2"
            >
              Logout
            </button>
          )}
          {!user && (
            <Link
              to={`/login`}
              className="btn active border-none shadow-2xl ml-2"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
