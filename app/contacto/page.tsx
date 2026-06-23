import type { Metadata } from "next";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { PageHero } from "@/components/ui";
import { WA_INFORMES, PHONE, PHONE_HREF, EMAIL, ADDRESS } from "@/components/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Solicita informes, la lista de precios o agenda un recorrido en COLMEX Internacional, Tulancingo. Te respondemos el mismo día.",
};

export default function Contacto() {
  return (
    <main>
      <PageHero
        eyebrow="Contacto"
        title={<>Estamos para <span className="serif-accent">ayudarte</span></>}
        sub="Solicita informes, la lista de precios o agenda un recorrido. Te respondemos el mismo día."
      />

      <section className="wrap two-col" style={{ paddingTop: "clamp(36px,5vw,64px)", paddingBottom: "clamp(56px,8vw,100px)", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "clamp(32px,5vw,56px)" }}>
        <Reveal style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <a href={WA_INFORMES} target="_blank" rel="noopener noreferrer" style={{ background: "var(--ink)", borderRadius: 20, padding: 26, display: "flex", gap: 16, alignItems: "center", textDecoration: "none" }}>
            <span style={{ flex: "none", width: 50, height: 50, borderRadius: 14, background: "var(--wa)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="MessageCircle" size={24} /></span>
            <div><div style={{ color: "#fff", fontWeight: 700, fontSize: 17 }}>WhatsApp</div><div style={{ color: "#9fb6bd", fontSize: 14 }}>Respuesta el mismo día · {PHONE}</div></div>
          </a>
          <a href={PHONE_HREF} style={{ background: "var(--surface)", border: "1px solid var(--bd)", borderRadius: 20, padding: 26, display: "flex", gap: 16, alignItems: "center", textDecoration: "none" }}>
            <span style={{ flex: "none", width: 50, height: 50, borderRadius: 14, background: "var(--blue-50)", color: "var(--blue-d)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="Phone" size={23} /></span>
            <div><div style={{ color: "var(--ink)", fontWeight: 700, fontSize: 17 }}>Teléfono</div><div style={{ color: "var(--ink-600)", fontSize: 15 }}>{PHONE}</div></div>
          </a>
          <a href={`mailto:${EMAIL}`} style={{ background: "var(--surface)", border: "1px solid var(--bd)", borderRadius: 20, padding: 26, display: "flex", gap: 16, alignItems: "center", textDecoration: "none" }}>
            <span style={{ flex: "none", width: 50, height: 50, borderRadius: 14, background: "var(--blue-50)", color: "var(--blue-d)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="Mail" size={22} /></span>
            <div><div style={{ color: "var(--ink)", fontWeight: 700, fontSize: 17 }}>Correo</div><div style={{ color: "var(--ink-600)", fontSize: 15 }}>{EMAIL}</div></div>
          </a>
          <div style={{ background: "var(--surface)", border: "1px solid var(--bd)", borderRadius: 20, padding: 26, display: "flex", gap: 16, alignItems: "flex-start" }}>
            <span style={{ flex: "none", width: 50, height: 50, borderRadius: 14, background: "var(--blue-50)", color: "var(--blue-d)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="MapPin" size={22} /></span>
            <div><div style={{ color: "var(--ink)", fontWeight: 700, fontSize: 17 }}>Dirección</div><div style={{ color: "var(--ink-600)", fontSize: 15 }}>{ADDRESS}</div></div>
          </div>
        </Reveal>
        <Reveal>
          <ContactForm />
        </Reveal>
      </section>
    </main>
  );
}
