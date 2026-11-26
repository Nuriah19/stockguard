import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { auth } from "../firebase";
import { EyeClosed, Eye } from "lucide-react";
import Loader from "../componets/Loader";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAuthError("");

    const errors = {};
    if (!credentials.email) errors.email = true;
    if (!credentials.password) errors.password = true;

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      const { email, password } = credentials;
      setIsLoading(true);

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          if (user && user.email === "admin@gmail.com") {
            navigate("/admindashboard");
          }
          if (user && user.email !== "admin@gmail.com") {
            navigate("/");
          }
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    }
  };

  return (
    <section className="container mx-auto mt-10 px-4 flex justify-center">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 border border-white/15 mx-auto">
            <img
              src={logo}
              alt="StockGuard"
              className="w-7 h-7 object-contain rounded-full"
            />
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Welcome Back
          </h1>
          <p className="text-xs text-slate-300">
            Sign in to manage your duka inventory or reserve clearance deals.
          </p>
        </div>

        {authError && (
          <p className="text-xs font-semibold text-red-300 bg-red-500/15 border border-red-400/30 rounded-xl p-3 text-center">
            {authError}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`w-full ${
                formErrors.email ? "border-red-400" : "border-white/20"
              } px-4 py-3 rounded-xl bg-white/10 border text-white placeholder-slate-400 text-sm focus:outline-none focus:border-teal-400`}
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

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full ${
                  formErrors.password ? "border-red-400" : "border-white/20"
                } px-4 py-3 pr-11 rounded-xl bg-white/10 border text-white placeholder-slate-400 text-sm focus:outline-none focus:border-teal-400`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-300 hover:text-teal-300 transition cursor-pointer"
              >
                {showPassword ? <Eye size={18} /> : <EyeClosed size={18} />}
              </button>
            </div>
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
          <Link
            to="/SignUp"
            className="text-amber-300 font-bold hover:underline"
          >
            Create an account
          </Link>
        </p>
      </div>

      {isLoading && <Loader />}
    </section>
  );
}

export default Login;
