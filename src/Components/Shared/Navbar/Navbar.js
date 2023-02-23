import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link className="hover:text-primary text-xl" to="/">
          home
        </Link>
      </li>
      <li>
        <Link className="hover:text-primary text-xl" to="/">
          books
        </Link>
      </li>
      <li>
        <Link className="hover:text-primary text-xl" to="/">
          book review
        </Link>
      </li>
      <li>
        <Link className="hover:text-primary text-xl" to="/">
          blog
        </Link>
      </li>
      <li>
        <Link className="hover:text-primary text-xl" to="/">
          about us
        </Link>
      </li>
    </>
  );

  return (
    <nav className="flex items-center justify-between px-10 py-6">
      <h2 className="text-4xl font-bold text-primary">
        <Link to="/">Peon</Link>
      </h2>
      <div>
        <ul className="text-primaryLight flex gap-3 capitalize">{navItems}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
