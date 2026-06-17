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
  Truck,
  Banknote,
} from "lucide-react";

import bannerStore from "@/assets/banner-store.png.asset.json";
import heroKit from "@/assets/hero-kit.jpg";
import probRoots from "@/assets/problem-roots.jpg";
import probFall from "@/assets/problem-fall.jpg";
import probVolume from "@/assets/problem-volume.jpg";
import probWeak from "@/assets/problem-weak.jpg";
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
      <Problems />
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
  const GOLD = "#D4AF7A";
  const GOLD_SOFT = "#E8C99B";
  const GOLD_DEEP = "#B8935A";
  const PURPLE = "#2A1538";
  const PURPLE_DEEP = "#1A0A26";

  const particles = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => {
        const seed = (i * 9301 + 49297) % 233280;
        const r = seed / 233280;
        return {
          left: `${(r * 100).toFixed(2)}%`,
          top: `${((r * 53 + i * 7) % 100).toFixed(2)}%`,
          size: 2 + ((i * 3) % 5),
          delay: `${(i * 0.4).toFixed(2)}s`,
          duration: `${6 + (i % 5)}s`,
        };
      }),
    [],
  );

  const benefits = [
    { Icon: Leaf, label: "FÓRMULA", label2: "NATURAL" },
    { Icon: Truck, label: "ENVÍO", label2: "GRATIS" },
    { Icon: Banknote, label: "PAGO CONTRA", label2: "ENTREGA" },
  ];

  return (
    <section
      className="relative isolate w-full overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${PURPLE} 0%, ${PURPLE_DEEP} 100%)`,
      }}
    >
      <style>{`
        @keyframes hero-float {
          0%,100% { transform: translateY(0); opacity:.35; }
          50%     { transform: translateY(-20px); opacity:.9; }
        }
        @keyframes hero-rise {
          0%   { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-star-glow {
          0%,100% { filter: drop-shadow(0 0 2px ${GOLD}); }
          50%     { filter: drop-shadow(0 0 10px ${GOLD_SOFT}); }
        }
      `}</style>

      {/* Floating golden particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              background: GOLD_SOFT,
              boxShadow: `0 0 ${p.size * 3}px ${GOLD}`,
              opacity: 0.6,
              animation: `hero-float ${p.duration} ease-in-out ${p.delay} infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-20 mx-auto grid w-full max-w-7xl grid-cols-1 lg:grid-cols-[42%_minmax(0,1fr)]">
        {/* LEFT — real components */}
        <div className="flex flex-col items-center gap-6 px-6 py-12 text-center sm:px-10 sm:py-16 lg:items-start lg:py-20 lg:text-left">
          {/* Brand */}
          <div
            className="flex flex-col items-center gap-1 lg:items-start"
            style={{ animation: "hero-rise .6s ease-out both" }}
          >
            <svg
              viewBox="0 0 64 40"
              className="h-10 w-16"
              fill="none"
              stroke={GOLD}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 32 L14 14 L22 26 L32 8 L42 26 L50 14 L58 32 Z" />
              <circle cx="14" cy="11" r="1.6" fill={GOLD} stroke="none" />
              <circle cx="32" cy="5" r="1.8" fill={GOLD} stroke="none" />
              <circle cx="50" cy="11" r="1.6" fill={GOLD} stroke="none" />
              <line x1="6" y1="36" x2="58" y2="36" />
            </svg>
            <p
              className="font-display text-3xl italic tracking-wide sm:text-4xl"
              style={{ color: GOLD_SOFT }}
            >
              Rapunceles
            </p>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-[1.9rem] leading-[1.05] tracking-tight sm:text-[2.6rem] lg:text-[2.8rem]"
            style={{ animation: "hero-rise .7s ease-out .1s both" }}
          >
            {["RECUPERA", "EL CRECIMIENTO", "NATURAL", "DE TU CABELLO"].map((line) => (
              <span
                key={line}
                className="block"
                style={{
                  background: `linear-gradient(180deg, ${GOLD_SOFT} 0%, ${GOLD} 55%, ${GOLD_DEEP} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {line}
              </span>
            ))}
          </h1>

          {/* Divider */}
          <div
            aria-hidden
            className="flex items-center gap-2"
            style={{ animation: "hero-rise .7s ease-out .2s both" }}
          >
            <span
              className="h-px w-12"
              style={{ background: `linear-gradient(90deg, transparent, ${GOLD})` }}
            />
            <span className="rotate-45" style={{ color: GOLD }}>◇</span>
            <span
              className="h-px w-12"
              style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }}
            />
          </div>

          {/* Description */}
          <p
            className="max-w-sm text-[0.95rem] leading-relaxed sm:text-base"
            style={{ color: GOLD_SOFT, opacity: 0.95, animation: "hero-rise .7s ease-out .25s both" }}
          >
            Rutina capilar inspirada en ingredientes naturales diseñada para fortalecer la raíz,
            estimular el crecimiento y reducir la caída.
          </p>

          {/* Rating */}
          <div
            className="flex items-center gap-3"
            style={{ animation: "hero-rise .7s ease-out .35s both" }}
          >
            <span className="flex" aria-label="4.9 de 5 estrellas">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="size-5"
                  style={{
                    fill: GOLD,
                    color: GOLD,
                    animation: `hero-star-glow 2.4s ease-in-out ${i * 0.2}s infinite`,
                  }}
                />
              ))}
            </span>
            <span className="font-display text-lg" style={{ color: GOLD_SOFT }}>
              4.9/5
            </span>
          </div>

          {/* Social proof */}
          <p
            className="max-w-xs text-sm"
            style={{ color: GOLD_SOFT, opacity: 0.9, animation: "hero-rise .7s ease-out .4s both" }}
          >
            +1.247 mujeres ya transformaron su cabello
          </p>

          {/* CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full max-w-xs items-center justify-center gap-3 rounded-full px-8 py-4 font-display text-base font-semibold tracking-[0.18em] shadow-[0_14px_44px_-8px_rgba(212,175,122,0.7)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_56px_-8px_rgba(212,175,122,0.95)] sm:text-lg"
            style={{
              background: `linear-gradient(135deg, ${GOLD_SOFT} 0%, ${GOLD} 50%, ${GOLD_DEEP} 100%)`,
              color: PURPLE,
              animation: "hero-rise .7s ease-out .45s both",
            }}
          >
            <span>COMPRAR AHORA</span>
            <span
              className="grid size-7 place-items-center rounded-full transition-transform group-hover:translate-x-1"
              style={{ background: PURPLE, color: GOLD }}
            >
              <ArrowRight className="size-4" />
            </span>
          </a>

          {/* Benefits */}
          <div
            className="mt-2 grid w-full max-w-sm grid-cols-3 gap-4"
            style={{ animation: "hero-rise .7s ease-out .55s both" }}
          >
            {benefits.map(({ Icon, label, label2 }) => (
              <div key={label} className="flex flex-col items-center gap-1.5 text-center">
                <span
                  className="grid size-11 place-items-center rounded-full border"
                  style={{ borderColor: `${GOLD}55` }}
                >
                  <Icon className="size-5" style={{ color: GOLD }} strokeWidth={1.4} />
                </span>
                <span
                  className="text-[0.65rem] font-semibold leading-tight tracking-[0.1em]"
                  style={{ color: GOLD_SOFT }}
                >
                  {label}
                  <br />
                  {label2}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — woman & products image */}
        <div className="relative w-full overflow-hidden">
          <img
            src={bannerStore.url}
            alt="Mujer con cabello largo y rubio sosteniendo el kit Rapuncelés de shampoo, acondicionador y tónico de crecimiento"
            width={958}
            height={1280}
            className="h-full w-full object-cover object-right"
            style={{ objectPosition: "75% center" }}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          {/* Soft gradient blend on the left edge to merge with the panel */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 lg:block"
            style={{
              background: `linear-gradient(90deg, ${PURPLE_DEEP} 0%, transparent 100%)`,
            }}
          />
        </div>
      </div>
    </section>
  );
}



function Stars({ size = "size-4" }: { size?: string }) {
  return (
    <span className="flex" aria-label="5 estrellas">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className={`${size} fill-[var(--gold)] text-[var(--gold)]`} />
      ))}
    </span>
  );
}

/* ----------------------------- PROBLEMS ----------------------------- */
function Problems() {
  const items = [
    { img: probRoots, title: "Raíces débiles", desc: "Sientes el cabello frágil desde la raíz." },
    { img: probFall, title: "Caída constante", desc: "Más hebras de las normales cada día." },
    { img: probVolume, title: "Falta de volumen", desc: "El cabello se ve plano y sin cuerpo." },
    { img: probWeak, title: "Crecimiento lento", desc: "Crece poco y no recupera fuerza." },
  ];
  return (
    <section className="section-pad bg-[color-mix(in_oklab,var(--beige)_60%,var(--ivory))]">
      <div className="mx-auto max-w-md px-6">
        <Header eyebrow="El problema" title="¿Te suena familiar?" />
        <div className="mt-8 grid grid-cols-1 gap-4">
          {items.map((it) => (
            <article key={it.title} className="luxe-card overflow-hidden">
              <div className="grid grid-cols-[7.5rem_minmax(0,1fr)] items-stretch">
                <img
                  src={it.img}
                  alt={it.title}
                  width={400}
                  height={400}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="min-w-0 p-5">
                  <h3 className="text-xl">{it.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-sm italic text-muted-foreground">
          Tu cabello merece una rutina diseñada para cuidarlo desde la raíz.
        </p>
      </div>
    </section>
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
