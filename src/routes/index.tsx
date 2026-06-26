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
  Truck,
  Phone,
  HeartHandshake,
  Package,
} from "lucide-react";
import finalCtaModel from "@/assets/final-cta-model-v2.jpg.asset.json";
import trustBgAsset from "@/assets/trust-bg-v2.png.asset.json";
import luxuryBgScene from "@/assets/luxury-bg-scene.jpg";
import testimonialsBgNew from "@/assets/testimonials-bg-new.png.asset.json";
import probFallAsset from "@/assets/card-problem-fall.png.asset.json";
import probSlowGrowthAsset from "@/assets/card-problem-slow-growth.png.asset.json";
import probRootsAsset from "@/assets/card-problem-roots.png.asset.json";
import probVolumeAsset from "@/assets/card-problem-volume.png.asset.json";

import heroBanner from "@/assets/hero-banner.png.asset.json";
import afterBannerBg from "@/assets/after-banner-bg.png.asset.json";
import routineBg from "@/assets/routine-bg.png.asset.json";


import heroKit from "@/assets/hero-kit.jpg";
import heroKitNew from "@/assets/hero-kit-new.png.asset.json";
import routineProducts from "@/assets/routine-products.png.asset.json";
import routineBgV3 from "@/assets/routine-bg-v6.png.asset.json";
import routineSectionBg from "@/assets/routine-section-bg.jpg.asset.json";
import prodShampooAsset from "@/assets/product-shampoo-v2.png.asset.json";
const prodShampoo = prodShampooAsset.url;
import prodConditionerAsset from "@/assets/product-conditioner-new.png.asset.json";
const prodConditioner = prodConditionerAsset.url;
import prodTonicAsset from "@/assets/product-tonic-new.png.asset.json";
const prodTonic = prodTonicAsset.url;
import ingRosemary from "@/assets/ing-rosemary.jpg";
import ingHoney from "@/assets/ing-honey.jpg";
import ingCoconut from "@/assets/ing-coconut.jpg";
import ingBotanical from "@/assets/ing-botanical.jpg";
import result1 from "@/assets/result-1.jpg";
import result2 from "@/assets/result-2.jpg";
import result3 from "@/assets/result-3.jpg";
import beforeAndreaAsset from "@/assets/before-andrea.jpg.asset.json";
const beforeAndrea = beforeAndreaAsset.url;
import afterAndreaAsset from "@/assets/after-andrea.jpg.asset.json";
const afterAndrea = afterAndreaAsset.url;
import beforeCamilaAsset from "@/assets/before-camila.jpg.asset.json";
const beforeCamila = beforeCamilaAsset.url;
import afterCamilaAsset from "@/assets/after-camila.jpg.asset.json";
const afterCamila = afterCamilaAsset.url;
import beforeThirdAsset from "@/assets/before-third.jpg.asset.json";
const beforeThird = beforeThirdAsset.url;
import afterThirdAsset from "@/assets/after-third.jpg.asset.json";
const afterThird = afterThirdAsset.url;
import avatarMariaJoseAsset from "@/assets/avatar-maria-jose.jpg.asset.json";
import avatarDanielaAsset from "@/assets/avatar-daniela.jpg.asset.json";
import avatarLauraAsset from "@/assets/avatar-laura.jpg.asset.json";




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
    <main className="overflow-x-hidden text-foreground" style={{ background: "#1a0a2e" }}>
      <Hero />
      <AfterBanner />
      <ProductRoutineSection />
      <KitIncludes />
      <Ingredients />
      <Results />
      <Testimonials />
      
      <ProductOptions />
      <TrustBenefits />

      <LuxuryCampaign />

      <FAQ />

      <Urgency />
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
            marginLeft: "-10px",
          }}
        >
          Tu cabello <br />
          puede volver <br />
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
      img: probFallAsset.url,
      title: "Caída excesiva",
      desc: "Cada día pierdes más cabello del que deberías.",
    },
    {
      img: probSlowGrowthAsset.url,
      title: "Crecimiento lento",
      desc: "Tu cabello tarda demasiado en crecer o parece detenido.",
    },
    {
      img: probRootsAsset.url,
      title: "Raíces debilitadas",
      desc: "Cuando la raíz pierde fuerza, el cabello comienza a caer.",
    },
    {
      img: probVolumeAsset.url,
      title: "Pérdida de abundancia",
      desc: "Tu cabello pierde volumen, densidad y vitalidad natural.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image — untouched */}
      <img
        src={afterBannerBg.url}
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
    <section className="section-pad relative overflow-hidden" style={{ paddingTop: 0 }}>
      {/* Background image */}
      <img
        src={heroKitNew.url}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      {/* Dark overlay for text legibility */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,8,38,0.68) 0%, rgba(20,8,38,0.55) 50%, rgba(20,8,38,0.68) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-md px-6 min-h-[560px] sm:min-h-[680px] flex flex-col">
        <Header eyebrow="" title={"\n"} />

        {/* Top chips - above products */}
        <ul className="mt-2 flex flex-wrap justify-center gap-2">
          {benefits.slice(0, 2).map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="flex items-center gap-1.5 rounded-full border border-[var(--gold)]/40 bg-[#1a0a2e]/70 backdrop-blur-sm px-3 py-1.5 text-[0.72rem] text-white/95"
            >
              <Icon className="size-3.5 text-[var(--gold)]" />
              <span className="leading-none">{text}</span>
            </li>
          ))}
        </ul>

        <div className="flex-1" />

        {/* Bottom chips - below products */}
        <ul className="mb-2 flex flex-wrap justify-center gap-2">
          {benefits.slice(2).map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="flex items-center gap-1.5 rounded-full border border-[var(--gold)]/40 bg-[#1a0a2e]/70 backdrop-blur-sm px-3 py-1.5 text-[0.72rem] text-white/95"
            >
              <Icon className="size-3.5 text-[var(--gold)]" />
              <span className="leading-none">{text}</span>
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
}

