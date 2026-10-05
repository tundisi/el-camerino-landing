import type { Metadata } from "next";
import { Analytics } from "@/components/analytics";
import "./globals.css";
export const metadata: Metadata = { title: "El Camerino | Vive el torneo", description: "Organiza torneos, arma equipos y sigue cada partido desde El Camerino." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body><Analytics />{children}</body></html>; }
