/** @format */

"use client";
import { Provider } from "react-redux";
import store from "./store";
import { ThemeProvider } from "next-themes";
import siteMetadata from "@/data/siteMetadata";

export function ReduxProviders({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={siteMetadata.theme}
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
}
