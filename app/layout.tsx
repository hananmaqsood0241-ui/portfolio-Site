import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hanan — Email Marketing Expert | Klaviyo, Mailchimp & Automation Specialist",
  description:
    "Hanan is a results-driven Email Marketing Specialist with 3+ years of experience helping eCommerce, SaaS, and service-based businesses grow with strategic campaigns, automation flows, and data-driven optimization.",
  keywords: [
    "email marketing expert",
    "Klaviyo specialist",
    "Mailchimp expert",
    "email automation",
    "Pakistan email marketer",
    "email campaign strategy",
    "Hanan email marketing",
  ],
  authors: [{ name: "Hanan" }],
  openGraph: {
    title: "Hanan — Email Marketing Expert",
    description:
      "Helping brands grow revenue through strategic email campaigns, automation, and smart segmentation.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Theme initialization — runs before paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  if (saved === 'light') {
                    document.documentElement.classList.add('light');
                  }
                  // default is dark, so no class needed
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
