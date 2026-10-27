import { motion } from "framer-motion";
import { Sprout, Globe2, HeartPulse } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { about } from "@/content/site";

const pillarIcons = { Sprout, Globe2, HeartPulse } as const;

const About = () => {
  const teamJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Beyond Impact",
    url: "https://beyondimpact.vc/about",
    about: about.team.map((p) => ({
      "@type": "Person",
      name: p.name,
      jobTitle: p.role,
      description: p.bio,
      worksFor: { "@type": "Organization", name: "Beyond Impact" },
    })),
  };
  return (
    <Layout navVariant="dark">
      <SEO
        title="About Beyond Impact — Pioneer Impact VC Team | Claire Smith, Sagar Tandon, Tarja Zudemberg"
        description="Meet the Beyond Impact team — Claire Smith, Sagar Tandon, Tarja Zudemberg, Anthony Stam, Hanna Y. Gabay and Jody Rasch. Pioneer Article 9 SFDR impact venture capital firm backing industrial biotech, applied biotech, the bioeconomy, advanced nutrition, human food, pet food, biodiversity, climate, and the blue economy."
        path="/about"
        keywords="industrial biotech, applied biotech, bioeconomy, Claire Smith Beyond Impact, Sagar Tandon Beyond Impact, Tarja Zudemberg, Anthony Stam, Hanna Y. Gabay, Jody Rasch, advanced nutrition, human food, pet food, impact VC team, bioeconomy fund managers, alternative protein investors, climate VC, biodiversity fund, Article 9 SFDR team"
        jsonLd={teamJsonLd}
      />
      <PageHero
        eyebrow={about.hero.eyebrow}
        title={<>Pioneer impact <span className="script text-coral">VC</span>, built on conviction.</>}
        sub={about.hero.sub}
        image={about.hero.image}
      />


      {/* VALUES */}
      <section className="bg-clay py-24 md:py-32">
        <div className="container-x">
          <div className="eyebrow text-green">Our Values</div>
          <h2 className="display mt-4 max-w-3xl text-4xl text-navy md:text-5xl">
            Three forces shaping the next economy.
          </h2>
          <div className="mt-16 grid gap-px bg-navy/10 md:grid-cols-3">
            {about.values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-clay p-10"
              >
                <div className="display text-sm tracking-wider text-coral">{v.tag}</div>
                <h3 className="display mt-6 text-2xl text-navy">{v.title}</h3>
                <p className="mt-4 leading-relaxed text-navy/70">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT PILLARS */}
      <section className="bg-clay-warm py-24 md:py-32">
        <div className="container-x">
          <div className="max-w-3xl">
            <div className="eyebrow text-green">{about.impactPillars.eyebrow}</div>
            <h2 className="display mt-4 text-4xl text-navy md:text-5xl">
              {about.impactPillars.title}
            </h2>
            <p className="mt-6 leading-relaxed text-navy/70">{about.impactPillars.sub}</p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {about.impactPillars.pillars.map((p, i) => {
              const Icon = pillarIcons[p.icon as keyof typeof pillarIcons];
              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative rounded-2xl bg-navy p-8 text-clay shadow-soft md:p-10"
                >
                  <div className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-green text-navy ring-4 ring-clay-warm">
                    {Icon && <Icon className="h-5 w-5" strokeWidth={2.25} />}
                  </div>
                  <h3 className="display mt-2 text-2xl text-clay">{p.name}</h3>
                  <ul className="mt-6 space-y-4">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-sm leading-relaxed text-clay/80">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORE INVESTMENT TEAM */}
      <section className="bg-navy py-24 text-clay md:py-32">
        <div className="container-x">
          <div className="eyebrow text-coral">Core Investment Team</div>
          <h2 className="display mt-4 max-w-3xl text-4xl text-clay md:text-5xl">
            <span className="script text-coral">80+</span> years of direct experience across four continents.
          </h2>

          <div className="mt-16 grid gap-12 md:grid-cols-2">
            {about.team.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                className="flex gap-6 border-t border-clay/15 pt-8"
              >
                <div className="shrink-0">
                  <div className="h-28 w-28 overflow-hidden rounded-full bg-clay/10 ring-1 ring-clay/20 md:h-32 md:w-32">
                    <img src={p.photo} alt={p.name} className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-3">
                    <h3 className="display text-xl text-clay md:text-2xl">{p.name}</h3>
                    {p.flags && <span className="text-sm">{p.flags}</span>}
                  </div>

                  <div className="mt-1 text-sm font-medium uppercase tracking-wider text-coral">{p.role}</div>
                  <p className="mt-3 text-sm leading-relaxed text-clay/75">{p.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS & RECOGNITION */}
      <section className="bg-clay py-24 md:py-32">
        <div className="container-x">
          <div className="flex items-end justify-between gap-8">
            <div>
              <div className="eyebrow text-green">Awards & Recognition</div>
              <h2 className="display mt-4 max-w-3xl text-4xl text-navy md:text-5xl">
                Recognised by the <span className="script text-coral">industry</span>.
              </h2>
            </div>
          </div>

          <div className="mt-16 grid gap-px bg-navy/10 md:grid-cols-2 lg:grid-cols-3">
            {about.awards.map((a, i) => (
              <motion.div
                key={`${a.issuer}-${a.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="bg-clay p-8"
              >
                <div className="flex items-baseline justify-between">
                  <span className="display text-sm uppercase tracking-wider text-coral">{a.issuer}</span>
                  <span className="text-xs uppercase tracking-wider text-navy/70">{a.year}</span>
                </div>
                <h3 className="display mt-4 text-xl text-navy">{a.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
