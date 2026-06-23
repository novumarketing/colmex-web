import type { Metadata } from "next";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { PageHero, SectionHead, CtaBand, Photo } from "@/components/ui";
import { VALORES, ALIANZAS } from "@/components/site";

export const metadata: Metadata = {
  title: "Institución",
  description: "COLMEX Internacional (Colegio México), fundado en 1994 en Tulancingo, Hidalgo. Más de 30 años educando para Ser y Trascender con el modelo CRECE.",
};

export default function Institucion() {
  return (
    <main>
      <PageHero
        eyebrow="Institución"
        title={<>Más de 30 años educando para <span className="serif-green">Ser y Trascender</span></>}
        sub="Desde 1994 formamos hombres y mujeres de bien en el corazón de Tulancingo, Hidalgo, con una educación integral y profundamente humana."
      />

      {/* Historia + retrato */}
      <section className="wrap two-col" style={{ paddingTop: "clamp(40px,6vw,80px)", paddingBottom: "clamp(40px,6vw,80px)", display: "grid", gridTemplateColumns: ".8fr 1.2fr", gap: "clamp(32px,5vw,64px)", alignItems: "center" }}>
        <Reveal style={{ boxShadow: "0 24px 60px rgba(16,42,67,.18)", borderRadius: 24 }}>
          <Photo src="/fundador.jpg" alt="Maestro Adalberto Garrido Martínez, fundador de COLMEX" radius={24} ratio="3/4" />
        </Reveal>
        <Reveal>
          <div className="eyebrow-green">Nuestra historia</div>
          <h2 className="h2" style={{ fontSize: "clamp(26px,3.4vw,40px)", marginTop: 12 }}>Una trayectoria que ha formado generaciones</h2>
          <p style={{ fontSize: 16.5, color: "var(--ink-600)", marginTop: 18 }}>
            COLMEX Internacional inicia actividades en 1994 en Tulancingo de Bravo, fundado por el maestro Adalberto Garrido Martínez, con una de las trayectorias docentes más reconocidas de la ciudad.
          </p>
          <p style={{ fontSize: 16.5, color: "var(--ink-600)", marginTop: 14 }}>
            Comenzó con secundaria y primaria; después incorporó preescolar y, en 1997, el nivel medio superior. A lo largo de su historia ha inculcado conocimientos y valores a más de 15,000 estudiantes, entregando a la sociedad más de 5,000 egresados, fieles a su lema: <strong style={{ color: "var(--ink-700)" }}>Ser y Trascender</strong>.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 18, marginTop: 28 }}>
            {[["1994", "fundación"], ["~1,000", "estudiantes hoy"], ["4", "niveles"]].map(([n, l]) => (
              <div key={l}><div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 30, color: "var(--blue-d)", lineHeight: 1 }}>{n}</div><div style={{ fontSize: 13.5, color: "var(--ink-600)", fontWeight: 600, marginTop: 4 }}>{l}</div></div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Filosofía */}
      <section className="band-bg2">
        <div className="wrap-narrow" style={{ paddingTop: "clamp(48px,7vw,90px)", paddingBottom: "clamp(48px,7vw,90px)", textAlign: "center" }}>
          <Reveal>
            <div className="eyebrow-green">Filosofía</div>
            <h2 className="h2" style={{ marginTop: 12 }}>Educar es humanizar</h2>
            <p style={{ fontSize: 18, color: "var(--ink-600)", marginTop: 18, maxWidth: 720, marginInline: "auto" }}>
              Nuestro modelo educativo CRECE enriquece de manera transversal el desarrollo de habilidades en un ambiente saludable, armónico y lúdico, garantizando paz mental por encima de todo. Buscamos corresponsabilizarnos con los padres en la formación física y mental de sus hijos, para que cada alumno se sienta feliz y desarrolle su máximo potencial.
            </p>
            <p style={{ fontFamily: "var(--font-spectral), Georgia, serif", fontStyle: "italic", fontSize: 24, color: "var(--green-d)", marginTop: 26 }}>
              “¡Hemos revolucionado la educación para ser y trascender!”
            </p>
          </Reveal>
        </div>
      </section>

      {/* Valores */}
      <section className="wrap" style={{ paddingTop: "clamp(48px,7vw,90px)", paddingBottom: "clamp(48px,7vw,90px)" }}>
        <SectionHead eyebrow="Nuestros valores" title="Lo que nos distingue" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 20, marginTop: 36 }}>
          {VALORES.map((v, i) => (
            <Reveal key={v.title} className="card-hover" style={{ background: "var(--surface)", border: "1px solid var(--bd)", borderLeft: `5px solid ${i % 2 ? "var(--green)" : "var(--blue)"}`, borderRadius: 18, padding: 26 }}>
              <div style={{ fontSize: 26, color: i % 2 ? "var(--green-d)" : "var(--blue-d)" }}><Icon name={v.icon as any} size={26} /></div>
              <h3 className="h3" style={{ fontSize: 19, marginTop: 14 }}>{v.title}</h3>
              <p style={{ color: "var(--ink-600)", marginTop: 8, fontSize: 14.5 }}>{v.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Alianzas */}
      <section style={{ background: "var(--ink)", color: "#fff" }}>
        <div className="wrap" style={{ paddingTop: "clamp(48px,7vw,90px)", paddingBottom: "clamp(48px,7vw,90px)" }}>
          <SectionHead center light eyebrow="Alianzas y convenios" title="Miembros de asociaciones estatales y nacionales" sub="Participamos en las competencias deportivas y culturales más importantes del país." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 16, marginTop: 40 }}>
            {ALIANZAS.map((a) => (
              <Reveal key={a} style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 16, height: 84, display: "flex", alignItems: "center", justifyContent: "center", color: "#dce8ec", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19 }}>{a}</Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Conoce COLMEX por dentro" sub="Agenda un recorrido y vive la experiencia de nuestra comunidad educativa." variant="blue" primary="recorrido" showSecondary={false} />
    </main>
  );
}
