// Datos centrales del sitio COLMEX Internacional
export const PHONE = "775 753 4992";
export const PHONE_HREF = "tel:+527757534992";
export const EMAIL = "contacto@colmextul.edu.mx";
export const ADDRESS = "Melchor Ocampo Norte 603, Centro, C.P. 43600, Tulancingo de Bravo, Hidalgo";
export const ADDRESS_SHORT = "Melchor Ocampo Norte 603, Centro · Tulancingo, Hidalgo";
export const MAPS = "https://www.google.com/maps/search/?api=1&query=Melchor+Ocampo+Norte+603+Centro+Tulancingo+Hidalgo";
export const FACEBOOK = "https://www.facebook.com/201285273257862";
export const INSTAGRAM = "https://www.instagram.com/colmexinternacional";

const wa = (m: string) => "https://wa.me/527757534992?text=" + encodeURIComponent(m);
export const WA_INFORMES = wa("Hola, vi la web de COLMEX Internacional y quiero solicitar informes e inscripciones para el ciclo 2026-2027.");
export const WA_RECORRIDO = wa("Hola, vi la web de COLMEX Internacional y me gustaria agendar un recorrido por las instalaciones.");

export const NAV = [
  { label: "Inicio", href: "/" },
  { label: "Institución", href: "/institucion" },
  { label: "Niveles", href: "/niveles" },
  { label: "Programas", href: "/programas" },
  { label: "Becas", href: "/becas" },
  { label: "Contacto", href: "/contacto" },
];

export const TRUST = [
  { icon: "ShieldCheck", label: "Incorporado a la SEP" },
  { icon: "CalendarDays", label: "Desde 1994" },
  { icon: "Award", label: "Programa de becas" },
];

export const STATS = [
  { value: "1994", label: "fundado en Tulancingo" },
  { value: "+15 mil", label: "estudiantes formados" },
  { value: "+5 mil", label: "egresados" },
  { value: "+30", label: "actividades complementarias" },
];

export const PILLARS = [
  { icon: "GraduationCap", title: "Formación integral", desc: "Modelo educativo CRECE: equilibrio entre lo académico, lo emocional y lo físico en los cuatro niveles." },
  { icon: "HeartHandshake", title: "Educar es humanizar", desc: "Acompañamos a cada estudiante desde una perspectiva humana para que se sienta feliz y desarrolle su máximo potencial." },
  { icon: "Trophy", title: "Excelencia y trascendencia", desc: "Más de 30 años formando hombres y mujeres de bien, fieles a nuestro lema: Ser y Trascender." },
];

export const NIVELES = [
  { icon: "Baby", title: "Preescolar · PlayGarden", img: "/nivel-preescolar.jpg", desc: "Educación integral en un entorno feliz y seguro, con aprendizaje lúdico que desarrolla la autonomía y una disciplina con amor." },
  { icon: "Pencil", title: "Primaria", img: "/nivel-primaria.jpg", desc: "Acompañamos la curiosidad por explorar el mundo, fortaleciendo la socialización y la autonomía de cada niña y niño." },
  { icon: "Users", title: "Secundaria", img: "/nivel-secundaria.jpg", desc: "Un modelo integral que consolida conocimientos y habilidades sociales y emocionales, encaminando a los jóvenes al liderazgo." },
  { icon: "GraduationCap", title: "Preparatoria", img: "/nivel-prepa.jpg", desc: "El momento de mirar adelante: antes de ser grandes profesionistas, formamos la mejor versión de cada estudiante." },
];

export const PROGRAMAS = [
  { icon: "Brain", title: "PaS · Atención socioemocional", desc: "Fortalece el autocuidado y la inteligencia emocional, promoviendo una Cultura de Paz y la resolución pacífica de conflictos." },
  { icon: "Leaf", title: "ECO2 · Ecología y economía", desc: "Educación ambiental y financiera: manejo de residuos, huerta escolar y cultura del ahorro para cuidar el planeta." },
  { icon: "HeartPulse", title: "Health and Care", desc: "Jornadas, talleres y atención médica permanente para promover la salud, el bienestar y los buenos hábitos." },
  { icon: "Trophy", title: "Programa deportivo", desc: "Equipos de alto rendimiento y los mejor ranqueados de la región, miembros de CONADEIP, ANEPPI y CNEP." },
  { icon: "Palette", title: "CREA · Arte y cultura", desc: "Ballet, pintura, violín, ensambles, folklor, teatro y más para descubrir y perfeccionar tus talentos." },
  { icon: "Languages", title: "Idiomas y campamentos", desc: "Campamentos de verano e intercambios para aprender idiomas y vivir una experiencia multicultural inolvidable." },
];

