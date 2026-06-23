import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

type Msg = { role: "user" | "assistant"; text: string };

const SYSTEM = `Eres el asistente virtual de COLMEX Internacional (Colegio México), un colegio privado en Tulancingo de Bravo, Hidalgo, México, fundado en 1994. Atiendes a padres y madres de familia. Responde SIEMPRE en español de México, con trato de "tú", tono cálido, cercano y profesional. Sé breve: 2 a 4 frases. No uses emojis ni markdown. Usa el historial de la conversación: NO repitas información que ya diste ni vuelvas a hacer la misma pregunta; si el padre ya dijo el nivel que le interesa, responde específicamente sobre ese nivel.
DATOS DEL COLEGIO:
- Niveles: preescolar (PlayGarden), primaria, secundaria y preparatoria.
  · Preescolar (PlayGarden): entorno feliz y seguro, aprendizaje lúdico, desarrollo de la autonomía y disciplina con amor.
  · Primaria: fortalece la socialización, la curiosidad por explorar el mundo y la autonomía de cada niño.
  · Secundaria: modelo integral que consolida conocimientos y habilidades sociales y emocionales, encaminando al liderazgo.
  · Preparatoria: prepara a los jóvenes para la universidad formando la mejor versión de sí mismos antes de ser profesionistas.
- Más de 30 años de trayectoria (desde 1994), más de 5,000 egresados y cerca de 1,000 estudiantes. Lema: "Ser y Trascender". Modelo educativo integral CRECE.
- Más de 30 actividades mediante programas: PaS (socioemocional), ECO2 (ecología y economía), Health and Care (salud), programa deportivo (CONADEIP, ANEPPI, CNEP), CREA (arte y cultura) e idiomas/campamentos.
- Becas: académica, deportiva/artística/cultural, familiar y socioeconómica, financiadas por COLMEX.
- Dirección: Melchor Ocampo Norte 603, Centro, C.P. 43600, Tulancingo de Bravo, Hidalgo.
- Teléfono y WhatsApp: 775 753 4992. Correo: contacto@colmextul.edu.mx.
REGLAS:
- NO inventes precios exactos. Si preguntan por costos, di que las colegiaturas varían por nivel, que hay un amplio programa de becas, y que la lista de precios vigente se envía el mismo día por WhatsApp al 775 753 4992.
- Cuando sea oportuno, invita a solicitar informes o agendar un recorrido por WhatsApp (775 753 4992).
- Si no sabes algo, sugiere contactar por WhatsApp.`;

function localAnswer(text: string): string {
  const t = text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const has = (...k: string[]) => k.some((w) => t.includes(w));

  // Niveles específicos (antes que la lista genérica)
  if (has("preescolar", "playgarden", "kinder", "kínder", "maternal"))
    return "En preescolar (PlayGarden) brindamos una educación integral en un entorno feliz y seguro, con aprendizaje lúdico que desarrolla la autonomía de los pequeños y una disciplina con amor. ¿Te gustaría agendar un recorrido o que te enviemos costos por WhatsApp al 775 753 4992?";
  if (has("primaria"))
    return "En primaria acompañamos la curiosidad de los niños por explorar el mundo, fortaleciendo su socialización y autonomía con un modelo integral. ¿Quieres que te compartamos costos y disponibilidad por WhatsApp al 775 753 4992 o prefieres agendar un recorrido?";
  if (has("secundaria"))
    return "En secundaria trabajamos con un modelo integral que consolida conocimientos y habilidades sociales y emocionales, encaminando a los jóvenes al liderazgo. ¿Te gustaría agendar una visita o recibir la información de costos por WhatsApp al 775 753 4992?";
  if (has("prepa", "preparatoria", "bachillerato"))
    return "En preparatoria preparamos a los jóvenes para la universidad, formando antes la mejor versión de sí mismos, con acompañamiento humano y más de 30 actividades. ¿Quieres que te enviemos costos y el plan por WhatsApp al 775 753 4992 o agendamos un recorrido?";

  if (has("hola", "buenas", "buenos dias", "buenas tardes", "que tal") && t.length < 30)
    return "¡Hola! Con gusto te ayudo. Puedo darte información sobre niveles, costos, becas, programas o agendar tu recorrido. ¿Qué te gustaría saber?";

  if (has("nivel", "grado", "ofrecen", "tienen"))
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

  if (has("gracias", "muchas gracias", "perfecto", "excelente", "ok", "vale"))
    return "¡Con mucho gusto! Si necesitas algo más sobre COLMEX, aquí estoy. Y cuando quieras, agenda tu recorrido por WhatsApp al 775 753 4992.";

  return "Con gusto te ayudo con eso. Para darte la información más precisa y la lista de precios vigente, escríbenos por WhatsApp al 775 753 4992 y te atendemos el mismo día. ¿Te puedo ayudar con un nivel en particular, costos, becas o programas?";
}

async function tryOpenAI(messages: Msg[], key: string): Promise<string | null> {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { "content-type": "application/json", authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      max_tokens: 320,
      temperature: 0.5,
      messages: [{ role: "system", content: SYSTEM }, ...messages.map((m) => ({ role: m.role, content: m.text }))],
    }),
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data?.choices?.[0]?.message?.content?.trim() || null;
}

async function tryAnthropic(messages: Msg[], key: string): Promise<string | null> {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "content-type": "application/json", "x-api-key": key, "anthropic-version": "2023-06-01" },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 320,
      system: SYSTEM,
      messages: messages.map((m) => ({ role: m.role, content: m.text })),
    }),
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data?.content?.[0]?.text?.trim() || null;
}

export async function POST(req: NextRequest) {
  let messages: Msg[] = [];
  try {
    const body = await req.json();
    messages = Array.isArray(body?.messages) ? body.messages : [];
  } catch {
    return NextResponse.json({ reply: "Disculpa, no entendí tu mensaje. ¿Puedes repetirlo?", source: "error" });
  }

  const convo = messages.filter((m) => m.role === "user" || m.role === "assistant");
  const lastUser = [...convo].reverse().find((m) => m.role === "user")?.text || "";

  // IA real con memoria: usa OpenAI o Claude si hay API key configurada en Vercel.
  try {
    const openai = process.env.OPENAI_API_KEY;
    const anthropic = process.env.ANTHROPIC_API_KEY;
    if (openai) {
      const reply = await tryOpenAI(convo, openai);
      if (reply) return NextResponse.json({ reply, source: "openai" });
    }
    if (anthropic) {
      const reply = await tryAnthropic(convo, anthropic);
      if (reply) return NextResponse.json({ reply, source: "anthropic" });
    }
  } catch {
    // cae al motor local
  }

  return NextResponse.json({ reply: localAnswer(lastUser), source: "local" });
}
