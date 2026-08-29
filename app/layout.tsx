import type { Metadata } from "next";
import { Inter } from "next/font/google";
import WhatsappButton from "@/components/WhatsappButton";
import { AccessibilityProvider } from "@/components/AccessibilityProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Judice, Correspondência Jurídica",
  description:
    "A Judice oferece correspondência jurídica terceirizada, com foco em representação em audiências, presenciais e virtuais.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <AccessibilityProvider>
          {children}
          <WhatsappButton />
        </AccessibilityProvider>
      </body>
    </html>
  );
}
