import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { advisory } from "@/content/site";

const Advisory = () => {
  return (
    <Layout navVariant="dark">
      <SEO
        title="Advisory — Impact Investing as a Service | Fund Design & Structuring | Beyond Impact"
        description="Beyond Impact designs, structures and launches impact investment vehicles for corporates, philanthropists, family offices and international NGOs — industrial biotech, applied biotech, bioeconomy, advanced nutrition, human food, pet food, climate, biodiversity, and blue economy strategies."
        path="/advisory"
        keywords="industrial biotech, applied biotech, bioeconomy, advanced nutrition, human food, pet food, impact fund design, impact fund structuring, venture capital as a service, corporate impact investing, philanthropic impact vehicles, family office impact fund, NGO impact fund, Article 9 SFDR advisory, climate fund design, biodiversity fund advisory"
      />
      <PageHero
        eyebrow={advisory.hero.eyebrow}
        title={
          <>
            Impact investing — <span className="script text-coral">as a service</span>.
          </>
        }
        sub={advisory.hero.sub}
        image={advisory.hero.image}
      />



      {/* THESIS / WHAT'S IN IT FOR YOU */}
      <section className="bg-clay py-24 md:py-32">
        <div className="container-x">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="eyebrow text-green">Anchored in our thesis</div>
              <h2 className="display mt-4 text-4xl text-navy md:text-5xl">{advisory.thesis.title}</h2>
              <p className="mt-6 leading-relaxed text-navy/75">{advisory.thesis.body}</p>
            </div>
            <div className="md:col-span-7">
              <div className="rounded-2xl bg-navy p-10 text-clay shadow-soft md:p-12">
                <div className="display text-sm uppercase tracking-wider text-coral">What's in it for you</div>
                <ul className="mt-6 space-y-4">
                  {advisory.thesis.benefits.map((b) => (
                    <li key={b} className="flex gap-4 border-b border-clay/10 pb-4 last:border-0">
                      <span className="display text-coral">→</span>
                      <span className="leading-relaxed text-clay/85">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* THREE PILLARS STRIP */}
          <div className="mt-20 grid gap-px overflow-hidden rounded-2xl bg-navy/10 md:grid-cols-3">
            {advisory.thesis.pillars.map((p) => (
              <div key={p.tag} className="bg-clay p-8">
                <div className="display text-sm uppercase tracking-wider text-coral">{p.tag}</div>
                <p className="mt-3 text-sm leading-relaxed text-navy/75">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCES — IIaaS Model */}
      <section className="bg-navy py-24 text-clay md:py-32">
        <div className="container-x">
          <div className="eyebrow text-coral">The IIaaS Model</div>
          <h2 className="display mt-4 max-w-3xl text-4xl md:text-5xl">
            Impact Investing-as-a-Service Platforms — for every form of capital.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-clay/70">
            We partner with four kinds of capital allocators, each with distinct return mandates and impact ambitions.
          </p>

          <div className="mt-16 grid gap-px bg-clay/10 md:grid-cols-2">
            {advisory.audiences.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-navy p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="display text-sm uppercase tracking-wider text-coral">{a.tag}</span>
                  <span className="text-xs uppercase tracking-wider text-clay/70">{a.flow}</span>
                </div>
                <h3 className="display mt-6 text-2xl text-clay">{a.name}</h3>
                <p className="mt-4 leading-relaxed text-clay/70">{a.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-clay py-24 md:py-32">
        <div className="container-x">
          <div className="eyebrow text-green">How we work</div>
          <h2 className="display mt-4 max-w-3xl text-4xl text-navy md:text-5xl">
            Tailor-made, end-to-end fund design and execution.
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {advisory.services.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="border-t-2 border-coral pt-6"
              >
                <div className="display text-5xl text-coral">{s.step}</div>
                <h3 className="display mt-4 text-xl text-navy">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/70">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 text-clay md:py-28">
        <div className="container-x text-center">
          <h2 className="display mx-auto max-w-3xl text-4xl text-clay md:text-5xl">{advisory.cta.title}</h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-clay/70">{advisory.cta.body}</p>
          <a
            href={advisory.cta.href}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-coral px-8 py-4 text-sm font-medium text-navy transition-all hover:gap-4"
          >
            {advisory.cta.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Advisory;
