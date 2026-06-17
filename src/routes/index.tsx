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
  HandCoins,
} from "lucide-react";

import heroKit from "@/assets/hero-kit.jpg";
import heroBgAsset from "@/assets/hero-bg.png.asset.json";
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

/* ------------------------------- HERO ------------------------------- */
function Hero() {
  const GOLD = "#D4A24A";
  const GOLD_SOFT = "#E8C272";
  const GOLD_DEEP = "#A67828";
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: "3 / 4",
        backgroundImage: `url(${heroBgAsset.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
      }}
    >

      <style>{`
        @keyframes hero-star-shimmer {
          0%, 100% {
            opacity: 0.85;
            filter: drop-shadow(0 0 1px rgba(212,162,74,0.25));
            transform: translateY(0) scale(1);
          }
          50% {
            opacity: 1;
            filter: drop-shadow(0 0 4px rgba(212,162,74,0.9));
            transform: translateY(-2px) scale(1.14);
          }
        }
      `}</style>

      {/* Content over image */}
      <div className="absolute inset-y-0 left-0 w-[38%] z-10 flex flex-col items-center text-center px-[3%] py-[4%]">
        {/* Crown */}
        <svg viewBox="0 0 64 40" className="w-[34%] h-auto" aria-hidden>
          <g fill="none" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 32 L10 14 L20 24 L32 8 L44 24 L54 14 L58 32 Z" fill={`${GOLD}22`} />
            <circle cx="10" cy="12" r="1.6" fill={GOLD} />
            <circle cx="32" cy="6" r="2" fill={GOLD} />
            <circle cx="54" cy="12" r="1.6" fill={GOLD} />
            <path d="M6 35 H58" />
          </g>
        </svg>

        {/* Brand */}
        <h1
          className="mt-[2%] leading-none"
          style={{
            fontFamily: "'Great Vibes','Allura',cursive",
            fontSize: "clamp(1.6rem, 7.2vw, 3.2rem)",
            color: GOLD,
            textShadow: "0 1px 0 rgba(0,0,0,0.4)",
          }}
        >
          Rapunceles
        </h1>

        {/* Headline */}
        <h2
          className="mt-[8%] tracking-wide"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: GOLD_SOFT,
            fontSize: "clamp(1.25rem, 4.2vw, 2.425rem)",
            lineHeight: 1.2,
            letterSpacing: "0.02em",
            textShadow: "0 2px 6px rgba(0,0,0,0.45)",
          }}
        >
          RECUPERA<br />EL CRECIMIENTO<br />NATURAL<br />DE TU CABELLO
        </h2>

        {/* Divider ornament */}
        <div className="mt-[6%] flex items-center justify-center w-full" aria-hidden>
          <span className="h-px flex-1" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
          <span
            className="mx-2 inline-block rotate-45"
            style={{ width: 6, height: 6, border: `1px solid ${GOLD}` }}
          />
          <span className="h-px flex-1" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
        </div>

        {/* Description */}
        <p
          className="mt-[5%]"
          style={{
            color: "#E9D9C0",
            fontSize: "clamp(0.62rem, 2.1vw, 1rem)",
            lineHeight: 1.55,
            textShadow: "0 1px 3px rgba(0,0,0,0.35)",
          }}
        >
          Rutina capilar inspirada en ingredientes naturales diseñada para fortalecer la raíz, estimular el crecimiento y reducir la caída.
        </p>


        {/* Stars */}
        <div className="mt-[6%] flex items-center gap-2">
          <span className="flex" aria-label="4.9 de 5 estrellas">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                className="w-[1.1em] h-[1.1em]"
                style={{
                  fill: GOLD,
                  color: GOLD,
                  fontSize: "clamp(0.7rem,2.6vw,1.2rem)",
                  animation: "hero-star-shimmer 2.2s ease-in-out infinite",
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            ))}
          </span>
          <span style={{ color: "#E9D9C0", fontSize: "clamp(0.65rem,2.2vw,1rem)" }}>4.9/5</span>
        </div>

        {/* Social proof */}
        <p
          className="mt-[2%]"
          style={{ color: "#E9D9C0", fontSize: "clamp(0.6rem,2vw,0.95rem)", lineHeight: 1.4 }}
        >
          +1.247 mujeres ya transformaron su cabello
        </p>

        {/* CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener"
          className="mt-[6%] inline-flex items-center justify-center gap-2 w-full rounded-full transition-transform hover:scale-[1.02]"
          style={{
            background: `linear-gradient(180deg, ${GOLD_SOFT} 0%, ${GOLD} 55%, ${GOLD_DEEP} 100%)`,
            color: "#2A1538",
            padding: "clamp(0.55rem,2.2vw,1rem) clamp(0.8rem,2.8vw,1.4rem)",
            fontSize: "clamp(0.6rem,2.1vw,1rem)",
            fontWeight: 600,
            letterSpacing: "0.08em",
            boxShadow: "0 6px 18px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.5)",
          }}
        >
          COMPRAR AHORA
          <ArrowRight className="w-[1em] h-[1em]" strokeWidth={2.5} />
        </a>

        {/* Benefits */}
        <ul className="mt-[7%] grid grid-cols-3 gap-1 w-full">
          {[
            { icon: Leaf, label: "FÓRMULA\nNATURAL" },
            { icon: Truck, label: "ENVÍO\nGRATIS" },
            { icon: HandCoins, label: "PAGO CONTRA\nENTREGA" },
          ].map(({ icon: Icon, label }) => (
            <li key={label} className="flex flex-col items-center text-center">
              <span
                className="grid place-items-center rounded-full"
                style={{
                  width: "clamp(1.6rem,5.5vw,2.6rem)",
                  height: "clamp(1.6rem,5.5vw,2.6rem)",
                  border: `1px solid ${GOLD}`,
                  color: GOLD,
                }}
              >
                <Icon className="w-[55%] h-[55%]" />
              </span>
              <span
                className="mt-1 whitespace-pre-line"
                style={{
                  color: "#E9D9C0",
                  fontSize: "clamp(0.45rem,1.6vw,0.75rem)",
                  letterSpacing: "0.05em",
                  lineHeight: 1.15,
                }}
              >
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ----------------------------- PROBLEMS ----------------------------- */
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
