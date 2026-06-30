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
  Sprout,
  Shield,
  Flower2,
  Clock,
  Lock,
  ArrowRight,
  Crown,
  Truck,
  Phone,
  HeartHandshake,
  Package,
} from "lucide-react";
const finalCtaModel = { url: "/final-cta-model-v2.jpg" };
const trustBgAsset = { url: "/trust-bg-v2.png" };
import luxuryBgScene from "@/assets/luxury-bg-scene.jpg";
const testimonialsBgNew = { url: "/testimonials-bg-new.png" };
const probFallAsset = { url: "/__l5e/assets-v1/39cbb5a3-cd84-4cfe-8d34-3aca011a3bca/problem-fall-new.jpg" };
const probSlowGrowthAsset = { url: "/__l5e/assets-v1/a87e988a-704c-4668-a3d7-84e7d0e76a27/problem-slow-new.jpg" };
const probRootsAsset = { url: "/card3.png" };
const probVolumeAsset = { url: "/__l5e/assets-v1/d7a60bbe-6ddf-4487-97d2-5b707f3e88d0/problem-volume-new.jpg" };

const heroBanner = { url: "/hero-banner.png" };
const afterBannerBg = { url: "/after-banner-bg.png" };
const signalsBg = { url: "/signals-bg.png" };
const kitIncludesBg = { url: "/kit-includes-bg.png" };
const routineBg = { url: "/routine-bg.png" };


import heroKit from "@/assets/hero-kit.jpg";
import finalTransformationBg from "@/assets/final-transformation-bg.jpg";
const heroKitNew = { url: "/hero-kit-new.png" };
const routineProducts = { url: "/routine-products.png" };
import routineBgV11Asset from "@/assets/routine-bg-v11.png.asset.json";
const routineBgV3 = { url: routineBgV11Asset.url };

const routineSectionBg = { url: "/routine-section-bg.jpg" };
import optionsBgAsset from "@/assets/options-bg.png.asset.json";
const kitBgAsset = optionsBgAsset;
import urgencyBgAsset from "@/assets/urgency-bg-new2.png.asset.json";
const urgencyBgUrl = urgencyBgAsset.url;
const prodShampooAsset = { url: "/product-shampoo-v2.png" };
const prodShampoo = prodShampooAsset.url;
const prodConditionerAsset = { url: "/product-conditioner-new.png" };
const prodConditioner = prodConditionerAsset.url;
const prodTonicAsset = { url: "/product-tonic-new.png" };
const prodTonic = prodTonicAsset.url;
import ingRosemary from "@/assets/ing-rosemary.jpg";
import ingHoney from "@/assets/ing-honey.jpg";
import ingCoconut from "@/assets/ing-coconut.jpg";
import ingBotanical from "@/assets/ing-botanical.jpg";
import result1 from "@/assets/result-1.jpg";
import result2 from "@/assets/result-2.jpg";
import result3 from "@/assets/result-3.jpg";
const beforeAndreaAsset = { url: "/before-andrea.jpg" };
const beforeAndrea = beforeAndreaAsset.url;
const afterAndreaAsset = { url: "/after-andrea.jpg" };
const afterAndrea = afterAndreaAsset.url;
const beforeCamilaAsset = { url: "/before-camila.jpg" };
const beforeCamila = beforeCamilaAsset.url;
const afterCamilaAsset = { url: "/after-camila.jpg" };
const afterCamila = afterCamilaAsset.url;
const beforeThirdAsset = { url: "/before-third.jpg" };
const beforeThird = beforeThirdAsset.url;
const afterThirdAsset = { url: "/after-third.jpg" };
const afterThird = afterThirdAsset.url;
const avatarMariaJoseAsset = { url: "/avatar-maria-jose.jpg" };
const avatarDanielaAsset = { url: "/__l5e/assets-v1/1b00e3ab-616b-414e-8c2c-88a56a937a14/avatar-daniela-new.jpg" };
const avatarLauraAsset = { url: "/__l5e/assets-v1/29c76f46-2d56-4ecc-b2c7-8549af83ee12/avatar-juliana.jpg" };
const avatarValentinaAsset = { url: "/__l5e/assets-v1/94f9e274-8ac5-4c59-96df-331d6c58f7ba/avatar-valentina.jpg" };
const avatarCamilaAsset = { url: "/__l5e/assets-v1/2939f1e5-b934-4572-a5aa-df1e85c7dcb4/avatar-camila-v2.jpg" };
const beforeValentina = "/__l5e/assets-v1/33558e6c-b493-403b-83da-3b400df64d3c/before-valentina.jpg";
const afterValentina = "/__l5e/assets-v1/be842d5f-3f53-4cfd-947a-989f5a950059/after-valentina.jpg";
const customerWhatsappProduct = "/__l5e/assets-v1/cc894fb6-d127-459c-8718-5e22223885de/customer-whatsapp-product.jpg";
const customerChatP1 = "/__l5e/assets-v1/2d16d196-63da-40d3-9c76-8385cc75a97a/customer-chat-p1.jpg";
const customerChatP2 = "/__l5e/assets-v1/c0aeaea7-0186-43a9-84c6-45e5648b26d3/customer-chat-p2.jpg";





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
    links: [
      // Preload LCP candidates (hero scene + hero background) so the browser
      // discovers them before parsing CSS / running JS.
      {
        rel: "preload",
        as: "image",
        href: "/__l5e/assets-v1/807515e2-1ece-4d20-9b18-d9a0200128c9/hero-scene-new.png",
        fetchPriority: "high",
      },
      {
        rel: "preload",
        as: "image",
        href: "/__l5e/assets-v1/0d07d7de-992a-4d0f-9d74-bb9e5925224b/hero-section-bg.png",
      },
      { rel: "preload", as: "image", href: customerWhatsappProduct },
      { rel: "preload", as: "image", href: customerChatP1 },
      { rel: "preload", as: "image", href: customerChatP2 },
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
      <Results />
      <Ingredients />
      <Testimonials />
      
      
      

      <LuxuryCampaign />

      <FinalTransformation />

      <FAQ />

      <Urgency />


      
    </main>
  );
}
/* ------------------------------ HERO ------------------------------ */