/* ---------------------------- PRODUCT ROUTINE SECTION ---------------------------- */
function ProductRoutineSection() {
  const GOLD = "#c9a84c";
  const SERIF = "'Playfair Display', serif";
  const SANS = "'Jost', sans-serif";

  const HairSparkleIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-7">
      <path d="M7 21c0-5 2-9 5-13" />
      <path d="M10 21c0-4 1.5-7.5 4-11" />
      <path d="M13 21c0-3 1-6 3-9" />
      <path d="M18 4l.6 1.4L20 6l-1.4.6L18 8l-.6-1.4L16 6l1.4-.6z" />
      <path d="M5 6l.4 1L6.5 7.5l-1 .4L5 9l-.4-1L3.5 7.5l1-.4z" />
    </svg>
  );

  const ShieldHairIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-7">
      <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
      <path d="M9 11c1-1 2-1.5 3-1.5s2 .5 3 1.5" />
      <path d="M10 14c.5-.5 1.2-.8 2-.8s1.5.3 2 .8" />
    </svg>
  );

  const DropIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-7">
      <path d="M12 3s6 7 6 12a6 6 0 1 1-12 0c0-5 6-12 6-12z" />
      <path d="M10 15c0 1.5 1 2.5 2.5 2.5" />
    </svg>
  );

  const SparklesIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-7">
      <path d="M12 3l1.2 3.3L16.5 7.5l-3.3 1.2L12 12l-1.2-3.3L7.5 7.5l3.3-1.2z" />
      <path d="M18 14l.7 1.8 1.8.7-1.8.7L18 19l-.7-1.8-1.8-.7 1.8-.7z" />
      <path d="M5 15l.5 1.3 1.3.5-1.3.5L5 18.6l-.5-1.3-1.3-.5 1.3-.5z" />
    </svg>
  );

  const badges = [
    {
      icon: <HairSparkleIcon />,
      title: "Activa el crecimiento desde la raíz",
      desc: "Estimula los folículos capilares y despierta el potencial natural de tu cabello.",
    },
    {
      icon: <ShieldHairIcon />,
      title: "Fortalece la raíz y evita quiebre",
      desc: "Nutre intensamente para un cabello más resistente y saludable.",
    },
    {
      icon: <DropIcon />,
      title: "Reduce la caída progresiva",
      desc: "Fortalece la raíz y disminuye la caída causada por estrés, hormonas y factores externos.",
    },
    {
      icon: <SparklesIcon />,
      title: "Cabello más largo, fuerte y saludable",
      desc: "Mejora visiblemente la calidad del cabello y te acerca a tu mejor versión.",
    },
  ];

  const benefits = [
    "Activa crecimiento",
    "Reduce caída",
    "Fortalece raíz",
    "Mayor densidad",
  ];

  return (
    <section className="w-full" style={{ background: "#1a0a2e" }}>
      <div className="relative w-full mx-auto" style={{ maxWidth: 852 }}>
        <img
          src={routineBgV3.url}
          alt="La rutina que tu cabello necesita"
          className="block w-full h-auto select-none"
          style={{ aspectRatio: "852 / 1280" }}
        />

        {/* Title */}
        <div
          className="absolute left-0 right-0 text-center px-6"
          style={{ top: "2%" }}
        >
          <h2
            className="font-serif leading-[1.15]"
            style={{
              fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
              fontSize: "clamp(20px, 5.8vw, 34px)",
              fontWeight: 500,
              letterSpacing: "0.01em",
              backgroundImage:
                "linear-gradient(180deg, #f5e6a8 0%, #d4af37 45%, #b8860b 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}
          >
            Más que una rutina,
            <br />
            una transformación completa
            <br />
            para tu cabello
          </h2>
        </div>

        {/* Subtitle */}
        <div
          className="absolute left-0 right-0 text-center px-10"
          style={{ top: "17%" }}
        >
          <p
            className="text-[#e8d9b8]/90"
            style={{
              fontFamily: '"Inter", system-ui, sans-serif',
              fontSize: "clamp(11px, 3.1vw, 16px)",
              lineHeight: 1.55,
              fontWeight: 300,
            }}
          >
            Una combinación diseñada para devolverle
            <br />
            fuerza, densidad, nutrición y vitalidad
            <br />
            a tu cabello desde la raíz.
          </p>
        </div>

        {/* Four benefit cards */}
        <div
          className="absolute left-0 right-0 px-3"
          style={{ bottom: "2.5%" }}
        >
          <div className="grid grid-cols-4 gap-1.5">
            {benefits.map((b) => (
              <div
                key={b}
                className="rounded-lg text-center flex items-center justify-center"
                style={{
                  background: "rgba(20, 8, 35, 0.55)",
                  border: "1px solid rgba(217, 184, 106, 0.55)",
                  boxShadow:
                    "0 4px 14px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)",
                  backdropFilter: "blur(6px)",
                  padding: "10px 6px",
                  minHeight: 64,
                }}
              >
                <span
                  className="text-[#e8d3a0]"
                  style={{
                    fontFamily:
                      '"Cormorant Garamond", "Playfair Display", serif',
                    fontSize: "clamp(10px, 2.9vw, 14px)",
                    lineHeight: 1.2,
                    letterSpacing: "0.02em",
                  }}
                >
                  {b}
                </span>
              </div>
            ))}
          </div>
        </div>
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
      tagline: "Limpia sin debilitar.",
      desc: "Purifica el cuero cabelludo y crea el entorno ideal para que la raíz crezca fuerte desde el primer lavado.",
    },
    {
      img: prodConditioner,
      name: "Acondicionador Fortalecedor",
      tagline: "Protege cada hebra.",
      desc: "Reduce el quiebre, aporta nutrición profunda y da mayor resistencia, suavidad y volumen a tu cabello.",
    },
    {
      img: prodTonic,
      name: "Tónico de Crecimiento",
      tagline: "El paso más importante de la rutina.",
      desc: "Una potente mezcla de ingredientes naturales que fortalece la raíz, estimula el crecimiento y ayuda a recuperar una melena más abundante, fuerte y llena de vida.",
    },
  ];
  return (
    <section className="section-pad relative w-full overflow-hidden">
      {/* Background image — same as "Tu cabello te está enviando señales" */}
      <img
        src={afterBannerBg.url}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,8,38,0.52) 0%, rgba(20,8,38,0.42) 40%, rgba(20,8,38,0.55) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-md px-6">
        <Header eyebrow="" title="Todo lo que tu cabello necesita para crecer más fuerte, abundante y saludable." titleClassName="text-[var(--gold)]" />

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
                  <span
                    className="inline-flex items-center rounded-full px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em]"
                    style={{
                      background:
                        "linear-gradient(135deg, color-mix(in oklab, var(--gold) 92%, white), color-mix(in oklab, var(--gold) 70%, var(--lavender)))",
                      color: "#2a1746",
                      boxShadow:
                        "0 1px 0 color-mix(in oklab, white 60%, transparent) inset, 0 4px 12px -6px color-mix(in oklab, var(--gold) 60%, transparent)",
                    }}
                  >
                    Paso {idx + 1}
                  </span>
                  <h3 className="mt-1 text-xl">{p.name}</h3>
                  <p className="mt-1.5 text-sm font-medium">{p.tagline}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
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
    <section className="section-pad relative w-full overflow-hidden">
      <img
        src="/__l5e/assets-v1/e9876f9d-c858-4154-8d53-d3d1744a32a2/sec5-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,8,38,0.55) 0%, rgba(20,8,38,0.4) 40%, rgba(20,8,38,0.6) 100%)",
        }}
      />


      <div className="relative z-10 mx-auto max-w-md px-6 [&_*]:!text-[#D4A85E]">
        <Header
          eyebrow=""
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
                <Icon className="size-3.5 text-[#D4A85E]" />
                <h3 className="text-base font-medium font-display text-[#D4A85E]">{name}</h3>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-7 text-center text-sm italic text-balance text-[#D4A85E]">
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
    {
      before: beforeAndrea,
      after: afterAndrea,
      name: "Andrea",
      quote: "Volvió a ver su cabello crecer de verdad.",
    },
    {
      before: afterCamila,
      after: beforeCamila,
      name: "Camila",
      quote: "Más abundancia, más movimiento, más confianza.",
    },
    {
      before: beforeThird,
      after: afterThird,
      name: "Valentina",
      quote: "Recuperó el brillo y la fuerza de siempre.",
    },
  ];
  const gold = "#D4A85E";
  return (
    <section
      className="section-pad relative"
      style={{
        backgroundImage: `linear-gradient(rgba(20,8,30,0.55), rgba(20,8,30,0.55)), url("/__l5e/assets-v1/da26aace-3f54-43ca-a073-a1f89cec247d/results-bg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-md px-6 [&_h2]:!text-[#D4A85E] [&_p.eyebrow]:!text-[#D4A85E]">
        <Header eyebrow="" title="Transformaciones reales de nuestras clientas." />
        <div className="mt-10 space-y-7">
          {items.map((r) => (
            <article
              key={r.name}
              className="luxe-card overflow-hidden rounded-2xl"
              style={{
                background: "rgba(20,8,30,0.55)",
                backdropFilter: "blur(6px)",
                border: `1px solid ${gold}33`,
                boxShadow: "0 14px 36px -22px rgba(0,0,0,0.55)",
              }}
            >
              <div className="grid grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={r.before}
                    alt={`Antes - ${r.name}`}
                    width={512}
                    height={640}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-[10px] font-light uppercase tracking-[0.25em] backdrop-blur-sm" style={{ color: gold, border: `1px solid ${gold}55` }}>
                    Antes
                  </span>
                </div>
                <div className="relative" style={{ borderLeft: `1px solid ${gold}33` }}>
                  <img
                    src={r.after}
                    alt={`Después - ${r.name}`}
                    width={512}
                    height={640}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <span
                    className="absolute right-3 top-3 rounded-full px-3 py-1 text-[10px] font-light uppercase tracking-[0.25em]"
                    style={{ background: gold, color: "#1a0a2e" }}
                  >
                    Después
                  </span>
                </div>
              </div>
              <div className="px-6 pt-6 pb-7 text-center">
                <p
                  className="font-display text-[1.35rem] leading-none tracking-[0.02em]"
                  style={{ fontWeight: 400, color: gold }}
                >
                  {r.name}
                </p>
                <div className="mx-auto mt-3 h-px w-8" style={{ background: gold }} />
                <div className="mt-4 flex items-center justify-center gap-1.5" style={{ color: gold }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-[13px] fill-current" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-5 px-1 font-display italic text-[0.95rem] leading-relaxed" style={{ color: gold }}>
                  “{r.quote}”
                </p>
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
  const gold = "#D4A85E";
  const trust = [
    { n: "+10K", t: "Mujeres transformadas" },
    { n: "4.9/5", t: "Calificación promedio" },
    { n: "Semanas", t: "Resultados visibles" },
    { n: "100%", t: "Ingredientes naturales" },
  ];
  return (
    <section
      className="section-pad relative bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(20,10,30,0.55), rgba(20,10,30,0.55)), url(${testimonialsBgNew.url})`,
      }}
    >
      <div className="mx-auto max-w-md px-6">
        <Header
          eyebrow="Lo que dicen nuestras clientas"
          title="Testimonios reales"
          titleClassName="!text-[#D4A85E]"
        />


        <article
          className="mt-8 rounded-3xl bg-white p-6"
          style={{
            border: `1px solid ${gold}40`,
            boxShadow: "0 22px 50px -28px rgba(58,36,24,0.28)",
          }}
        >
          <div className="flex items-center gap-3">
            <img
              src={avatarDanielaAsset.url}
              alt="Juliana R."
              width={56}
              height={56}
              loading="lazy"
              className="size-12 rounded-full object-cover"
              style={{ border: `1.5px solid ${gold}` }}
            />
            <div className="flex flex-col">
              <span className="font-display text-[1.05rem]" style={{ color: "#3A2418" }}>
                Juliana R.
              </span>
              <span className="mt-0.5 flex items-center gap-1" style={{ color: gold }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-[13px] fill-current" strokeWidth={0} />
                ))}
              </span>
            </div>
          </div>
          <p
            className="mt-5 text-[0.98rem] leading-relaxed italic"
            style={{ color: "#4A3528" }}
          >
            “Este kit cambió por completo mi cabello. Menos caída, más crecimiento y se ve saludable de verdad.”
          </p>
        </article>

        <div className="mt-5 flex items-center justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block rounded-full transition-all"
              style={{
                width: i === 0 ? 18 : 6,
                height: 6,
                background: i === 0 ? gold : `${gold}55`,
              }}
            />
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
    sub: "Ideal para comenzar tu transformación.",
    cta: "Quiero mi kit de 500 ml",
    price: 159000,
    compareAt: 199000,
    badge: null as string | null,
  },
  {
    id: "1l",
    label: "1 litro",
    sub: "Para un tratamiento completo y duradero.",
    cta: "Quiero mi kit de 1 litro",
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
  const [selected, setSelected] = useState("500");
  return (
    <section id="options" className="py-3 bg-[color-mix(in_oklab,var(--beige)_55%,var(--ivory))]">
      <div className="mx-auto max-w-md px-6">
        <Header eyebrow="Elige tu kit" title="Selecciona tu presentación." />

        <div className="mt-8 space-y-5">
          {VARIANTS.map((v) => {
            const active = selected === v.id;
            return (
              <div
                key={v.id}
                onClick={() => setSelected(v.id)}
                className="luxe-card relative cursor-pointer p-6 transition-all"
                style={
                  active
                    ? {
                        borderColor: "var(--gold)",
                        boxShadow:
                          "0 0 0 1px var(--gold), 0 24px 48px -28px color-mix(in oklab, var(--purple-deep) 35%, transparent)",
                      }
                    : undefined
                }
              >
                <span
                  className="absolute left-5 top-5 grid size-5 place-items-center rounded-full border-2"
                  style={{
                    borderColor: active ? "var(--gold)" : "var(--border)",
                    background: "transparent",
                  }}
                >
                  {active && (
                    <span
                      className="size-2.5 rounded-full"
                      style={{ background: "var(--gold)" }}
                    />
                  )}
                </span>

                {v.badge && (
                  <span className="absolute -top-2 right-5 rounded-full bg-[var(--gold)] px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[var(--ivory)]">
                    {v.badge}
                  </span>
                )}

                <div className="flex flex-col items-center text-center">
                  <img
                    src={heroKitNew.url}
                    alt={`Kit Rapunceles ${v.label}`}
                    className="mt-2 h-60 w-60 object-contain sm:h-64 sm:w-64"
                    style={{ transform: v.id === "500" ? "scale(0.95)" : "scale(1.05)" }}
                  />
                  <p className="mt-4 font-display text-xl text-primary">{v.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground max-w-[14rem]">{v.sub}</p>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="btn-primary mt-5 w-full uppercase tracking-[0.18em] text-[0.78rem]"
                  >
                    {v.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


/* ----------------------------- FINAL CTA ----------------------------- */
function Urgency() {
  const gold = "#C9A961";
  const filled = ((50 - 21) / 50) * 100;
  return (
    <section className="px-5 pt-6 pb-8" style={{ background: "#F8F1E4" }}>
      <div className="mx-auto max-w-md text-center">
        <div
          className="inline-block text-[0.62rem] uppercase tracking-[0.32em] mb-3"
          style={{ color: gold, letterSpacing: "0.32em" }}
        >
          Edición limitada
        </div>
        <h2
          className="font-display text-[1.5rem] leading-[1.15] mb-3"
          style={{ color: "#3A2418" }}
        >
          Producción limitada esta semana
        </h2>
        <p
          className="text-[0.82rem] leading-[1.55] mb-6"
          style={{ color: "#6B5544" }}
        >
          Debido a nuestro proceso artesanal y alta demanda, trabajamos con
          inventario limitado cada semana.
        </p>

        <div
          className="rounded-2xl bg-white px-5 py-5"
          style={{
            border: `1px solid ${gold}40`,
            boxShadow: "0 18px 40px -22px rgba(58,36,24,0.25)",
          }}
        >
          <div
            className="font-display text-[1.05rem] mb-3"
            style={{ color: "#3A2418" }}
          >
            Solo quedan <span style={{ color: gold }}>21 kits</span> disponibles
          </div>
          <div
            className="h-[6px] w-full rounded-full overflow-hidden"
            style={{ background: `${gold}22` }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: `${filled}%`,
                background: `linear-gradient(90deg, ${gold}, #B8893F)`,
                boxShadow: `0 0 12px ${gold}80`,
              }}
            />
          </div>
          <div
            className="mt-3 flex justify-between text-[0.68rem] uppercase tracking-[0.2em]"
            style={{ color: "#8A7058" }}
          >
            <span>Reservados</span>
            <span>21 / 50</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const gold = "#D4A85E";

  return (
    <section
      className="relative w-full overflow-hidden py-14"
      style={{ background: "#2A1237" }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${gold}55, transparent)` }}
      />
      <div className="relative mx-auto max-w-md px-6 text-center">
        <span
          className="text-[0.5rem] uppercase tracking-[0.32em]"
          style={{ color: gold }}
        >
          Tu momento es ahora
        </span>
        <h2
          className="mt-4 font-display text-[1.65rem] leading-[1.15]"
          style={{ color: "#F5E9D6" }}
        >
          Tu cabello todavía
          <br />
          puede cambiar
        </h2>
        <div
          className="mx-auto mt-5 h-px w-12"
          style={{ background: gold }}
        />
        <p
          className="mx-auto mt-5 max-w-[20rem] text-[0.82rem] leading-relaxed"
          style={{ color: "#E8DCC8", opacity: 0.85 }}
        >
          Miles de mujeres están recuperando fuerza, crecimiento y abundancia con Rapunceles.
        </p>
        <p
          className="mx-auto mt-4 max-w-[20rem] font-display text-[0.92rem] italic leading-relaxed"
          style={{ color: gold }}
        >
          No sigas viendo cómo tu cabello pierde vida cada día.
        </p>

        <a
          href="#options"
          className="mt-9 inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-transform active:scale-[0.98]"
          style={{
            background: `linear-gradient(180deg, ${gold}, #B8893F)`,
            color: "#2A1237",
            boxShadow: `0 18px 40px -12px ${gold}80, 0 0 0 1px ${gold}40 inset`,
          }}
        >
          Quiero empezar mi transformación
        </a>
      </div>
    </section>
  );
}


/* --------------------------- TRUST BENEFITS --------------------------- */
function TrustBenefits() {
  const gold = "#C9A961";
  const ink = "#3A2418";
  const benefits = [
    { icon: Crown, text: "Pago contra entrega disponible" },
    { icon: Truck, text: "Envíos seguros a todo Colombia" },
    { icon: Phone, text: "Atención personalizada por WhatsApp" },
    { icon: HeartHandshake, text: "Acompañamiento durante tu proceso" },
  ];
  return (
    <section
      className="relative w-full py-6"
      style={{
        backgroundImage: `url(${trustBgAsset.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-md px-6">
        <div className="text-center">
          <h2
            className="-mt-2 font-display text-[1.7rem] leading-[1.15]"
            style={{ color: gold }}
          >
            Compra con total tranquilidad
          </h2>
          <div
            className="mx-auto mt-2 h-px w-12"
            style={{ background: gold, opacity: 0.6 }}
          />
        </div>

        <div className="mt-4 grid grid-cols-4 gap-1.5">
          {benefits.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex flex-col items-center justify-start gap-1.5 rounded-xl bg-white px-1 py-2.5 text-center"
              style={{
                border: `1px solid ${gold}55`,
                boxShadow: "0 18px 40px -28px rgba(58,36,24,0.25)",
              }}
            >
              <div
                className="flex size-7 shrink-0 items-center justify-center rounded-full"
                style={{
                  background: "#FBF6EC",
                  border: `1px solid ${gold}88`,
                }}
              >
                <Icon className="size-[0.8rem]" style={{ color: gold }} strokeWidth={1.4} />
              </div>
              <p
                className="font-display text-[0.58rem] leading-[1.15]"
                style={{ color: ink }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}



function FinalTransformation() {
  const gold = "#D4A85E";
  const purple = "#2A1237";
  const benefits = [
    { icon: Truck, line1: "Envío gratis", line2: "a todo Colombia" },
    { icon: Package, line1: "Pago contra", line2: "entrega" },
    { icon: ShieldCheck, line1: "Compra 100%", line2: "segura" },
  ];
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 80% at 20% 30%, #3B1A4D 0%, #2A1237 55%, #1B0A26 100%)",
      }}
    >
      <div className="mx-auto flex max-w-md flex-col">
        {/* Top split: image + text */}
        <div className="grid grid-cols-[42%_58%] items-stretch">
          <div className="relative">
            <img
              src={finalCtaModel.url}
              alt="Mujer con cabello largo y saludable"
              loading="lazy"
              width={768}
              height={1280}
              className="h-full w-full object-cover object-left"
              style={{
                maskImage:
                  "linear-gradient(to right, #000 78%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, #000 78%, transparent 100%)",
              }}
            />
          </div>
          <div className="flex flex-col justify-center px-4 py-10 text-center">
            <h2
              className="font-display text-[1.55rem] leading-[1.1] text-white"
              style={{ letterSpacing: "0.01em" }}
            >
              TU CABELLO
              <br />
              TODAVÍA PUEDE
              <br />
              <span
                className="italic"
                style={{ color: gold, fontWeight: 500 }}
              >
                CAMBIAR
              </span>
            </h2>
            <div
              className="mx-auto mt-3 h-px w-10"
              style={{ background: gold, opacity: 0.8 }}
            />
            <p
              className="mt-4 text-[0.78rem] leading-[1.45] text-white/85"
            >
              Miles de mujeres están recuperando fuerza, crecimiento y abundancia con Rapunceles.
            </p>
            <p className="mt-3 text-[0.78rem] leading-[1.45] text-white/85">
              No sigas viendo cómo tu cabello pierde vida cada día.
            </p>

            <button
              type="button"
              className="mt-5 rounded-xl px-4 py-3.5 font-display text-[0.78rem] leading-tight tracking-wide"
              style={{
                background:
                  "linear-gradient(180deg, #DDB46A 0%, #B88A3F 100%)",
                color: "#2A1237",
                boxShadow:
                  "0 18px 40px -16px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.35)",
              }}
            >
              QUIERO EMPEZAR MI
              <br />
              TRANSFORMACIÓN
            </button>
          </div>
        </div>

        {/* Benefits row */}
        <div className="grid grid-cols-3 gap-2 px-5 pb-10 pt-4">
          {benefits.map(({ icon: Icon, line1, line2 }, i) => (
            <div
              key={line1}
              className="relative flex flex-col items-center gap-2 px-1 text-center"
            >
              <Icon className="size-7" style={{ color: gold }} strokeWidth={1.3} />
              <p className="text-[0.7rem] leading-[1.25] text-white">
                {line1}
                <br />
                {line2}
              </p>
              {i < benefits.length - 1 && (
                <span
                  className="pointer-events-none absolute right-0 top-1 h-12 w-px"
                  style={{ background: "rgba(212,168,94,0.25)" }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Brand footer */}
        <div className="flex flex-col items-center px-5 pb-12 pt-2 text-center">
          <Crown className="size-5" style={{ color: gold }} strokeWidth={1.2} />
          <div
            className="mt-1 flex h-10 w-10 items-center justify-center rounded-full"
            style={{ border: `1px solid ${gold}` }}
          >
            <span
              className="font-display text-[1.35rem] leading-none"
              style={{ color: gold }}
            >
              R
            </span>
          </div>
          <p
            className="mt-3 font-display text-[1.15rem] tracking-[0.32em] text-white"
          >
            RAPUNCELES
          </p>
          <p className="mt-2 text-[0.7rem] tracking-wide text-white/70">
            Naturaleza. Ciencia. Transformación.
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const gold = "#C9A961";
  const faqs = [
    { q: "¿En cuánto tiempo comenzaré a notar cambios?", a: "Las primeras usuarias notan menos caída desde la segunda semana y crecimiento visible entre la cuarta y sexta semana de uso constante." },
    { q: "¿Debo usar los tres productos juntos?", a: "Sí. El shampoo, el acondicionador y el tónico están formulados para trabajar en conjunto y potenciar los resultados de tu rutina." },
    { q: "¿Sirve si mi cabello no crece hace mucho tiempo?", a: "Por supuesto. Su fórmula activa el folículo capilar incluso en cabellos con crecimiento estancado, devolviendo fuerza y densidad." },
    { q: "¿Hacen envíos a todo Colombia?", a: "Sí. Realizamos envíos seguros a todo el país con opción de pago contra entrega para tu total tranquilidad." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative w-full pt-4 pb-12" style={{ background: "#F8F1E4" }}>
      <div className="mx-auto max-w-md px-5">
        <div className="text-center">
          <span
            className="text-[0.55rem] uppercase tracking-[0.32em]"
            style={{ color: gold }}
          >
            Preguntas frecuentes
          </span>
          <h2
            className="mt-2 font-display text-[1.5rem] leading-tight"
            style={{ color: "#3A2418" }}
          >
            Resolvemos tus dudas
          </h2>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="rounded-2xl bg-white transition-all"
                style={{
                  border: `1px solid ${gold}55`,
                  boxShadow: isOpen
                    ? "0 18px 40px -28px rgba(58,36,24,0.32)"
                    : "0 10px 28px -24px rgba(58,36,24,0.22)",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-display text-[0.95rem] leading-snug"
                    style={{ color: "#3A2418" }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="flex size-7 shrink-0 items-center justify-center rounded-full transition-transform"
                    style={{
                      background: "#FBF6EC",
                      border: `1px solid ${gold}66`,
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <span
                      className="text-base leading-none"
                      style={{ color: gold }}
                    >
                      +
                    </span>
                  </span>
                </button>
                <div
                  className="grid overflow-hidden transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0">
                    <div
                      className="mx-5 border-t pt-3 pb-5 text-[0.8rem] leading-relaxed"
                      style={{
                        borderColor: `${gold}33`,
                        color: "#6B5544",
                      }}
                    >
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

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
function Header({ eyebrow, title, titleClassName }: { eyebrow: string; title: string; titleClassName?: string }) {
  return (
    <div className="text-center">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className={`mt-3 text-balance text-[1.95rem] leading-tight sm:text-4xl ${titleClassName ?? ""}`}>{title}</h2>
      <div className="mt-4 flex justify-center">
        <span className="gold-divider" />
      </div>
    </div>
  );
}

/* ------------------------------ LUXURY CAMPAIGN ------------------------------ */
function LuxuryCampaign() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "#1a0a1e" }}
    >
      {/* Background scene */}
      <img
        src={luxuryBgScene}
        alt=""
        aria-hidden="true"
        width={832}
        height={1472}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "center center", transform: "scale(0.96)" }}
      />
      {/* Cinematic gradient overlay for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(26,10,30,0.55) 0%, rgba(26,10,30,0.05) 30%, rgba(26,10,30,0.05) 65%, rgba(26,10,30,0.75) 100%)",
        }}
      />


      {/* Content */}
      <div className="relative z-10 flex min-h-[570px] flex-col items-center px-7 pb-8 pt-8 text-center sm:min-h-[620px]">
        {/* Headline */}
        <h2
          className="mb-3 max-w-[292px] text-[22px] leading-[1.13]"
          style={{
            fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
            fontWeight: 400,
            color: "#e8c98a",
            letterSpacing: "0.01em",
          }}
        >
          Tu cabello puede
          <br />
          empezar a{" "}
          <span
            style={{
              fontStyle: "italic",
              background:
                "linear-gradient(180deg, #f4d98a 0%, #c79a4a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            cambiar
          </span>
          <br />
          desde hoy
        </h2>

        {/* Body */}
        <p
          className="mb-2 max-w-[270px] text-[11px] leading-[1.5]"
          style={{ color: "#e8c98a", fontFamily: "'Inter', sans-serif" }}
        >
          Miles de mujeres ya están recuperando crecimiento, fuerza y abundancia con Rapunceles.
        </p>


        {/* Spacer where scene shows through */}
        <div className="min-h-[140px] flex-1" />

        {/* CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-7 inline-block max-w-[178px] rounded-full px-5 py-1.5 text-center transition-transform active:scale-[0.98]"
          style={{
            background: "linear-gradient(180deg, #f4d98a 0%, #c79a4a 100%)",
            color: "#1a0a1e",
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 500,
            fontSize: "8.5px",
            letterSpacing: "0.22em",
            boxShadow: "0 3px 12px -7px rgba(199,154,74,0.5)",
            border: "1px solid rgba(245,217,138,0.5)",
          }}
        >
          EMPEZAR MI TRANSFORMACIÓN
        </a>

        {/* Trust badges - gold elegant icons */}
        <ul
          className="mt-1 flex w-full max-w-[300px] items-start justify-center gap-4"
          style={{ color: "#e8c98a" }}

        >
          {[
            {
              label: "Envío gratis\na todo Colombia",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                  <path d="M3 7h11v9H3z" />
                  <path d="M14 10h4l3 3v3h-7z" />
                  <circle cx="7" cy="18" r="1.6" />
                  <circle cx="17.5" cy="18" r="1.6" />
                </svg>
              ),
            },
            {
              label: "Pago contra\nentrega",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                  <rect x="2.5" y="6" width="19" height="12" rx="1.5" />
                  <circle cx="12" cy="12" r="2.6" />
                  <path d="M6 9.5v5M18 9.5v5" />
                </svg>
              ),
            },
            {
              label: "Compra 100%\nsegura",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                  <path d="M12 3l8 3v6c0 4.5-3.4 7.8-8 9-4.6-1.2-8-4.5-8-9V6l8-3z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              ),
            },
          ].map((b) => (
            <li
              key={b.label}
              className="flex flex-1 flex-col items-center gap-1.5 text-center"
            >
              <span
                className="flex items-center justify-center"
                style={{
                  width: 25,
                  height: 25,
                  color: "#e8c98a",
                }}
              >
                {b.icon}
              </span>
              <span
                className="whitespace-pre-line text-[7.5px] uppercase leading-[1.35] tracking-[0.12em]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "rgba(245,236,217,0.85)",
                  fontWeight: 500,
                }}
              >
                {b.label}
              </span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
