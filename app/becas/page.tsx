import type { Metadata } from "next";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { PageHero, CtaBand } from "@/components/ui";
import { BECAS } from "@/components/site";

export const metadata: Metadata = {
  title: "Becas",
  description: "Programa de becas COLMEX Internacional: académica, deportiva/artística/cultural, familiar y socioeconómica. Financiadas por el colegio.",
};

export default function Becas() {
  return (
    <main>
      <PageHero
        eyebrow="Becas COLMEX"
        title={<>Apoyamos el talento y el <span className="serif-green">esfuerzo</span></>}
        sub="Uno de nuestros programas emblemáticos desde la fundación del colegio. Las becas son financiadas en su totalidad por COLMEX Internacional."
      />

      <section className="wrap" style={{ paddingTop: "clamp(40px,6vw,72px)", paddingBottom: "clamp(40px,6vw,72px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20 }}>
          {BECAS.map((b, i) => (
            <Reveal key={b.title} style={{ background: "var(--surface)", border: "1px solid var(--bd)", borderRadius: 20, padding: 26, display: "flex", gap: 18, alignItems: "flex-start" }}>
              <div className={i % 2 ? "icon-chip-green-sm" : "icon-chip-sm"} style={{ flex: "none" }}><Icon name={b.icon as any} size={24} /></div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                  <h3 className="h3" style={{ fontSize: 19 }}>{b.title}</h3>
                  <span className={i % 2 ? "tag-green" : ""} style={i % 2 ? {} : { background: "var(--blue)", color: "#fff", fontWeight: 700, fontSize: 12, padding: "3px 12px", borderRadius: 999 }}>{b.tag}</span>
                </div>
                <p style={{ color: "var(--ink-600)", marginTop: 8, fontSize: 15 }}>{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal style={{ marginTop: 36, background: "var(--green-50)", border: "1px solid var(--green-100)", borderRadius: 20, padding: "26px 28px", display: "flex", gap: 16, alignItems: "flex-start" }}>
          <span style={{ color: "var(--green-d)", flex: "none", marginTop: 2 }}><Icon name="Award" size={26} /></span>
          <p style={{ color: "var(--ink-700)", fontSize: 15.5, margin: 0 }}>
            COLMEX no recibe apoyo en efectivo o especie de la SEP ni de ningún otro organismo para su programa de becas: lo sostiene la propia institución como muestra de su compromiso con la comunidad. ¿Aspiras a una beca? Escríbenos y revisamos tu caso.
          </p>
        </Reveal>
      </section>

      <CtaBand title="¿Aspiras a una beca COLMEX?" sub="Cuéntanos tu caso y con gusto te orientamos sobre el proceso y los requisitos." variant="blue" primary="informes" />
    </main>
  );
}