export const BECAS = [
  { icon: "Award", title: "Beca académica", tag: "Mérito", desc: "Para estudiantes con desempeño académico sobresaliente y una conducta íntegra." },
  { icon: "Trophy", title: "Beca deportiva, artística o cultural", tag: "Talento", desc: "Para quienes destacan en disciplinas deportivas, artísticas o culturales de alto rendimiento manteniendo buen nivel académico." },
  { icon: "Users", title: "Beca familiar", tag: "Familia", desc: "Para familias con al menos dos integrantes inscritos en la institución, sin importar el grado o nivel." },
  { icon: "HeartHandshake", title: "Beca socioeconómica", tag: "Apoyo", desc: "Para estudiantes con espíritu COLMEX cuya condición familiar requiere apoyo para completar la colegiatura." },
];

export const VALORES = [
  { icon: "Target", title: "Ser y Trascender", desc: "Nuestro lema guía todo: formar personas que dejen huella y contribuyan a una mejor sociedad." },
  { icon: "HeartHandshake", title: "Educar es humanizar", desc: "Desarrollamos en cada persona su máximo potencial desde una perspectiva humana y sensible." },
  { icon: "Leaf", title: "Conciencia social y ambiental", desc: "Formamos promotores de un nuevo estilo de vida, amigable con el medio ambiente y con las personas." },
  { icon: "Sparkles", title: "Paz mental y armonía", desc: "Un ambiente saludable, armónico y lúdico que garantiza un aprendizaje adecuado y feliz." },
];

export const ALIANZAS = ["CONADEIP", "ANEPPI", "CNEP", "FEPEH", "SEP", "+ más"];

export const PASOS = [
  { n: "01", title: "Solicita informes", desc: "Escríbenos por WhatsApp o llámanos; te compartimos costos, niveles y agendamos tu recorrido el mismo día." },
  { n: "02", title: "Conoce el colegio", desc: "Visita guiada por las instalaciones y resolución de dudas con nuestro equipo de admisiones." },
  { n: "03", title: "Entrega de documentos", desc: "Reúnes la documentación del nivel correspondiente: acta, CURP, certificado o boleta y comprobantes." },
  { n: "04", title: "Inscripción y bienvenida", desc: "Formalizas la inscripción y damos la bienvenida a tu hijo a la comunidad COLMEX Internacional." },
];

export const FAQS = [
  { q: "¿Qué niveles educativos ofrece COLMEX?", a: "Atendemos preescolar (PlayGarden), primaria, secundaria y preparatoria, todos con un modelo educativo integral." },
  { q: "¿Cuáles son los costos y planes de pago?", a: "Las colegiaturas varían por nivel y contamos con un amplio programa de becas. Solicita la lista de precios vigente por WhatsApp y te la enviamos el mismo día." },
  { q: "¿Qué actividades complementarias tienen?", a: "Más de 30 actividades: programa deportivo (CONADEIP/ANEPPI), CREA de arte y cultura, ECO2, Health and Care, atención socioemocional PaS e idiomas." },
  { q: "¿Cómo es el proceso de inscripción?", a: "Solicitas informes y agendas tu recorrido, conoces el colegio, entregas la documentación del nivel y formalizas la inscripción. Te acompañamos en todo el proceso." },
];

export const GALERIA = [
  { label: "Comunidad COLMEX", span: true, img: "/comunidad.jpg" },
  { label: "Preescolar PlayGarden", span: false, img: "/nivel-preescolar.jpg" },
  { label: "Primaria", span: false, img: "/nivel-primaria.jpg" },
  { label: "Secundaria", span: false, img: "/nivel-secundaria.jpg" },
  { label: "Preparatoria", span: false, img: "/nivel-prepa.jpg" },
  { label: "Vida estudiantil", span: true, img: "/banner-promo.jpg" },
];
