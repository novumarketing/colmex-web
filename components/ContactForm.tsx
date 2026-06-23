"use client";
import { useState } from "react";
import Icon from "./Icon";

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const cuerpo =
      `Hola, vi la web de COLMEX Internacional y quiero solicitar informes y la lista de precios.` +
      (nombre ? `\nNombre: ${nombre}` : "") +
      (tel ? `\nTeléfono: ${tel}` : "") +
      (email ? `\nCorreo: ${email}` : "") +
      (msg ? `\nMensaje: ${msg}` : "");
    const url = "https://wa.me/527757534992?text=" + encodeURIComponent(cuerpo);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={submit} style={{ background: "var(--surface)", border: "1px solid var(--bd)", borderRadius: 24, padding: "clamp(28px,4vw,40px)", boxShadow: "0 8px 30px rgba(12,39,51,.07)" }}>
      <h2 className="h3" style={{ fontSize: 24 }}>Solicita informes</h2>
      <p style={{ color: "var(--ink-600)", fontSize: 15, margin: "8px 0 22px" }}>Déjanos tus datos y te contactamos con la información y la lista de precios.</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--ink-700)", marginBottom: 6 }}>Nombre del tutor</label>
          <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Tu nombre" className="fld" />
        </div>
        <div>
          <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--ink-700)", marginBottom: 6 }}>Teléfono</label>
          <input value={tel} onChange={(e) => setTel(e.target.value)} placeholder="Tu teléfono" className="fld" />
        </div>
      </div>
      <div style={{ marginTop: 14 }}>
        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--ink-700)", marginBottom: 6 }}>Correo electrónico</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tucorreo@ejemplo.com" className="fld" />
      </div>
      <div style={{ marginTop: 14 }}>
        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--ink-700)", marginBottom: 6 }}>Mensaje</label>
        <textarea value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Cuéntanos qué te gustaría saber" rows={4} className="fld" style={{ resize: "vertical" }} />
      </div>
      <button type="submit" style={{ marginTop: 18, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: ".5em", background: "var(--blue)", color: "#fff", fontWeight: 700, fontSize: 16, padding: 15, borderRadius: 12, border: "none", cursor: "pointer" }}>
        <Icon name="Send" size={18} />Enviar por WhatsApp
      </button>
      <div style={{ fontSize: 12, color: "var(--ink-500)", textAlign: "center", marginTop: 10 }}>Al enviar abrimos WhatsApp con tu mensaje listo para nuestro equipo de admisiones.</div>
    </form>
  );
}
