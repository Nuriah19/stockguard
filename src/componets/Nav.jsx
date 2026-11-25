import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useContext } from "react";
import { CartContext } from "../context/State";


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
  const {cart}=useContext(CartContext)

  return (
    <header className="container mx-auto pt-5 px-4">
      <nav className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3.5 shadow-xl flex flex-wrap items-center justify-between gap-4">
        
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-15 h-9 rounded-full   flex items-center justify-center p-1.5 shadow-inner group-hover:border-teal-400/50 transition">
            <img
              src={logo}
              alt="StockGuard Logo"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <span className="text-lg font-extrabold text-white tracking-wider uppercase">
            STOCKGUARD<span className="flex">{guardIcon}</span>
          </span>
        </Link>

      
        <ul className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm font-semibold text-slate-200 ">
          <li className="rounded-lg bg-white/10 py-2">
            <Link
              to="/"
              className="px-4 py-2 rounded-xl hover:bg-teal-500  hover:text-white transition"
            >
              Home
            </Link>
          </li>
          <li className="rounded-lg bg-white/10 py-2">
            <Link
              to="/clearanceShop"
              className="px-4 py-2 rounded-xl hover:bg-teal-500  hover:text-white transition"
            >
              Clearance Shop
            </Link>
          </li>
          <li className="rounded-lg bg-white/10 py-2">
            <Link
              to="/aboutus"
              className="px-4 py-2 rounded-xl hover:bg-teal-500  hover:text-white transition"
            >
              About Us
            </Link>
          </li>
        </ul>

        
        <div className="flex items-center gap-3">
      
          <Link
            to="/cart"
            className="relative px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold transition flex items-center gap-1.5"
          >
            <span>{cartIcon}</span>
            <span className="absolute -top-2 -right-2 min-w-5 h-5 px-1.5 rounded-full bg-amber-500 border border-amber-300/60 text-white text-[10px] font-extrabold flex items-center justify-center shadow-md">
              {cart.length}
            </span>
          </Link>

      
          <Link
            to="/login"
            className="px-4 py-2 rounded-xl bg-teal-500/80 hover:bg-teal-500 border border-teal-300/40 text-white text-xs font-bold shadow transition"
          >
            Login
          </Link>


          <Link
            to="/signUp"
            className="px-4 py-2 rounded-xl bg-amber-500/85 hover:bg-amber-500 border border-amber-300/50 text-white text-xs font-bold shadow transition"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
