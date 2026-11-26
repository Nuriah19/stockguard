import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { auth } from "../firebase";
import { EyeClosed, Eye } from "lucide-react";
import Loader from "../componets/Loader";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const navigate = useNavigate();
  const [role, setRole] = useState("shopper");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    dukaName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!formData.fullName) errors.fullName = true;
    if (role === "duka" && !formData.dukaName) errors.dukaName = true;
    if (!formData.email) errors.email = true;
    if (!formData.phone) errors.phone = true;
    if (!formData.password) errors.password = true;
    if (!formData.confirmPassword || formData.password !== formData.confirmPassword) {
      errors.confirmPassword = true;
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      const { email, password } = formData;
      setIsLoading(true);

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setIsLoading(false);
          if (user) navigate("/Login");
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error.code, error.message);
        });
    }
  };

  return (
    <section className="container mx-auto mt-8 px-4 flex justify-center">
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
            Create Your Account
          </h1>
          <p className="text-xs text-slate-300">
            Join StockGuard to grab daily flash deals or list near-expiry duka
            stock.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-white/5 border border-white/10">
          <button
            type="button"
            onClick={() => setRole("shopper")}
            className={`py-2 text-xs font-bold rounded-lg transition cursor-pointer ${
              role === "shopper"
                ? "bg-teal-500/80 text-white shadow"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Neighborhood Shopper
          </button>
          <button
            type="button"
            onClick={() => setRole("duka")}
            className={`py-2 text-xs font-bold rounded-lg transition cursor-pointer ${
              role === "duka"
                ? "bg-amber-500/80 text-white shadow"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Duka Owner
          </button>
        </div>

       

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Sarah Iminza"
              className={`w-full ${
                formErrors.fullName ? "border-red-400" : "border-white/20"
              } px-4 py-3 rounded-xl bg-white/10 border text-white placeholder-slate-400 focus:outline-none focus:border-teal-400`}
            />
          </div>

          {role === "duka" && (
            <div>
              <label className="block text-xs font-semibold text-amber-300 mb-1.5">
                Duka / Shop Name
              </label>
              <input
                type="text"
                name="dukaName"
                required
                value={formData.dukaName}
                onChange={handleChange}
                placeholder="e.g. Kivuli Mini Mart"
                className={`w-full ${
                  formErrors.dukaName ? "border-red-400" : "border-amber-400/40"
                } px-4 py-3 rounded-xl bg-white/10 border text-white placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400`}
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`w-full ${
                formErrors.email ? "border-red-400" : "border-white/20"
              } px-4 py-3 rounded-xl bg-white/10 border text-white placeholder-slate-400 text-sm focus:outline-none focus:border-teal-400`}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="07XX XXX XXX"
              className={`w-full ${
                formErrors.phone ? "border-red-400" : "border-white/20"
              } px-4 py-3 rounded-xl bg-white/10 border text-white placeholder-slate-400 text-sm focus:outline-none focus:border-teal-400`}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1.5">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full px-4 py-3 pr-11 rounded-xl bg-white/10 border text-white placeholder-slate-400 focus:outline-none focus:border-teal-400 ${
                  formErrors.password ? "border-red-400" : "border-white/20"
                }`}
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

          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1.5">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={confirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full px-4 py-3 pr-11 rounded-xl bg-white/10 border text-white placeholder-slate-400 focus:outline-none focus:border-teal-400 ${
                  formErrors.confirmPassword
                    ? "border-red-400"
                    : "border-white/20"
                }`}
              />
              <button
                type="button"
                onClick={() => setConfirmPassword(!confirmPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-300 hover:text-teal-300 transition cursor-pointer"
              >
                {confirmPassword ? <Eye size={18} /> : <EyeClosed size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-amber-500/85 hover:bg-amber-500 border border-amber-300/50 text-white font-bold text-sm shadow-lg shadow-amber-950/40 transition duration-200 cursor-pointer mt-2"
          >
            {role === "duka" ? "Register My Duka" : "Create Shopper Account"}
          </button>
        </form>

        <p className="text-center text-xs text-slate-300 pt-2">
          Already have an account?{" "}
          <Link to="/Login" className="text-teal-300 font-bold hover:underline">
            Log in here
          </Link>
        </p>
      </div>

      {isLoading && <Loader />}
    </section>
  );
}

export default SignUp;
