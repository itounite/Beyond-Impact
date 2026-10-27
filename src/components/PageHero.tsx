import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  sub?: string;
  image?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

const PageHero = ({ eyebrow, title, sub, image, align = "left", children }: PageHeroProps) => {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-clay pt-32 pb-20 md:pt-40 md:pb-28">
      {image && (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-35"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/60 to-navy" />
        </>
      )}
      <div className={`container-x relative ${align === "center" ? "text-center" : ""}`}>
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow text-coral"
          >
            {eyebrow}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="display mt-6 max-w-5xl text-5xl text-clay md:text-7xl"
        >
          {title}
        </motion.h1>
        {sub && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-clay/75"
          >
            {sub}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
};

export default PageHero;
