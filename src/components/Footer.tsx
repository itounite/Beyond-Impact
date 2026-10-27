import { Link } from "react-router-dom";
import { site } from "@/content/site";
import logoLight from "@/assets/beyond-logo-light.png";
import { ArrowUpRight, Twitter, Facebook, Linkedin } from "lucide-react";

const socialIcon = (label: string) => {
  if (label === "Twitter") return Twitter;
  if (label === "Facebook") return Facebook;
  return Linkedin;
};

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-navy text-clay">
      <div className="container-x py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex items-center" aria-label="Beyond Impact home">
              <img
                src={logoLight}
                alt="Beyond Impact"
                width={1754}
                height={1241}
                className="h-32 w-auto object-contain"
                loading="lazy"
              />
            </Link>
            <p className="mt-6 max-w-md text-clay/70 leading-relaxed">
              {site.tagline}
            </p>
            <a
              href={`mailto:${site.contactEmail}`}
              className="mt-8 inline-flex items-baseline gap-2 font-display text-2xl tracking-tight text-clay hover:text-coral transition-colors"
            >
              {site.contactEmail}
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <div className="eyebrow text-clay/60">Sitemap</div>
            <ul className="mt-6 space-y-3">
              {site.navLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-clay/85 hover:text-coral transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-clay/60">Follow</div>
            <ul className="mt-6 flex flex-wrap gap-3">
              {site.social.map((s) => {
                const Icon = socialIcon(s.label);
                return (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-clay/25 text-clay/80 transition-colors hover:border-coral hover:text-coral"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* APPLY FOR FUNDING */}
        <div className="mt-16 grid gap-4 border-t border-clay/15 pt-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <div className="eyebrow text-coral">For founders</div>
            <p className="mt-3 text-clay/85 leading-relaxed">
              {site.funding.intro}
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <a
              href={site.funding.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-medium text-clay transition-colors hover:bg-coral/90"
            >
              {site.funding.display}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-clay/15 pt-8 text-xs text-clay/55 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Beyond Impact. Confidential and subject to disclaimer.</div>
          <div>Pioneer Impact VC · Est. {site.founded}</div>
        </div>
      </div>

      {/* Decorative oversized script */}
      <div aria-hidden className="pointer-events-none absolute -bottom-10 left-0 right-0 select-none text-center">
        <span className="script text-[24vw] leading-none text-clay/[0.04]">Beyond</span>
      </div>
    </footer>
  );
};

export default Footer;
