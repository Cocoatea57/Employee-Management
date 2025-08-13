import React from "react";
import kenny from "../assets/kenny.jpg";
import logo from "../assets/favicon-logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="flex justify-around bg-indigo-500 shadow-xl p-2 ">
        <div className="flex">
          <img src={logo} alt="franel company ltd" className="size-8" />
          <marquee className="shadow-white shadow-xl border-t-1 border-white px-2 rounded w-32">
            <strong>Franel E-M-S </strong>
          </marquee>
        </div>

        <div className="flex gap-6 shadow-lg">
          <Link
            to="/"
            className="font-semibold shadow-white shadow-xl border rounded px-2 border-white hover:bg-green-500"
          >
            Employees
          </Link>

          <img
            src={kenny}
            alt="division"
            className="shadow-white shadow-2xl text-white w-[5px] h-[30px]"
          />
          <Link
            to="/register"
            className="font-semibold shadow-white shadow-xl border rounded px-2 border-white hover:bg-green-500"
          >
            Register
          </Link>
          <img
            src={kenny}
            alt="division"
            className="shadow-white shadow-2xl text-white w-[5px] h-[30px]"
          />
          <Link
            to="/leave-page"
            className="font-semibold shadow-white shadow-xl border rounded px-2 border-white hover:bg-green-500"
          >
            Leave Manager
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
