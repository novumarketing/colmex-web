import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import { SectionHead, CtaBand, Photo } from "@/components/ui";
import { WA_INFORMES, TRUST, STATS, PILLARS, NIVELES, ALIANZAS } from "@/components/site";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden", background: "radial-gradient(1200px 600px at 80% -10%,rgba(22,114,184,.12),transparent 60%),radial-gradient(900px 520px at 0% 110%,rgba(61,169,53,.08),transparent 55%),var(--bg)" }}>
        <div className="wrap hero-grid" style={{ paddingTop: "clamp(48px,7vw,96px)", paddingBottom: "clamp(48px,7vw,96px)", display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: "clamp(32px,5vw,72px)", alignItems: "center" }}>
          <div>
            <Reveal style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "#fff", border: "1px solid var(--bd)", padding: "7px 15px", borderRadius: 999, fontSize: 13, fontWeight: 600, color: "var(--ink-700)", boxShadow: "0 2px 10px rgba(16,42,67,.05)" }}>
              <span className="dot-pulse" style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--green)" }} />
              Colegio en Tulancingo, Hidalgo · Inscripciones 2026–2027
            </Reveal>
            <h1 className="h1-hero" style={{ marginTop: 20 }}>
              Más de 30 años formando para <span className="serif-green">Ser y Trascender</span>
            </h1>
            <p className="lead" style={{ maxWidth: 560, marginTop: 22 }}>
              En COLMEX Internacional educamos de manera integral, desde preescolar hasta preparatoria, con el modelo CRECE: equilibrio entre lo académico, lo emocional y lo físico.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 13, marginTop: 32 }}>
              <a href={WA_INFORMES} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><Icon name="FileText" size={19} />Solicitar informes</a>
              <Link href="/niveles" className="btn btn-ghost">Ver niveles<Icon name="ArrowRight" size={18} /></Link>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 20, marginTop: 30 }}>
              {TRUST.map((t) => (
                <span key={t.label} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600, color: "var(--ink-700)" }}>
                  <Icon name={t.icon as any} size={17} style={{ color: "var(--blue)" }} />{t.label}
                </span>
              ))}
            </div>
          </div>

          <Reveal style={{ position: "relative" }}>
            <div style={{ boxShadow: "0 30px 70px rgba(16,42,67,.20)", borderRadius: 32 }}>
              <Photo src="/hero.jpg" alt="Estudiantes de COLMEX Internacional" radius={32} ratio="4/5" />
            </div>
            <div style={{ position: "absolute", left: -18, bottom: 34, background: "#fff", border: "1px solid var(--bd)", borderRadius: 20, padding: "18px 22px", boxShadow: "0 18px 48px rgba(16,42,67,.16)", maxWidth: 230 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32, color: "var(--green-d)", lineHeight: 1 }}>+5,000</div>
              <div style={{ fontSize: 13, color: "var(--ink-600)", fontWeight: 600, marginTop: 2 }}>egresados que ya trascendieron</div>
            </div>
            <div style={{ position: "absolute", right: -14, top: 26, background: "var(--ink)", color: "#fff", borderRadius: 16, padding: "13px 17px", boxShadow: "0 14px 34px rgba(16,42,67,.25)", display: "flex", alignItems: "center", gap: 10 }}>
              <Icon name="ShieldCheck" size={22} style={{ color: "var(--green)" }} />
              <div><div style={{ fontWeight: 800, fontSize: 14, lineHeight: 1.1 }}>Incorporado</div><div style={{ fontSize: 12, color: "#9fb6bd" }}>a la SEP</div></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS STRIP */}
      <section style={{ background: "var(--ink)" }}>
        <div className="wrap" style={{ paddingTop: "clamp(34px,4vw,52px)", paddingBottom: "clamp(34px,4vw,52px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 28 }}>
          {STATS.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(30px,4vw,46px)", color: "#fff", lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: "#9fb6bd", fontSize: 14, fontWeight: 500, marginTop: 6, maxWidth: 180, marginInline: "auto" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PILARES */}
      <section className="wrap section">
        <SectionHead eyebrow="Por qué COLMEX" title="Un colegio que forma personas, no solo alumnos" sub="Tres pilares que distinguen la experiencia educativa en nuestra comunidad." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24, marginTop: 44 }}>
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} className="card card-hover">
              <div className={i === 1 ? "icon-chip-green" : "icon-chip"}><Icon name={p.icon as any} size={28} /></div>
              <h3 className="h3" style={{ fontSize: 22, marginTop: 20 }}>{p.title}</h3>
              <p style={{ color: "var(--ink-600)", marginTop: 10, fontSize: 15.5 }}>{p.desc}</p>
            </Reveal>
          ))}
        </div>
        <Reveal style={{ marginTop: 34 }}>
          <Link href="/institucion" className="link-arrow">Conoce nuestra historia<Icon name="ArrowRight" size={18} /></Link>
        </Reveal>
      </section>

      {/* NIVELES preview */}
      <section className="band-bg2">
        <div className="wrap section">
          <SectionHead eyebrow="Oferta educativa" title="Cuatro niveles, un mismo compromiso" sub="Acompañamos a tu hijo en cada etapa: preescolar, primaria, secundaria y preparatoria." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 24, marginTop: 44 }}>
            {NIVELES.map((n) => (
              <Reveal key={n.title} className="card-hover" style={{ background: "var(--surface)", border: "1px solid var(--bd)", borderRadius: 22, overflow: "hidden", boxShadow: "0 2px 6px rgba(16,42,67,.05)" }}>
                <Photo src={n.img} alt={n.title} radius={0} ratio="1/1" />
                <div style={{ padding: 22 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ color: "var(--green-d)", display: "flex" }}><Icon name={n.icon as any} size={22} /></span>
                    <h3 className="h3" style={{ fontSize: 19 }}>{n.title}</h3>
                  </div>
                  <p style={{ color: "var(--ink-600)", marginTop: 8, fontSize: 14 }}>{n.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ marginTop: 34, textAlign: "center" }}>
            <Link href="/niveles" className="link-arrow" style={{ justifyContent: "center" }}>Ver todos los niveles<Icon name="ArrowRight" size={18} /></Link>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIO */}
      <section className="wrap section">
        <SectionHead center eyebrow="Comunidad COLMEX" title="Familias que confían en nosotros" />
        <Reveal style={{ maxWidth: 820, margin: "44px auto 0", background: "var(--ink)", borderRadius: 28, padding: "clamp(32px,5vw,56px)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -30, left: 30, fontFamily: "var(--font-spectral), Georgia, serif", fontStyle: "italic", fontSize: 180, color: "rgba(61,169,53,.18)", lineHeight: 1 }}>“</div>
          <p style={{ position: "relative", fontFamily: "var(--font-spectral), Georgia, serif", fontStyle: "italic", fontSize: "clamp(22px,2.6vw,30px)", color: "#fff", lineHeight: 1.4, margin: 0 }}>
            Mis dos hijos crecieron en COLMEX desde el kínder. El acompañamiento humano y las actividades hicieron toda la diferencia en su formación.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 28 }}>
            <div style={{ width: 52, height: 52, borderRadius: "50%", background: "var(--green)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontFamily: "var(--font-display)", fontSize: 18 }}>LM</div>
            <div><div style={{ color: "#fff", fontWeight: 700 }}>Laura Martínez</div><div style={{ color: "#9fb6bd", fontSize: 14 }}>Mamá de la comunidad COLMEX</div></div>
            <div style={{ marginLeft: "auto", color: "var(--gold)", fontSize: 18, letterSpacing: 2 }}>★★★★★</div>
          </div>
        </Reveal>
      </section>

      {/* ALIANZAS */}
      <section className="band-bg2">
        <div className="wrap" style={{ paddingTop: "clamp(40px,5vw,72px)", paddingBottom: "clamp(40px,5vw,72px)" }}>
          <SectionHead center eyebrow="Alianzas y convenios" title="Respaldados por asociaciones nacionales" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 16, marginTop: 36 }}>
            {ALIANZAS.map((a) => (
              <Reveal key={a} style={{ background: "var(--surface)", border: "1px solid var(--bd)", borderRadius: 16, height: 84, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue-d)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19, letterSpacing: ".02em" }}>{a}</Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="wrap-narrow section">
        <SectionHead center eyebrow="Preguntas frecuentes" title="Resuelve tus dudas antes de inscribir" />
        <Faq />
      </section>

      {/* CTA BAND */}
      <CtaBand title="Forma parte de la comunidad COLMEX Internacional" sub="Solicita informes, conoce nuestros niveles y agenda un recorrido por las instalaciones." variant="ink" primary="informes" />
    </main>
  );
}
