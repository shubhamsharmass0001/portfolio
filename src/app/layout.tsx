import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// One family for everything, the way the reference does it — a heavy neo-
// grotesk carrying both the giant headlines and the small print. Inter is the
// closest freely licensed match to the Helvetica-lineage face that look needs.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Shubham · SDE",
    template: "%s · Shubham",
  },
  description:
    "SDE based in Gurugram, Haryana. LeetCode Guardian (2142), problem solver, and full-stack developer.",
  openGraph: {
    type: "website",
    siteName: "Shubham",
    title: "Shubham · SDE",
    description:
      "SDE based in Gurugram, Haryana.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham · SDE",
    description:
      "SDE based in Gurugram, Haryana.",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning is scoped to <html> only, and is here for one
    // reason: the inline script below stamps a class on this element before
    // React hydrates, which is precisely the mismatch React cannot know is
    // intentional. Nothing inside the tree is suppressed.
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Runs before first paint, so a returning visitor never sees the
            boot overlay. Reading sessionStorage during React render would
            desync server and client markup; a class on <html> does not. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem('om:boot-seen')==='1')document.documentElement.classList.add('boot-seen')}catch(e){}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
