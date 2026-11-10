import type { Metadata } from "next";
import "./globals.css";
import "../assets/css/styles.css";

export const metadata: Metadata = {
  title: "Nandita Ghosh — CSE Student • Web Developer • IoT Builder",
  description:
    "Portfolio of Nandita Ghosh — B.Tech Computer Science student building clean, responsive web applications with Next.js, React, and TypeScript, alongside IoT hardware prototypes.",
  keywords: [
    "Nandita Ghosh",
    "Portfolio",
    "Computer Science",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "IoT",
    "Robotics",
    "Adamas University",
  ],
  authors: [{ name: "Nandita Ghosh" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Nandita Ghosh Portfolio",
    title: "Nandita Ghosh — Developer & Engineer",
    description:
      "Nandita Ghosh — CSE student, web developer, and IoT builder at Adamas University.",
    images: [
      {
        url: "/og-square.png",
        width: 512,
        height: 512,
        alt: "Nandita Ghosh 'N' Logo",
      },
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nandita Ghosh Portfolio Social Preview",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Nandita Ghosh — Developer & Engineer",
    description:
      "Nandita Ghosh — CSE student, web developer, and IoT builder at Adamas University.",
    images: ["/og-square.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('portfolio-theme') || localStorage.getItem('portfolio_theme');
                if (savedTheme === 'light' || savedTheme === 'dark') {
                  document.documentElement.setAttribute('data-theme', savedTheme);
                } else {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

