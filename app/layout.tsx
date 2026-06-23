import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, Spectral } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatAssistant from "@/components/ChatAssistant";

const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["400", "600", "700", "800"], variable: "--font-display", display: "swap" });
const hanken = Hanken_Grotesk({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], variable: "--font-hanken", display: "swap" });
const spectral = Spectral({ subsets: ["latin"], weight: ["500"], style: ["italic"], variable: "--font-spectral", display: "swap" });

const SITE = "https://colmex-web.vercel.app";
const OG_DESC =
  "COLMEX Internacional: preescolar, primaria, secundaria y preparatoria en Tulancingo, Hidalgo. Más de 30 años formando para Ser y Trascender. Inscripciones abiertas.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "COLMEX Internacional | Colegio en Tulancingo, Hidalgo",
    template: "%s | COLMEX Internacional Tulancingo",
  },
  description: OG_DESC,
  keywords: [
    "colegio en Tulancingo",
    "escuela privada Tulancingo Hidalgo",
    "preescolar Tulancingo",
    "primaria Tulancingo",
    "secundaria Tulancingo",
    "preparatoria Tulancingo",
    "COLMEX Internacional",
    "Colegio México Tulancingo",
  ],
  alternates: { canonical: SITE },
  openGraph: {
    title: "COLMEX Internacional | Colegio en Tulancingo, Hidalgo",
    description: OG_DESC,
    url: SITE,
    siteName: "COLMEX Internacional",
    locale: "es_MX",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "COLMEX Internacional — Ser y Trascender · Tulancingo, Hidalgo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "COLMEX Internacional | Colegio en Tulancingo, Hidalgo",
    description: OG_DESC,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "COLMEX Internacional",
  alternateName: "Colegio México de Tulancingo",
  url: SITE,
  telephone: "+52-775-753-4992",
  email: "contacto@colmextul.edu.mx",
  foundingDate: "1994",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Melchor Ocampo Norte 603, Centro",
    addressLocality: "Tulancingo de Bravo",
    addressRegion: "Hidalgo",
    postalCode: "43600",
    addressCountry: "MX",
  },
  areaServed: "Tulancingo de Bravo, Hidalgo",
  description: "Colegio con preescolar, primaria, secundaria y preparatoria en Tulancingo, Hidalgo. Modelo educativo integral CRECE.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${hanken.variable} ${spectral.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
        <ChatAssistant />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
