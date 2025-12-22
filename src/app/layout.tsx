import type { Metadata } from "next";
import "./globals.css";

// Using system fonts for better performance and reliability
// These will be loaded from Google Fonts in production via next.config.js or CDN

export const metadata: Metadata = {
  title: "James McNeely | IT Service Manager & Cybersecurity Professional",
  description: "IT Service Manager with 20+ years of experience transitioning into cybersecurity. Google Certified in IT Support and Cybersecurity. Seeking remote opportunities in IT Service Management and Cybersecurity Analysis.",
  keywords: [
    "IT Service Manager",
    "Cybersecurity Analyst",
    "SOC Analyst",
    "Remote IT Jobs",
    "Help Desk Manager",
    "ITSM",
    "Incident Response",
    "Google Certified",
    "IT Security",
    "Technical Support"
  ],
  authors: [{ name: "James McNeely" }],
  openGraph: {
    title: "James McNeely | IT Service Manager & Cybersecurity Professional",
    description: "20+ years IT Service Management experience | Google Certified | Security Focused",
    type: "website",
    locale: "en_US",
    siteName: "James McNeely Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "James McNeely | IT Service Manager & Cybersecurity Professional",
    description: "20+ years IT Service Management experience | Google Certified | Security Focused",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200..800&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
