"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Product } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/useTranslation";
import { getAllProducts } from "@/lib/products";

/* ── Animation presets (lantern-ui style) ── */
const easeOut = [0.16, 1, 0.3, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: easeOut },
};
const fadeUpFast = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: easeOut },
};

function FadeIn({
  children,
  delay = 0,
  className = "",
  fast = false,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  fast?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const p = fast ? fadeUpFast : fadeUp;
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={p.initial}
      animate={inView ? p.animate : p.initial}
      transition={{ ...p.transition, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ── Eyebrow / badge (saas-template style) ── */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center bg-primary/10 text-primary text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.15em] border border-primary/20">
      {children}
    </span>
  );
}

/* ── 3D Tilt Card ── */
function Tilt3D({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(springY, [0, 1], [8, -8]);
  const rotateY = useTransform(springX, [0, 1], [-8, 8]);

  const handleMouse = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px);
    y.set(py);
    el.style.setProperty("--shine-x", `${px * 100}%`);
    el.style.setProperty("--shine-y", `${py * 100}%`);
  };
  const handleLeave = () => { x.set(0.5); y.set(0.5); };

  return (
    <motion.div
      ref={ref}
      className={`${className} group`}
      style={{ perspective: 1200, rotateX, rotateY, transformStyle: "preserve-3d" as any }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle at var(--shine-x, 50%) var(--shine-y, 50%), rgba(255,255,255,0.25) 0%, transparent 60%)",
        }}
      />
    </motion.div>
  );
}

