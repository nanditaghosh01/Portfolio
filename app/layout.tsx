import type { Metadata } from "next";
import "./globals.css";
import "../assets/css/styles.css";

export const metadata: Metadata = {
  title: "Nandita Ghosh | Computer Science Student & Aspiring Software Engineer",
  description:
    "Portfolio of Nandita Ghosh - Computer Science student and software engineer passionate about modern full-stack web development (React, Next.js, TypeScript, Tailwind CSS), AI/ML, and IoT systems.",
  keywords: [
    "Nandita Ghosh",
    "Portfolio",
    "Computer Science",
    "Software Engineer",
    "Full-Stack Web Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
    "IoT",
    "Robotics",
    "AI",
    "Machine Learning"
  ],
  authors: [{ name: "Nandita Ghosh" }],
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
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
                const savedTheme = localStorage.getItem('portfolio-theme');
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
      <body>{children}</body>
    </html>
  );
}

