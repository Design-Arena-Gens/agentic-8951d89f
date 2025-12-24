import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trustworthy Value Picks in India",
  description:
    "Curated guide to the most reliable Indian online stores that balance low prices with trustworthy service and solid quality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
