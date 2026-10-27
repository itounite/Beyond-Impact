import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { portfolio } from "@/content/site";

const Portfolio = () => {
  const [filter, setFilter] = useState<string>("All");

  const funds = useMemo(
    () => ["All", ...Array.from(new Set(portfolio.companies.flatMap((c) => c.funds)))],
    []
  );

  const filtered = useMemo(
    () => (filter === "All" ? portfolio.companies : portfolio.companies.filter((c) => c.funds.includes(filter))),
    [filter]
  );

  const portfolioJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Beyond Impact Portfolio",
    itemListElement: portfolio.companies.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Organization",
        name: c.name,
        description: c.desc,
        areaServed: c.region,
      },
    })),
  };

  return (
    <Layout navVariant="dark">
      <SEO
        title="Portfolio — Industrial Biotech, Bioeconomy & Advanced Nutrition Companies | Beyond Impact"
        description="Beyond Impact portfolio: industrial biotech, applied biotech, the bioeconomy, advanced nutrition, human food, pet food, cultivated meat, precision fermentation, biomaterials and blue economy companies including Swedish Algae Factory (Algica), Mosa Meat, BlueNalu, EVERY, Geltor, Gourmey, SuperMeat, Umami Bioworks, Perfat, Tissen BioFarm and more."
        path="/portfolio"
        keywords="industrial biotech, applied biotech, bioeconomy, advanced nutrition, human food, pet food, Swedish Algae Factory, Algica, Mosa Meat investor, BlueNalu investor, EVERY Company, Geltor, Gourmey, SuperMeat, Umami Bioworks, Emulate, PLHYDE, Renewal Mill, Yeastup, Perfat, Tissen BioFarm, Ingrediome, Paleo, Algama, Jay & Joy, SwissDeCode, Plant Veda, alternative protein portfolio, precision fermentation companies, cultivated meat companies, biomaterials companies"
        jsonLd={portfolioJsonLd}
      />
      <PageHero
        eyebrow={portfolio.hero.eyebrow}
        title={<>A working <span className="script text-coral">directory</span> of the transition economy.</>}
        sub={portfolio.hero.sub}
      />



      <section className="bg-clay py-20 md:py-28">
        <div className="container-x">
          {/* Filter */}
          <div className="flex flex-wrap items-center gap-2">
            {funds.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-5 py-2 text-sm transition-all ${
                  filter === f
                    ? "border-navy bg-navy text-clay"
                    : "border-navy/20 text-navy hover:border-navy/40"
                }`}
              >
                {f}
              </button>
            ))}
            <div className="ml-auto text-sm text-navy/70">
              {filtered.length} {filtered.length === 1 ? "company" : "companies"}
            </div>
          </div>

          {/* Grid */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((c, i) => (
                <motion.article
                  key={c.name}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="group relative overflow-hidden bg-card p-7 shadow-soft hover:shadow-elevated transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="display text-2xl text-navy">{c.name}</h3>
                    <span className="rounded-full bg-green/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-green">
                      {c.region}
                    </span>
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-wider text-coral">
                    {c.sector} · {c.funds.join(" & ")}
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-navy/70">{c.desc}</p>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
