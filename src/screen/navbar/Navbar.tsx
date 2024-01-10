import logo from "../../assets/grid/OGlogo.png";
import cart from "../../assets/grid/cart.svg";
import { NavLink } from "react-router-dom";
import { Command, CommandInput } from "@/components/ui/command";
import classes from "./Navbar.module.css";
// import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Navbar() {
  // const [state, changeState] = useState("block");
  return (
    <nav className="bg-white  w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-12 ml-8" alt="OG Logo" />
        </a>
        <div className="flex items-end md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className={`${classes.mb_navbarSearch}`}>
            <button className="m-auto">
              <Command style={{ border: "1px solid black" }}>
                <CommandInput placeholder="search..." />
              </Command>
            </button>
            <NavLink to="/cart">
              <button
                style={{ marginLeft: "1rem", transform: "translate(10%, 50%)" }}
                className="m-auto"
              >
                <img src={cart} className="w-8 mr-8 m-auto" />
              </button>
            </NavLink>
            <NavLink to="/signIn">
              <button
                type="button"
                className="text-black border-black border-2 bg-white hover:bg-black hover:text-white focus:ring-1 focus:outline-none focus:ring-black font-medium rounded text-sm px-8 py-2 text-center dark:bg-white dark:hover:bg-black dark:focus:ring-black"
              >
                Login
              </button>
            </NavLink>
          </div>
          <Sheet>
            <SheetTrigger>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
                // onClick={() =>
                //   state == "block" ? changeState("none") : changeState("block")
                // }
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent style={{ height: "50vh" }}>
              <SheetHeader>
                <SheetTitle>
                  <h1>
                    <NavLink to="">Home</NavLink>
                  </h1>
                </SheetTitle>
                <SheetTitle>
                  <h1>
                    <NavLink to="/shop">Shop</NavLink>
                  </h1>
                </SheetTitle>
                <SheetTitle>
                  <h1>
                    <NavLink to="/select">Customize</NavLink>
                  </h1>
                </SheetTitle>
                <SheetTitle>
                  <h1>
                    <NavLink to="/cart">Cart</NavLink>
                  </h1>
                </SheetTitle>
                <SheetTitle>
                  <button className="m-auto">
                    <Command style={{ border: "1px solid black" }}>
                      <CommandInput placeholder="search..." />
                    </Command>
                  </button>
                </SheetTitle>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div
          // style={{ display: state }}
          className={`${classes.mb_navbar} items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white ">
            <li>
              <a
                href="#"
                className=" py-2 px-3 text-black bg-white rounded hover:text-slate-600"
                aria-current="page"
              >
                <NavLink to="">Home</NavLink>
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" py-2 px-3 text-black bg-white rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black hover:text-slate-600"
              >
                <NavLink to="shop">Shop</NavLink>
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" py-2 px-3 text-black bg-white rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black hover:text-slate-600"
              >
                <NavLink to="select">Customize</NavLink>
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" py-2 px-3 text-black bg-white rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black hover:text-slate-600"
              >
                Categories
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
