import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Sparkles,
  Leaf,
  Heart,
  ShieldCheck,
  Star,
  Check,
  MessageCircle,
  Droplets,
  Flower2,
  Clock,
  ArrowRight,
  Crown,
} from "lucide-react";
import probSlowGrowth from "@/assets/problem-slow-growth.jpg";
import probFall from "@/assets/problem-fall.jpg";
import probRoots from "@/assets/problem-roots.jpg";
import probVolume from "@/assets/problem-volume.jpg";

import heroBanner from "@/assets/hero-banner.png.asset.json";
import afterBannerBg from "@/assets/after-banner-bg.png.asset.json";

import heroKit from "@/assets/hero-kit.jpg";
import prodShampoo from "@/assets/product-shampoo.jpg";
import prodConditioner from "@/assets/product-conditioner.jpg";
import prodTonic from "@/assets/product-tonic.jpg";
import ingRosemary from "@/assets/ing-rosemary.jpg";
import ingHoney from "@/assets/ing-honey.jpg";
import ingCoconut from "@/assets/ing-coconut.jpg";
import ingBotanical from "@/assets/ing-botanical.jpg";
import result1 from "@/assets/result-1.jpg";
import result2 from "@/assets/result-2.jpg";
import result3 from "@/assets/result-3.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rapuncelés — Kit Crecimiento Capilar | Cabello fuerte, sano y abundante" },
      {
        name: "description",
        content:
          "Rutina premium de cuidado capilar inspirada en ingredientes naturales para fortalecer el cuero cabelludo, apoyar el crecimiento sano y reducir la caída del cabello.",
      },
      { property: "og:title", content: "Rapuncelés — Kit Crecimiento Capilar" },
      {
        property: "og:description",
        content:
          "Tu cabello puede crecer fuerte, sano y abundante de nuevo. Descubre la rutina Rapuncelés.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroKit },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroKit },
    ],
  }),
  component: Landing,
});

const WHATSAPP_URL =
  "https://wa.me/573000000000?text=Hola%20Rapunceles%2C%20quiero%20saber%20m%C3%A1s%20del%20Kit%20de%20Crecimiento%20Capilar";

function Landing() {
  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      <Hero />
      <AfterBanner />
      <Solution />
      <Solution />
      <KitIncludes />
      <Ingredients />
      <Results />
      <Testimonials />
      <Scarcity />
      <ProductOptions />
      <FinalCTA />
      <Footer />
    </main>
  );
}
/* ------------------------------ HERO ------------------------------ */

