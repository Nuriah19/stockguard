import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Aboutus() {
  const pillars = [
    {
      title: "Zero-Waste Retail",
      desc: "Every year, tonnes of good groceries expire on local shelves. StockGuard alerts shopkeepers early so food feeds families instead of landfills.",
    },
    {
      title: "Empowering Local Dukas",
      desc: "Small retail shops operate on tight margins. Instant clearance pricing turns potential expiry losses into recovered daily cashflow.",
    },
    {
      title: "Neighborhood Savings",
      desc: "Shoppers discover verified, safe-to-consume daily essentials right around the corner at up to 50% off retail prices.",
    },
  ];

  const stats = [
    { value: "Up to 50%", label: "Daily Grocery Savings" },
    { value: "Real-Time", label: "Expiry Stock Alerts" },
    { value: "100%", label: "Built for Kenyan Retail" },
  ];

  return (
    <section className="container mx-auto mt-10 px-4 space-y-10">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl space-y-6">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15">
          <img src={logo} alt="StockGuard" className="w-5 h-5 object-contain rounded-full" />
          <span className="text-xs font-bold tracking-widest text-teal-300 uppercase">
            Our Mission
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight max-w-3xl">
          SMART EXPIRY TRACKING FOR NEIGHBORHOOD DUKAS.
        </h1>

        <p className="text-base md:text-lg text-slate-200 max-w-2xl leading-relaxed">
          StockGuard bridges the gap between local shopkeepers and everyday shoppers—turning near-expiry inventory into instant community flash deals before a single item goes to waste.
        </p>

        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center"
            >
              <p className="text-2xl font-extrabold text-teal-300">{stat.value}</p>
              <p className="text-xs uppercase tracking-wider text-slate-300 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>


      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white tracking-tight">Why StockGuard?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:border-teal-400/40 hover:shadow-[0_20px_50px_rgba(20,184,166,0.15)] space-y-3"
            >
              <h3 className="font-bold text-white text-lg">{item.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>


      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <span className="text-amber-300 text-xs font-bold uppercase tracking-wider">
            Join the Movement
          </span>
          <h3 className="text-2xl font-bold text-white">
            Ready to shop smarter or protect your duka&apos;s stock?
          </h3>
          <p className="text-sm text-slate-300">
            Browse live clearance discounts in your neighborhood or register your shop to start tracking expiry dates today.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 shrink-0">
          <Link
            to="/ClearanceShop"
            className="px-6 py-3.5 rounded-xl bg-white/90 hover:bg-white text-slate-900 font-bold text-sm shadow-lg transition duration-200"
          >
            Explore Clearance Shop
          </Link>

          <Link
            to="/SignUp"
            className="px-6 py-3.5 rounded-xl bg-amber-500/80 hover:bg-amber-500 border border-amber-300/50 text-white font-bold text-sm shadow-lg shadow-amber-950/40 transition duration-200"
          >
            Register a Duka
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
