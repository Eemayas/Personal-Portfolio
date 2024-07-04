import type { Metadata } from "next";
import "css/tailwind.css";
import { Providers, ThemeProviders } from "./providers";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdminPopup from "@/components/AdminPopUp";

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
      <body className="bg-background-light text-black antialiased dark:bg-background-dark dark:text-white min-h-screen">
        <ThemeProviders>
          <Providers>
            <NavBar />
            <main className={` max-w-7xl mx-auto pt-24`}>{children}</main>
            <Footer />
            <AdminPopup />
          </Providers>
        </ThemeProviders>
      </body>
    </html>
  );
}