function Hero() {
  const GOLD = "#D8B06A";
  const IVORY = "#F4ECDC";
  return (
    <section className="relative w-full overflow-hidden bg-[#1a0b2e] text-[var(--ivory)]">
      {/* Background photo (model + products + decoration) */}
      <img
        src={heroBanner.url}
        alt="Modelo con cabello largo y kit Rapunceles"
        className="block h-auto w-full object-cover"
        fetchPriority="high"
      />

      {/* Soft left vignette so text stays legible without covering the model */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-[5] w-[58%] md:w-[40%]"
        style={{
          background:
            "linear-gradient(90deg, rgba(20,8,38,0.55) 0%, rgba(20,8,38,0.35) 55%, rgba(20,8,38,0) 100%)",
        }}
      />

      {/* Overlay text content — absolutely positioned over background */}
      <div
        className="absolute inset-0 z-10 flex flex-col items-start pl-5 pr-4 pt-5 md:pl-10 md:pt-8"
        style={{ color: IVORY }}
      >
        {/* Script wordmark */}
        <h2
          className="mt-1 text-[40px] leading-none md:text-[56px]"
          style={{
            fontFamily: "'Great Vibes', cursive",
            color: GOLD,
            fontWeight: 400,
          }}
        >
          Rapunceles
        </h2>

        {/* Headline */}
        <h1
          className="mt-4 text-[26px] leading-[1.08] md:mt-6 md:text-[40px]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 500,
            color: IVORY,
            maxWidth: "62%",
          }}
        >
          Tu cabello<br />
          puede volver<br />
          a crecer fuerte,{" "}
          <span style={{ color: GOLD, fontStyle: "italic", fontWeight: 500 }}>
            abundante y saludable.
          </span>
        </h1>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2 md:mt-4">
          <span className="flex" aria-label="4.9 de 5 estrellas">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                className="size-3.5 md:size-[18px]"
                style={{ color: GOLD, fill: GOLD }}
              />
            ))}
          </span>
          <span
            className="text-[13px] md:text-[16px]"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: GOLD, fontWeight: 500 }}
          >
            4.9/5
          </span>
        </div>

        {/* Social proof */}
        <p
          className="mt-1 text-[12px] md:text-[15px]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: GOLD,
            fontStyle: "italic",
          }}
        >
          68 clientas satisfechas
        </p>

        {/* Divider with diamond */}
        <div className="mt-4 flex items-center md:mt-6" style={{ width: "38%" }}>
          <span className="h-px flex-1" style={{ background: GOLD }} />
          <span
            className="mx-1 inline-block rotate-45"
            style={{ width: 5, height: 5, background: GOLD }}
          />
          <span className="h-px flex-1" style={{ background: GOLD }} />
        </div>


        {/* CTA */}

        <a
          href="#options"
          className="mt-3 inline-flex items-center gap-2 rounded-full px-4 py-2 md:mt-5 md:px-5 md:py-3"
          style={{
            background: "linear-gradient(180deg, #F6D87A 0%, #D9A73E 100%)",
            color: "#1A0F2E",
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            letterSpacing: "0.02em",
            boxShadow: "0 8px 20px -8px rgba(0,0,0,0.6)",
          }}
        >
          <svg viewBox="0 0 100 50" className="h-3 w-auto md:h-4" fill="currentColor" aria-hidden="true">
            <path d="M10 42 L18 18 L32 32 L50 10 L68 32 L82 18 L90 42 Z" />
            <circle cx="50" cy="6" r="3" />
          </svg>
          <span className="text-[11px] leading-tight md:text-[13px]">
            Comienza tu<br />transformación
          </span>
        </a>
      </div>




    </section>


  );
}

