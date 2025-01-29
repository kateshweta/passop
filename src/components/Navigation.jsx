import React from "react";

function Navigation() {
  return (
    <nav className="bg-black flex justify-between items-center px-20 h-20 text-white">
      {/* Logo Design */}

      <div className="logo font-bold text-white text-2xl" font-bold>
        <span className="text-green-500">&lt;</span>
        Pass
        <span className="text-green-500">OP&gt;</span>
      </div>

      {/* NavBar */}
      <ul>
        <li className="flex gap-4">
          <a className="hover:font-bold" href="#">
            Home
          </a>
          <a className="hover:font-bold" href="#">
            About Us
          </a>
          <a className="hover:font-bold" href="#">
            Services
          </a>
          <a className="hover:font-bold" href="#">
            Contact
          </a>
        </li>
      </ul>

      <button className="bg-transparent my-5">
        <a
          href="https://github.com/kateshweta/passop"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="filter invert p-1 w-10"
            src="icons/github.png"
            alt="github"
          />
        </a>
      </button>
    </nav>
  );
}

export default Navigation;