function Hero() {
  const GOLD = "#D4A85E";
  const GOLD_SOFT = "#E8C98A";
  const IVORY = "#F4ECDC";
  const LAVENDER = "#CBB8DC";
  const PURPLE_DEEP = "#1A0A2E";

  const heroScene = {
    url: "/__l5e/assets-v1/807515e2-1ece-4d20-9b18-d9a0200128c9/hero-scene-new.png",
  };


  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(20,8,31,0.55) 0%, rgba(20,8,31,0.75) 70%, rgba(20,8,31,0.95) 100%), url('/__l5e/assets-v1/0d07d7de-992a-4d0f-9d74-bb9e5925224b/hero-section-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: IVORY,
      }}
    >
      {/* Hero scene with model + products on marble */}
      <div className="relative w-full">
        <img
          src={heroScene.url}
          alt="Modelo con cabello largo, abundante y saludable junto al kit Rapunceles"
          width={608}
          height={1280}
          fetchPriority="high"
          className="block h-auto w-full object-cover object-center"
        />




        {/* Gold arched bottom frame */}
        <svg
          aria-hidden="true"
          viewBox="0 0 100 14"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[6] h-[12%] w-full"
        >
          <defs>
            <linearGradient id="archGold" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="rgba(212,168,94,0)" />
              <stop offset="20%" stopColor="#D4A85E" />
              <stop offset="50%" stopColor="#F0D38A" />
              <stop offset="80%" stopColor="#D4A85E" />
              <stop offset="100%" stopColor="rgba(212,168,94,0)" />
            </linearGradient>
          </defs>
          <path
            d="M0,14 L0,8 Q50,-6 100,8 L100,14 Z"
            fill={PURPLE_DEEP}
          />
          <path
            d="M0,8 Q50,-6 100,8"
            fill="none"
            stroke="url(#archGold)"
            strokeWidth="0.22"
          />
        </svg>

        {/* Bottom fade into section bg */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-12"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,8,31,0) 0%, rgba(20,8,31,1) 100%)",
          }}
        />
      </div>

      {/* Editorial copy block */}
      <div className="relative z-10 -mt-2 flex flex-col items-center px-5 text-center">
        <h2
          className="text-[13px]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
            color: IVORY,
            letterSpacing: "0.32em",
          }}
        >
          TU CABELLO PUEDE VOLVER A SER
        </h2>

        <h1
          className="mt-1 whitespace-nowrap leading-[1.05]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 500,
            color: GOLD,
            letterSpacing: "0em",
            fontSize: "clamp(17px, 5.2vw, 28px)",
          }}
        >
          FUERTE <span style={{ color: GOLD_SOFT }}>·</span> ABUNDANTE{" "}
          <span style={{ color: GOLD_SOFT }}>·</span> SALUDABLE
        </h1>

        {/* Gold ornamental divider — directly under title, per reference */}
        <div
          className="mt-2 flex items-center justify-center"
          aria-hidden="true"
        >
          <span
            className="h-px w-10"
            style={{ background: `linear-gradient(90deg, transparent, ${GOLD})` }}
          />
          <span
            className="mx-2 inline-block rotate-45"
            style={{ width: 5, height: 5, border: `1px solid ${GOLD}` }}
          />
          <span
            className="h-px w-10"
            style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }}
          />
        </div>

        {/* Social proof — 5 stars */}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex" aria-label="Calificación 5 de 5 estrellas">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                className="size-3.5"
                style={{ color: GOLD, fill: GOLD }}
                strokeWidth={1}
              />
            ))}
          </div>
          <span
            className="text-[11px]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: IVORY,
              letterSpacing: "0.14em",
              opacity: 0.85,
            }}
          >
            +10.000 MUJERES
          </span>
        </div>

        <p
          className="mt-3 max-w-[320px] text-[14px] leading-[1.5]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: IVORY,
            fontWeight: 300,
          }}
        >
          Miles de mujeres están recuperando el crecimiento natural de su cabello con Rapunceles.
        </p>


        {/* CTA */}
        <div className="mt-5 w-full">
          <a
            href="#options"
            className="relative mx-auto flex w-full max-w-[340px] items-center justify-center rounded-full px-5 py-3 text-center"
            style={{
              background: `linear-gradient(180deg, ${GOLD_SOFT} 0%, ${GOLD} 60%, #B98A3F 100%)`,
              color: "#1A0F2E",
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: "0.14em",
              whiteSpace: "nowrap",
              textTransform: "uppercase",
              boxShadow:
                "0 16px 32px -14px rgba(212,168,94,0.55), inset 0 0 0 1px rgba(255,235,180,0.6), inset 0 -2px 6px rgba(120,80,20,0.35)",
            }}
          >
            Quiero empezar mi transformación
          </a>
        </div>







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
      title: "Caída constante",
      desc: "Cada día pierdes más cabello del que deberías.",
    },
    {
      img: probSlowGrowthAsset.url,
      title: "Crecimiento lento",
      desc: "Tu cabello tarda demasiado en crecer o parece detenido.",
    },
    {
      img: probVolumeAsset.url,
      title: "Cabello sin vida",
      desc: "Tu cabello pierde fuerza, densidad y vitalidad natural.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image — untouched */}
      <img
        src={signalsBg.url}
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
            color: "#D4A85E",
          }}
        >
          Reconoce estas señales — tu cabello te está pidiendo ayuda
        </h2>

        {/* Subtitle */}
        <p
          className="mt-3 max-w-xs text-center text-[15px] leading-relaxed"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: BEIGE,
          }}
        >
          {"\n"}
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
        <div className="mt-10 grid w-full max-w-md grid-cols-3 gap-2">
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
        <ul className="mt-2 flex flex-wrap justify-center gap-2.5">
          {benefits.slice(0, 2).map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="group relative flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[0.72rem] tracking-wide text-white/95"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                background:
                  "linear-gradient(135deg, rgba(26,10,46,0.85) 0%, rgba(42,18,68,0.85) 100%)",
                border: "1px solid rgba(201,168,76,0.55)",
                boxShadow:
                  "0 0 0 1px rgba(201,168,76,0.12), 0 0 18px rgba(201,168,76,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(ellipse at top, rgba(245,230,168,0.18) 0%, transparent 70%)",
                }}
              />
              <Icon className="relative size-3.5 text-[var(--gold)]" style={{ filter: "drop-shadow(0 0 4px rgba(201,168,76,0.6))" }} />
              <span className="relative leading-none">{text}</span>
            </li>
          ))}
        </ul>

        <div className="flex-1" />

        {/* Bottom chips - below products */}
        <ul className="mt-20 mb-2 flex flex-wrap justify-center gap-2.5">
          {benefits.slice(2).map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="group relative flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[0.72rem] tracking-wide text-white/95"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                background:
                  "linear-gradient(135deg, rgba(26,10,46,0.85) 0%, rgba(42,18,68,0.85) 100%)",
                border: "1px solid rgba(201,168,76,0.55)",
                boxShadow:
                  "0 0 0 1px rgba(201,168,76,0.12), 0 0 18px rgba(201,168,76,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(ellipse at top, rgba(245,230,168,0.18) 0%, transparent 70%)",
                }}
              />
              <Icon className="relative size-3.5 text-[var(--gold)]" style={{ filter: "drop-shadow(0 0 4px rgba(201,168,76,0.6))" }} />
              <span className="relative leading-none">{text}</span>
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
        <img loading="lazy" decoding="async"
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
              color: "#D4A85E",

            }}
          >
            Tu cabello ya te mostró las señales…
            <br />
            ahora dale lo que necesita”
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
            Desarrollamos un sistema capilar diseñado para ayudar a
            fortalecer, estimular el crecimiento y devolverle vitalidad a tu
            cabello desde la raíz.
          </p>
        </div>

        {/* Premium product benefits ribbon */}
        <div
          className="absolute left-0 right-0"
          style={{ bottom: "2%" }}
        >
          <div className="relative w-full">
            {/* Soft outer golden glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -inset-y-2"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(212,168,94,0.22), transparent 70%)",
                filter: "blur(16px)",
              }}
            />
            <div
              className="animate-gold-aura relative grid w-full grid-cols-3"
              style={{
                background:
                  "linear-gradient(90deg, rgba(20,8,35,0.72), rgba(28,12,45,0.78), rgba(20,8,35,0.72))",
                borderTop: "1px solid rgba(244,222,165,0.9)",
                borderBottom: "1px solid rgba(244,222,165,0.9)",
                backdropFilter: "blur(6px)",
                boxShadow:
                  "0 0 14px rgba(244,222,165,0.55), 0 0 36px rgba(232,201,138,0.4), inset 0 0 18px rgba(244,222,165,0.18)",
              }}
            >
              {[
                {
                  Icon: Sprout,
                  title: "ACTIVA EL CRECIMIENTO",
                  desc: "Estimula la raíz para un cabello más largo.",
                },
                {
                  Icon: Shield,
                  title: "REDUCE LA CAÍDA",
                  desc: "Fortalece el folículo y disminuye la caída.",
                },
                {
                  Icon: Sparkles,
                  title: "FUERZA Y VOLUMEN",
                  desc: "Nutre cada hebra para un cabello más fuerte.",
                },
              ].map(({ Icon, title, desc }, i) => (
                <div
                  key={i}
                  className="relative px-2 py-2 text-left"
                  style={{
                    borderLeft:
                      i === 0
                        ? "none"
                        : "1px solid rgba(244,222,165,0.35)",
                  }}
                >
                  <div className="flex items-center gap-1.5">
                    <span
                      aria-hidden="true"
                      className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{
                        border: "1px solid rgba(212,168,94,0.5)",
                        background:
                          "radial-gradient(circle at 30% 30%, rgba(244,236,220,0.16), rgba(212,168,94,0.05))",
                      }}
                    >
                      <Icon
                        className="size-[10px]"
                        strokeWidth={1}
                        style={{
                          color: "#E8C98A",
                          filter: "drop-shadow(0 0 4px rgba(212,168,94,0.5))",
                        }}
                      />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3
                        className="text-[10px] leading-tight"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          color: "#E8C98A",
                          letterSpacing: "0.12em",
                          fontWeight: 600,
                        }}
                      >
                        {title}
                      </h3>
                      <p
                        className="mt-1 text-[11px] leading-snug"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          color: "#F4ECDC",
                          fontWeight: 300,
                          opacity: 0.92,
                        }}
                      >
                        {desc}
                      </p>


                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}





/* ---------------------------- KIT INCLUDES ---------------------------- */
function KitIncludes() {
  const GOLD = "#C9A24A";
  const GOLD_SOFT = "#E8C98A";
  const IVORY = "#F4ECDC";
  const SERIF = '"Cormorant Garamond", "Playfair Display", serif';

  const LeafIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="size-6">
      <path d="M12 4c-4 0-7 3-7 7 0 1 .2 2 .6 2.8C8 13 10 11 12 8c-2 4-4 6-6.4 6.8.8.4 1.8.6 2.8.6 4 0 7-3 7-7 0-1.5-.4-2.8-1-3.8" />
      <path d="M12 4c1.6 0 3 .6 4 1.6" />
    </svg>
  );
  const DropIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="size-6">
      <path d="M12 3s6 7 6 12a6 6 0 1 1-12 0c0-5 6-12 6-12z" />
      <path d="M10 15c0 1.4 1 2.4 2.4 2.4" />
    </svg>
  );
  const SparkleIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="size-6">
      <path d="M12 3l1.3 4.2L17.5 8.5l-4.2 1.3L12 14l-1.3-4.2L6.5 8.5l4.2-1.3z" />
      <path d="M18 15l.7 1.8 1.8.7-1.8.7L18 20l-.7-1.8-1.8-.7 1.8-.7z" />
      <path d="M5 15l.6 1.4L7 17l-1.4.6L5 19l-.6-1.4L3 17l1.4-.6z" />
    </svg>
  );

  const items = [
    {
      img: prodShampoo,
      Icon: LeafIcon,
      step: "01",
      name: "SHAMPOO",
      tagline: ["LIMPIA", "Y PREPARA"],
      desc: "Limpia profundamente el cuero cabelludo y lo prepara para recibir los nutrientes.",
    },
    {
      img: prodConditioner,
      Icon: SparkleIcon,
      step: "02",
      name: "ACONDICIONADOR",
      tagline: ["NUTRE", "Y FORTALECE"],
      desc: "Nutre profundamente cada hebra, mejora la resistencia y deja tu cabello más fuerte, suave y saludable.",
    },
    {
      img: prodTonic,
      Icon: DropIcon,
      step: "03",
      name: "TÓNICO",
      tagline: ["ESTIMULA", "Y ACTIVA"],
      desc: "Una potente mezcla de ingredientes naturales que activan el crecimiento, fortalece la raíz y recupera una melena más fuerte, abundante y llena de vida.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden" style={{ background: "#1a0a2e" }}>
      <img
        src="/__l5e/assets-v1/b1608d0b-5b7f-49fb-b983-155f592552ee/kit-includes-bg-v2.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(20,8,38,0.55) 0%, rgba(20,8,38,0.45) 50%, rgba(20,8,38,0.65) 100%)" }}
      />
      <div className="relative z-10 mx-auto max-w-md px-5 py-12">
        {/* Header */}
        <div className="text-center">
          <h2
            className="uppercase"
            style={{
              fontFamily: SERIF,
              color: GOLD,
              fontWeight: 400,
              fontSize: "clamp(18px, 5.2vw, 26px)",
              letterSpacing: "0.08em",
              lineHeight: 1.25,
            }}
          >
            Todo lo que tu cabello necesita
            <br />
            <span style={{ letterSpacing: "0.14em" }}>para recuperar su mejor versión</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2" aria-hidden="true">
            <span style={{ height: 1, width: 56, background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
            <span style={{ color: GOLD, fontSize: 10, transform: "rotate(45deg)", display: "inline-block" }}>◇</span>
            <span style={{ height: 1, width: 56, background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
          </div>
        </div>

        {/* Cards */}
        <div className="mt-8 flex flex-col gap-6">
          {items.map((p) => (
            <article
              key={p.step}
              className="relative overflow-hidden"
              style={{
                borderRadius: 18,
                border: `1px solid ${GOLD}55`,
                background:
                  "linear-gradient(160deg, rgba(58,28,86,0.55) 0%, rgba(30,12,52,0.65) 100%)",
                boxShadow: "0 10px 40px -20px rgba(0,0,0,0.6), inset 0 0 30px rgba(201,162,74,0.05)",
              }}
            >
              <div className="grid grid-cols-[42%_minmax(0,1fr)] items-stretch">
                {/* Left — product image */}
                <div className="relative">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="block h-full w-full object-cover"
                    style={{ minHeight: 180 }}
                  />
                </div>

                {/* Vertical gold divider with diamond */}
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute inset-y-4 left-0"
                    style={{
                      width: 1,
                      background: `linear-gradient(180deg, transparent, ${GOLD}80, transparent)`,
                    }}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      color: GOLD,
                      fontSize: 10,
                      background: "#1a0a2e",
                      padding: "0 4px",
                      display: "inline-block",
                      transform: "translate(-50%, -50%) rotate(45deg)",
                    }}
                  >
                    ◇
                  </span>

                  {/* Right content */}
                  <div className="flex flex-col items-start gap-3 px-5 py-5">
                    {/* Icon + Paso */}
                    <div className="flex items-center gap-3">
                      <span
                        className="flex items-center justify-center rounded-full"
                        style={{
                          width: 44,
                          height: 44,
                          border: `1px solid ${GOLD}80`,
                          color: GOLD_SOFT,
                          background:
                            "radial-gradient(circle at 30% 30%, rgba(244,236,220,0.08), rgba(201,162,74,0.02))",
                        }}
                      >
                        <p.Icon />
                      </span>
                      <div className="leading-tight">
                        <div
                          style={{
                            fontFamily: SERIF,
                            color: GOLD,
                            fontSize: 11,
                            letterSpacing: "0.32em",
                            textTransform: "uppercase",
                          }}
                        >
                          Paso
                        </div>
                        <div
                          style={{
                            fontFamily: SERIF,
                            color: GOLD,
                            fontSize: 30,
                            fontWeight: 500,
                            lineHeight: 1,
                            letterSpacing: "0.04em",
                          }}
                        >
                          {p.step}
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: SERIF,
                        color: GOLD,
                        fontSize: 18,
                        fontWeight: 500,
                        letterSpacing: "0.14em",
                        lineHeight: 1.15,
                        marginTop: 4,
                      }}
                    >
                      {p.name}
                      <br />
                      <span style={{ color: IVORY, letterSpacing: "0.12em" }}>
                        {p.tagline[0]}
                        <br />
                        {p.tagline[1]}
                      </span>
                    </h3>

                    {/* Desc */}
                    <p
                      style={{
                        fontFamily: '"Inter", system-ui, sans-serif',
                        color: `${IVORY}cc`,
                        fontSize: 12,
                        lineHeight: 1.55,
                        fontWeight: 300,
                      }}
                    >
                      {p.desc}
                    </p>
                  </div>
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
        src="/sec5-bg.png"
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
  const gold = "#D4A85E";
  const ivory = "#F4E9D4";
  const items = [
    {
      before: beforeValentina,
      after: afterValentina,
      avatar: avatarValentinaAsset.url,
      quote:
        "Empecé a notar mucho menos caída al peinarme y mi cabello se siente mucho más fuerte.",
      name: "Valentina",
      city: "Medellín",
    },
    {
      before: afterCamila,
      after: beforeCamila,
      avatar: avatarDanielaAsset.url,
      quote:
        "Llevaba meses sintiendo mi cabello estancado y después de varias semanas empecé a ver cambios.",
      name: "Daniela",
      city: "Bogotá",
    },
    {
      before: beforeThird,
      after: afterThird,
      avatar: avatarLauraAsset.url,
      quote:
        "Lo que más me sorprendió fue recuperar volumen y sentir mi cabello con más vida.",
      name: "Juliana",
      city: "Cali",
    },
    {
      before: beforeAndrea,
      after: afterAndrea,
      avatar: avatarCamilaAsset.url,
      quote:
        "Mi cabello luce más brillante, suave y con un crecimiento que no había visto en años.",
      name: "Camila",
      city: "Barranquilla",
    },
  ];

  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(20,8,30,0.72) 0%, rgba(28,12,46,0.78) 50%, rgba(20,8,30,0.82) 100%), url("/results-bg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* floating golden particles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {[
          { l: "8%", t: "12%", s: 3, o: 0.55 },
          { l: "22%", t: "38%", s: 2, o: 0.4 },
          { l: "78%", t: "18%", s: 2.5, o: 0.5 },
          { l: "88%", t: "52%", s: 2, o: 0.35 },
          { l: "14%", t: "72%", s: 2.5, o: 0.45 },
          { l: "62%", t: "84%", s: 2, o: 0.4 },
          { l: "48%", t: "8%", s: 1.5, o: 0.3 },
          { l: "34%", t: "92%", s: 2, o: 0.35 },
        ].map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: p.l,
              top: p.t,
              width: p.s,
              height: p.s,
              background: gold,
              opacity: p.o,
              boxShadow: `0 0 ${p.s * 4}px ${gold}`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-md px-6">
        {/* TOP HEADER */}
        <div className="text-center">
          <div
            className="mx-auto mb-5 h-px w-14"
            style={{ background: `linear-gradient(90deg, transparent, ${gold}, transparent)` }}
          />
          <h2
            className="font-display tracking-[0.22em] text-[1.05rem] uppercase"
            style={{ color: gold, fontWeight: 400 }}
          >
            Transformaciones reales
          </h2>
          <div
            className="mx-auto mt-5 h-px w-14"
            style={{ background: `linear-gradient(90deg, transparent, ${gold}, transparent)` }}
          />
          <p
            className="mx-auto mt-6 max-w-[22rem] font-display text-[0.95rem] leading-relaxed"
            style={{ color: ivory, fontWeight: 300 }}
          >
            Mujeres que decidieron darle a su cabello el cuidado que realmente necesitaba.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-12 space-y-10">
          {items.map((r) => (
            <article
              key={r.name}
              className="luxe-card overflow-hidden rounded-[22px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(38,18,58,0.55) 0%, rgba(22,10,36,0.65) 100%)",
                backdropFilter: "blur(14px)",
                border: `1px solid ${gold}44`,
                boxShadow: `0 0 0 1px ${gold}10, 0 18px 50px -24px rgba(0,0,0,0.7), 0 0 40px -18px ${gold}55`,
              }}
            >
              {/* before / after */}
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
                  <span
                    className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-[10px] font-light uppercase tracking-[0.25em] backdrop-blur-sm"
                    style={{ color: gold, border: `1px solid ${gold}55` }}
                  >
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

              {/* testimonial */}
              <div className="px-6 pt-6 pb-7">
                {/* stars */}
                <div
                  className="flex items-center justify-center gap-1.5"
                  style={{ color: gold }}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-[13px] fill-current"
                      strokeWidth={0}
                      style={{ filter: `drop-shadow(0 0 4px ${gold}88)` }}
                    />
                  ))}
                </div>

                {/* quote */}
                <p
                  className="mt-4 text-center font-display italic text-[0.98rem] leading-relaxed"
                  style={{ color: ivory, fontWeight: 300 }}
                >
                  “{r.quote}”
                </p>

                {/* divider */}
                <div
                  className="mx-auto mt-5 h-px w-10"
                  style={{ background: `linear-gradient(90deg, transparent, ${gold}, transparent)` }}
                />

                {/* profile */}
                <div className="mt-5 flex items-center justify-center gap-3">
                  <div
                    className="size-10 shrink-0 overflow-hidden rounded-full"
                    style={{
                      border: `1.5px solid ${gold}`,
                      boxShadow: `0 0 12px -2px ${gold}66`,
                    }}
                  >
                    <img
                      src={r.avatar}
                      alt={`${r.name} - cliente`}
                      width={80}
                      height={80}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="text-left leading-tight">
                    <p
                      className="font-display text-[0.95rem] tracking-[0.04em]"
                      style={{ color: gold, fontWeight: 400 }}
                    >
                      {r.name}
                    </p>
                    <p
                      className="font-display text-[0.72rem] tracking-[0.18em] uppercase"
                      style={{ color: `${ivory}cc`, fontWeight: 300 }}
                    >
                      {r.city}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* SOCIAL PROOF COUNTER */}
        <div className="mt-14 text-center">
          <div
            className="mx-auto mb-5 h-px w-20"
            style={{ background: `linear-gradient(90deg, transparent, ${gold}, transparent)` }}
          />
          <p
            className="font-display text-[1.15rem] leading-snug tracking-[0.04em]"
            style={{ color: gold, fontWeight: 400 }}
          >
            +1500 mujeres ya han confiado en{" "}
            <span style={{ fontStyle: "italic" }}>Rapunceles</span>
          </p>
          <div
            className="mx-auto mt-5 h-px w-20"
            style={{ background: `linear-gradient(90deg, transparent, ${gold}, transparent)` }}
          />
          <p
            className="mx-auto mt-5 max-w-[20rem] font-display text-[0.72rem] leading-relaxed tracking-[0.02em]"
            style={{ color: `${ivory}99`, fontWeight: 300 }}
          >
            Los resultados pueden variar según cada tipo de cabello y constancia en el uso.
          </p>
        </div>
      </div>
    </section>
  );
}