/* ── Floating decorative particles ── */
function FloatingParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Soft circles */}
      {[
        { size: 6, x: "15%", y: "20%", dur: 7, color: "bg-amber-400/20" },
        { size: 4, x: "80%", y: "15%", dur: 9, color: "bg-primary/15" },
        { size: 8, x: "70%", y: "75%", dur: 8, color: "bg-amber-300/15" },
        { size: 3, x: "25%", y: "60%", dur: 6, color: "bg-emerald-400/15" },
        { size: 5, x: "92%", y: "40%", dur: 10, color: "bg-amber-200/20" },
        { size: 7, x: "8%", y: "80%", dur: 11, color: "bg-primary/10" },
        { size: 4, x: "50%", y: "10%", dur: 8.5, color: "bg-amber-400/15" },
        { size: 6, x: "40%", y: "85%", dur: 9.5, color: "bg-green-200/15" },
      ].map((p, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${p.color}`}
          style={{
            width: p.size * 3,
            height: p.size * 3,
            left: p.x,
            top: p.y,
            animation: `float ${p.dur}s ease-in-out infinite`,
            animationDelay: `${i * 1.2}s`,
          }}
        />
      ))}
      {/* Plus signs (+) */}
      {[
        { x: "35%", y: "25%", s: 12, dur: 8, delay: 0, opacity: "opacity-20" },
        { x: "75%", y: "80%", s: 8, dur: 10, delay: 1.5, opacity: "opacity-15" },
        { x: "55%", y: "15%", s: 10, dur: 7, delay: 3, opacity: "opacity-20" },
        { x: "20%", y: "65%", s: 6, dur: 9, delay: 0.5, opacity: "opacity-15" },
        { x: "88%", y: "60%", s: 9, dur: 11, delay: 2, opacity: "opacity-20" },
      ].map((p, i) => (
        <div
          key={`plus${i}`}
          className={`absolute ${p.opacity}`}
          style={{
            left: p.x, top: p.y,
            animation: `float-slow ${p.dur}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        >
          <svg width={p.s} height={p.s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-amber-600/40">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>
      ))}
      {/* 8-pointed stars (Arabic geometric motif) */}
      {[
        { x: "12%", y: "35%", s: 16, dur: 12, delay: 1 },
        { x: "65%", y: "20%", s: 12, dur: 14, delay: 2.5 },
        { x: "45%", y: "70%", s: 14, dur: 11, delay: 0 },
        { x: "82%", y: "30%", s: 10, dur: 13, delay: 3.5 },
      ].map((p, i) => (
        <div
          key={`star${i}`}
          className="absolute opacity-[0.12]"
          style={{
            left: p.x, top: p.y,
            animation: `float-slow ${p.dur}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        >
          <svg width={p.s} height={p.s} viewBox="0 0 24 24" fill="currentColor" className="text-amber-700">
            <polygon points="12,2 14.5,9.5 22,9.5 16,14.5 18.5,22 12,17 5.5,22 8,14.5 2,9.5 9.5,9.5" />
          </svg>
        </div>
      ))}
      {/* Diamond shapes */}
      {[0, 1, 2].map((i) => (
        <div
          key={`d${i}`}
          className="absolute w-3 h-3 border border-amber-300/15 rotate-45"
          style={{
            left: `${20 + i * 30}%`,
            top: `${10 + i * 25}%`,
            animation: `float-slow ${8 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 2}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ── Animated Counter ── */
function Counter({
  end,
  suffix = "",
  label,
}: {
  end: number;
  suffix?: string;
  label: string;
}) {
  const [c, setC] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const done = useRef(false);

  useEffect(() => {
    if (inView && !done.current) {
      done.current = true;
      let v = 0;
      const inc = end / (2000 / 16);
      const t = setInterval(() => {
        v += inc;
        if (v >= end) {
          setC(end);
          clearInterval(t);
        } else setC(Math.floor(v));
      }, 16);
    }
  }, [inView, end]);

  return (
    <div ref={ref} className="text-center">
      <motion.div
        className="text-4xl lg:text-5xl font-black text-white"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {c}
        {suffix}
      </motion.div>
      <div className="text-sm text-white/60 mt-1">{label}</div>
    </div>
  );
}

/* ── Category tabs ── */
const categories = [
  "All",
  "Cockroach Control",
  "Mosquito Control",
  "Mosquito Vaporizer",
];

/* ══════════════════════════════════════════
   MAIN
   ══════════════════════════════════════════ */
export default function HomeContent({ products }: { products: Product[] }) {
  const { t, lang } = useTranslation();
  const isAr = lang === "ar";
  const [activeCat, setActiveCat] = useState("All");
  const filtered =
    activeCat === "All"
      ? products
      : products.filter((p) => p.category === activeCat);

  return (
    <>
      {/* ═══════════════════════════════════
          HERO — Warm premium B2B
      ═══════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-amber-50/80 via-white to-green-50/40 overflow-hidden">
        {/* Floating decorative particles */}
        <FloatingParticles />

        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[length:32px_32px]"
          style={{
            backgroundImage:
              "linear-gradient(45deg, currentColor 1px, transparent 1px), linear-gradient(-45deg, currentColor 1px, transparent 1px)",
          }}
        />

        {/* Warm decorative orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-200/25 rounded-full blur-[120px] -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-100/30 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4" />
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-amber-100/20 rounded-full blur-[80px]" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          {/* Decorative arch frame */}
          <div className="absolute top-6 left-8 right-8 bottom-6 pointer-events-none border border-amber-200/10 rounded-[3rem] opacity-50" />
          <div className="absolute top-10 left-12 right-12 bottom-10 pointer-events-none border border-amber-200/5 rounded-[2.5rem]" />

          {/* Corner flourishes */}
          <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none border-l-2 border-t-2 border-amber-300/20 rounded-tl-3xl" />
          <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none border-r-2 border-t-2 border-amber-300/20 rounded-tr-3xl" />
          <div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none border-l-2 border-b-2 border-amber-300/20 rounded-bl-3xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none border-r-2 border-b-2 border-amber-300/20 rounded-br-3xl" />
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
            {/* Left */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Eyebrow>{t("hero.badge")}</Eyebrow>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-foreground leading-[0.92] tracking-tight">
                {t("hero.title1")}{" "}
                <span className="text-gradient-primary">{t("hero.title2")}</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
                {t("hero.desc")}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="#products">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 rounded-full text-base font-bold shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.03]">
                    {t("hero.cta1")}
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={isAr ? "M15 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"}
                      />
                    </svg>
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-border text-foreground/70 hover:bg-accent/10 hover:border-accent/30 px-10 py-6 rounded-full text-base transition-all duration-300"
                  >
                    {t("hero.cta2")}
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="bg-amber-50 text-amber-700 text-xs font-medium px-3 py-1.5 rounded-full border border-amber-200">
                  {t("hero.tag1")}
                </span>
                <span className="bg-green-50 text-green-700 text-xs font-medium px-3 py-1.5 rounded-full border border-green-200">
                  {t("hero.tag2")}
                </span>
                <span className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full border border-blue-200">
                  {t("hero.tag3")}
                </span>
              </div>
            </motion.div>

            {/* Right: product hero visual — 3D tilt with dual products */}
            <motion.div
              className="relative aspect-[4/3] max-w-xl mx-auto"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Tilt3D className="relative w-full h-full group flex items-center justify-center">
                {/* Background glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/15 via-primary/10 to-transparent blur-2xl" />
                <div className="absolute inset-[10%] rounded-full border border-primary/20 animate-float-slow" style={{ transform: "translateZ(20px)" }} />
                <div className="absolute inset-[22%] rounded-full border border-amber-300/20" style={{ transform: "translateZ(10px)" }} />

                {/* Products container — side by side */}
                <div className="relative w-full h-full flex items-center justify-center gap-2 px-4">
                  {/* Cockroach spray (left) */}
                  <div className="w-[60%] max-w-[420px]" style={{ transform: "translateZ(40px)" }}>
                    <img
                      src={products[0]?.mainImage}
                      alt="Cockroach Killer Spray"
                      className="w-full h-auto object-contain drop-shadow-2xl"
                      style={{ transform: "rotate(-5deg)" }}
                    />
                  </div>
                  {/* Mosquito spray (right — slightly in front) */}
                  <div className="w-[60%] max-w-[420px]" style={{ transform: "translateZ(55px)" }}>
                    <img
                      src={products[1]?.mainImage}
                      alt="Mosquito Repellent Spray"
                      className="w-full h-auto object-contain drop-shadow-2xl"
                      style={{ transform: "rotate(6deg)" }}
                    />
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-white/90 border border-green-200 rounded-2xl px-5 py-3 shadow-xl"
                  style={{ transform: "translateZ(60px)" }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="text-lg font-black text-primary">B2B</div>
                  <div className="text-xs text-muted-foreground">
                    {isAr ? "مورد مباشر" : "Direct Supplier"}
                  </div>
                </motion.div>
                {/* Extra floating badge — ISO */}
                <motion.div
                  className="absolute top-1/3 -right-6 bg-white/90 border border-primary/20 rounded-xl px-4 py-2.5 shadow-lg"
                  style={{ transform: "translateZ(50px)" }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs font-bold text-primary">ISO Compliant</span>
                  </div>
                </motion.div>
              </Tilt3D>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium">
            {isAr ? "اسفل" : "Scroll"}
          </span>
          <div className="w-4 h-7 border-2 border-border rounded-full flex justify-center p-0.5">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
          </div>
        </motion.div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 inset-x-0 text-amber-100/40 dark:text-amber-900/20 pointer-events-none">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 40 Q 180 80, 360 40 T 720 40 T 1080 40 T 1440 40 V 80 H 0 Z" fill="currentColor" opacity="0.5"/>
            <path d="M0 50 Q 240 20, 480 50 T 960 50 T 1440 50 V 80 H 0 Z" fill="currentColor" opacity="0.3"/>
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════
          STATS BAR
      ═══════════════════════════════════ */}
      <section className="relative bg-gradient-to-r from-primary/90 via-primary to-emerald-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <Counter end={5} suffix="+" label={isAr ? "منتجات متميزة" : "Premium Products"} />
            <Counter end={150} suffix="K+" label={isAr ? "وحدة/سنوياً" : "Units / Year"} />
            <Counter end={24} suffix="/7" label={isAr ? "دعم العملاء" : "Client Support"} />
            <Counter end={12} suffix={` ${isAr ? "محافظة" : "Govs"}`} label={isAr ? "تغطية مصر" : "Egypt Coverage"} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          TRUST SIGNALS — Social proof grid
      ═══════════════════════════════════ */}
      <section className="relative py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <Eyebrow>{t("why.badge")}</Eyebrow>
              <h2 className="text-4xl sm:text-5xl font-black text-foreground mt-5 tracking-tight">
                {t("why.title")}
              </h2>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: "shield",
                title: "trust.quality.title" as const,
                desc: "trust.quality.desc" as const,
                bg: "bg-primary/10 text-primary",
              },
              {
                icon: "building",
                title: "trust.warehouse.title" as const,
                desc: "trust.warehouse.desc" as const,
                bg: "bg-amber-100 text-amber-600",
              },
              {
                icon: "truck",
                title: "trust.delivery.title" as const,
                desc: "trust.delivery.desc" as const,
                bg: "bg-blue-100 text-blue-600",
              },
              {
                icon: "bank",
                title: "trust.factory.title" as const,
                desc: "trust.factory.desc" as const,
                bg: "bg-emerald-100 text-emerald-600",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <motion.div
                  className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center shrink-0 shadow-sm`}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        {item.icon === "shield" ? (
                          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        ) : item.icon === "building" ? (
                          <path d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                        ) : item.icon === "truck" ? (
                          <path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        ) : (
                          <path d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                        )}
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-base">
                        {t(item.title)}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {t(item.desc)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          CERTIFICATE TRUST BAR
      ═══════════════════════════════════ */}
      <section className="relative py-14 bg-gradient-to-r from-green-900 via-green-800 to-emerald-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center bg-white/10 border border-white/20 text-white/80 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.15em]">
              {isAr ? "معتمد وموثوق" : "Certified & Trusted"}
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: "moh",
                label: isAr ? "رخصة إنتاج المبيدات" : "Pesticide License",
                desc: isAr ? "جهات رسمية مصرية" : "Egyptian Authority",
                file: "/images/certificates/cert-pesticide-production-license.pdf",
              },
              {
                icon: "safety",
                label: isAr ? "تقرير السمية الجلدية" : "Dermal Toxicity",
                desc: isAr ? "اختبارات سلامة معتمدة" : "Certified Safety Tests",
                file: "/images/certificates/cert-acute-dermal-toxicity-rat.pdf",
              },
              {
                icon: "msds",
                label: "MSDS",
                desc: isAr ? "صحيفة بيانات السلامة" : "Safety Data Sheet",
                file: "/images/certificates/cert-msds-mosquito-liquid-2026.pdf",
              },
              {
                icon: "lab",
                label: isAr ? "تقرير فحص معتمد" : "Test Report",
                desc: isAr ? "مختبر مستقل" : "Independent Lab",
                file: "/images/certificates/cert-test-report-NBHL2412029558SD.pdf",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3.5 border border-white/10 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {item.icon === "moh" ? (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                    </svg>
                  ) : item.icon === "safety" ? (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ) : item.icon === "msds" ? (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  )}
                </div>
                <div className="min-w-0">
                  <div className="text-white font-semibold text-sm leading-tight group-hover:text-white transition-colors">{item.label}</div>
                  <div className="text-white/50 text-xs mt-0.5">{item.desc}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          PRODUCT SHOWCASE — With tabs (lantern-ui pattern)
      ═══════════════════════════════════ */}
      <section
        id="products"
        className="relative py-24 lg:py-28 bg-gradient-to-b from-muted to-background"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(22,101,52,0.04),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <Eyebrow>{t("products.badge")}</Eyebrow>
              <h2 className="text-4xl sm:text-5xl font-black text-foreground mt-5 tracking-tight">
                {t("products.title")}
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
                {t("products.desc")}
              </p>
            </div>
          </FadeIn>

          {/* Tabs */}
          <FadeIn delay={0.1}>
            <div className="flex justify-center gap-2 mb-12 flex-wrap">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeCat === cat
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "bg-card text-foreground/60 hover:text-foreground hover:bg-muted border border-border"
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {cat === "All"
                    ? isAr ? "الكل" : "All"
                    : cat === "Cockroach Control"
                      ? isAr ? "مكافحة الصراصير" : "Cockroach Control"
                      : cat === "Mosquito Control"
                        ? isAr ? "مكافحة البعوض" : "Mosquito Control"
                        : isAr ? "أجهزة التبخير" : "Mosquito Vaporizer"}
                </motion.button>
              ))}
            </div>
          </FadeIn>

          {/* Product grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map((product, i) => (
              <FadeIn key={product.id} delay={i * 0.08}>
                <ProductCard product={product} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          EGYPT COVERAGE MAP — Two-column layout
      ═══════════════════════════════════ */}
      <section className="relative py-24 lg:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-100/20 rounded-full blur-[100px] -translate-y-1/4 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-100/20 rounded-full blur-[80px] translate-y-1/4 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-center">

            {/* ═══ LEFT: Egypt Map ═══ */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rounded-2xl bg-white shadow-lg shadow-gray-200/50 overflow-hidden">
                <svg
                  viewBox="0 0 800 680"
                  className="w-full h-auto align-middle"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <rect x="0" y="0" width="800" height="680" fill="#f1f5f9" rx="0" />
                  <defs>
                    <linearGradient id="egyptTerrain" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#bae6fd" />
                      <stop offset="35%" stopColor="#bfdbfe" />
                      <stop offset="100%" stopColor="#dbeafe" />
                    </linearGradient>
                    <filter id="dotGlow">
                      <feGaussianBlur stdDeviation="1.5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  {/* Egypt landmass — light blue fill, dark blue border */}
                  <path
                    d="M753.5 618.5L522.9 618.5L297.6 618.5L63.9 618.5L63.9 618.5L63.9 404.6L63.9 197.9L46.5 151.1L61.4 115.2L52.4 90.3L73.5 62.4L73.5 62.4L150.7 61.5L206.8 76.8L264.3 94.0L291.3 103.1L336.1 84.6L359.9 68.0L411.2 63.1L452.6 70.5L468.3 99.3L481.9 80.3L528.4 94.1L573.8 97.4L602.4 82.7L602.4 82.7L634.9 167.5L640.5 182.6L640.5 182.6L624.2 206.0L611.6 249.8L595.9 280.1L582.3 290.3L562.9 271.5L536.7 245.6L495.3 162.3L489.2 167.5L513.3 228.9L549.1 287.3L593.0 377.8L614.4 409.4L633.2 442.3L685.3 506.6L673.8 516.7L675.7 554.5L743.3 606.6L753.5 618.5Z"
                    fill="url(#egyptTerrain)" stroke="#1e40af" strokeWidth="4" strokeLinejoin="round"
                    strokeDasharray="3000" strokeDashoffset="3000"
                  >
                    <animate attributeName="stroke-dashoffset" from="3000" to="0" dur="2s" begin="0.3s" fill="freeze" calcMode="linear" />
                  </path>

                  {/* Nile River — thick white line */}
                  <path d="M505 570 C510 540, 518 510, 520 490 C515 460, 510 430, 508 410 C505 390, 495 375, 480 365 C460 355, 440 340, 425 320 C410 300, 400 280, 398 265 C398 245, 405 225, 412 205 C418 185, 422 165, 426 151"
                    fill="none" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
                  {/* Nile Delta — Damietta branch */}
                  <path d="M426 151 C435 135, 450 115, 468 85"
                    fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" opacity="0.9" />
                  {/* Nile Delta — Rosetta branch */}
                  <path d="M426 151 C415 135, 405 110, 398 78"
                    fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" opacity="0.9" />
                  {/* Nile Delta — middle branch */}
                  <path d="M426 151 C430 130, 440 108, 448 82"
                    fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.7" />

                  {/* City dots — red dots with labels */}
                  {[
                    { cx: 426.3, cy: 151.0, r: 9, label: isAr ? "القاهرة" : "Cairo" },
                    { cx: 349.7, cy: 83.9, r: 6.5, label: isAr ? "الإسكندرية" : "Alexandria" },
                    { cx: 424.7, cy: 152.8, r: 5.5, label: isAr ? "الجيزة" : "Giza" },
                    { cx: 487.2, cy: 80.6, r: 4.5, label: isAr ? "بورسعيد" : "Port Said" },
                    { cx: 502.6, cy: 155.5, r: 4.5, label: isAr ? "السويس" : "Suez" },
                    { cx: 434.6, cy: 93.1, r: 4.5, label: isAr ? "المنصورة" : "Mansoura" },
                    { cx: 412.6, cy: 107.9, r: 4, label: isAr ? "طنطا" : "Tanta" },
                    { cx: 486.3, cy: 119.6, r: 4, label: isAr ? "الإسماعيلية" : "Ismailia" },
                    { cx: 460.7, cy: 71.9, r: 4, label: isAr ? "دمياط" : "Damietta" },
                    { cx: 403.4, cy: 193.8, r: 4, label: isAr ? "بني سويف" : "Beni Suef" },
                    { cx: 398.0, cy: 263.5, r: 4.5, label: isAr ? "المنيا" : "Minya" },
                    { cx: 423.2, cy: 317.5, r: 4.5, label: isAr ? "أسيوط" : "Asyut" },
                    { cx: 452.9, cy: 353.7, r: 4, label: isAr ? "سوهاج" : "Sohag" },
                    { cx: 512.9, cy: 376.5, r: 4, label: isAr ? "قنا" : "Qena" },
                    { cx: 507.9, cy: 404.3, r: 5.5, label: isAr ? "الأقصر" : "Luxor" },
                    { cx: 523.0, cy: 497.2, r: 5.5, label: isAr ? "أسوان" : "Aswan" },
                    { cx: 576.0, cy: 313.0, r: 4.5, label: isAr ? "الغردقة" : "Hurghada" },
                    { cx: 606.1, cy: 274.7, r: 4.5, label: isAr ? "شرم الشيخ" : "Sharm El Sheikh" },
                    { cx: 575.1, cy: 88.2, r: 4, label: isAr ? "العريش" : "Arish" },
                    { cx: 193.9, cy: 74.9, r: 4, label: isAr ? "مرسى مطروح" : "Marsa Matruh" },
                    { cx: 441.5, cy: 120.0, r: 3.5, label: isAr ? "الزقازيق" : "Zagazig" },
                    { cx: 408.4, cy: 89.3, r: 3.5, label: isAr ? "كفر الشيخ" : "Kafr El Sheikh" },
                    { cx: 403.2, cy: 194.4, r: 3.5, label: isAr ? "الفيوم" : "Fayoum" },
                    { cx: 296.3, cy: 415.3, r: 3.5, label: isAr ? "الداخلة" : "Dakhla" },
                  ].map((d, i) => (
                    <g key={`d-${i}`}>
                      <g opacity="0">
                        <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin={`${1.5 + i * 0.08}s`} fill="freeze" />
                        <circle cx={d.cx} cy={d.cy} r={d.r} fill="#dc2626" opacity="0.9" filter="url(#dotGlow)" />
                        {d.label && (
                          <text x={d.cx} y={d.cy - d.r - 4} textAnchor="middle" fill="#334155" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="600" className="select-none"
                            style={{ paintOrder: "stroke", stroke: "#ffffff", strokeWidth: "2.5px", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            {d.label}
                          </text>
                        )}
                      </g>
                    </g>
                  ))}
                </svg>
              </div>
            </motion.div>

            {/* ═══ RIGHT: Partner stats ═══ */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-semibold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                {isAr ? "شبكة التوزيع" : "Distribution Network"}
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.1]">
                {isAr
                  ? "تنتشر باربر في جميع أنحاء مصر"
                  : "Parpar is Growing Across Egypt"}
              </h2>

              <p className="text-gray-500 leading-relaxed text-base sm:text-lg">
                {isAr
                  ? "انضم إلينا أكثر من 50 موزعاً وشريكاً في جميع محافظات مصر. يثقون في منتجات باربر لمكافحة الآفات ويحققون أرباحاً ممتازة من خلال علامتنا التجارية القوية."
                  : "Over 50 distributors and partners across every Egyptian governorate have joined the Parpar network. They trust our pest control products and build profitable businesses with our strong brand."}
              </p>

              <div className="grid grid-cols-3 gap-4 pt-2">
                {[
                  { num: "50", suffix: "+", labelAr: "شريك", labelEn: "Partners" },
                  { num: "20", suffix: "+", labelAr: "محافظة", labelEn: "Governorates" },
                  { num: "200", suffix: "+", labelAr: "عميل", labelEn: "Clients" },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                    <div className="text-3xl lg:text-4xl font-black text-primary">
                      {s.num}<span className="text-xl">{s.suffix}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1 font-medium uppercase tracking-wider">
                      {isAr ? s.labelAr : s.labelEn}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50/60 border border-amber-100 rounded-xl p-5 relative">
                <svg className="absolute top-3 left-3 w-8 h-8 text-amber-200/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                </svg>
                <p className="text-sm text-gray-600 italic pl-10">
                  {isAr
                    ? '"منذ أن بدأنا شراكتنا مع باربر، زادت مبيعاتنا بنسبة 40% في موسم الصيف الأول. المنتجات عالية الجودة وثقة العملاء تجعل التوزيع سهلاً."'
                    : '"Since partnering with Parpar, our sales grew 40% in the first summer season. The quality products and customer trust make distribution effortless."'}
                </p>
                <div className="flex items-center gap-3 mt-3 pl-10">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-sm">
                    {isAr ? "م" : "M"}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">
                      {isAr ? "محمد عبد الله" : "Mohamed Abdullah"}
                    </div>
                    <div className="text-xs text-gray-400">
                      {isAr ? "موزع معتمد — الجيزة" : "Authorized Distributor — Giza"}
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/distributors">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3.5 rounded-full text-base font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02]">
                  {isAr ? "كن شريكاً لنا" : "Become a Partner"}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isAr ? "M15 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"} />
                  </svg>
                </Button>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
      <section className="relative py-24 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <Eyebrow>{t("why.badge")}</Eyebrow>
              <h2 className="text-4xl sm:text-5xl font-black text-foreground mt-5 tracking-tight">
                {t("why.title")}
              </h2>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                key: "why.quality" as const,
                desc: "why.quality.desc" as const,
                icon: "shield",
                bg: "from-primary to-emerald-600",
              },
              {
                key: "why.bulk" as const,
                desc: "why.bulk.desc" as const,
                icon: "trend",
                bg: "from-blue-500 to-cyan-500",
              },
              {
                key: "why.egypt" as const,
                desc: "why.egypt.desc" as const,
                icon: "map",
                bg: "from-primary to-emerald-600",
              },
            ].map((item, i) => (
              <FadeIn key={item.key} delay={i * 0.1}>
                <motion.div
                  className="group h-full bg-card rounded-3xl border border-border p-8 text-center hover:shadow-xl hover:border-primary/20 transition-all duration-500 relative overflow-hidden"
                  whileHover={{ y: -6 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${item.bg} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 6 }}
                    >
                      <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        {item.icon === "shield" ? (
                          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        ) : item.icon === "box" ? (
                          <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        ) : item.icon === "trend" ? (
                          <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        ) : (
                          <>
                            <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </>
                        )}
                      </svg>
                    </motion.div>
                    <h3 className="font-bold text-foreground text-lg mb-3">
                      {t(item.key)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(item.desc)}
                    </p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          FAQ — Accordion
      ═══════════════════════════════════ */}
      <section className="relative py-24 bg-gradient-to-b from-muted to-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="text-4xl sm:text-5xl font-black text-foreground mt-5 tracking-tight">
                {isAr ? "أسئلة شائعة" : "Frequently Asked Questions"}
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-3">
            {[
              {
                q: isAr ? "ما هي المنتجات التي تقدمونها؟" : "What products do you supply?",
                a: isAr
                  ? "نقدم بخاخات الصراصير، وبخاخات طارد البعوض، وسوائل المبخرات الكهربائية، وأطقم الأجهزة الكاملة. جميع المنتجات متاحة للبيع بالجملة والتوريد التجاري."
                  : "We supply cockroach killer sprays, mosquito repellent sprays, electric vaporizer liquids, and complete device kits. All products available for wholesale and bulk B2B supply.",
              },
              {
                q: isAr ? "ما هي الكمية الأدنى للطلب؟" : "What is the minimum order quantity?",
                a: isAr
                  ? "تختلف الكمية الأدنى حسب المنتج. بشكل عام، الطلبات بالجملة تبدأ من كرتون واحد (96-200 قطعة حسب المنتج). للاستفسار عن كميات محددة، يرجى التواصل معنا."
                  : "MOQ varies by product. Generally, wholesale orders start from one carton (96-200 pcs depending on product). Contact us for specific quantity inquiries.",
              },
              {
                q: isAr ? "ما هي مدة التوصيل؟" : "What are your delivery times?",
                a: isAr
                  ? "القاهرة: 3-5 أيام عمل. المحافظات الأخرى: 5-10 أيام عمل. للطلبات الكبيرة، قد تختلف المدة حسب الكمية."
                  : "Cairo: 3-5 business days. Other governorates: 5-10 business days. For large orders, timelines may vary by quantity.",
              },
              {
                q: isAr ? "هل تستطيعون التوريد للمناقصات الحكومية؟" : "Can you supply to government tenders?",
                a: isAr
                  ? "نعم. نوفر جميع الوثائق المطلوبة بما في ذلك شهادات تسجيل الشركة وشهادات المنتجات والامتثال للمعايير المصرية."
                  : "Yes. We provide all required documentation including company registration, product certificates, and compliance with Egyptian standards.",
              },
            ].map((faq, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <details className="group bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-md">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                    <span className="font-semibold text-foreground text-sm">
                      {faq.q}
                    </span>
                    <motion.svg
                      className="w-5 h-5 text-muted-foreground shrink-0 ml-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: 0 }}
                      whileTap={{ rotate: 180 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </summary>
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          CTA — Warm dark with geometric pattern
      ═══════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-amber-900 via-stone-900 to-primary/90 py-24 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[150px]" />
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

        <FadeIn>
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center bg-white/10 border border-white/20 text-white/80 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.15em] mb-6">
              {isAr ? "اتصل بنا اليوم" : "Get In Touch Today"}
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              {t("cta.title")}
            </h2>
            <p className="mt-6 text-white/60 text-lg lg:text-xl max-w-xl mx-auto leading-relaxed">
              {t("cta.desc")}
            </p>
            <div className="mt-10">
              <motion.div whileHover={{ scale: 1.04 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-white text-stone-900 hover:bg-amber-50 px-12 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/30 transition-all duration-300 group"
                >
                  {t("cta.btn")}
                  <svg
                    className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={isAr ? "M15 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"}
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
