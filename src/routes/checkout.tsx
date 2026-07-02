import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}
const productImg = "/__l5e/assets-v1/500b2369-804d-48c8-9bb8-2d0873b0465b/product-trio-marble.png";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Rapuncelés" },
      { name: "description", content: "Completa tu pedido Rapuncelés y recibe tu tratamiento premium en casa." },
      { property: "og:title", content: "Checkout — Rapuncelés" },
      { property: "og:description", content: "Completa tu pedido y recibe tu tratamiento premium en casa." },
    ],
  }),
  component: CheckoutPage,
});

const GOLD = "#D4A85E";
const GOLD_SOFT = "#E8C98A";
const GOLD_DARK = "#B98A3F";
const IVORY = "#F4ECDC";
const BEIGE = "#E7D8C6";
const PURPLE_DEEP = "#1A0A2E";
const PURPLE_MID = "#2A1245";

function CheckoutPage() {
  const [form, setForm] = useState({
    nombre: "",
    celular: "",
    ciudad: "",
    direccion: "",
    cantidad: "1",
  });
  const [nequi, setNequi] = useState("+57 323 385 4869");
  const [btnText, setBtnText] = useState("YA REALICÉ MI PAGO");
  const [formError, setFormError] = useState("");

  useEffect(() => {
    window.fbq?.("track", "InitiateCheckout");
  }, []);

  const PRICE_UNIT = 179900;

  const handleSubmit = () => {
    const { nombre, celular, ciudad, direccion, cantidad } = form;

    if (!nombre.trim() || !celular.trim() || !ciudad.trim() || !direccion.trim()) {
      setFormError("Por favor completa nombre, celular, ciudad y dirección antes de continuar.");
      return;
    }

    const qty = parseInt(cantidad, 10) || 1;
    const total = PRICE_UNIT * qty;
    setFormError("");

    // Meta Pixel: Purchase event
    window.fbq?.("track", "Purchase", {
      value: total,
      currency: "COP",
      content_name: "Kit Crecimiento Capilar Rapuncelés",
      num_items: qty,
    });

    const mensaje =
      `¡Hola! Acabo de realizar mi pago por Nequi ✅%0A%0A` +
      `*Pedido Rapuncelés*%0A` +
      `Nombre: ${nombre}%0A` +
      `Celular: ${celular}%0A` +
      `Ciudad: ${ciudad}%0A` +
      `Dirección: ${direccion}%0A` +
      `Cantidad: ${qty}%0A` +
      `Total: $${total.toLocaleString("es-CO")}%0A%0A` +
      `Adjunto mi comprobante de pago.`;

    window.open(`https://wa.me/573105986057?text=${mensaje}`, "_blank", "noopener,noreferrer");
  };

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 14,
    background: "rgba(244,236,220,0.04)",
    border: `1px solid ${GOLD}55`,
    color: IVORY,
    fontSize: 15,
    outline: "none",
    fontFamily: "Inter, sans-serif",
    fontWeight: 300,
    letterSpacing: "0.01em",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 10.5,
    letterSpacing: "0.28em",
    textTransform: "uppercase",
    color: GOLD_SOFT,
    marginBottom: 8,
    fontWeight: 500,
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `radial-gradient(ellipse at 50% 0%, ${PURPLE_MID} 0%, ${PURPLE_DEEP} 55%, #0d0518 100%)`,
        color: IVORY,
        fontFamily: "Inter, sans-serif",
        fontWeight: 300,
      }}
    >
      <div style={{ maxWidth: 480, margin: "0 auto", padding: "32px 20px 60px" }}>
        {/* SECTION 1: HEADER */}
        <header style={{ textAlign: "center", marginBottom: 32 }}>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 30,
              fontWeight: 500,
              letterSpacing: "0.14em",
              background: `linear-gradient(180deg, ${GOLD_SOFT} 0%, ${GOLD} 60%, ${GOLD_DARK} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            RAPUNCELÉS
          </div>
          <div
            style={{
              margin: "10px auto 24px",
              width: 60,
              height: 1,
              background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
            }}
          />
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 26,
              lineHeight: 1.15,
              fontWeight: 500,
              color: IVORY,
              letterSpacing: "0.005em",
              marginBottom: 12,
            }}
          >
            ESTÁS A UN PASO DE COMENZAR TU <em style={{ color: GOLD_SOFT, fontStyle: "italic" }}>transformación</em>
          </h1>
          <p style={{ fontSize: 14, lineHeight: 1.55, color: `${BEIGE}CC`, padding: "0 8px" }}>
            Completa tu pedido y recibe tu tratamiento premium en casa.
          </p>
        </header>

        {/* SECTION 2: PRODUCT SUMMARY */}
        <section style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ position: "relative", padding: "12px 0 8px" }}>
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                background: `radial-gradient(ellipse at center, ${GOLD}55 0%, ${GOLD}22 30%, transparent 65%)`,
                filter: "blur(20px)",
              }}
            />
            <img
              src={productImg}
              alt="Kit Rapuncelés"
              style={{ position: "relative", width: "100%", maxWidth: 320, margin: "0 auto", display: "block" }}
            />
          </div>
          <div
            style={{
              fontSize: 10.5,
              letterSpacing: "0.32em",
              color: GOLD,
              fontWeight: 500,
              marginTop: 8,
            }}
          >
            EDICIÓN LIMITADA
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 24,
              fontWeight: 500,
              color: IVORY,
              letterSpacing: "0.05em",
              marginTop: 6,
              marginBottom: 18,
            }}
          >
            KIT COMPLETO RAPUNCELÉS
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 auto", maxWidth: 300, textAlign: "left" }}>
            {[
              "Fortalece desde la raíz",
              "Estimula crecimiento saludable",
              "Reduce caída progresiva",
            ].map((b) => (
              <li
                key={b}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "8px 4px",
                  fontSize: 14,
                  color: `${IVORY}E6`,
                }}
              >
                <span
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    border: `1px solid ${GOLD}`,
                    display: "grid",
                    placeItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1.5 5.5L4 8L8.5 2.5" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {b}
              </li>
            ))}
          </ul>
        </section>

        {/* SECTION 3: PRICE CARD */}
        <section
          style={{
            background: `linear-gradient(180deg, ${IVORY} 0%, ${BEIGE} 100%)`,
            borderRadius: 24,
            padding: "26px 22px",
            textAlign: "center",
            border: `1px solid ${GOLD}`,
            boxShadow: `0 20px 50px -20px ${GOLD}55, inset 0 1px 0 #ffffffAA`,
            color: PURPLE_DEEP,
            marginBottom: 28,
          }}
        >
          <div style={{ fontSize: 10, letterSpacing: "0.32em", color: `${PURPLE_DEEP}99`, fontWeight: 500 }}>
            VALOR REGULAR
          </div>
          <div
            style={{
              fontSize: 18,
              color: `${PURPLE_DEEP}80`,
              textDecoration: "line-through",
              marginTop: 4,
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
            }}
          >
            $200.000
          </div>
          <div
            style={{
              margin: "14px auto",
              width: 40,
              height: 1,
              background: `linear-gradient(90deg, transparent, ${GOLD_DARK}, transparent)`,
            }}
          />
          <div style={{ fontSize: 10, letterSpacing: "0.32em", color: GOLD_DARK, fontWeight: 600 }}>
            HOY SOLAMENTE
          </div>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 46,
              fontWeight: 600,
              color: PURPLE_DEEP,
              lineHeight: 1,
              marginTop: 6,
              letterSpacing: "-0.01em",
            }}
          >
            $179.900
          </div>
          <div
            style={{
              display: "inline-block",
              marginTop: 16,
              padding: "6px 14px",
              borderRadius: 999,
              background: PURPLE_DEEP,
              color: GOLD_SOFT,
              fontSize: 9.5,
              letterSpacing: "0.28em",
              fontWeight: 500,
            }}
          >
            ACCESO ESPECIAL POR TIEMPO LIMITADO
          </div>
        </section>

        {/* SECTION 4: FORM */}
        <section style={{ marginBottom: 28 }}>
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <div style={{ fontSize: 10.5, letterSpacing: "0.32em", color: GOLD, fontWeight: 500 }}>
              TUS DATOS
            </div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 22,
                color: IVORY,
                marginTop: 6,
                fontWeight: 500,
              }}
            >
              Información de envío
            </h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div>
              <label style={labelStyle}>Nombre completo</label>
              <input style={inputStyle} value={form.nombre} onChange={update("nombre")} placeholder="Tu nombre" />
            </div>
            <div>
              <label style={labelStyle}>Número celular</label>
              <input style={inputStyle} value={form.celular} onChange={update("celular")} placeholder="+57 300 000 0000" inputMode="tel" />
            </div>
            <div>
              <label style={labelStyle}>Ciudad</label>
              <input style={inputStyle} value={form.ciudad} onChange={update("ciudad")} placeholder="Ej. Bogotá" />
            </div>
            <div>
              <label style={labelStyle}>Dirección exacta</label>
              <input style={inputStyle} value={form.direccion} onChange={update("direccion")} placeholder="Calle, número, apto" />
            </div>
            <div>
              <label style={labelStyle}>Cantidad</label>
              <input style={inputStyle} value={form.cantidad} onChange={update("cantidad")} inputMode="numeric" />
            </div>
          </div>
        </section>

        {/* SECTION 5: PAYMENT */}
        <section
          style={{
            background: `linear-gradient(180deg, rgba(244,236,220,0.06) 0%, rgba(244,236,220,0.02) 100%)`,
            border: `1px solid ${GOLD}55`,
            borderRadius: 22,
            padding: 22,
            marginBottom: 28,
            boxShadow: `inset 0 1px 0 ${GOLD}22`,
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <div style={{ fontSize: 10.5, letterSpacing: "0.32em", color: GOLD, fontWeight: 500 }}>
              MÉTODO DE PAGO SEGURO
            </div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 22,
                color: IVORY,
                marginTop: 6,
                fontWeight: 500,
              }}
            >
              Nequi
            </h3>
          </div>
          <div
            style={{
              padding: "14px 16px",
              borderRadius: 14,
              background: "rgba(0,0,0,0.25)",
              border: `1px solid ${GOLD}44`,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                display: "grid",
                placeItems: "center",
                background: `linear-gradient(135deg, ${GOLD_SOFT}, ${GOLD_DARK})`,
                color: PURPLE_DEEP,
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "0.06em",
                flexShrink: 0,
              }}
            >
              N
            </div>
            <input
              value={nequi}
              onChange={(e) => setNequi(e.target.value)}
              placeholder="+57 310 XXX XXXX"
              inputMode="tel"
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: IVORY,
                fontSize: 16,
                letterSpacing: "0.04em",
                fontFamily: "Inter, sans-serif",
              }}
            />
          </div>
          <p style={{ fontSize: 12.5, color: `${BEIGE}AA`, marginTop: 12, textAlign: "center", lineHeight: 1.5 }}>
            Realiza tu pago y conserva tu comprobante.
          </p>
        </section>

        {/* SECTION 6: BUTTON */}
        <section style={{ marginBottom: 32, position: "relative" }}>
          {formError && (
            <p
              style={{
                color: "#F4A6A6",
                fontSize: 13,
                textAlign: "center",
                marginBottom: 12,
                lineHeight: 1.4,
              }}
            >
              {formError}
            </p>
          )}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: -6,
              borderRadius: 999,
              background: `radial-gradient(ellipse at center, ${GOLD}66, transparent 70%)`,
              filter: "blur(12px)",
            }}
          />
          <button
            onClick={handleSubmit}
            style={{
              position: "relative",
              width: "100%",
              padding: "18px 20px",
              borderRadius: 999,
              border: `1px solid ${GOLD_SOFT}`,
              background: `linear-gradient(180deg, ${GOLD_SOFT} 0%, ${GOLD} 55%, ${GOLD_DARK} 100%)`,
              color: PURPLE_DEEP,
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.24em",
              cursor: "pointer",
              boxShadow: `0 14px 40px -12px ${GOLD}AA, inset 0 1px 0 #ffffffCC`,
              fontFamily: "Inter, sans-serif",
            }}
          >
            {btnText}
          </button>
        </section>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/573105986057"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            width: "100%",
            padding: "14px 18px",
            borderRadius: 999,
            border: `1px solid ${GOLD}66`,
            background: "rgba(244,236,220,0.04)",
            color: IVORY,
            fontSize: 12,
            letterSpacing: "0.22em",
            fontWeight: 500,
            textDecoration: "none",
            marginBottom: 28,
          }}
        >
          <span style={{ fontSize: 16 }}>💬</span>
          ENVIAR COMPROBANTE · +57 310 598 6057
        </a>

        {/* SECTION 7: TRUST BADGES */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 10,
            paddingTop: 20,
            borderTop: `1px solid ${GOLD}22`,
          }}
        >
          {[
            { icon: "🚚", label: "ENVÍO GRATIS" },
            { icon: "🔒", label: "COMPRA SEGURA" },
            { icon: "💬", label: "ATENCIÓN WHATSAPP" },
          ].map((t) => (
            <div key={t.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 22 }}>{t.icon}</div>
              <div
                style={{
                  marginTop: 6,
                  fontSize: 9,
                  letterSpacing: "0.22em",
                  color: `${BEIGE}CC`,
                  lineHeight: 1.35,
                  fontWeight: 500,
                }}
              >
                {t.label}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
