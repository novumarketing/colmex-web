"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import { NAV, PHONE, PHONE_HREF, EMAIL, WA_INFORMES } from "./site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      {/* Topbar (desktop) */}
      <div className="topbar" style={{ background: "var(--ink)", color: "#cfdde2", fontSize: 13 }}>
        <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, paddingTop: 9, paddingBottom: 9 }}>
          <div style={{ display: "flex", gap: 22, alignItems: "center" }}>
            <a href={PHONE_HREF} style={{ textDecoration: "none", color: "#cfdde2", display: "flex", alignItems: "center", gap: 7 }}>
              <Icon name="Phone" size={14} style={{ color: "var(--blue)" }} />{PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} style={{ textDecoration: "none", color: "#cfdde2", display: "flex", alignItems: "center", gap: 7 }}>
              <Icon name="Mail" size={14} style={{ color: "var(--blue)" }} />{EMAIL}
            </a>
          </div>
          <span style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <Icon name="MapPin" size={14} style={{ color: "var(--blue)" }} />Tulancingo, Hidalgo · Ser y Trascender
          </span>
        </div>
      </div>

      {/* Sticky header */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255,255,255,.86)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderBottom: "1px solid var(--bd)" }}>
        <div className="wrap" style={{ height: 74, display: "flex", alignItems: "center", gap: 24 }}>
          <Link href="/" aria-label="Inicio" style={{ display: "flex", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-colmex.png" alt="COLMEX Internacional" style={{ height: 48, width: "auto", display: "block" }} />
          </Link>

          <nav className="nav-desktop" style={{ marginLeft: "auto", display: "flex", gap: 4, alignItems: "center" }}>
            {NAV.map((n) => {
              const active = isActive(n.href);
              return (
                <Link key={n.href} href={n.href} className="nav-link" style={{ background: active ? "var(--blue-50)" : "transparent", color: active ? "var(--blue-d)" : "var(--ink-700)", fontWeight: 600, fontSize: 15, padding: "9px 14px", borderRadius: 999, textDecoration: "none", transition: "all .18s" }}>
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <a href={WA_INFORMES} target="_blank" rel="noopener noreferrer" className="nav-desktop btn btn-sm" style={{ background: "var(--blue)", color: "#fff", boxShadow: "0 10px 22px rgba(22,166,206,.26)" }}>
            <Icon name="MessageCircle" size={16} />Solicitar informes
          </a>

          <button className="nav-burger" onClick={() => setOpen((v) => !v)} aria-label="Menú" style={{ marginLeft: "auto", background: "none", border: "1px solid var(--bd)", borderRadius: 12, width: 44, height: 44, alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--ink)" }}>
            <Icon name={open ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {open && (
          <div className="nav-mobile-menu" style={{ borderTop: "1px solid var(--bd)", padding: "14px clamp(20px,4vw,48px)", display: "flex", flexDirection: "column", gap: 4, background: "#fff" }}>
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} style={{ textAlign: "left", color: "var(--ink)", fontWeight: 600, fontSize: 17, padding: "13px 8px", borderRadius: 10, textDecoration: "none" }}>
                {n.label}
              </Link>
            ))}
            <a href={WA_INFORMES} target="_blank" rel="noopener noreferrer" style={{ marginTop: 8, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: ".5em", background: "var(--blue)", color: "#fff", fontWeight: 700, fontSize: 16, padding: 14, borderRadius: 999, textDecoration: "none" }}>
              Solicitar informes
            </a>
          </div>
        )}
      </header>

      <style>{`
        .nav-burger { display: none; }
        @media (max-width: 880px) {
          .topbar { display: none; }
          .nav-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
        }
        @media (min-width: 881px) {
          .nav-mobile-menu { display: none !important; }
        }
      `}</style>
    </>
  );
}
