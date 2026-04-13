import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hanan — Email Marketing Expert | Klaviyo, Mailchimp & Automation Specialist",
  description:
    "Hanan — Email Marketing Specialist from Pakistan. Klaviyo, Mailchimp & automation expert with 48% open rates. Available for freelance email campaigns, automation setup, and strategy.",
  keywords: [
    "email marketing specialist",
    "Klaviyo expert",
    "Mailchimp freelancer",
    "email automation",
    "Pakistan email marketer",
    "hire email marketer",
    "email campaign strategy",
    "Hanan email marketing",
  ],
  authors: [{ name: "Hanan" }],
  openGraph: {
    title: "Hanan — Email Marketing Expert | Klaviyo & Automation Specialist",
    description:
      "I help eCommerce and SaaS brands grow revenue with email marketing. 48% open rates. 3+ years experience.",
    type: "website",
    locale: "en_US",
    images: ["/hanan-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanan — Email Marketing Expert | Klaviyo & Automation Specialist",
    description:
      "I help eCommerce and SaaS brands grow revenue with email marketing. 48% open rates. 3+ years experience.",
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
      <body>{children}</body>
    </html>
  );
}
