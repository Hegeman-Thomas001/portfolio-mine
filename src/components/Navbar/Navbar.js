import { useState } from "react";
//
const Nav = () => {
  const [linkActive, setLinkActive] = useState("home");

  const menuItems = (
    <>
      <li>
        {" "}
        <a
          onClick={() => setLinkActive("home")}
          href="#home"
          className={`${
            linkActive === "home" ? "text-red-700" : ""
          } hover:bg-neutral hover:text-red-700`}
        >
          Home
        </a>{" "}
      </li>
      <li>
        {" "}
        <a
          onClick={() => setLinkActive("about")}
          href="#about"
          className={`${
            linkActive === "about" ? "text-red-700" : ""
          } hover:bg-neutral hover:text-red-700`}
        >
          About
        </a>{" "}
      </li>
      <li>
        {" "}
        <a
          onClick={() => setLinkActive("portfolio")}
          href="#portfolio"
          className={`${
            linkActive === "portfolio" ? "text-red-700" : ""
          } hover:bg-neutral hover:text-red-700`}
        >
          Portfolio
        </a>{" "}
      </li>
      <li>
        {" "}
        <a
          onClick={() => setLinkActive("contact")}
          href="#contact"
          className={`${
            linkActive === "contact" ? "text-red-700" : ""
          } hover:bg-neutral hover:text-red-700`}
        >
          Contact
        </a>{" "}
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-10">
      <nav className="navbar bg-black">
        <section className="navbar-start">
          <section className="dropdown">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
            >
              {menuItems}
            </ul>
          </section>
          <img src="#" alt="me" className="" />
        </section>
        <section className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </section>
      </nav>
    </header>
  );
};

export default Nav;
