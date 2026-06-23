"use client";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { WA_RECORRIDO } from "./site";

type Msg = { role: "user" | "assistant"; text: string };

const GREETING: Msg = {
  role: "assistant",
  text: "¡Hola! Soy el asistente virtual de COLMEX Internacional. Puedo ayudarte con niveles, costos, becas, programas y agendar tu recorrido. ¿Qué te gustaría saber?",
};
const QUICK = ["¿Qué niveles tienen?", "¿Cuánto cuesta?", "¿Qué becas hay?", "Agendar recorrido"];

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const b = bodyRef.current;
    if (b) b.scrollTop = b.scrollHeight;
  }, [msgs, busy, open]);

  async function send(textArg?: string) {
    const text = (textArg ?? input).trim();
    if (!text || busy) return;
    const next = [...msgs, { role: "user", text } as Msg];
    setMsgs(next);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      const reply: string = (data?.reply || "").trim() || "Con gusto te ayudo. ¿Podrías darme un poco más de detalle?";
      setMsgs((m) => [...m, { role: "assistant", text: reply }]);
    } catch {
      setMsgs((m) => [
        ...m,
        { role: "assistant", text: "Disculpa, tuve un problema para responder en este momento. Escríbenos por WhatsApp al 775 753 4992 y te atendemos enseguida." },
      ]);
    } finally {
      setBusy(false);
    }
  }

  const showQuick = msgs.length <= 1;

  return (
    <>
      {/* WhatsApp FAB */}
      <a href={WA_RECORRIDO} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ position: "fixed", right: 22, bottom: 90, zIndex: 60, width: 56, height: 56, borderRadius: "50%", background: "var(--wa)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 28px rgba(31,168,85,.4)", textDecoration: "none" }}>
        <Icon name="MessageCircle" size={28} />
      </a>

      {/* Chat FAB */}
      <button onClick={() => setOpen((v) => !v)} aria-label="Asistente IA" style={{ position: "fixed", right: 22, bottom: 22, zIndex: 60, height: 56, padding: "0 20px 0 16px", borderRadius: 999, background: "var(--blue)", color: "#fff", border: "none", display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 15, cursor: "pointer", boxShadow: "0 10px 28px rgba(22,166,206,.42)" }}>
        <Icon name={open ? "X" : "Sparkles"} size={22} />{open ? "Cerrar" : "Pregúntale a la IA"}
      </button>

      {open && (
        <div className="chat-pop" style={{ position: "fixed", right: 22, bottom: 90, zIndex: 61, width: "min(380px,calc(100vw - 32px))", height: "min(560px,calc(100vh - 130px))", background: "#fff", borderRadius: 22, boxShadow: "0 30px 70px rgba(12,39,51,.3)", display: "flex", flexDirection: "column", overflow: "hidden", border: "1px solid var(--bd)" }}>
          {/* Header */}
          <div style={{ background: "var(--ink)", padding: "16px 18px", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 42, height: 42, borderRadius: "50%", background: "var(--blue)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <Icon name="Sparkles" size={22} />
              <span style={{ position: "absolute", right: -1, bottom: -1, width: 12, height: 12, borderRadius: "50%", background: "#3ad07a", border: "2px solid var(--ink)" }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 16, lineHeight: 1.1 }}>Asistente COLMEX</div>
              <div style={{ color: "#8fc9da", fontSize: 12.5 }}>En línea · responde 24/7</div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Cerrar" style={{ background: "none", border: "none", color: "#9fb6bd", cursor: "pointer", display: "flex" }}>
              <Icon name="X" size={22} />
            </button>
          </div>

          {/* Body */}
          <div ref={bodyRef} style={{ flex: 1, overflowY: "auto", padding: 18, background: "var(--bg)", display: "flex", flexDirection: "column", gap: 12 }}>
            {msgs.map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                <div style={{
                  maxWidth: "84%", padding: "11px 15px", borderRadius: 16, fontSize: 14.5, lineHeight: 1.5,
                  ...(m.role === "user"
                    ? { background: "var(--blue)", color: "#fff", borderBottomRightRadius: 5 }
                    : { background: "#fff", color: "var(--ink-700)", border: "1px solid var(--bd)", borderBottomLeftRadius: 5 }),
                }}>
                  {m.text}
                </div>
              </div>
            ))}
            {busy && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div style={{ padding: "13px 16px", borderRadius: 16, background: "#fff", border: "1px solid var(--bd)", display: "flex", gap: 5 }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--blue)", animation: "ksType 1s infinite" }} />
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--blue)", animation: "ksType 1s infinite .15s" }} />
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--blue)", animation: "ksType 1s infinite .3s" }} />
                </div>
              </div>
            )}
          </div>

          {/* Quick replies */}
          {showQuick && (
            <div style={{ padding: "10px 14px 0", display: "flex", flexWrap: "wrap", gap: 7, background: "#fff" }}>
              {QUICK.map((q) => (
                <button key={q} onClick={() => send(q)} style={{ background: "var(--blue-50)", color: "var(--blue-dd)", border: "1px solid var(--blue-100)", borderRadius: 999, padding: "8px 13px", fontSize: 13, fontWeight: 600, fontFamily: "var(--font-hanken)", cursor: "pointer" }}>
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{ padding: "12px 14px", background: "#fff", borderTop: "1px solid var(--bd)", display: "flex", gap: 9, alignItems: "center" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); send(); } }}
              placeholder="Escribe tu pregunta..."
              style={{ flex: 1, padding: "12px 15px", border: "1.5px solid var(--bd)", borderRadius: 999, fontFamily: "var(--font-hanken)", fontSize: 14.5, color: "var(--ink)", outline: "none" }}
            />
            <button onClick={() => send()} aria-label="Enviar" disabled={busy} style={{ width: 44, height: 44, flex: "none", borderRadius: "50%", background: "var(--blue)", color: "#fff", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <Icon name="Send" size={19} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
