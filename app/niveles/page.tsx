import type { Metadata } from "next";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { PageHero, CtaBand, Photo } from "@/components/ui";
import { NIVELES } from "@/components/site";

export const metadata: Metadata = {
  title: "Niveles educativos",
  description: "Preescolar (PlayGarden), primaria, secundaria y preparatoria en COLMEX Internacional, Tulancingo. Educación integral en cada etapa.",
};

export default function Niveles() {
  return (
    <main>
      <PageHero
        eyebrow="Oferta educativa"
        title={<>Acompañamos cada etapa, de preescolar a <span className="serif-green">preparatoria</span></>}
        sub="Un mismo modelo integral CRECE adaptado a cada edad, para que tu hijo crezca feliz y seguro en cada nivel."
      />

      <section className="wrap" style={{ paddingTop: "clamp(36px,5vw,64px)", paddingBottom: "clamp(36px,5vw,64px)", display: "flex", flexDirection: "column", gap: "clamp(28px,4vw,56px)" }}>
        {NIVELES.map((n, i) => (
          <Reveal key={n.title} className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(28px,4vw,56px)", alignItems: "center" }}>
            <div style={{ order: i % 2 ? 2 : 1, boxShadow: "0 20px 50px rgba(16,42,67,.15)", borderRadius: 24 }}>
              <Photo src={n.img} alt={n.title} radius={24} ratio="4/3" />
            </div>
            <div style={{ order: i % 2 ? 1 : 2 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: i % 2 ? "var(--green-50)" : "var(--blue-50)", color: i % 2 ? "var(--green-d)" : "var(--blue-d)", padding: "7px 15px", borderRadius: 999, fontWeight: 700, fontSize: 14 }}>
                <Icon name={n.icon as any} size={18} />Nivel {i + 1} de 4
              </div>
              <h2 className="h2" style={{ fontSize: "clamp(24px,3vw,36px)", marginTop: 16 }}>{n.title}</h2>
              <p style={{ fontSize: 16.5, color: "var(--ink-600)", marginTop: 14 }}>{n.desc}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* franja modelo CRECE */}
      <section className="band-bg2">
        <div className="wrap-narrow" style={{ paddingTop: "clamp(44px,6vw,80px)", paddingBottom: "clamp(44px,6vw,80px)", textAlign: "center" }}>
          <Reveal>
            <div className="eyebrow-green">Modelo educativo CRECE</div>
            <h2 className="h2" style={{ marginTop: 12 }}>Lo académico, lo emocional y lo físico, en equilibrio</h2>
            <p style={{ fontSize: 17, color: "var(--ink-600)", marginTop: 16, maxWidth: 680, marginInline: "auto" }}>
              En todos los niveles integramos más de 30 actividades complementarias a través de nuestros programas deportivos, artísticos, de salud, socioemocionales y ambientales.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 18, justifyContent: "center", marginTop: 28 }}>
              {[{ i: "ShieldCheck", t: "Incorporado a la SEP" }, { i: "Trophy", t: "Deporte de alto rendimiento" }, { i: "Palette", t: "Arte y cultura" }].map((s) => (
                <span key={s.t} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 600, color: "var(--ink-700)" }}>
                  <span style={{ color: "var(--green-d)", display: "flex" }}><Icon name={s.i as any} size={18} /></span>{s.t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand title="¿Listo para conocer el nivel ideal para tu hijo?" sub="Solicita informes y te enviamos costos, plan y disponibilidad el mismo día." variant="ink" primary="informes" />
    </main>
  );
}
