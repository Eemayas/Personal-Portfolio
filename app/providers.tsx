// app/providers.tsx
"use client";
import { Provider } from "react-redux";
import { NextUIProvider } from "@nextui-org/react";
import store from "./store";
import { ThemeProvider } from "next-themes";
import siteMetadata from "@/data/siteMetadata";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <NextUIProvider>{children}</NextUIProvider>
    </Provider>
  );
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
