import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { funds, site } from "@/content/site";

const Funds = () => {
  return (
    <Layout navVariant="dark">
      <SEO
        title="Funds — Article 9 SFDR Impact VC Platform | Industrial Biotech, Bioeconomy & Climate | Beyond Impact"
        description="Beyond Impact Ventures is an Article 9 SFDR impact fund platform investing seed to Series A in industrial biotech, applied biotech, the bioeconomy, advanced nutrition, human food, pet food, precision fermentation, cellular agriculture and biomaterials. Luxembourg SICAV-RAIF umbrella."
        path="/funds"
        keywords="industrial biotech, applied biotech, bioeconomy, industrial biotechnology, applied biotechnology, advanced nutrition, human food, pet food, alternative protein fund, food-tech fund, bioeconomy fund, climate VC fund, biodiversity impact fund, Article 9 SFDR fund, Luxembourg SICAV-RAIF, precision fermentation fund, cellular agriculture fund, biomaterials fund, blue economy fund, Beyond Impact Ventures, Fund I, Fund II, co-investment"
      />

      <PageHero
        eyebrow={funds.hero.eyebrow}
        title={<>An impact fund <span className="script text-coral">platform</span> — not a single fund.</>}
        sub={funds.hero.sub}
        image={funds.hero.image}
      />

      {/* FUND PLATFORM */}
      <section className="bg-clay py-24 md:py-32">
        <div className="container-x">
          <div className="eyebrow text-green">The Platform</div>
          <h2 className="display mt-4 max-w-3xl text-4xl text-navy md:text-5xl">
            Two products. One disciplined platform.
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {funds.vehicles.map((f, i) => (
              <motion.article
                key={f.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative flex flex-col bg-card p-8 shadow-soft hover:shadow-elevated transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="display text-2xl text-navy md:text-3xl">{f.name}</h3>
                  <span className="shrink-0 rounded-full border border-coral/40 bg-coral/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-coral">
                    {f.status}
                  </span>
                </div>

                <p className="mt-6 text-navy/75 leading-relaxed">{f.focus}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {f.highlights.map((h) => (
                    <li key={h} className="rounded-full bg-green/10 px-3 py-1 text-xs font-medium text-green">
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          {/* SISTER ENTITY */}
          <motion.a
            href={funds.sister.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group mt-10 grid gap-6 bg-navy p-8 text-clay shadow-soft hover:shadow-elevated transition-shadow md:grid-cols-12 md:items-center md:p-12"
          >
            <div className="md:col-span-3">
              <div className="text-[11px] uppercase tracking-wider text-coral">{funds.sister.tag}</div>
              <div className="display mt-2 text-3xl text-clay md:text-4xl">{funds.sister.name}</div>
            </div>
            <p className="text-clay/75 leading-relaxed md:col-span-7">{funds.sister.desc}</p>
            <div className="md:col-span-2 md:text-right">
              <span className="inline-flex items-center gap-2 rounded-full border border-clay/30 px-5 py-3 text-sm font-medium text-clay transition-colors group-hover:bg-coral group-hover:border-coral">
                Visit site →
              </span>
            </div>
          </motion.a>

          {/* BLUE ECONOMY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-6"
          >
            <Link
              to="/blue-economy"
              className="group grid gap-6 bg-green p-8 text-clay shadow-soft hover:shadow-elevated transition-shadow md:grid-cols-12 md:items-center md:p-12"
            >
              <div className="md:col-span-3">
                <div className="text-[11px] uppercase tracking-wider text-clay/80">New initiative</div>
                <div className="display mt-2 text-3xl text-clay md:text-4xl">Blue Economy</div>
              </div>
              <p className="text-clay/90 leading-relaxed md:col-span-7">
                Strategic partnership with UMITO Partners to accelerate ocean innovation across Europe, Japan and Asia-Pacific — building toward the Blue Frontier Fund.
              </p>
              <div className="md:col-span-2 md:text-right">
                <span className="inline-flex items-center gap-2 rounded-full border border-clay/40 px-5 py-3 text-sm font-medium text-clay transition-colors group-hover:bg-coral group-hover:border-coral">
                  Read more <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-gradient-navy py-24 text-clay md:py-32">
        <div className="container-x text-center">
          <div className="eyebrow text-coral justify-center">Philosophy</div>
          <h2 className="display mx-auto mt-6 max-w-4xl text-4xl leading-tight text-clay md:text-6xl">
            {funds.philosophy.title}
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-clay/80 leading-relaxed">
            {funds.philosophy.body}
          </p>
        </div>
      </section>

      {/* INVESTOR CTA */}
      <section className="bg-clay py-20 md:py-24">
        <div className="container-x">
          <div className="grid gap-6 bg-card p-8 shadow-soft md:grid-cols-12 md:items-center md:p-12">
            <div className="md:col-span-8">
              <div className="eyebrow text-green">For investors</div>
              <p className="mt-3 text-navy/80 leading-relaxed">{site.investors.intro}</p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <a
                href={site.investors.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-medium text-clay transition-colors hover:bg-green/90"
              >
                {site.investors.display}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Funds;
