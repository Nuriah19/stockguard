import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import bread from "../assets/images/white-bread.png";

function Hero() {
  const steps = [
    {
      num: "1",
      title: "Duka Flags Stock",
      desc: "Shopkeepers log items nearing expiry in seconds before they go to waste.",
    },
    {
      num: "2",
      title: "Instant Discounts Drop",
      desc: "Automated markdowns go live immediately for local neighborhood shoppers.",
    },
    {
      num: "3",
      title: "Grab & Save",
      desc: "Reserve fresh everyday groceries from your local duka at up to 50% off.",
    },
  ];

  const handleScrollToSteps = () => {
    const section = document.getElementById("how-it-works");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="container mx-auto mt-10 px-4 space-y-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col justify-between space-y-8">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15">
              <img
                src={logo}
                alt="StockGuard"
                className="w-5 h-5 object-contain rounded-full"
              />
              <span className="text-xs font-bold tracking-widest text-teal-300 uppercase">
                StockGuard
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              FRESH DUKA DEALS <br />
              BEFORE THEY EXPIRE.
            </h1>

            <p className="text-base md:text-lg text-slate-200 max-w-xl leading-relaxed">
              Save up to 50% on everyday groceries from your local shop while
              helping stop food waste.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/ClearanceShop"
              className="px-6 py-3.5 rounded-xl bg-white/90 hover:bg-white text-slate-900 font-bold text-sm shadow-lg transition duration-200 cursor-pointer text-center"
            >
              Browse Today&apos;s Deals
            </Link>

            <span
              onClick={handleScrollToSteps}
              className="px-6 py-3.5 rounded-xl bg-amber-500/80 hover:bg-amber-500 border border-amber-300/50 text-white font-bold text-sm shadow-lg shadow-amber-950/40 transition duration-200 cursor-pointer text-center select-none"
            >
              How It Works
            </span>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40">
          <h2 className="text-lg font-bold text-white mb-4">
            Flash Deal Preview
          </h2>

          <div className="bg-white rounded-2xl p-4 text-slate-900 shadow-lg space-y-3">
            <div className="relative rounded-xl overflow-hidden bg-slate-100 h-44">
              <Link to="/ClearanceShop"><img
                src={bread}
                alt="Broadways Bread 500g"
                className="w-full h-full object-cover"
              /></Link>
              <span className="absolute bottom-2 right-2 bg-black/75 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-lg">
                18 hrs 45 mins left!
              </span>
            </div>

            <div>
              <Link to="/ClearanceShop"><h3 className="font-bold text-base text-slate-900">
                Broadways Bread 500g
              </h3></Link>
              <p className="text-xs text-slate-400 line-through">KES 65</p>
            </div>
            <div className="flex items-end justify-between pt-1">
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                  Clearance
                </span>
                <span className="text-xl font-extrabold text-slate-900">
                  KES 40
                </span>
              </div>

              <span className="bg-amber-100 text-amber-800 border border-amber-300 text-xs font-bold px-3 py-1 rounded-full">
                Expires in 2 Days
              </span>
            </div>
          </div>
        </div>
      </div>

      
      <div id="how-it-works" className="space-y-4 pt-2">
        <h2 className="text-xl font-bold text-white tracking-tight">
          3-Step Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:border-teal-400/40"
            >
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-white/15 border border-white/25 flex items-center justify-center text-sm font-bold text-white shrink-0">
                  {step.num}
                </span>
                <div className="space-y-1.5">
                  <h3 className="font-bold text-white text-base">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
