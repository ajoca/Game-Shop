import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../imgs/logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-gradient-to-r from-blue-800 via-blue-700 to-purple-600 shadow-md px-8 md:px-16 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img
          src={Logo}
          alt="Game Shop Logo"
          className="h-40 w-auto max-w-full"
        />
      </div>

      {/* Links */}
      <ul className="flex space-x-6 text-white font-semibold">
        <li>
          <Link to="/dashboard" className="hover:text-indigo-200">
            Dashboard
          </Link>
        </li>
        <li>
          <button
            className="hover:text-indigo-200"
            onClick={() => navigate("/cart")} // Navegar al FullCart
          >
            Carrito
          </button>
        </li>
        <li>
          <Link to="/search" className="hover:text-indigo-200">
            Búsqueda
          </Link>
        </li>
        <li>
          <Link to="/explore" className="hover:text-indigo-200">
            Explorar
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-indigo-200">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-indigo-200">
            Contacto
          </Link>
        </li>
      </ul>

      {/* Login Button */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md font-semibold focus:outline-none"
        >
          <span>Login</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
