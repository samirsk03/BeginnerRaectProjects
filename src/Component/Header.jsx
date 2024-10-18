import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
    },
    {
      name: "All Post",
      slug: "/allproducts",
    },
    {
      name: "Cart",
      slug: "/cart",
    },
    {
      name: "Login",
      slug: "/login",
    },
    {
      name: "SignUp",
      slug: "/signup",
    },
  ];

  return (
    <div className="py-4 bg-gray-500 ">
      <nav className="flex items-center ">
        <div className="mr-4">
          <Link to="/">
            <h1
              className="px-4"
              style={{ fontFamily: "Sixtyfour Convergence, sans-serif" }}
            >
              Raste ka Mall
            </h1>
          </Link>
        </div>
        <ul className="flex ml-auto">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => navigate(item.slug)}
                className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
              >
                {" "}
                {item.name}{" "}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
