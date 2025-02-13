/** @format */

import type { Metadata } from "next";
import "css/tailwind.css";
import { ReduxProviders, ThemeProviders } from "./providers";
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
        <ReduxProviders>
          <ThemeProviders>
            <NavBar />
            <main className={` max-w-7xl mx-auto pt-24`}>{children}</main>
            <Footer />
            <AdminPopup />
          </ThemeProviders>
        </ReduxProviders>
      </body>
    </html>
  );
}
