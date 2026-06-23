import type { Metadata } from "next";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { PageHero, SectionHead, CtaBand } from "@/components/ui";
import { PROGRAMAS, PASOS } from "@/components/site";

export const metadata: Metadata = {
  title: "Programas institucionales",
  description: "Más de 30 actividades en COLMEX: programa deportivo (CONADEIP/ANEPPI), CREA de arte, ECO2, Health and Care, atención socioemocional PaS e idiomas.",
};

export default function Programas() {
  return (
    <main>
      <PageHero
        eyebrow="Programas institucionales"
        title={<>Más de 30 actividades para <span className="serif-green">crecer integralmente</span></>}
        sub="Nuestro modelo CRECE se vive a través de programas que cuidan la salud mental, emocional y física, e impulsan el deporte, las artes y la conciencia ambiental."
      />

      <section className="wrap" style={{ paddingTop: "clamp(40px,6vw,72px)", paddingBottom: "clamp(40px,6vw,72px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
          {PROGRAMAS.map((p, i) => (
            <Reveal key={p.title} className="card card-hover">
              <div className={i % 2 ? "icon-chip-green" : "icon-chip"}><Icon name={p.icon as any} size={28} /></div>
              <h3 className="h3" style={{ fontSize: 20, marginTop: 18 }}>{p.title}</h3>
              <p style={{ color: "var(--ink-600)", marginTop: 8, fontSize: 15 }}>{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Proceso de admisión */}
      <section className="band-bg2">
        <div className="wrap" style={{ paddingTop: "clamp(48px,7vw,90px)", paddingBottom: "clamp(48px,7vw,90px)" }}>
          <SectionHead center eyebrow="Admisiones" title="Inscríbete en cuatro pasos" sub="Te acompañamos en todo el proceso, sin complicaciones." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 22, marginTop: 44 }}>
            {PASOS.map((s) => (
              <Reveal key={s.n} style={{ background: "var(--surface)", border: "1px solid var(--bd)", borderRadius: 22, padding: 28 }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 40, color: "var(--green-100)", lineHeight: 1 }}>{s.n}</div>
                <h3 className="h3" style={{ fontSize: 19, marginTop: 10 }}>{s.title}</h3>
                <p style={{ color: "var(--ink-600)", marginTop: 8, fontSize: 14.5 }}>{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Comienza el proceso hoy" sub="Te enviamos la lista de precios y agendamos tu recorrido el mismo día." variant="blue" primary="informes" />
    </main>
  );
}
