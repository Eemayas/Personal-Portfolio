import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Prashant | Protfoilo",
  description: "Personal Portfoilo of Prashant Manandhar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary">
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