/* ------------------------- AFTER BANNER -------------------------- */
function AfterBanner() {
  const GOLD = "#C9A15D";
  const IVORY = "#F7F1E8";
  const BEIGE = "#E7D8C6";
  const CARD_BG = "rgba(45, 19, 47, 0.78)";
  const CARD_BORDER = "rgba(201, 161, 93, 0.32)";

  const items = [
    {
      img: probFall,
      title: "Caída excesiva",
      desc: "Cada día pierdes más cabello del que deberías.",
    },
    {
      img: probSlowGrowth,
      title: "Crecimiento lento",
      desc: "Tu cabello tarda demasiado en crecer o parece detenido.",
    },
    {
      img: probRoots,
      title: "Raíces debilitadas",
      desc: "Cuando la raíz pierde fuerza, el cabello comienza a caer.",
    },
    {
      img: probVolume,
      title: "Pérdida de abundancia",
      desc: "Tu cabello pierde volumen, densidad y vitalidad natural.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image — replaced with the image from the Caída excesiva card */}
      <img
        src={probFall}
        alt="Fondo de la experiencia Rapuncelés"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      {/* Subtle tonal overlay for legibility without altering the image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,8,38,0.52) 0%, rgba(20,8,38,0.42) 40%, rgba(20,8,38,0.55) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-5 py-16 md:py-20">
        {/* Crown icon */}
        <Crown
          aria-hidden="true"
          className="size-5"
          style={{ color: GOLD }}
          strokeWidth={1.2}
        />

        {/* Title */}
        <h2
          className="mt-5 text-center text-[28px] leading-[1.15] md:text-[36px]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
            color: IVORY,
          }}
        >
          Tu cabello te está enviando señales…
        </h2>

        {/* Subtitle */}
        <p
          className="mt-3 max-w-xs text-center text-[15px] leading-relaxed"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: BEIGE,
          }}
        >
          Estas son algunas señales de que tu cabello necesita recuperar su fuerza natural.
        </p>

        {/* Gold divider */}
        <div className="mt-6 flex items-center justify-center">
          <span className="h-px w-16" style={{ background: GOLD }} />
          <span
            className="mx-2 inline-block rotate-45"
            style={{ width: 5, height: 5, background: GOLD }}
          />
          <span className="h-px w-16" style={{ background: GOLD }} />
        </div>

        {/* Problem cards — 2 per row, mobile-first luxury grid */}
        <div className="mt-10 grid w-full max-w-sm grid-cols-2 gap-4">
          {items.map((it) => (
            <article
              key={it.title}
              className="flex flex-col overflow-hidden rounded-2xl"
              style={{
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: "0 18px 36px -20px rgba(0,0,0,0.55)",
              }}
            >
              {/* Image — square, full width */}
              <div
                className="w-full overflow-hidden"
                style={{ aspectRatio: "1 / 1" }}
              >
                <img
                  src={it.img}
                  alt={it.title}
                  width={300}
                  height={300}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex min-w-0 flex-1 flex-col justify-center p-3">
                <h3
                  className="text-[15px] leading-tight"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 500,
                    color: GOLD,
                  }}
                >
                  {it.title}
                </h3>
                <p
                  className="mt-1 text-[11px] leading-relaxed"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: IVORY,
                    opacity: 0.9,
                  }}
                >
                  {it.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom text */}
        <div className="mt-12 flex flex-col items-center text-center">
          <p
            className="text-[20px] leading-relaxed"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: IVORY,
            }}
          >
            No ignores las señales.
          </p>
          <p
            className="mt-1 text-[22px] leading-[1.3]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: IVORY,
            }}
          >
            Tu cabello merece{" "}
            <span style={{ color: GOLD, fontStyle: "italic" }}>
              recuperarse desde la raíz
            </span>
            .
          </p>

          <div className="mt-5 flex items-center">
            <span className="h-px w-14" style={{ background: GOLD }} />
            <span
              className="mx-2 inline-block rotate-45"
              style={{ width: 5, height: 5, background: GOLD }}
            />
            <span className="h-px w-14" style={{ background: GOLD }} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- SOLUTION ----------------------------- */
function Stars({ size = "size-4" }: { size?: string }) {
  return (
    <span className="flex" aria-label="5 estrellas">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className={`${size} fill-[var(--gold)] text-[var(--gold)]`} />
      ))}
    </span>
  );
}

