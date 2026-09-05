import { motion, Variants } from "framer-motion";
import { PrimaryButton, SecondaryButton } from "../ui/Button";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden premium-bg px-6 py-24 md:py-32"
      id="hero-section"
    >
      {/* ─────────────────────────────────────────
          BACKGROUND
      ───────────────────────────────────────── */}

      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.22 }}
        transition={{
          duration: 2,
          ease: [0.16, 1, 0.3, 1] as const,
        }}
        className="
          absolute inset-0
          bg-cover bg-center
          mix-blend-luminosity
          pointer-events-none
        "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1604928141064-207cea6f571f?q=80&w=2940&auto=format&fit=crop')",
        }}
      />

      {/* Dark atmospheric gradient */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-[#050505]/20
          via-[#050505]/20
          to-[#050505]/30
          pointer-events-none
        "
      />

      {/* Radial vignette */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,transparent_0%,#050505_90%)]
          pointer-events-none
        "
      />

      {/* Grid */}
      <div className="absolute inset-0 grid-overlay opacity-90 pointer-events-none" />

      {/* Atmospheric lens glow */}
      <div className="studio-lens-glow-center" />

      {/* ─────────────────────────────────────────
          HERO CONTENT
      ───────────────────────────────────────── */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="
          relative z-10
          min-h-[calc(100vh-12rem)]
          flex flex-col
          justify-center
          items-center
          text-center
          max-w-5xl
          mx-auto
        "
      >
        {/* Headline */}

        <motion.h1
          variants={itemVariants}
          className="font-display text-[48px] sm:text-[52px] md:text-[72px] lg:text-[90px] xl:text-[108px] font-light leading-[0.92] tracking-[-0.03em] text-[#F7F5F2] mb-8"
        >
          <span className="whitespace-nowrap">We Capture What</span> <br />
          <em
            className="whitespace-nowrap"
            style={{
              fontStyle: "italic",
              color: "transparent",
              WebkitTextStroke: "1px rgba(217, 164, 65, 0.6)",
            }}
          >
            Words Cannot.
          </em>
          {/* <br />
          <span className="italic font-light gold-text">
            Frames.
          </span> */}
        </motion.h1>

        {/* Supporting statement */}

        <motion.p
          variants={itemVariants}
          className="font-body text-[#6B7280] text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl max-w-[340px] sm:max-w-xl md:max-w-2xl lg:max-w-2xl mx-auto font-light leading-relaxed mb-10 sm:mb-12"
        >
          We don't capture photographs. We preserve the meaning behind moments —
          for the brands, creators, and families who refuse to settle for
          ordinary.
        </motion.p>

        {/* CTA */}

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center w-fit mx-auto"
        >
          <PrimaryButton className="w-full sm:w-auto">
            Explore Our Work
          </PrimaryButton>

          <SecondaryButton className="w-full sm:w-auto">
            Watch Showreel
          </SecondaryButton>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
