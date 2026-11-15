import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
const cartIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    />
  </svg>
);
const guardIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
    />
  </svg>
);
function Nav() {
  return (
    <header className="container mx-auto mt-8 px-4">
      <nav className="flex items-center justify-between bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4 shadow-lg">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="StockGuard"
            className="w-15 h-12 object-contain rounded-3xl"
          />
          <h1 className="font-bold text-white tracking-wider  hidden sm:inline text-3xl ">
            {guardIcon}
            STOCK<span className="text-teal-700 text-3xl">GUARD</span>
          </h1>
        </div>

        <ul className="flex items-center gap-6">
          <Link to="/">
            <li>
              <button className="px-4 py-2 rounded-lg bg-white/10 text-slate-200 border border-white/10 hover:bg-teal-500 hover:text-white hover:border-white/30 transition duration-200 cursor-pointer">
                Home
              </button>
            </li>
          </Link>
          <Link to="/ClearanceShop">
            <li>
              <button className="px-4 py-2 rounded-lg bg-white/10 text-slate-200 border border-white/10 hover:bg-teal-500 hover:text-white hover:border-white/30 transition duration-200 cursor-pointer">
                Clearance Shop
              </button>
            </li>
          </Link>
          <Link to="/Aboutus">
            <li>
              <button className="px-4 py-2 rounded-lg bg-white/10 text-slate-200 border border-white/10 hover:bg-teal-500 hover:text-white hover:border-white/30 transition duration-200 cursor-pointer">
                About Us
              </button>
            </li>
          </Link>
        </ul>

        <div className="flex items-center gap-3">
          <Link to="/Cart">
            <button className="p-2.5 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/25 transition duration-200 cursor-pointer">
              {cartIcon}
            </button>
          </Link>
          <Link to="/Login">
            <button className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-yellow-400 border border-teal-300/40 text-white text-sm font-semibold transition duration-200 cursor-pointer">
              Login
            </button>
          </Link>
          <Link to="/Signup">
            <button className="px-4 py-2 rounded-xl bg-orange-400 hover:bg-teal-500 border border-teal-300/40 text-white text-sm font-semibold transition duration-200 cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
