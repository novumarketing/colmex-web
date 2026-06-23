"use client";
import { useState } from "react";
import Icon from "./Icon";
import { FAQS } from "./site";

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 12 }}>
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ background: "var(--surface)", border: "1px solid var(--bd)", borderRadius: 16, overflow: "hidden" }}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "20px 24px", display: "flex", alignItems: "center", gap: 16, cursor: "pointer", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 17, color: "var(--ink)" }}
            >
              <span style={{ flex: 1 }}>{f.q}</span>
              <span style={{ color: "var(--blue-d)", flex: "none", transition: "transform .2s", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", display: "flex" }}>
                <Icon name="Plus" size={20} />
              </span>
            </button>
            {isOpen && (
              <div style={{ padding: "0 24px 22px", color: "var(--ink-600)", fontSize: 15.5, lineHeight: 1.65 }}>{f.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