/* ---------------------------- TESTIMONIALS ---------------------------- */
const customerPhotos = [
  "/__l5e/assets-v1/88be4e57-b291-445c-8c38-367b074415ee/customer-photo-1.jpg",
  "/__l5e/assets-v1/fa6f10cd-0de3-41d5-b423-32091f6d2af2/customer-photo-2-v7.jpg",
  "/__l5e/assets-v1/8ddb7d15-ec33-4e37-923a-8f1e2eaf4102/customer-photo-3.jpg",
  "/__l5e/assets-v1/20cbdce7-4327-46d7-ae0a-5daa2741236a/customer-photo-4.jpg",
];

type WhatsAppMsg =
  | { from: "in" | "out"; kind: "text"; text: string; time: string; read?: boolean }
  | {
      from: "in" | "out";
      kind: "image";
      src: string;
      caption?: string;
      time: string;
      read?: boolean;
    }
  | { kind: "divider"; text: string };

type WhatsAppChat = {
  name: string;
  avatar: string;
  messages: WhatsAppMsg[];
  caption: string;
};

const WHATSAPP_CHATS: WhatsAppChat[] = [
  {
    name: "María José G.",
    avatar: avatarMariaJoseAsset.url,
    messages: [
      {
        from: "out",
        kind: "text",
        text: "Tranquila mi reina ☺️",
        time: "3:08 p. m.",
        read: true,
      },
      { kind: "divider", text: "Hoy" },
      {
        from: "in",
        kind: "image",
        src: "/__l5e/assets-v1/cc894fb6-d127-459c-8718-5e22223885de/customer-whatsapp-product.jpg",
        caption: "Muchas gracias a 🙏✨",
        time: "10:17 a. m.",
      },
    ],
    caption: "María José nos escribió apenas recibió su kit.",
  },
  {
    name: "Daniela R.",
    avatar: avatarDanielaAsset.url,
    messages: [
      { kind: "divider", text: "5 mensajes no leídos" },
      {
        from: "in",
        kind: "image",
        src: "/__l5e/assets-v1/2d16d196-63da-40d3-9c76-8385cc75a97a/customer-chat-p1.jpg",
        caption:
          "Hermosa hola cómo estás, qué pena la hora. Acabé de llegar a mi casa y ya me había llegado el pedido",
        time: "11:27 p. m.",
      },
    ],
    caption: "Daniela recibió su kit completo en casa.",
  },
  {
    name: "Camila S.",
    avatar: avatarCamilaAsset.url,
    messages: [
      {
        from: "out",
        kind: "text",
        text: "Hola hermosa buenos días",
        time: "10:50 a. m.",
        read: true,
      },
      {
        from: "out",
        kind: "text",
        text: "Mira tu guía 📦",
        time: "10:50 a. m.",
        read: true,
      },
      {
        from: "in",
        kind: "text",
        text: "Dale reina muchas gracias",
        time: "11:12 a. m.",
      },
      {
        from: "in",
        kind: "image",
        src: "/__l5e/assets-v1/c0aeaea7-0186-43a9-84c6-45e5648b26d3/customer-chat-p2.jpg",
        caption:
          "Muchas gracias reina, ya me llegaron los productos, me pondré juiciosa para tener un cabello hermoso 😍 Gracias por el obsequio, todo muy lindo y los productos huelen riquísimo 😍🙏",
        time: "12:49 p. m.",
      },
    ],
    caption: "Camila estrenó su rutina apenas recibió el pedido.",
  },
  {
    name: "Valentina L.",
    avatar: avatarValentinaAsset.url,
    messages: [
      {
        from: "out",
        kind: "text",
        text: "Hola bella, ¿cómo te va con la rutina? 💜",
        time: "9:14 a. m.",
        read: true,
      },
      { kind: "divider", text: "Hoy" },
      {
        from: "in",
        kind: "text",
        text: "Reinaaa increíble 😭 llevo 3 semanas y siento muchísima menos caída",
        time: "7:42 p. m.",
      },
      {
        from: "in",
        kind: "text",
        text: "Mi cabello está brillando como nunca, mil gracias ✨",
        time: "7:42 p. m.",
      },
    ],
    caption: "Valentina lleva 3 semanas con la rutina Rapunceles.",
  },
];

