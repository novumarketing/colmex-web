import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { EMAIL, PHONE, ADDRESS } from "@/components/site";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: "Aviso de privacidad de la COLMEX Internacional.",
  robots: { index: false, follow: true },
};

function P({ h, children }: { h: string; children: React.ReactNode }) {
  return (
    <div style={{ marginTop: 28 }}>
      <h2 className="h3" style={{ fontSize: 20, color: "var(--blue-d)" }}>{h}</h2>
      <p style={{ color: "var(--ink-600)", fontSize: 15.5, lineHeight: 1.7, marginTop: 8 }}>{children}</p>
    </div>
  );
}

export default function Aviso() {
  return (
    <main>
      <PageHero eyebrow="Legal" title="Aviso de privacidad" sub="Tu confianza es importante para nosotros. Así protegemos y usamos tus datos personales." />
      <section className="wrap-narrow" style={{ paddingTop: "clamp(36px,5vw,56px)", paddingBottom: "clamp(56px,8vw,90px)" }}>
        <P h="Responsable">
          COLMEX Internacional, con domicilio en {ADDRESS}, es responsable del tratamiento de tus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
        </P>
        <P h="Datos que recabamos">
          Recabamos nombre, teléfono, correo electrónico y los datos que nos proporciones al solicitar informes, agendar un recorrido o iniciar el proceso de admisión. No solicitamos datos sensibles a través de este sitio.
        </P>
        <P h="Finalidades">
          Usamos tus datos para brindarte información sobre nuestra oferta educativa, costos y becas; dar seguimiento a tu solicitud; agendar recorridos; y gestionar el proceso de admisión e inscripción.
        </P>
        <P h="Transferencias">
          No transferimos tus datos a terceros sin tu consentimiento, salvo las excepciones previstas por la ley.
        </P>
        <P h="Derechos ARCO">
          Puedes ejercer tus derechos de Acceso, Rectificación, Cancelación u Oposición, así como revocar tu consentimiento, escribiendo a {EMAIL} o al WhatsApp {PHONE}.
        </P>
        <P h="Cambios al aviso">
          Este aviso puede actualizarse. Publicaremos cualquier cambio en esta misma página.
        </P>
        <p style={{ color: "var(--ink-500)", fontSize: 13, marginTop: 32 }}>Última actualización: junio de 2026.</p>
      </section>
    </main>
  );
}
