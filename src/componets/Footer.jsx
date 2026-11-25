import logo from "../assets/images/logo.png";
import Email from "../assets/images/email.png";
import Phone from "../assets/images/phone.png";

function Footer() {
  return (
    <footer className="container mx-auto mt-20 mb-8 px-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:border-teal-400/40 hover:shadow-[0_20px_50px_rgba(20,184,166,0.15)]">
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="StockGuard"
                className="w-12 h-12 object-contain rounded-xl"
              />
              <span className="font-bold text-white tracking-wider text-lg">
                STOCKGUARD
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              Helping local Dukas cut expiry losses while connecting neighbours
              to daily grocery deals.
            </p>
            <p className="text-xs text-slate-400">
              StockGuard is committed to minimising food waste in Kenyan retail
              and maximising savings for communities.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li className="hover:text-teal-300 transition cursor-pointer">
                Home
              </li>
              <li className="hover:text-teal-300 transition cursor-pointer">
                Clearance Shop
              </li>
              <li className="hover:text-teal-300 transition cursor-pointer">
                About US
              </li>
              <li className="hover:text-teal-300 transition cursor-pointer">
                Duka Owner Portal
              </li>
              <li className="hover:text-teal-300 transition cursor-pointer">
                Customer Support
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">
              Community & Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-3 bg-teal-400 text-black border border-white/10 px-4 py-2.5 rounded-xl">
                <span>Join Our Duka Network</span>
              </li>
              <li className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl">
                <img
                  src={Email}
                  alt="Email"
                  className="w-5 h-5 object-contain"
                />
                <span>contact@StockGuard.com</span>
              </li>
              <li className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl">
                <img
                  src={Phone}
                  alt="Phone"
                  className="w-5 h-5 object-contain"
                />
                <span>254-700-333-333</span>
              </li>
              <li className="pt-2">
                <span className="text-xs uppercase tracking-wider text-teal-300 font-semibold">
                  Follow Us
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-teal-300  text-center text-xs text-slate-400">
          © {new Date().getFullYear()} StockGuard Kenya. All rights reserved.
          Zero Waste • Smart Retail
        </div>
    
    </footer>
  );
}

export default Footer;