const WHATSAPP_PARTICLES = [
  { t: "4%", l: "6%", s: 3 },
  { t: "18%", l: "92%", s: 2 },
  { t: "48%", l: "-2%", s: 2 },
  { t: "70%", l: "96%", s: 3 },
  { t: "92%", l: "20%", s: 2 },
];



function Testimonials() {
  const gold = "#D4A85E";
  const goldSoft = "#E8C98A";
  const ivory = "#F4E9D4";
  const CHAT_CARDS_COUNT = 4;
  const [chatIndex, setChatIndex] = useState(0);
  useEffect(() => {
    let id: ReturnType<typeof setInterval> | null = null;
    const start = () => {
      if (id) return;
      id = setInterval(() => {
        setChatIndex((i) => (i + 1) % CHAT_CARDS_COUNT);
      }, 5000);
    };
    const stop = () => {
      if (id) {
        clearInterval(id);
        id = null;
      }
    };
    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };
    start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);




  const conversations = [
    {
      name: "Valentina M.",
      avatar: avatarValentinaAsset.url,
      time: "10:24",
      messages: [
        "Hola, me llegó hoy 😍",
        "Está hermoso el kit, todo súper bien empacado.",
      ],
    },
    {
      name: "Daniela P.",
      avatar: avatarDanielaAsset.url,
      time: "18:47",
      messages: [
        "Llevo unas semanas usándolo y siento muchísimo menos caída ❤️",
      ],
    },
    {
      name: "Camila S.",
      avatar: avatarCamilaAsset.url,
      time: "09:12",
      messages: [
        "Lo que más me gustó es que siento mi cabello mucho más fuerte cuando me peino ✨",
      ],
    },
  ];

  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 80% at 50% 0%, #3d2552 0%, #271638 45%, #1a0f28 100%)",
      }}
    >
      {/* botanical blurred corners */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-20 size-72 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #b89ad8 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-16 size-80 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #d4a85e 0%, transparent 70%)" }}
      />
      {/* gold particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {[
          { t: "8%", l: "12%", s: 3 },
          { t: "22%", l: "82%", s: 2 },
          { t: "44%", l: "8%", s: 2 },
          { t: "58%", l: "90%", s: 3 },
          { t: "72%", l: "18%", s: 2 },
          { t: "88%", l: "70%", s: 3 },
          { t: "32%", l: "55%", s: 2 },
        ].map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              top: p.t,
              left: p.l,
              width: p.s,
              height: p.s,
              background: goldSoft,
              boxShadow: `0 0 ${p.s * 4}px ${goldSoft}`,
              opacity: 0.7,
            }}
          />
        ))}
      </div>
      {/* gold light streak */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/3 h-px opacity-30"
        style={{
          background: `linear-gradient(90deg, transparent, ${gold}, transparent)`,
        }}
      />

      <div className="relative mx-auto max-w-md px-6">
        {/* HEADER */}
        <div className="text-center">
          <h2
            className="mt-5 font-display text-[1.95rem] leading-[1.15]"
            style={{ color: gold, letterSpacing: "0.01em" }}
          >
            Miles de mujeres
            <br />
            <span style={{ color: goldSoft, fontStyle: "italic" }}>
              ya están empezando
            </span>
            <br />
            su transformación
          </h2>
          <div
            className="mx-auto mt-5 h-px w-16"
            style={{ background: `linear-gradient(90deg, transparent, ${gold}, transparent)` }}
          />
          <p
            className="mx-auto mt-5 max-w-sm text-[0.92rem] leading-relaxed"
            style={{ color: ivory, opacity: 0.85 }}
          >
            Cada semana más mujeres deciden darle a su cabello el cuidado que realmente
            necesita.
          </p>
        </div>


        {/* SECTION 2 — FEATURED WHATSAPP TESTIMONIAL CARDS */}
        {(() => {
          const chat = WHATSAPP_CHATS[chatIndex];



          return (
            <div className="mt-14">
              <div className="px-1">
                <div key={chatIndex} className="relative animate-in fade-in slide-in-from-right-3 duration-500">

                  {/* floating gold particles around card */}
                  <div aria-hidden className="pointer-events-none absolute -inset-6">
                    {WHATSAPP_PARTICLES.map((p, i) => (

                      <span
                        key={i}
                        className="absolute rounded-full"
                        style={{
                          top: p.t,
                          left: p.l,
                          width: p.s,
                          height: p.s,
                          background: goldSoft,
                          boxShadow: `0 0 ${p.s * 5}px ${goldSoft}`,
                          opacity: 0.85,
                        }}
                      />
                    ))}
                  </div>

                  {/* card */}
                  <div
                    className="relative overflow-hidden rounded-[28px] backdrop-blur-xl"
                    style={{
                      background:
                        "linear-gradient(170deg, rgba(74,53,98,0.55) 0%, rgba(38,22,56,0.65) 60%, rgba(26,15,40,0.75) 100%)",
                      border: `1px solid ${gold}66`,
                      boxShadow: `0 0 0 1px ${gold}22, 0 20px 60px -20px rgba(0,0,0,0.7), 0 0 40px -10px ${gold}55, inset 0 1px 0 ${goldSoft}33`,
                    }}
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-[28px]"
                      style={{
                        background: `linear-gradient(135deg, ${gold}22, transparent 40%, transparent 60%, ${gold}22)`,
                      }}
                    />

                    {/* top label */}
                    <div className="relative flex items-center justify-center gap-2 px-6 pt-5">
                      <span
                        className="h-px w-8"
                        style={{ background: `linear-gradient(90deg, transparent, ${gold})` }}
                      />
                      <span
                        className="text-[0.6rem] uppercase tracking-[0.35em]"
                        style={{ color: gold }}
                      >
                        Testimonio verificado
                      </span>
                      <span
                        className="h-px w-8"
                        style={{ background: `linear-gradient(90deg, ${gold}, transparent)` }}
                      />
                    </div>

                    {/* WHATSAPP CHAT MOCK */}
                    <div className="relative mt-5 px-4 pb-5">
                      <div
                        className="overflow-hidden rounded-2xl"
                        style={{
                          background: "#0B141A",
                          border: `1px solid ${gold}33`,
                          boxShadow: `0 10px 30px -15px rgba(0,0,0,0.7)`,
                        }}
                      >
                        {/* WhatsApp header */}
                        <div
                          className="flex items-center gap-3 px-3 py-2.5"
                          style={{
                            background: "#1F2C33",
                            borderBottom: "1px solid rgba(255,255,255,0.04)",
                          }}
                        >
                          <svg
                            width="10"
                            height="14"
                            viewBox="0 0 10 14"
                            fill="none"
                            className="shrink-0"
                          >
                            <path
                              d="M8 1L2 7l6 6"
                              stroke="#00A884"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <img
                            src={chat.avatar}
                            alt=""
                            className="size-9 rounded-full object-cover"
                            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                          />
                          <div className="min-w-0 flex-1">
                            <div
                              className="truncate text-[0.92rem] font-medium leading-tight"
                              style={{
                                color: "#E9EDEF",
                                fontFamily: "system-ui, -apple-system, sans-serif",
                              }}
                            >
                                {chat.name}
                            </div>
                            <div
                              className="text-[0.7rem] leading-tight"
                              style={{ color: "#8696A0" }}
                            >
                              en línea
                            </div>
                          </div>
                          <div className="flex items-center gap-3 text-[#AEBAC1]">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                              <path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z" />
                            </svg>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                              <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1 1 0 0 0-1.02.24l-2.2 2.2a15.05 15.05 0 0 1-6.59-6.59l2.2-2.2a1 1 0 0 0 .24-1.02A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1c0 9.39 7.61 17 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1z" />
                            </svg>
                          </div>
                        </div>

                        {/* chat body */}
                        <div className="relative space-y-2.5 px-3 py-3" style={{ background: "#0B141A" }}>
                          {chat.messages.map((m, mi) => {
                            if (m.kind === "divider") {
                              return (
                                <div key={mi} className="flex justify-center py-1">
                                  <span
                                    className="rounded-md px-2.5 py-1 text-[0.65rem]"
                                    style={{ background: "#1F2C33", color: "#AEBAC1" }}
                                  >
                                    {m.text}
                                  </span>
                                </div>
                              );
                            }
                            const isOut = m.from === "out";
                            const bubbleBg = isOut ? "#005C4B" : "#1F2C33";
                            const align = isOut ? "justify-end" : "justify-start";
                            const corner = isOut ? "rounded-tr-sm" : "rounded-tl-sm";
                            const timeColor = isOut ? "#AEBAC1" : "#8696A0";
                            return (
                              <div key={mi} className={`flex ${align}`}>
                                <div
                                  className={`relative max-w-[82%] overflow-hidden rounded-lg ${corner}`}
                                  style={{
                                    background: bubbleBg,
                                    boxShadow: "0 1px 0.5px rgba(0,0,0,0.13)",
                                  }}
                                >
                                  {m.kind === "image" && (
                                    <div className="p-1">
                                      <div className="overflow-hidden rounded-md">
                                        <img
                                          src={m.src}
                                          alt=""
                                          decoding="async"
                                          className="block aspect-[4/5] w-full object-cover"
                                        />
                                      </div>
                                    </div>
                                  )}
                                  <div
                                    className={
                                      m.kind === "image" ? "px-2.5 pb-1.5 pt-1" : "px-2.5 py-1.5"
                                    }
                                  >
                                    {(m.kind === "text" || (m.kind === "image" && m.caption)) && (
                                      <p
                                        className="text-[0.88rem] leading-snug"
                                        style={{
                                          color: "#E9EDEF",
                                          fontFamily: "system-ui, -apple-system, sans-serif",
                                        }}
                                      >
                                        {m.kind === "text" ? m.text : m.caption}
                                      </p>
                                    )}
                                    <div className="mt-0.5 flex items-center justify-end gap-1">
                                      <span className="text-[0.62rem]" style={{ color: timeColor }}>
                                        {m.time}
                                      </span>
                                      {isOut && m.read && (
                                        <svg
                                          width="14"
                                          height="10"
                                          viewBox="0 0 16 11"
                                          fill="none"
                                          aria-hidden
                                        >
                                          <path
                                            d="M11.1 0.5L4.6 7 1.9 4.3l-.7.7L4.6 8.4 11.8 1.2zM15 0.5L8.5 7 7.7 6.2l-.7.7.8.8L15.7 1.2z"
                                            fill="#53BDEB"
                                          />
                                        </svg>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* caption under chat */}
                      <p
                        className="mt-4 text-center text-[0.78rem] leading-relaxed"
                        style={{ color: ivory, opacity: 0.75 }}
                      >
                        {chat.caption}
                        <br />
                        <span style={{ color: goldSoft, fontStyle: "italic" }}>
                          Una clienta real. Una entrega real.
                        </span>
                      </p>
                    </div>
                  </div>
                      </div>
                    </div>
              {/* dot indicators */}
              <div className="mt-6 flex items-center justify-center gap-2">
                {WHATSAPP_CHATS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Ver testimonio ${i + 1}`}
                    onClick={() => setChatIndex(i)}
                    className="h-1.5 rounded-full transition-all duration-500"
                    style={{
                      width: i === chatIndex ? 24 : 8,
                      background: i === chatIndex ? gold : `${gold}55`,
                      boxShadow: i === chatIndex ? `0 0 10px ${gold}88` : "none",
                    }}
                  />
                ))}
              </div>
            </div>
          );
        })()}




        {/* SECTION 3 — TRUST COUNTER */}
        <div className="mt-6 text-center">
          <div
            className="mx-auto h-px w-24"
            style={{ background: `linear-gradient(90deg, transparent, ${gold}, transparent)` }}
          />

          {/* Stacked avatars */}
          <div className="mt-6 flex items-center justify-center">
            <div className="flex -space-x-2.5">
              {[
                "https://i.pravatar.cc/64?img=47",
                "https://i.pravatar.cc/64?img=45",
                "https://i.pravatar.cc/64?img=49",
                "https://i.pravatar.cc/64?img=32",
                "https://i.pravatar.cc/64?img=44",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="h-7 w-7 rounded-full object-cover"
                  style={{
                    border: `1.5px solid ${gold}`,
                    boxShadow: "0 0 10px rgba(201,168,76,0.35)",
                  }}
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          {/* Stars + rating */}
          <div className="mt-3 flex items-center justify-center gap-1.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                className="h-3.5 w-3.5"
                style={{ color: gold, fill: gold, filter: "drop-shadow(0 0 4px rgba(201,168,76,0.5))" }}
                strokeWidth={1}
              />
            ))}
            <span
              className="ml-1.5 text-[0.78rem] tracking-wide"
              style={{ color: goldSoft, fontFamily: "'Cormorant Garamond', serif" }}
            >
              4.9/5
            </span>
          </div>

          <h3
            className="mt-4 font-display text-[2.1rem] leading-[1.1]"
            style={{ color: gold }}
          >
            +1.500 mujeres
          </h3>
          <p
            className="mt-2 font-display text-[1.1rem] italic"
            style={{ color: goldSoft, opacity: 0.95 }}
          >
            ya han confiado en Rapunceles
          </p>

          {/* Verified badge */}
          <div className="mt-4 flex items-center justify-center gap-1.5">
            <span
              aria-hidden="true"
              className="flex h-4 w-4 items-center justify-center rounded-full"
              style={{
                background: `linear-gradient(135deg, ${gold}, #E8C98A)`,
                boxShadow: "0 0 8px rgba(201,168,76,0.55)",
              }}
            >
              <Check className="h-2.5 w-2.5" strokeWidth={3} style={{ color: "#1a0a2e" }} />
            </span>
            <span
              className="text-[0.7rem] uppercase tracking-[0.18em]"
              style={{ color: ivory, opacity: 0.85, fontFamily: "'Cormorant Garamond', serif" }}
            >
              Reseñas verificadas
            </span>
          </div>

          <div
            className="mx-auto mt-6 h-px w-24"
            style={{ background: `linear-gradient(90deg, transparent, ${gold}, transparent)` }}
          />
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
        <h2
          className="mt-5 text-3xl"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "#D4A85E" }}
        >
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
    <section
      id="options"
      className="py-3"
      style={{
        backgroundImage:
          `linear-gradient(to bottom, rgba(10,4,20,0.78), rgba(10,4,20,0.85)), url('${kitBgAsset.url}')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundColor: "#17091f",
      }}
    >

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
                  <img loading="lazy" decoding="async"
                    src={heroKitNew.url}
                    alt={`Kit Rapunceles ${v.label}`}
                    className="mt-2 h-60 w-60 object-contain sm:h-64 sm:w-64"
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
  const gold = "#E8C98A";
  const goldDeep = "#C9A35A";

  const Ornament = () => (
    <div className="flex items-center justify-center gap-2" aria-hidden>
      <span style={{ width: 28, height: 1, background: `linear-gradient(90deg, transparent, ${gold})` }} />
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill={gold} opacity="0.9" />
      </svg>
      <span style={{ width: 28, height: 1, background: `linear-gradient(90deg, ${gold}, transparent)` }} />
    </div>
  );
  const trust = [
    { Icon: Truck, title: "ENVÍO GRATIS", sub: "a toda Colombia" },
    { Icon: HeartHandshake, title: "PAGO CONTRA ENTREGA", sub: "Paga cuando recibas tu pedido" },
    { Icon: ShieldCheck, title: "COMPRA 100% SEGURA", sub: "Protegemos tu información" },
  ];
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: "#2A0E3A",
        backgroundImage: `linear-gradient(180deg, rgba(30,8,45,0.55) 0%, rgba(30,8,45,0.25) 40%, rgba(30,8,45,0.95) 100%), url(${urgencyBgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Cinematic warm light from upper-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-[420px] w-[420px]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(244,222,165,0.32), rgba(244,222,165,0.08) 45%, rgba(244,222,165,0) 70%)",
          filter: "blur(8px)",
        }}
      />
      {/* Soft golden streak */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-1/2 h-[260px] w-[420px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(244,222,165,0.22), rgba(244,222,165,0) 70%)",
          filter: "blur(6px)",
        }}
      />
      {/* Floating golden particles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {[
          { l: "8%",  t: "18%", s: 3, d: "0s",   o: 0.85 },
          { l: "22%", t: "62%", s: 2, d: "1.2s", o: 0.7 },
          { l: "38%", t: "32%", s: 2, d: "2.4s", o: 0.6 },
          { l: "55%", t: "78%", s: 3, d: "0.6s", o: 0.9 },
          { l: "70%", t: "22%", s: 2, d: "3.1s", o: 0.7 },
          { l: "82%", t: "55%", s: 3, d: "1.8s", o: 0.85 },
          { l: "14%", t: "88%", s: 2, d: "4.0s", o: 0.6 },
          { l: "62%", t: "44%", s: 2, d: "2.0s", o: 0.55 },
          { l: "90%", t: "82%", s: 2, d: "3.6s", o: 0.7 },
          { l: "30%", t: "12%", s: 2, d: "5.0s", o: 0.55 },
        ].map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full animate-particle-float"
            style={{
              left: p.l,
              top: p.t,
              width: p.s,
              height: p.s,
              background: "#F4E2A5",
              boxShadow: "0 0 6px rgba(244,222,165,0.9)",
              opacity: p.o,
              animationDelay: p.d,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-md px-5 pt-6 pb-10">

        {/* Split-screen luxury layout */}
        <div className="grid grid-cols-[40%_minmax(0,1fr)] gap-3">

          {/* ============== LEFT: empty luxury showcase ============== */}
          <div className="relative flex flex-col items-center">
            {/* Tall arched frame */}
            <div
              className="relative w-full overflow-hidden"
              style={{
                height: 380,
                borderTopLeftRadius: "9999px",
                borderTopRightRadius: "9999px",
                borderBottomLeftRadius: "14px",
                borderBottomRightRadius: "14px",
                border: `1px solid ${gold}88`,
                background:
                  "linear-gradient(180deg, rgba(40,18,62,0.55) 0%, rgba(28,10,46,0.85) 100%)",
                boxShadow:
                  `0 0 24px ${gold}33, inset 0 0 30px rgba(244,222,165,0.08)`,
              }}
            >
              {/* Inner halo light */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[42%] h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full animate-halo-breathe"
                style={{
                  background:
                    "radial-gradient(circle, rgba(244,222,165,0.45) 0%, rgba(232,201,138,0.18) 40%, rgba(232,201,138,0) 75%)",
                  filter: "blur(2px)",
                }}
              />
              {/* Diagonal golden light reflection */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 animate-shine-sweep"
                style={{
                  background:
                    "linear-gradient(115deg, transparent 30%, rgba(244,222,165,0.22) 50%, transparent 70%)",
                }}
              />
              {/* Inner thin gold trace */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-[6px]"
                style={{
                  borderTopLeftRadius: "9999px",
                  borderTopRightRadius: "9999px",
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                  border: `1px solid ${gold}40`,
                }}
              />

              {/* Botanical decorations (lavender + rosemary, CSS only) */}
              <svg
                aria-hidden="true"
                viewBox="0 0 60 200"
                className="pointer-events-none absolute -left-2 top-6 h-[150px] w-[44px] opacity-80"
                fill="none"
              >
                <path d="M30 10 C 22 50 18 110 26 190" stroke="#A8B89A" strokeWidth="1.2" strokeLinecap="round" />
                {[30, 55, 80, 105, 130, 155].map((y, i) => (
                  <g key={i}>
                    <path d={`M${26 - i % 2 * 2} ${y} q -10 -6 -14 -14`} stroke="#A8B89A" strokeWidth="1" />
                    <path d={`M${28 + i % 2 * 2} ${y + 8} q 10 -6 14 -14`} stroke="#A8B89A" strokeWidth="1" />
                  </g>
                ))}
                {[40, 70, 100].map((y, i) => (
                  <circle key={i} cx={20 + (i % 2) * 8} cy={y} r="2.2" fill="#C9B5E0" opacity="0.85" />
                ))}
              </svg>
              <svg
                aria-hidden="true"
                viewBox="0 0 60 200"
                className="pointer-events-none absolute -right-2 top-10 h-[140px] w-[42px] opacity-80"
                fill="none"
              >
                <path d="M30 10 C 38 50 42 110 34 190" stroke="#A8B89A" strokeWidth="1.2" strokeLinecap="round" />
                {[40, 70, 100, 130].map((y, i) => (
                  <circle key={i} cx={36 - (i % 2) * 6} cy={y} r="2.4" fill="#C9B5E0" opacity="0.9" />
                ))}
              </svg>

              {/* Product image — reemplázame seleccionándome en el preview */}
              <img
                src="/__l5e/assets-v1/2b72b0c3-9306-47ae-a6f8-5807e25ab7e4/cta-left-product.png"
                alt="Producto Rapunceles"
                className="absolute inset-0 z-10 h-full w-full object-contain p-3"
              />

            </div>

            {/* Marble podium */}
            <div
              className="relative -mt-2 w-[112%] overflow-hidden rounded-md"
              style={{
                height: 28,
                background:
                  "linear-gradient(180deg, #2E1A3F 0%, #1B0E2A 100%), repeating-linear-gradient(115deg, rgba(244,222,165,0.06) 0 6px, transparent 6px 14px)",
                backgroundBlendMode: "overlay",
                border: `1px solid ${gold}55`,
                boxShadow: `0 10px 22px -8px ${goldDeep}80, inset 0 1px 0 rgba(244,222,165,0.25)`,
              }}
            >
              {/* marble veins */}
              <span
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(110deg, transparent 20%, rgba(244,222,165,0.18) 32%, transparent 45%, rgba(244,222,165,0.10) 60%, transparent 78%)",
                }}
              />
              {/* reflection */}
              <span
                aria-hidden
                className="absolute inset-x-2 top-0 h-[40%] rounded-full"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0))",
                  filter: "blur(2px)",
                }}
              />
            </div>
          </div>

          {/* ============== RIGHT: conversion content ============== */}
          <div className="flex flex-col text-center">
            {/* Eyebrow */}
            <span
              className="text-[0.78rem] uppercase"
              style={{ color: gold, letterSpacing: "0.28em", fontWeight: 600 }}
            >
              Rapunceles · Édition
            </span>

            {/* Headline */}
            <h2
              className="mt-1.5 text-[1.45rem] leading-[1.12] uppercase"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#F4ECDC",
                letterSpacing: "0.04em",
                fontWeight: 400,
              }}
            >
              Tu transformación
              <br />
              empieza con la
            </h2>
            <h3
              className="mt-1 text-[1.9rem] leading-[1.02] uppercase"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: gold,
                letterSpacing: "0.02em",
                fontWeight: 500,
              }}
            >
              Decisión que
              <br />
              tomes hoy
            </h3>

            <div className="mt-2"><Ornament /></div>

            <p
              className="mx-auto mt-2 text-[1rem] leading-[1.5]"
              style={{ color: "#E8DCC8", fontFamily: "'Cormorant Garamond', serif" }}
            >
              Miles de mujeres ya comenzaron a recuperar la fuerza, el
              crecimiento y la belleza natural de su cabello.
            </p>
            <p
              className="mt-1 text-[1.05rem]"
              style={{ color: gold, fontWeight: 500, letterSpacing: "0.04em" }}
            >
              Hoy puede ser tu momento.
            </p>

            {/* Price glass card */}
            <div
              className="relative mt-3 overflow-hidden rounded-lg px-2 py-2 backdrop-blur-md"
              style={{
                background:
                  "linear-gradient(180deg, rgba(20,8,35,0.55), rgba(28,12,45,0.7))",
                border: `1px solid ${gold}66`,
                boxShadow: `0 0 14px ${gold}22, inset 0 0 14px rgba(244,222,165,0.06)`,
              }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 animate-shine-sweep"
                style={{ background: "linear-gradient(90deg, transparent, rgba(244,222,165,0.18), transparent)" }}
              />
              <div className="flex items-center justify-between gap-1.5">
                <div className="flex flex-col items-center flex-1">
                  <span
                    className="text-[0.72rem] uppercase"
                    style={{ color: "#E8DCC8", letterSpacing: "0.18em", fontWeight: 500 }}
                  >
                    Valor regular
                  </span>
                  <span
                    className="mt-0.5 text-[1.15rem] line-through"
                    style={{ color: "#9A8AA8", fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
                  >
                    $200.000
                  </span>
                </div>
                <span aria-hidden className="h-7 w-px" style={{ background: `linear-gradient(180deg, transparent, ${gold}80, transparent)` }} />
                <div className="flex flex-col items-center flex-1">
                  <span
                    className="text-[0.78rem] uppercase"
                    style={{ color: gold, letterSpacing: "0.2em", fontWeight: 700 }}
                  >
                    Hoy
                  </span>
                  <span
                    className="mt-0.5 text-[1.7rem] leading-none"
                    style={{ color: gold, fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                  >
                    $179.900
                  </span>
                </div>
              </div>
              <div
                className="mt-1.5 flex w-full items-center justify-center gap-1 rounded-full px-1.5 py-1"
                style={{
                  background: "rgba(40,18,60,0.75)",
                  border: `1px solid ${gold}66`,
                  boxShadow: `0 0 8px ${gold}33`,
                }}
              >
                <Clock size={8} strokeWidth={1.75} style={{ color: gold }} />
                <span
                  className="text-[0.75rem] uppercase"
                  style={{ color: "#F4ECDC", letterSpacing: "0.14em", fontWeight: 600 }}
                >
                  Acceso limitado
                </span>
              </div>
            </div>

            {/* Producción limitada */}
            <div
              className="relative mt-2 overflow-hidden rounded-lg px-2 py-2 text-left backdrop-blur-md"
              style={{
                background:
                  "linear-gradient(180deg, rgba(20,8,35,0.55), rgba(28,12,45,0.7))",
                border: `1px solid ${gold}66`,
                boxShadow: `0 0 10px ${gold}1f, inset 0 0 12px rgba(244,222,165,0.05)`,
              }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 animate-shine-sweep"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(244,222,165,0.14), transparent)",
                  animationDelay: "1.2s",
                }}
              />
              <div className="flex items-start gap-1.5">
                <div
                  className="flex size-5 shrink-0 items-center justify-center rounded-full"
                  style={{ border: `1px solid ${gold}88`, background: "rgba(40,18,60,0.6)" }}
                >
                  <Leaf size={9} strokeWidth={1.5} style={{ color: gold }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-[0.78rem] uppercase"
                    style={{ color: gold, letterSpacing: "0.12em", fontWeight: 700 }}
                  >
                    Producción limitada
                  </p>
                  <p
                    className="mt-0.5 text-[0.78rem] leading-[1.35]"
                    style={{ color: "#E8DCC8" }}
                  >
                    Lotes pequeños con ingredientes botánicos seleccionados.
                  </p>
                </div>
              </div>
              <div
                className="mt-1.5 mx-auto flex w-full items-center justify-center rounded-full px-1.5 py-1 text-center"
                style={{
                  border: `1px solid ${gold}88`,
                  background: "rgba(40,18,60,0.6)",
                }}
              >
                <span className="text-[0.72rem] uppercase" style={{ color: gold, letterSpacing: "0.1em", fontWeight: 700 }}>
                  Solo unidades · esta semana
                </span>
              </div>
            </div>

            {/* Trust row */}
            <div
              className="mt-2 rounded-lg px-1 py-1.5"
              style={{
                background:
                  "linear-gradient(180deg, rgba(20,8,35,0.78), rgba(28,12,45,0.85))",
                border: `1px solid ${gold}55`,
              }}
            >
              <div className="grid grid-cols-3 gap-0.5">
                {trust.map(({ Icon, title }, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <div
                      className="flex size-5 items-center justify-center rounded-full"
                      style={{ border: `1px solid ${gold}88`, background: "rgba(40,18,60,0.6)" }}
                    >
                      <Icon size={9} strokeWidth={1.5} style={{ color: gold }} />
                    </div>
                    <p
                      className="mt-0.5 text-[0.65rem] uppercase leading-tight"
                      style={{ color: "#F4ECDC", letterSpacing: "0.06em", fontWeight: 700 }}
                    >
                      {title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ============== FULL-WIDTH CTA ============== */}
        <a
          href="#kit"
          className="relative mt-5 flex w-full items-center justify-between gap-2 overflow-hidden rounded-full pl-3 pr-2 py-3 animate-progress-glow"
          style={{
            background: `linear-gradient(180deg, #F1D58A 0%, ${gold} 50%, ${goldDeep} 100%)`,
            color: "#2A0E3A",
            boxShadow:
              `0 12px 28px -10px ${goldDeep}, inset 0 1px 0 rgba(255,255,255,0.55), inset 0 -1px 0 rgba(0,0,0,0.18)`,
            border: `1px solid ${goldDeep}`,
            fontFamily: "'Cormorant Garamond', serif",
            letterSpacing: "0.08em",
          }}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 animate-shine-sweep"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)" }}
          />
          <span
            className="relative flex size-7 items-center justify-center rounded-full"
            style={{ background: "rgba(42,14,58,0.92)" }}
          >
            <Lock size={12} strokeWidth={2} style={{ color: gold }} />
          </span>
          <span className="relative flex-1 text-center text-[0.85rem] uppercase leading-[1.15]" style={{ fontWeight: 700 }}>
            Quiero empezar
            <br />
            <span className="text-[0.7rem]" style={{ fontWeight: 500 }}>mi transformación</span>
          </span>
          <ArrowRight size={18} strokeWidth={2.25} className="relative" />
        </a>

        <div className="mt-3 flex items-center justify-center gap-2">
          <ShieldCheck size={11} strokeWidth={1.75} style={{ color: gold }} />
          <span
            className="text-[0.55rem] uppercase"
            style={{ color: "#E8DCC8", letterSpacing: "0.22em", fontWeight: 600 }}
          >
            Compra segura y garantizada
          </span>
        </div>

        <div className="mt-4"><Ornament /></div>
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
          className="mt-4 text-[1.65rem] leading-[1.15]"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "#D4A85E" }}
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
            className="-mt-2 text-[1.7rem] leading-[1.15]"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "#D4A85E" }}
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
              className="flex flex-col items-center justify-start gap-1.5 rounded-xl px-1 py-2.5 text-center backdrop-blur-sm"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: `1px solid ${gold}55`,
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
                style={{ color: "#FFFFFF" }}
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
        backgroundImage: `linear-gradient(180deg, rgba(42,18,55,0.55) 0%, rgba(42,18,55,0.75) 55%, rgba(27,10,38,0.95) 100%), url(${finalTransformationBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto flex max-w-md flex-col">

        {/* Headline */}
        <div className="px-6 pt-4 text-center">
          <h2
            className="text-[1.55rem] leading-[1.15] text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
          >
            Recuperar tu cabello también es{" "}
            <span
              className="italic"
              style={{ color: gold, fontWeight: 500 }}
            >
              recuperar tu confianza.
            </span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-px w-12" style={{ background: gold, opacity: 0.7 }} />
            <Leaf className="size-3 rotate-45" style={{ color: gold }} strokeWidth={1.3} />
            <span className="h-px w-12" style={{ background: gold, opacity: 0.7 }} />
          </div>
        </div>

        {/* Body copy */}
        <div className="px-7 pt-5 text-center">
          <p className="text-[0.82rem] leading-[1.55] text-white/85">
            No se trata solamente de crecer cabello.
          </p>
          <p className="mt-3 text-[0.82rem] leading-[1.55] text-white/85">
            Se trata de volver a sentirte{" "}
            <span style={{ color: gold, fontWeight: 500 }}>segura</span>, verte al espejo con{" "}
            <span style={{ color: gold, fontWeight: 500 }}>orgullo</span> y disfrutar nuevamente tu{" "}
            <span style={{ color: gold, fontWeight: 500 }}>belleza natural</span>.
          </p>
        </div>


        {/* CTA */}
        <div className="flex justify-center px-5 pb-14 pt-6">
          <button
            type="button"
            className="flex w-1/2 items-center justify-center gap-2 rounded-full px-3 py-3 font-display text-[0.62rem] tracking-[0.12em]"
            style={{
              background:
                "linear-gradient(180deg, #E5C079 0%, #C9A35A 50%, #A87E33 100%)",
              color: purple,
              boxShadow:
                "0 0 0 1px rgba(232,201,138,0.55), 0 18px 40px -16px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.4)",
            }}
          >
            QUIERO EMPEZAR MI TRANSFORMACIÓN
            <ArrowRight className="size-4" strokeWidth={1.8} />
          </button>
        </div>
      </div>

      {/* Bottom wave transition */}
      <svg
        viewBox="0 0 390 40"
        preserveAspectRatio="none"
        className="block h-8 w-full"
      >
        <path d="M0,0 Q97.5,40 195,20 T390,0 L390,40 L0,40 Z" fill="#F8F1E4" />
      </svg>
    </section>
  );
}

function FAQ() {
  const gold = "#D4A85E";
  const goldSoft = "#E8C98A";
  const faqs = [
    { q: "¿En cuánto tiempo veré resultados?", a: "Muchas mujeres comienzan a notar cambios progresivos en las primeras semanas de uso constante." },
    { q: "¿Funciona para cualquier tipo de cabello?", a: "Sí. Nuestra fórmula está diseñada para adaptarse a diferentes tipos de cabello y necesidades capilares." },
    { q: "¿Debo usar los tres productos juntos?", a: "Sí. El sistema completo fue diseñado para trabajar en conjunto y potenciar mejores resultados." },
    { q: "¿Hacen envíos a toda Colombia?", a: "Sí. Realizamos envíos nacionales con cobertura en todo el país." },
    { q: "¿Puedo pagar contra entrega?", a: "Sí. Puedes recibir tu pedido y pagar al momento de recibirlo." },
    { q: "¿Está elaborado con ingredientes naturales?", a: "Sí. Nuestra fórmula combina ingredientes botánicos cuidadosamente seleccionados." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  const trust = [
    { icon: Truck, label: "Envío gratis" },
    { icon: Package, label: "Pago contra entrega" },
    { icon: ShieldCheck, label: "Compra 100% segura" },
  ];
  return (
    <section
      className="relative w-full overflow-hidden pb-16 pt-14"
      style={{
        background:
          "radial-gradient(140% 90% at 50% 0%, #3B1A4D 0%, #2A1237 55%, #1B0A26 100%)",
      }}
    >
      {/* Soft golden light streaks */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 30% at 20% 15%, rgba(232,201,138,0.18) 0%, transparent 70%), radial-gradient(50% 25% at 85% 70%, rgba(212,168,94,0.14) 0%, transparent 70%)",
        }}
      />
      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {[
          { l: "12%", t: "18%", s: 3, d: "0s" },
          { l: "78%", t: "12%", s: 2, d: "1.2s" },
          { l: "30%", t: "62%", s: 2, d: "2.4s" },
          { l: "65%", t: "48%", s: 3, d: "0.8s" },
          { l: "88%", t: "82%", s: 2, d: "1.8s" },
          { l: "18%", t: "88%", s: 2, d: "3.2s" },
        ].map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: p.l,
              top: p.t,
              width: p.s,
              height: p.s,
              background: goldSoft,
              boxShadow: `0 0 ${p.s * 3}px ${goldSoft}`,
              opacity: 0.55,
              animation: `faq-float 6s ease-in-out ${p.d} infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes faq-float {
          0%,100% { transform: translateY(0); opacity: 0.35; }
          50% { transform: translateY(-10px); opacity: 0.75; }
        }
        @keyframes faq-shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>

      <div className="relative mx-auto max-w-md px-5">
        {/* Header */}
        <div className="text-center">
          <span
            className="text-[0.55rem] uppercase tracking-[0.36em]"
            style={{ color: gold }}
          >
            Preguntas frecuentes
          </span>
          <h2
            className="mx-auto mt-3 max-w-[20rem] text-[1.45rem] leading-[1.2] text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
          >
            Resuelve tus dudas antes de empezar tu{" "}
            <span className="italic" style={{ color: gold, fontWeight: 500 }}>
              transformación
            </span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-px w-12" style={{ background: gold, opacity: 0.6 }} />
            <Leaf className="size-3 rotate-45" style={{ color: gold }} strokeWidth={1.3} />
            <span className="h-px w-12" style={{ background: gold, opacity: 0.6 }} />
          </div>
          <p className="mx-auto mt-4 max-w-[22rem] text-[0.78rem] leading-[1.55] text-white/75">
            Queremos que tomes la mejor decisión para empezar a recuperar tu cabello con seguridad y confianza.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mt-9 flex flex-col gap-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="relative overflow-hidden rounded-2xl transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(74,37,99,0.55) 0%, rgba(42,18,55,0.55) 100%)",
                  backdropFilter: "blur(14px)",
                  border: `1px solid ${isOpen ? gold : `${gold}40`}`,
                  boxShadow: isOpen
                    ? `0 0 0 1px ${gold}55, 0 18px 40px -22px rgba(0,0,0,0.6), 0 0 28px -8px ${gold}55`
                    : "0 12px 30px -20px rgba(0,0,0,0.55)",
                }}
              >
                {/* Shimmer top edge */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${goldSoft}, transparent)`,
                    backgroundSize: "200% 100%",
                    animation: "faq-shimmer 4s linear infinite",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-display text-[0.95rem] leading-snug text-white"
                  >
                    {item.q}
                  </span>
                  <span
                    className="flex size-7 shrink-0 items-center justify-center rounded-full transition-transform duration-300"
                    style={{
                      background: "rgba(212,168,94,0.12)",
                      border: `1px solid ${gold}88`,
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
                      className="mx-5 border-t pt-3 pb-5 text-[0.8rem] leading-[1.6] text-white/80"
                      style={{ borderColor: `${gold}33` }}
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

    </section>
  );
}
