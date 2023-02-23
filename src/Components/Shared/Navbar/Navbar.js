import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const userAction = (
    <>
      {user?.uid ? (
        <>
          <li>
            <Link to="/" className="hover:text-primary text-xl mr-2 ">
              <FiShoppingCart />
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-primary text-xl">
              <CgProfile />
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-primary text-xl">
              sign out
            </Link>
          </li>
        </>
      ) : (
        <li>
          <Link to="/" className="hover:text-primary text-xl">
            sign in
          </Link>
        </li>
      )}
    </>
  );
  const navItems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " border-b-2 border-primary p-3 text-xl inline-block"
              : "hover:text-primary text-xl inline-block p-3 border-none border-b-0"
          }
          to="/"
        >
          home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " border-b-2 border-primary p-3 text-xl inline-block"
              : "hover:text-primary text-xl inline-block p-3 border-none border-b-0"
          }
          to="/books"
        >
          books
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " border-b-2 border-primary p-3 text-xl inline-block"
              : "hover:text-primary text-xl inline-block p-3 border-none border-b-0"
          }
          to="/review"
        >
          book review
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " border-b-2 border-primary p-3 text-xl inline-block"
              : "hover:text-primary text-xl inline-block p-3 border-none border-b-0"
          }
          to="/blog"
        >
          blog
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " border-b-2 border-primary p-3 text-xl inline-block"
              : "hover:text-primary text-xl inline-block p-3 border-none border-b-0"
          }
          to="/aboutus"
        >
          about us
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="flex items-center justify-between px-10 py-6">
      <h2 className="text-4xl font-bold text-primary">
        <Link to="/">Peon</Link>
      </h2>
      <div>
        <ul className="text-primaryLight flex gap-4 capitalize">{navItems}</ul>
      </div>
      <div>
        <ul className="flex items-center gap-4 text-primaryLight">
          {userAction}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