/* ----------------------------- SOLUTION ----------------------------- */
function Solution() {
  const benefits = [
    { icon: Sparkles, text: "Apoya el crecimiento sano" },
    { icon: ShieldCheck, text: "Ayuda a fortalecer las raíces" },
    { icon: Droplets, text: "Nutre el cuero cabelludo" },
    { icon: Leaf, text: "Ayuda a reducir la caída" },
    { icon: Heart, text: "Cabello con apariencia más llena" },
  ];
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-md px-6">
        <Header eyebrow="La solución" title="Creamos una rutina para cuidar tu cabello desde la raíz." />

        <div className="mt-8 relative">
          <div
            className="absolute -inset-6 -z-10 rounded-[3rem] opacity-80"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 40%, color-mix(in oklab, var(--lavender) 80%, transparent), transparent)",
            }}
          />
          <div className="luxe-card overflow-hidden">
            <img
              src={heroKit}
              alt="Rutina completa Rapuncelés"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
        </div>

        <ul className="mt-8 space-y-3">
          {benefits.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card/70 p-4">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                <Icon className="size-4" />
              </span>
              <p className="min-w-0 text-[0.95rem] leading-snug">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------------------- KIT INCLUDES ---------------------------- */
function KitIncludes() {
  const items = [
    {
      img: prodShampoo,
      name: "Shampoo Nutritivo",
      desc: "Limpia suavemente mientras prepara el cuero cabelludo.",
    },
    {
      img: prodConditioner,
      name: "Acondicionador",
      desc: "Hidrata y ayuda a proteger la fibra capilar.",
    },
    {
      img: prodTonic,
      name: "Tónico de Crecimiento",
      desc: "Actúa directamente en el cuero cabelludo ayudando a fortalecer las raíces.",
    },
  ];
  return (
    <section className="section-pad bg-[color-mix(in_oklab,var(--lavender)_30%,var(--ivory))]">
      <div className="mx-auto max-w-md px-6">
        <Header eyebrow="El kit completo" title="Qué incluye tu rutina." />
        <div className="mt-8 grid grid-cols-1 gap-5">
          {items.map((p, idx) => (
            <article key={p.name} className="luxe-card overflow-hidden">
              <div className="grid grid-cols-[8rem_minmax(0,1fr)] items-center">
                <div className="bg-[color-mix(in_oklab,var(--beige)_70%,white)]">
                  <img
                    src={p.img}
                    alt={p.name}
                    width={400}
                    height={533}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0 p-5">
                  <span className="eyebrow">Paso {idx + 1}</span>
                  <h3 className="mt-1 text-xl">{p.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- INGREDIENTS ----------------------------- */
function Ingredients() {
  const items = [
    { img: ingRosemary, name: "Romero", icon: Leaf },
    { img: ingHoney, name: "Miel", icon: Droplets },
    { img: ingCoconut, name: "Coco", icon: Flower2 },
    { img: ingBotanical, name: "Extractos botánicos", icon: Sparkles },
  ];
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-md px-6">
        <Header
          eyebrow="Inspiración natural"
          title="Inspirado en ingredientes naturales cuidadosamente seleccionados."
        />
        <div className="mt-8 grid grid-cols-2 gap-4">
          {items.map(({ img, name, icon: Icon }) => (
            <article key={name} className="luxe-card overflow-hidden">
              <div className="aspect-square">
                <img
                  src={img}
                  alt={name}
                  width={500}
                  height={500}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-center gap-2 px-4 py-3">
                <Icon className="size-3.5 text-[var(--gold)]" />
                <h3 className="text-base font-medium font-display">{name}</h3>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-7 text-center text-sm italic text-muted-foreground text-balance">
          Cada fórmula está inspirada en ingredientes reconocidos por apoyar rutinas de cuidado
          capilar saludables.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------ RESULTS ------------------------------ */
function Results() {
  const items = [
    { img: result1, name: "Andrea", time: "después de 12 semanas" },
    { img: result2, name: "Camila", time: "después de 16 semanas" },
    { img: result3, name: "Valentina", time: "después de 10 semanas" },
  ];
  return (
    <section className="section-pad bg-[color-mix(in_oklab,var(--beige)_60%,var(--ivory))]">
      <div className="mx-auto max-w-md px-6">
        <Header eyebrow="Resultados reales" title="Transformaciones reales de nuestras clientas." />
        <div className="mt-8 space-y-5">
          {items.map((r) => (
            <article key={r.name} className="luxe-card overflow-hidden">
              <img
                src={r.img}
                alt={`Resultado de ${r.name}`}
                width={1024}
                height={768}
                loading="lazy"
                className="w-full object-cover"
              />
              <div className="flex items-center justify-between gap-3 px-5 py-4">
                <div className="min-w-0">
                  <p className="truncate font-medium">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.time}</p>
                </div>
                <Stars />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- TESTIMONIALS ---------------------------- */
function Testimonials() {
  const reviews = [
    {
      name: "María José",
      body:
        "Mi cabello dejó de caerse tanto después del segundo mes. Ahora veo cabellos nuevos creciendo. ¡Estoy enamorada!",
    },
    {
      name: "Daniela R.",
      body:
        "El tónico es mágico. Lo uso todas las noches y siento mi cuero cabelludo más fuerte y mi cabello con más volumen.",
    },
    {
      name: "Laura M.",
      body:
        "Súper recomendado. El olor es delicioso y la textura premium. Vale cada peso. Mi cabello luce más sano y brillante.",
    },
  ];
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-md px-6">
        <Header eyebrow="Testimonios" title="Lo que dicen nuestras clientas." />
        <div className="mt-8 space-y-4">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="luxe-card p-5"
              style={{
                background:
                  "linear-gradient(180deg, color-mix(in oklab, var(--lavender) 25%, var(--card)), var(--card))",
              }}
            >
              <Stars />
              <p className="mt-3 text-[0.95rem] leading-relaxed">{r.body}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <Check className="size-3.5 text-[var(--botanical)]" />
                <span>Cliente verificada · {r.name}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- SCARCITY ----------------------------- */
function useCountdown(targetMs: number) {
  // Initialize to target so server and client render identical "00" on first paint,
  // avoiding a hydration mismatch from different Date.now() values.
  const [now, setNow] = useState(() => targetMs);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, targetMs - now);
  const h = Math.floor(diff / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  const s = Math.floor((diff % 60_000) / 1000);
  return { h, m, s };
}

function Scarcity() {
  // Target: end of current week (Sunday 23:59) in UTC so server and client render the same
  // timestamp and avoid a hydration mismatch from timezone differences.
  const target = useMemo(() => {
    const d = new Date();
    const day = d.getUTCDay();
    const daysToSunday = (7 - day) % 7 || 7;
    d.setUTCDate(d.getUTCDate() + daysToSunday);
    d.setUTCHours(23, 59, 59, 0);
    return d.getTime();
  }, []);
  const { h, m, s } = useCountdown(target);
  const cell = (label: string, value: number) => (
    <div className="flex flex-col items-center">
      <div
        className="grid h-16 w-16 place-items-center rounded-2xl border border-[var(--gold)]/40 bg-card font-display text-2xl font-medium text-primary"
        style={{ boxShadow: "inset 0 -8px 20px -10px color-mix(in oklab, var(--gold) 25%, transparent)" }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <span className="mt-2 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
    </div>
  );

  return (
    <section className="section-pad bg-[color-mix(in_oklab,var(--purple-deep)_92%,black)] text-[var(--ivory)]">
      <div className="mx-auto max-w-md px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 px-4 py-1.5">
          <Clock className="size-3.5 text-[var(--gold)]" />
          <span className="text-[0.7rem] uppercase tracking-[0.3em] text-[var(--gold)]">
            Producción limitada
          </span>
        </div>
        <h2 className="mt-5 text-3xl text-[var(--ivory)]">
          Producción limitada esta semana.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[color-mix(in_oklab,var(--ivory)_75%,transparent)]">
          Debido a nuestro proceso artesanal y la creciente demanda, trabajamos con inventario
          semanal limitado.
        </p>

        <div
          className="mt-7 rounded-2xl border border-[var(--gold)]/30 p-5"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in oklab, var(--gold) 8%, transparent), transparent)",
          }}
        >
          <p className="text-sm text-[color-mix(in_oklab,var(--ivory)_80%,transparent)]">
            Disponibles esta semana
          </p>
          <p className="mt-1 font-display text-4xl text-[var(--gold)]">21 kits</p>
        </div>

        <div className="mt-6 flex justify-center gap-3">
          {cell("Horas", h)}
          {cell("Min", m)}
          {cell("Seg", s)}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- PRODUCT OPTIONS --------------------------- */
const VARIANTS = [
  {
    id: "500",
    label: "500 ml",
    sub: "Perfecto para comenzar tu rutina.",
    price: 159000,
    compareAt: 199000,
    badge: null as string | null,
  },
  {
    id: "1l",
    label: "1 Litro",
    sub: "Mayor duración y mejor valor.",
    price: 249000,
    compareAt: 349000,
    badge: "Mejor valor",
  },
];

function formatCOP(n: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(n);
}

function ProductOptions() {
  const [selected, setSelected] = useState("1l");
  const current = VARIANTS.find((v) => v.id === selected)!;
  return (
    <section id="options" className="section-pad bg-[color-mix(in_oklab,var(--beige)_55%,var(--ivory))]">
      <div className="mx-auto max-w-md px-6">
        <Header eyebrow="Elige tu kit" title="Selecciona tu presentación." />

        <div className="mt-8 space-y-4">
          {VARIANTS.map((v) => {
            const active = selected === v.id;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => setSelected(v.id)}
                className="block w-full text-left transition-all"
              >
                <div
                  className="luxe-card relative p-5 transition-all"
                  style={
                    active
                      ? {
                          borderColor: "var(--gold)",
                          boxShadow:
                            "0 0 0 1px var(--gold), 0 20px 40px -28px color-mix(in oklab, var(--purple-deep) 35%, transparent)",
                        }
                      : undefined
                  }
                >
                  {v.badge && (
                    <span className="absolute -top-2 right-5 rounded-full bg-[var(--gold)] px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[var(--ivory)]">
                      {v.badge}
                    </span>
                  )}
                  <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4">
                    <span
                      className="grid size-6 shrink-0 place-items-center rounded-full border-2"
                      style={{
                        borderColor: active ? "var(--gold)" : "var(--border)",
                        background: active ? "var(--gold)" : "transparent",
                      }}
                    >
                      {active && <Check className="size-3.5 text-[var(--ivory)]" />}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate font-display text-xl">{v.label}</p>
                      <p className="truncate text-xs text-muted-foreground">{v.sub}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-display text-lg text-primary">{formatCOP(v.price)}</p>
                      <p className="text-[0.7rem] text-muted-foreground line-through">
                        {formatCOP(v.compareAt)}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-border/70 bg-card/70 p-4 text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Tu kit</p>
          <p className="mt-1 font-display text-2xl">
            {current.label} ·{" "}
            <span className="text-[var(--gold)]">{formatCOP(current.price)}</span>
          </p>
        </div>

        <div className="mt-6 space-y-3">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-primary">
            <Sparkles className="size-4" /> Quiero mi kit ({current.label})
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-whatsapp">
            <MessageCircle className="size-4" /> Asesoría personalizada
          </a>
        </div>

        <ul className="mt-6 grid gap-2 text-xs text-muted-foreground">
          <li className="flex items-center gap-2"><ShieldCheck className="size-3.5 text-[var(--botanical)]" /> Envío seguro a todo el país</li>
          <li className="flex items-center gap-2"><Heart className="size-3.5 text-[var(--botanical)]" /> Pago contra entrega disponible</li>
        </ul>
      </div>
    </section>
  );
}

/* ----------------------------- FINAL CTA ----------------------------- */
function FinalCTA() {
  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 100% at 50% 0%, color-mix(in oklab, var(--lavender) 80%, var(--ivory)), var(--ivory))",
      }}
    >
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -z-0 size-[28rem] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{ background: "color-mix(in oklab, var(--gold) 35%, transparent)" }}
      />
      <div className="relative mx-auto max-w-md px-6 text-center">
        <span className="eyebrow">Un último paso</span>
        <h2 className="mt-4 text-balance text-[2.1rem] leading-tight sm:text-4xl">
          Dale a tu cabello el{" "}
          <em className="not-italic shimmer">cuidado que merece.</em>
        </h2>
        <p className="mt-4 text-sm text-muted-foreground">
          Comienza hoy tu rutina Rapuncelés y descubre la versión más fuerte y luminosa de tu
          cabello.
        </p>

        <div className="mt-8 space-y-3">
          <a href="#options" className="btn-primary">
            Obtener mi kit Rapuncelés <ArrowRight className="size-4" />
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-whatsapp">
            <MessageCircle className="size-4" /> Consulta personalizada por WhatsApp
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          <Stars />
          <span className="text-sm text-muted-foreground">4.9/5 — 68 reseñas</span>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- FOOTER ------------------------------- */
function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background py-10">
      <div className="mx-auto max-w-md px-6 text-center">
        <p className="font-display text-2xl tracking-wide">Rapuncelés</p>
        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
          Premium Haircare
        </p>
        <p className="mt-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Rapuncelés. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

/* ------------------------------ HEADER ------------------------------ */
function Header({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-3 text-balance text-[1.95rem] leading-tight sm:text-4xl">{title}</h2>
      <div className="mt-4 flex justify-center">
        <span className="gold-divider" />
      </div>
    </div>
  );
}
