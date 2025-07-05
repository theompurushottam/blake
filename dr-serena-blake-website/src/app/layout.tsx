import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dr. Serena Blake, PsyD | Clinical Psychologist | Los Angeles, CA",
  description: "Licensed clinical psychologist offering therapy for anxiety, relationship counseling, and trauma recovery. 8 years experience, 500+ sessions. In-person and virtual appointments available.",
  keywords: "therapist, psychologist, anxiety therapy, relationship counseling, trauma recovery, Los Angeles therapy, virtual therapy",
  authors: [{ name: "Dr. Serena Blake" }],
  openGraph: {
    title: "Dr. Serena Blake, PsyD | Clinical Psychologist",
    description: "Professional therapy services in Los Angeles. Specializing in anxiety, relationships, and trauma recovery.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
