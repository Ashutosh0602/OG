import logo from "../../assets/grid/OGlogo.png";
import search from "../../assets/grid/search.svg";
import cart from "../../assets/grid/cart.svg";
import { NavLink } from "react-router-dom";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

function Navbar() {
  return (
    <nav className="bg-white  w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-12 ml-8" alt="OG Logo" />
        </a>
        <div className="flex items-end md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Dialog>
            <DialogTrigger>
              <button style={{ transform: "translate(0, 10%)" }}>
                <img src={search} className="w-8 p-auto mr-8 my-auto" />
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                <DialogDescription>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Input
                      id="username"
                      placeholder="Shirt/Jeans"
                      className="col-span-3"
                    />
                    <Label htmlFor="username" className="text-center">
                      Search
                    </Label>
                  </div>{" "}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <NavLink to="/cart">
            <button
              style={{ transform: "translate(0, 20%)" }}
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
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
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
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black bg-white rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black"
                aria-current="page"
              >
                <NavLink to="">Home</NavLink>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black bg-white rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black"
              >
                <NavLink to="shop">Shop</NavLink>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black bg-white rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black"
              >
                <NavLink to="customize">Customize</NavLink>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black bg-white rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black"
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
