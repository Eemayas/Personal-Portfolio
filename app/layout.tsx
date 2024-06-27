import type { Metadata } from "next";
import "css/tailwind.css";
import { Providers, ThemeProviders } from "./providers";

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
      {/* <body className="bg-background-light"> */}
      <body className="bg-background-light text-black antialiased dark:bg-background-dark dark:text-white">
        <ThemeProviders>
          <Providers>
            <main>{children}</main>
          </Providers>
        </ThemeProviders>
      </body>
    </html>
  );
}
