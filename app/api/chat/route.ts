import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

type Msg = { role: "user" | "assistant"; text: string };

const SYSTEM = `Eres el asistente virtual de COLMEX Internacional (Colegio México), un colegio privado en Tulancingo de Bravo, Hidalgo, México, fundado en 1994. Atiendes a padres y madres de familia. Responde SIEMPRE en español de México, con trato de "tú", tono cálido, cercano y profesional. Sé breve: 2 a 4 frases. No uses emojis ni markdown.
DATOS DEL COLEGIO:
- Niveles educativos: preescolar (PlayGarden), primaria, secundaria y preparatoria.
- Más de 30 años de trayectoria (desde 1994), más de 5,000 egresados y cerca de 1,000 estudiantes actualmente. Lema: "Ser y Trascender". Modelo educativo integral CRECE.
- Más de 30 actividades complementarias mediante programas: PaS (atención socioemocional), ECO2 (ecología y economía), Health and Care (salud), programa deportivo (CONADEIP, ANEPPI, CNEP; fútbol rápido, fútbol 7, voleibol, básquetbol, gimnasia, tae kwon do), CREA (arte y cultura: ballet, pintura, violín, teatro), e idiomas y campamentos de verano.
- Programa de becas: académica, deportiva/artística/cultural, familiar y socioeconómica. Las becas son financiadas por COLMEX.
- Dirección: Melchor Ocampo Norte 603, Centro, C.P. 43600, Tulancingo de Bravo, Hidalgo.
- Teléfono y WhatsApp: 775 753 4992. Correo: contacto@colmextul.edu.mx.
REGLAS:
- NO inventes precios exactos. Si preguntan por costos, di que las colegiaturas varían por nivel, que hay un amplio programa de becas, y que la lista de precios vigente se envía el mismo día por WhatsApp al 775 753 4992.
- Siempre que sea oportuno, invita a solicitar informes o agendar un recorrido por WhatsApp (775 753 4992).
- Si no sabes algo, sugiere contactar por WhatsApp.`;

function localAnswer(text: string): string {
  const t = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const has = (...k: string[]) => k.some((w) => t.includes(w));

  if (has("hola", "buenas", "buenos dias", "buenas tardes", "que tal") && t.length < 30)
    return "¡Hola! Con gusto te ayudo. Puedo darte información sobre niveles, costos, becas, programas o agendar tu recorrido. ¿Qué te gustaría saber?";

  if (has("nivel", "preescolar", "playgarden", "primaria", "secundaria", "prepa", "bachillerato", "kinder", "grado"))
    return "Atendemos cuatro niveles: preescolar (PlayGarden), primaria, secundaria y preparatoria, todos con un modelo educativo integral. ¿De qué nivel te gustaría más información?";

  if (has("costo", "precio", "cuanto cuesta", "colegiatura", "inscripcion", "mensualidad", "pago", "cuesta"))
    return "Las colegiaturas varían según el nivel y contamos con un amplio programa de becas. La lista de precios vigente y los planes de pago te los enviamos el mismo día por WhatsApp al 775 753 4992. ¿Quieres que te la mandemos?";

  if (has("beca", "descuento", "apoyo"))
    return "Tenemos becas académica, deportiva/artística/cultural, familiar y socioeconómica, financiadas por COLMEX. El otorgamiento depende del desempeño y de cada caso. Escríbenos por WhatsApp al 775 753 4992 y revisamos tu situación.";

  if (has("programa", "deporte", "futbol", "arte", "cultura", "musica", "idioma", "ingles", "actividad", "taller"))
    return "Ofrecemos más de 30 actividades: programa deportivo (CONADEIP/ANEPPI), CREA de arte y cultura, ECO2 de ecología y economía, Health and Care, atención socioemocional PaS e idiomas con campamentos. ¿Sobre cuál quieres saber más?";

  if (has("admision", "proceso", "inscribir", "como le hago", "pasos", "ingreso", "requisito", "documento"))
    return "El proceso es sencillo: solicitas informes y agendas tu recorrido, conoces el colegio, entregas la documentación del nivel y formalizas la inscripción. ¿Te ayudo a iniciarlo por WhatsApp al 775 753 4992?";

  if (has("recorrido", "visita", "conocer", "instalacion", "cita"))
    return "¡Claro! Con gusto agendamos tu recorrido por las instalaciones. Escríbenos por WhatsApp al 775 753 4992 y coordinamos el día y la hora que mejor te convenga.";

  if (has("direccion", "ubicacion", "donde estan", "como llego", "mapa", "lugar"))
    return "Estamos en Melchor Ocampo Norte 603, Centro, C.P. 43600, Tulancingo de Bravo, Hidalgo. Si quieres te compartimos la ubicación en Google Maps por WhatsApp al 775 753 4992.";

  if (has("telefono", "whatsapp", "contacto", "numero", "correo", "email", "llamar"))
    return "Puedes contactarnos por WhatsApp o teléfono al 775 753 4992, o por correo a contacto@colmextul.edu.mx. Te respondemos el mismo día.";

  if (has("historia", "fundacion", "anos", "trayectoria", "lema", "trascender", "modelo", "crece"))
    return "COLMEX Internacional fue fundado en 1994 y ha formado a más de 15,000 estudiantes. Nuestro lema es 'Ser y Trascender' y trabajamos con el modelo educativo integral CRECE.";

  if (has("gracias", "muchas gracias", "perfecto", "excelente", "ok"))
    return "¡Con mucho gusto! Si necesitas algo más sobre COLMEX, aquí estoy. Y cuando quieras, agenda tu recorrido por WhatsApp al 775 753 4992.";

  return "Con gusto te ayudo con eso. Para darte la información más precisa y la lista de precios vigente, escríbenos por WhatsApp al 775 753 4992 y te atendemos el mismo día. ¿Te puedo ayudar con niveles, costos, becas o programas?";
}

export async function POST(req: NextRequest) {
  let messages: Msg[] = [];
  try {
    const body = await req.json();
    messages = Array.isArray(body?.messages) ? body.messages : [];
  } catch {
    return NextResponse.json({ reply: "Disculpa, no entendí tu mensaje. ¿Puedes repetirlo?", source: "error" });
  }

  const lastUser = [...messages].reverse().find((m) => m.role === "user")?.text || "";
  const key = process.env.ANTHROPIC_API_KEY;

  if (key) {
    try {
      const apiMessages = messages
        .filter((m) => m.role === "user" || m.role === "assistant")
        .map((m) => ({ role: m.role, content: m.text }));
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "content-type": "application/json", "x-api-key": key, "anthropic-version": "2023-06-01" },
        body: JSON.stringify({ model: "claude-haiku-4-5-20251001", max_tokens: 320, system: SYSTEM, messages: apiMessages }),
      });
      if (res.ok) {
        const data = await res.json();
        const reply = data?.content?.[0]?.text?.trim();
        if (reply) return NextResponse.json({ reply, source: "ai" });
      }
    } catch {
      // cae al motor local
    }
  }

  return NextResponse.json({ reply: localAnswer(lastUser), source: "local" });
}
