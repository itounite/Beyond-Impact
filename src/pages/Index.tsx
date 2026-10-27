import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { home, site } from "@/content/site";

const Index = () => {
  return (
    <Layout navVariant="dark">
      <SEO
        title="Beyond Impact — Industrial Biotech, Bioeconomy & Advanced Nutrition Impact VC | Article 9 SFDR"
        description="Beyond Impact is an Article 9 SFDR impact venture capital fund investing in industrial biotech, applied biotech, bioeconomy, advanced nutrition, human food, pet food, climate innovation and biomaterials — pioneer impact VC since 2017."
        path="/"
        keywords="industrial biotech, applied biotech, bioeconomy, industrial biotechnology, applied biotechnology, advanced nutrition, human food, pet food, food-tech fund, food fund, alternative protein investments, biodiversity impact fund, climate VC, bioeconomy fund, biosolutions, precision fermentation fund, cellular agriculture investor, blue economy fund, Article 9 SFDR fund, impact venture capital, plant-based investing, biomaterials fund, Beyond Impact Partners, Claire Smith, Sagar Tandon"
      />

      {/* HERO */}
      <section className="relative isolate min-h-screen overflow-hidden bg-navy text-clay">
        <img
          src={home.hero.image}
          alt=""
          width={1920}
          height={1080}
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-navy via-navy/85 to-navy/30" />

        <div className="container-x relative flex min-h-screen flex-col justify-end pb-20 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow text-coral"
          >
            {home.hero.eyebrow}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="display mt-8 max-w-[14ch] text-[clamp(3rem,9vw,9rem)] leading-[0.95] text-clay"
          >
            {home.hero.headlineLead}{" "}
            <span className="script font-normal text-coral">
              {home.hero.headlineScript}
            </span>{" "}
            {home.hero.headlineRest}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-xl text-lg leading-relaxed text-clay/80">
              {home.hero.sub}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to={home.hero.primaryCta.href}
                className="inline-flex items-center gap-2 rounded-full bg-coral px-7 py-4 text-sm font-medium text-clay shadow-coral transition-all hover:bg-coral/90 hover:shadow-elevated"
              >
                {home.hero.primaryCta.label}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to={home.hero.secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-full border border-clay/30 px-7 py-4 text-sm font-medium text-clay transition-colors hover:bg-clay/10"
              >
                {home.hero.secondaryCta.label}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Marquee */}
        <div className="relative border-t border-clay/15 py-6 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-16 text-clay/70 font-display text-lg">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex shrink-0 gap-16">
                <span>Nutrition</span><span>·</span>
                <span>Ingredients</span><span>·</span>
                <span>Life Sciences</span><span>·</span>
                <span>Materials</span><span>·</span>
                <span>Article 9 SFDR</span><span>·</span>
                <span>Pan-European</span><span>·</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION CALLOUT */}
      <section className="bg-clay py-24 md:py-32">
        <div className="container-x">
          <div className="max-w-3xl">
            <div className="eyebrow text-green">{home.missionCallout.eyebrow}</div>
            <h2 className="display mt-6 text-4xl text-navy md:text-6xl">
              {home.missionCallout.title}
            </h2>
          </div>

          <div className="mt-12 grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                <img
                  src={home.missionCallout.image}
                  alt="Rupture and replacement: collapsing legacy supply chains and emerging precision-fermentation infrastructure"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="md:col-span-5">
              <p className="text-lg leading-relaxed text-navy/75">
                {home.missionCallout.body}
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 border-b border-navy pb-1 text-sm font-medium text-navy hover:text-coral hover:border-coral transition-colors"
              >
                How we invest <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-16 grid gap-px bg-navy/10 sm:grid-cols-2 lg:grid-cols-4 border border-navy/10">
            {home.missionCallout.stats.map((s) => (
              <div key={s.label} className="bg-clay p-6">
                <div className="display text-3xl text-coral md:text-4xl">{s.value}</div>
                <div className="mt-3 text-xs uppercase tracking-wider text-navy/70 leading-relaxed">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-navy py-24 text-clay">
        <div className="container-x">
          <div className="eyebrow text-coral">Track Record</div>
          <h2 className="display mt-4 max-w-2xl text-4xl text-clay md:text-5xl">
            Discipline compounding into outcomes.
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {home.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="border-t border-clay/20 pt-6"
              >
                <div className="display text-5xl text-clay md:text-6xl">{s.value}</div>
                <div className="mt-3 text-sm leading-relaxed text-clay/70">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="bg-clay py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="eyebrow text-green">Where we invest</div>
              <h2 className="display mt-4 text-4xl text-navy md:text-5xl">
                Four sectors. One <span className="script text-coral">conviction</span>.
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-coral"
            >
              See the portfolio <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-16 grid gap-px bg-navy/10 md:grid-cols-2">
            {home.sectors.map((s) => (
              <div key={s.name} className="group relative overflow-hidden bg-clay">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-start justify-between gap-6 p-8">
                  <div>
                    <h3 className="display text-2xl text-navy">{s.name}</h3>
                    <p className="mt-2 text-sm text-navy/70">{s.desc}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="text-xs uppercase tracking-wider text-navy/70">Market</div>
                    <div className="display text-2xl text-coral">{s.market}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP CTA */}
      <section className="relative overflow-hidden bg-gradient-impact py-32 text-clay">
        <div aria-hidden className="absolute inset-0 opacity-20">
          <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-green/40 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-coral/40 blur-3xl" />
        </div>
        <div className="container-x relative">
          <div className="max-w-4xl">
            <div className="eyebrow text-coral">Partnership</div>
            <h2 className="display mt-6 text-5xl leading-tight md:text-7xl">
              {home.partnership.title}
            </h2>
            <p className="mt-8 max-w-2xl text-lg text-clay/80">{home.partnership.body}</p>
            <a
              href={home.partnership.cta.href}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-coral px-8 py-4 text-base font-medium text-clay shadow-coral transition-all hover:bg-coral/90"
            >
              {home.partnership.cta.label}
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
