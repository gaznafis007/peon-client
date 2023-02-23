import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import { CgMenu, CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineArrowBack } from "react-icons/md";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  const handleToggle = () => {
    setToggle(!toggle);
  };
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
          <Link
            to="/"
            className="hover:text-primary text-xl inline-block p-3 self-center"
          >
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
        <ul className="text-primaryLight gap-4 capitalize hidden md:flex">
          {navItems}
        </ul>
        <div className="flex flex-col md:hidden relative">
          <span
            className="text-2xl text-primary font-semibold cursor-pointer block"
            onClick={handleToggle}
          >
            {toggle ? <MdOutlineArrowBack /> : <CgMenu />}
          </span>
          {toggle && (
            <ul className="text-[12px] text-white capitalize absolute p-3 bg-secondary items-center ease-in transition-opacity right-10 duration-500">
              {navItems}
              {userAction}
            </ul>
          )}
        </div>
      </div>
      <div className="hidden md:block">
        <ul className="flex items-center gap-4 text-primaryLight">
          {userAction}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
