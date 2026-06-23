import Link from "next/link";
import Icon from "./Icon";
import { NAV, PHONE, PHONE_HREF, EMAIL, ADDRESS, FACEBOOK, WA_RECORRIDO } from "./site";

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "#9fb6bd" }}>
      <div className="wrap footer-grid" style={{ paddingTop: "clamp(48px,6vw,80px)", display: "grid", gridTemplateColumns: "1.4fr 1fr 1.2fr", gap: 40 }}>
        <div>
          <div style={{ background: "#fff", borderRadius: 14, padding: "12px 16px", display: "inline-block" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-colmex.png" alt="COLMEX Internacional" style={{ height: 44, display: "block" }} />
          </div>
          <p style={{ margin: "18px 0 0", maxWidth: 330, fontSize: 15, lineHeight: 1.6 }}>
            COLMEX Internacional. Más de 30 años formando para Ser y Trascender, en el corazón de Tulancingo, Hidalgo.
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="soc">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.06 5.66 21.2 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22C18.34 21.2 22 17.06 22 12.06Z" /></svg>
            </a>
            <a href={WA_RECORRIDO} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="soc">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2.01c-5.46 0-9.9 4.44-9.91 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.78 1.22h.01c5.46 0 9.9-4.44 9.91-9.9a9.86 9.86 0 0 0-2.9-7.01 9.82 9.82 0 0 0-7.02-2.92Zm5.8 14.05c-.25.69-1.45 1.32-1.99 1.36-.51.05-1.16.07-1.87-.12-.43-.13-.98-.31-1.69-.61-2.97-1.28-4.91-4.27-5.06-4.47-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.48.27-.3.59-.37.79-.37.2 0 .39 0 .57.01.18.01.43-.07.67.51.25.6.84 2.06.91 2.21.07.15.12.32.02.52-.1.2-.15.32-.3.49-.15.17-.31.39-.45.52-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.35 1.45.3.15.47.12.64-.07.17-.2.74-.86.94-1.16.2-.3.39-.25.66-.15.27.1 1.71.81 2.01.96.3.15.49.22.56.34.07.13.07.74-.18 1.43Z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <div style={{ color: "#fff", fontWeight: 700, fontSize: 15, textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 16 }}>Navegación</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="foot-link" style={{ color: "#9fb6bd", fontSize: 15, textDecoration: "none" }}>{n.label}</Link>
            ))}
          </div>
        </div>

        <div>
          <div style={{ color: "#fff", fontWeight: 700, fontSize: 15, textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 16 }}>Contacto</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 13, fontSize: 15 }}>
            <a href={PHONE_HREF} className="foot-link" style={{ color: "#9fb6bd", textDecoration: "none", display: "flex", gap: 10, alignItems: "flex-start" }}>
              <Icon name="Phone" size={17} style={{ color: "var(--blue)", marginTop: 1 }} />{PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="foot-link" style={{ color: "#9fb6bd", textDecoration: "none", display: "flex", gap: 10, alignItems: "flex-start" }}>
              <Icon name="Mail" size={17} style={{ color: "var(--blue)", marginTop: 1 }} />{EMAIL}
            </a>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <Icon name="MapPin" size={17} style={{ color: "var(--blue)", marginTop: 1, flex: "none" }} />{ADDRESS}
            </div>
          </div>
        </div>
      </div>

      <div className="wrap" style={{ paddingTop: 28, paddingBottom: 28, marginTop: 48, borderTop: "1px solid rgba(255,255,255,.12)", display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "space-between", fontSize: 13 }}>
        <span>© 2026 COLMEX Internacional. Todos los derechos reservados.</span>
        <Link href="/aviso-privacidad" className="foot-link" style={{ color: "#9fb6bd", textDecoration: "none" }}>Aviso de privacidad</Link>
        <span>
          Desarrollado por{" "}
          <a href="https://novu-web-ten.vercel.app/" target="_blank" rel="noopener noreferrer" className="foot-link" style={{ color: "var(--blue)", textDecoration: "none", fontWeight: 700 }}>NOVU</a>
        </span>
        <span>Incorporado a la SEP</span>
      </div>
      <style>{`
        .soc { width: 38px; height: 38px; border-radius: 10px; border: 1px solid rgba(255,255,255,.14); display: flex; align-items: center; justify-content: center; color: #9fb6bd; text-decoration: none; transition: all .2s; }
        .soc:hover { background: var(--blue); color: #fff; border-color: var(--blue); }
        .foot-link:hover { color: var(--blue) !important; }
        @media (max-width: 880px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
