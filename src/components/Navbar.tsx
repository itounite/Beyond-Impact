import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";
import logoColor from "@/assets/beyond-logo-color.png";
import logoLight from "@/assets/beyond-logo-light.png";

interface NavbarProps {
  variant?: "light" | "dark";
}

const Navbar = ({ variant = "light" }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const isDark = variant === "dark" && !scrolled;
  const textClass = isDark ? "text-clay" : "text-navy";
  const bgClass = scrolled
    ? "bg-clay/85 backdrop-blur-xl border-b border-navy/10"
    : isDark
      ? "bg-transparent"
      : "bg-clay/40 backdrop-blur-md";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${bgClass}`}>
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="Beyond Impact home">
          <img
            src={isDark ? logoLight : logoColor}
            alt="Beyond Impact"
            width={1754}
            height={1241}
            className="h-14 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {site.navLinks.map((l) => (
            <NavLink
              key={l.href}
              to={l.href}
              className={({ isActive }) =>
                `relative px-3 py-2 text-sm font-medium transition-colors ${textClass} ${
                  isActive ? "" : "opacity-70 hover:opacity-100"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-px bg-coral" />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <div className="ml-3 flex items-center gap-2">
            <a
              href={site.investors.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs xl:text-sm font-medium transition-all ${
                isDark
                  ? "border-clay/40 text-clay hover:bg-clay hover:text-navy"
                  : "border-navy/20 text-navy hover:bg-navy hover:text-clay"
              }`}
            >
              Invest with us
            </a>
            <a
              href="http://bit.ly/fundregenerative"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-coral px-4 py-2 text-xs xl:text-sm font-medium text-white transition-all hover:bg-coral/90 shadow-sm"
            >
              Submit your pitch
            </a>
          </div>
        </nav>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${textClass}`}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-navy/10 bg-clay shadow-lg">
          <div className="container-x flex flex-col gap-1 py-4">
            {site.navLinks.map((l) => (
              <NavLink
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="rounded px-3 py-3 text-base font-medium text-navy hover:bg-navy/5"
              >
                {l.label}
              </NavLink>
            ))}
            <div className="mt-3 flex flex-col gap-2 pt-3 border-t border-navy/10">
              <a
                href={site.investors.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="rounded-full border border-navy bg-navy px-5 py-3 text-center text-sm font-medium text-clay transition-all hover:bg-navy/90"
              >
                Invest with us
              </a>
              <a
                href="http://bit.ly/fundregenerative"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="rounded-full bg-coral px-5 py-3 text-center text-sm font-medium text-white transition-all hover:bg-coral/90 shadow-sm"
              >
                Submit your pitch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
