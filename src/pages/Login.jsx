import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", credentials);
    navigate("/ClearanceShop");
  };

  return (
    <section className="container mx-auto mt-10 px-4 flex justify-center">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 border border-white/15 mx-auto">
            <img src={logo} alt="StockGuard" className="w-7 h-7 object-contain rounded-full" />
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Welcome Back
          </h1>
          <p className="text-xs text-slate-300">
            Sign in to manage your duka inventory or reserve clearance deals.
          </p>
        </div>

        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={credentials.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-teal-400"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-semibold text-slate-200">
                Password
              </label>
              <span className="text-[11px] text-teal-300 hover:underline cursor-pointer">
                Forgot password?
              </span>
            </div>
            <input
              type="password"
              name="password"
              required
              value={credentials.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-teal-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-white/90 hover:bg-white text-slate-900 font-bold text-sm shadow-lg transition duration-200 cursor-pointer mt-2"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-xs text-slate-300 pt-2">
          New to StockGuard?{" "}
          <Link to="/SignUp" className="text-amber-300 font-bold hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;